# sandbox-collectibles-template

This repo is a sample for NFT collectibles contracts and Home page with mint function.

## Dev

`yarn`

`yarn dev`

frontend: localhost:3000

## Deploy Contract to testnet

- go to packages/contracts directory
- in contracts/deploy/00_NFT.ts, change arguments `args: ["NFT Title", "SYMBOL", "url"],`
  - berfore this, prepare metadata url
- set `PRIVATE_KEY` on your local environment
- `yarn hardhat deploy --network mumbai`

- change information in frontend
  - go to packages/frontend/src/contracts/external_contracts.ts and change nft contract address to deployed address

## P5js

- edit p5js in src/components/organisms/sketch.ts
