import FlowToken from 0x0ae53cb6e3f42a79
import NonFungibleToken from "../contracts/core/NonFungibleToken.cdc"
import SakutaroPoem from "../contracts/SakutaroPoem.cdc"

transaction() {
    prepare(signer: AuthAccount) {
        let nft <- SakutaroPoem.mintNFT()
        let collectionRef = signer.borrow<&SakutaroPoem.Collection>(from: SakutaroPoem.CollectionStoragePath) ?? panic("Not Found")
        collectionRef.deposit(token: <- nft)
    }
}
