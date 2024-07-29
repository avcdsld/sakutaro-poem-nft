# flow-c1 emulator
flow-c1 deploy --update

# Setup (Deployer)
flow-c1 transactions send ./transactions/setup_account.cdc --signer emulator-account

# Setup (Users)
flow-c1 accounts create --key a4a6a6c3503d28935c3ab30327345c16f98e592f17dd7ed55168e8855d94b9b0e600e7cbc16c443b01f55213d470a5fe29d5694f3d5e29ef87a5f36587c0c7e8
# -> 0x179b6b1cb6755e31
flow-c1 accounts create --key 2dc9e9dba28f62a38a5d1fa7acf953027b96bd36555b2a7504bcf477026143e3e4db7406d094d285ef7f0b2f224400601dc0526759eebf618a82ebbabd931c6e
# -> 0xf3fcd2c1a78f5eee
flow-c1 transactions send ./transactions/setup_account.cdc --signer emulator-account2
flow-c1 transactions send ./transactions/setup_account.cdc --signer emulator-account3

# Mint NFT
flow-c1 transactions send ./transactions/mint_nft.cdc --signer emulator-account2

# Transfer NFT
flow-c1 transactions send ./transactions/transfer_nft.cdc 0xf3fcd2c1a78f5eee 1 --signer emulator-account2

# View NFT Metadata
flow-c1 scripts execute ./scripts/get_collection_length.cdc 0xf3fcd2c1a78f5eee
flow-c1 scripts execute ./scripts/get_nft_metadata_detail.cdc 0xf3fcd2c1a78f5eee 1
flow-c1 scripts execute ./scripts/get_nft_metadata_svg.cdc 0xf3fcd2c1a78f5eee 1

# Get Royalties
flow-c1 scripts execute ./scripts/get_royalties.cdc

# Mint Replica NFT
flow-c1 transactions send ./transactions/setup_account_replica.cdc --signer emulator-account2
flow-c1 transactions send ./transactions/mint_nft_replica.cdc --signer emulator-account2
flow-c1 scripts execute ./scripts/get_nft_metadata_detail_replica.cdc 0x179b6b1cb6755e31 1

# Transfer NFT and Check if poemID is changed
flow-c1 transactions send ./transactions/transfer_nft.cdc 0xf3fcd2c1a78f5eee 1 --signer emulator-account3
flow-c1 scripts execute ./scripts/get_nft_metadata_detail.cdc 0xf3fcd2c1a78f5eee 1
