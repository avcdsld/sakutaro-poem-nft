import hre, { ethers } from "hardhat";
import axios from "axios";
import * as chai from "chai";
import { solidity } from "ethereum-waffle";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

chai.use(solidity);
const { expect } = chai;

describe("NFT", function () {
  let signer: SignerWithAddress;
  let buyer: SignerWithAddress;
  let nftContract: any;
  this.beforeEach(async function () {
    [signer, buyer] = await ethers.getSigners();
    const NFT = await ethers.getContractFactory("NFT");
    nftContract = await NFT.deploy("NFT Title", "SYMBOL", "url");
    await nftContract.mint(buyer.address);
    await nftContract.mint(buyer.address);
  });
  it("Test", async function () {
    const uri = await nftContract.tokenURI(1);
    console.log(uri);
  });
});
