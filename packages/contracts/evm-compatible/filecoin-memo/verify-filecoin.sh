# Deploy
# deploying "TokenURI" (tx: 0x3fcd160234b765934dc29487a6e5e734580b291e00b1861c960c4ed2829f7e2c)...: deployed at 0x22C42c406046446EAd59388877Aa710b87962974 with 511647100 gas
#   Tx: https://filfox.info/en/message/0x3fcd160234b765934dc29487a6e5e734580b291e00b1861c960c4ed2829f7e2c?t=4
#   Contract: https://filfox.info/en/address/0x22C42c406046446EAd59388877Aa710b87962974?t=3
# deploying "SakutaroPoem" (tx: 0x133faf6001b42cdf00277a15f8d16938cd140b71bc72579800810d604d8f94c6)...: deployed at 0xA87AbF6854207075e65D16cF86a8ece1216eA973 with 103978361 gas
#   Tx: https://filfox.info/en/message/0x133faf6001b42cdf00277a15f8d16938cd140b71bc72579800810d604d8f94c6?t=4
#   Contract: https://filfox.info/en/address/0xA87AbF6854207075e65D16cF86a8ece1216eA973?t=3

curl --location --request POST 'https://filfox.info/api/v1/tools/verifyContract' \
  --header 'Content-Type: application/json' \
  --data @verify-filecoin.json

curl --location --request POST 'https://filfox.info/api/v1/tools/verifyContract' \
  --header 'Content-Type: application/json' \
  --data @verify-filecoin2.json
