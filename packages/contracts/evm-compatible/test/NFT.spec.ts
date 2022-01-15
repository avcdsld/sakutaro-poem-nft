import hre, { ethers } from "hardhat";
import * as chai from "chai";
import { solidity } from "ethereum-waffle";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

chai.use(solidity);
const { expect } = chai;

describe("SakutaroPoem", function () {
  let signer: SignerWithAddress;
  let buyer: SignerWithAddress;
  let tokenURIContract: any;
  let nftContract: any;
  this.beforeEach(async function () {
    [signer, buyer] = await ethers.getSigners();
    const TokenURI = await ethers.getContractFactory("TokenURI");
    tokenURIContract = await TokenURI.deploy();
    const SakutaroPoem = await ethers.getContractFactory("SakutaroPoem");
    nftContract = await SakutaroPoem.deploy(tokenURIContract.address);
    await nftContract.mint(buyer.address);
    await nftContract.mint(buyer.address);
  });
  it("Test", async function () {
    const uri = await nftContract.tokenURI(1);
    console.log(uri);
  });
});
