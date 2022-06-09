import FlowToken from 0x0ae53cb6e3f42a79
import NonFungibleToken from "../contracts/core/NonFungibleToken.cdc"
import SakutaroPoemReplica from "../contracts/SakutaroPoemReplica.cdc"

transaction() {
    prepare(signer: AuthAccount) {
        let nft <- SakutaroPoemReplica.mintNFT()
        let collectionRef = signer.borrow<&SakutaroPoemReplica.Collection>(from: SakutaroPoemReplica.CollectionStoragePath) ?? panic("Not Found")
        collectionRef.deposit(token: <- nft)
    }
}
