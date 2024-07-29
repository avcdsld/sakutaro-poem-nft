## Cadence 1.0 Migration 2024/07/29

```sh
sudo sh -ci "$(curl -fsSL https://raw.githubusercontent.com/onflow/flow-cli/master/install.sh)"
flow-c1 version

flow-c1 emulator
flow-c1 deploy


flow-c1 migrate stage Base64Util --network=testnet
flow-c1 migrate is-staged Base64Util --network=testnet
flow-c1 migrate is-validated Base64Util --network=testnet

flow-c1 migrate stage SakutaroPoemContent --network=testnet
flow-c1 migrate is-staged SakutaroPoemContent --network=testnet
flow-c1 migrate is-validated SakutaroPoemContent --network=testnet

flow-c1 migrate stage SakutaroPoem --network=testnet
flow-c1 migrate is-staged SakutaroPoem --network=testnet
flow-c1 migrate is-validated SakutaroPoem --network=testnet

flow-c1 migrate stage SakutaroPoemReplica --network=testnet
flow-c1 migrate is-staged SakutaroPoemReplica --network=testnet
flow-c1 migrate is-validated SakutaroPoemReplica --network=testnet


flow-c1 migrate stage Base64Util --network=mainnet
flow-c1 migrate is-staged Base64Util --network=mainnet
flow-c1 migrate is-validated Base64Util --network=mainnet

flow-c1 migrate stage SakutaroPoemContent --network=mainnet
flow-c1 migrate is-staged SakutaroPoemContent --network=mainnet
flow-c1 migrate is-validated SakutaroPoemContent --network=mainnet

flow-c1 migrate stage SakutaroPoem --network=mainnet
flow-c1 migrate is-staged SakutaroPoem --network=mainnet
flow-c1 migrate is-validated SakutaroPoem --network=mainnet

flow-c1 migrate stage SakutaroPoemReplica --network=mainnet
flow-c1 migrate is-staged SakutaroPoemReplica --network=mainnet
flow-c1 migrate is-validated SakutaroPoemReplica --network=mainnet
```
