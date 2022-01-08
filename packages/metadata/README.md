## prepare metadata (ex. generative art)

- create a folder to display with p5 js and upload to IPFS
  - index.html
  - sketch.js
    - in this sketch.js, get seed data(ex. tokenId) from query string.
  - p5.min.js
    - use p5.min.js because OpenSea cannot display with CDN
- create image folder (images for each tokenId) and upload to IPFS
- create metadata folder and upload to IPFS
  - json
  ```
  {
    name: "name",
    description: "description of your token",
    image: "url of image folder on IPFS",
    animation_url: "url of p5js folder on IPFS with seed in query string",
   }
  ```
- set the IPFS link to contracts/deploy/00_NFT.ts as a 3rd arg to pass the constructor
