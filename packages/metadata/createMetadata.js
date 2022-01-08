const fs = require("fs");
const numberOfTokens = 2222;
const imageCid = "QmWgWo9bZLyAHBpMqdKnhCszfTj3HuU1mdXRnsLwx9RZA4";
const generativeArtCid = "QmWgWo9bZLyAHBpMqdKnhCszfTj3HuU1mdXRnsLwx9RZA4";

const createFile = () => {
  for (i = 0; i < numberOfTokens; i++) {
    const obj = {
      name: "name",
      description: "description of your token",
      image: `https://ipfs.io/ipfs/ipfs/${imageCid}/${i}.png`,
      animation_url: `https://ipfs.io/ipfs/ipfs/${generativeArtCid}/?seed=${i}`,
    };
    const toJSON = JSON.stringify(obj);
    fs.writeFile(`./metadata_created/${i}`, toJSON, (err) => {
      if (err) console.log(err);
      if (!err) {
        console.log(`JSONファイルを生成しました`);
      }
    });
  }
};

createFile();
