pub fun main(): [UInt256; 2] {
  let privKey: UInt256 = 982293714530237168385279293448390704963009740407332401401501500884317792292
  return derivePubKey(privKey: privKey)
}

pub fun derivePubKey(privKey: UInt256): [UInt256; 2] {
  let GX: UInt256 = 55066263022277343669578718895168534326250603453777594175500187360389116729240
  let GY: UInt256 = 32670510020758816978083085130507043184471273380659243275938904335757337482424
  let AA: UInt256 = 0
  let PP: UInt256 = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F
  return ecMul(k: privKey, x: GX, y: GY, aa: AA, pp: PP)
}

pub fun ecMul(k: UInt256, x: UInt256, y: UInt256, aa: UInt256, pp: UInt256): [UInt256; 2] {
  let res = jacMul(d: k, x: x, y: y, z: 1, aa: aa, pp: pp)
  return toAffine(x: res[0], y: res[1], z: res[2], pp: pp)
}

pub fun jacMul(d: UInt256, x: UInt256, y: UInt256, z: UInt256, aa: UInt256, pp: UInt256): [UInt256; 3] {
  if (d == 0) {
    return [x, y, z]
  }

  var remaining: UInt256 = d
  var qx: UInt256 = 0
  var qy: UInt256 = 0
  var qz: UInt256 = 1
  var _x = x
  var _y = y
  var _z = z

  while (remaining != 0) {
    if ((remaining & 1) != 0) {
      let res = jacAdd(x1: qx, y1: qy, z1: qz, x2: _x, y2: _y, z2: _z, pp: pp)
      qx = res[0]; qy = res[1]; qz = res[2]
    }
    remaining = remaining / 2

    let res = jacDouble(x: _x, y: _y, z: _z, aa: aa, pp: pp)
    _x = res[0]
    _y = res[1]
    _z = res[2]
  }
  return [qx, qy, qz]
}

pub fun jacDouble(x: UInt256, y: UInt256, z: UInt256, aa: UInt256, pp: UInt256): [UInt256; 3] {
  if (z == 0) {
    return [x, y, z]
  }

  // ref: https://pdfs.semanticscholar.org/5c64/29952e08025a9649c2b0ba32518e9a7fb5c2.pdf Section 5
  // Note: there is a bug in the paper regarding the m parameter, M=3*(x1^2)+a*(z1^4)
  var _x = mulmod(x, x, pp) // x1^2
  var _y = mulmod(y, y, pp) // y1^2
  var _z = mulmod(z, z, pp) // z1^2

  let s = mulmod(4, mulmod(x, _y, pp), pp) // s
  let m = addmod(mulmod(3, _x, pp), mulmod(aa, mulmod(_z, _z, pp), pp), pp) // m

  // x, y, z at this point will be reassigned and rather represent qx, qy, qz from the paper. This allows to reduce the gas cost and stack footprint of the algorithm
  _x = addmod(mulmod(m, m, pp), pp - addmod(s, s, pp), pp) // qx
  _y = addmod(mulmod(m, addmod(s, pp - _x, pp), pp), pp - mulmod(8, mulmod(_y, _y, pp), pp), pp) // qy = -8*y1^4 + M(S-T)
  _z = mulmod(2, mulmod(y, z, pp), pp) // qz = 2*y1*z1
  return [_x, _y, _z]
}

pub fun jacAdd(x1: UInt256, y1: UInt256, z1: UInt256, x2: UInt256, y2: UInt256, z2: UInt256, pp: UInt256): [UInt256; 3] {
  if (x1 == 0 && y1 == 0) {
    return [x2, y2, z2]
  }
  if (x2 == 0 && y2 == 0) {
    return [x1, y1, z1]
  }

  // ref: https://pdfs.semanticscholar.org/5c64/29952e08025a9649c2b0ba32518e9a7fb5c2.pdf Section 5
  var zs: [UInt256; 4] = [0, 0, 0, 0] // z1^2, z1^3, z2^2, z2^3
  zs[0] = mulmod(z1, z1, pp)
  zs[1] = mulmod(z1, zs[0], pp)
  zs[2] = mulmod(z2, z2, pp)
  zs[3] = mulmod(z2, zs[2], pp)
  zs = [ // u1, s1, u2, s2
    mulmod(x1, zs[2], pp),
    mulmod(y1, zs[3], pp),
    mulmod(x2, zs[0], pp),
    mulmod(y2, zs[1], pp)
  ]

  let hr: [UInt256; 4] = [0, 0, 0, 0]
  hr[0] = addmod(zs[2], pp - zs[0], pp) // h
  hr[1] = addmod(zs[3], pp - zs[1], pp) // r
  hr[2] = mulmod(hr[0], hr[0], pp) // h^2
  hr[3] = mulmod(hr[2], hr[0], pp) // h^3

  var qx = addmod(mulmod(hr[1], hr[1], pp), pp - hr[3], pp) // qx = -h^3 -2u1h^2+r^2
  qx = addmod(qx, pp - mulmod(2, mulmod(zs[0], hr[2], pp), pp), pp)

  var qy: UInt256 = mulmod(hr[1], addmod(mulmod(zs[0], hr[2], pp), pp - qx, pp), pp) // qy = -s1*z1*h^3+r(u1*h^2 -x^3)
  qy = addmod(qy, pp - mulmod(zs[1], hr[3], pp), pp)

  var qz: UInt256 = mulmod(hr[0], mulmod(z1, z2, pp), pp) // qz = h*z1*z2

  return [qx, qy, qz]
}

pub fun toAffine(x: UInt256, y: UInt256, z: UInt256, pp: UInt256): [UInt256; 2] {
  let zInv = invMod(x: z, pp: pp)
  let zInv2 = mulmod(zInv, zInv, pp)
  let x2 = mulmod(x, zInv2, pp)
  let y2 = mulmod(y, mulmod(zInv, zInv2, pp), pp)
  return [x2, y2]
}

pub fun invMod(x: UInt256, pp: UInt256): UInt256 {
  // assert(x != 0 && x != pp && pp != 0, message: "Invalid number")
  var q: UInt256 = 0
  var newT: UInt256 = 1
  var r: UInt256 = pp
  var t: UInt256 = 0
  var _x: UInt256 = x
  while (_x != 0) {
    t = r / _x

    let tempNewT = newT
    newT = addmod(q, (pp - mulmod(t, newT, pp)), pp)
    q = tempNewT

    let tempNew_x = _x
    _x = r - t * _x
    r = tempNew_x
  }
  return q
}

pub fun addmod(_ a: UInt256, _ b: UInt256, _ m: UInt256): UInt256 {
  // assert(UInt256(0) <= a && UInt256(0) <= b, message: "Invalid number")
  let _a = a % m
  let _b = b % m
  if (_a < m - _b) {
    return _a + _b
  } else {
    return _a - (m - _b)
  }
}

pub fun mulmod(_ a: UInt256, _ b: UInt256, _ mod: UInt256): UInt256 {
  return mulmodLoop(a % mod, b % mod, mod)
}

pub fun mulmodLoop(_ a: UInt256, _ b: UInt256, _ m: UInt256): UInt256 {
  if (a > b) {
    return mulmodLoop(b, a, m)
  } else if (a == 0) {
    return 0
  } else if (a % 2 == 1) {
    return addmod(mulmodLoop(a-1, b, m), b, m)
  } else {
    let res = mulmodLoop(a/2, b, m)
    return addmod(res, res, m)
  }
}
 