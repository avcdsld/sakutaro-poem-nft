const axios = require("axios");
const contract = require("./SakutaroPoem.json");
const contractDetail = require("./solcInputs/47c9ae2848bc083ff1b9cc7629d37b6a.json");

(async () => {
  try {
    const response = await axios.post("https://avascan.info/api/v1/verify-contract", {
      address: contract.address,
      solc: {
        version: "v0.8.4+commit.c7e474f2",
        options: contractDetail,
      }
    });
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
})();
