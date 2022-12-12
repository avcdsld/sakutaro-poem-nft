export const rpc =
  process.env.NODE_ENV === "test"
    ? // ? "https://polygon-mumbai.infura.io/v3/7495501b681645b0b80f955d4139add9"
    // : "https://mainnet.infura.io/v3/7495501b681645b0b80f955d4139add9";
    "https://goerli.infura.io/v3/7495501b681645b0b80f955d4139add9"
    : "https://goerli.infura.io/v3/7495501b681645b0b80f955d4139add9";
