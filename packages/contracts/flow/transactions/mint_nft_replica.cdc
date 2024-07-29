import "NonFungibleToken"
import "SakutaroPoemReplica"

transaction() {
    prepare(signer: auth(BorrowValue, SaveValue, IssueStorageCapabilityController, PublishCapability) &Account) {
        if signer.storage.borrow<&SakutaroPoemReplica.Collection>(from: SakutaroPoemReplica.CollectionStoragePath) == nil {
            signer.storage.save(<- SakutaroPoemReplica.createEmptyCollection(nftType: Type<@SakutaroPoemReplica.NFT>()), to: SakutaroPoemReplica.CollectionStoragePath)
            let cap = signer.capabilities.storage.issue<&SakutaroPoemReplica.Collection>(SakutaroPoemReplica.CollectionStoragePath)
            signer.capabilities.publish(cap, at: SakutaroPoemReplica.CollectionPublicPath)
        }
        let nft <- SakutaroPoemReplica.mintNFT()
        let collectionRef = signer.storage.borrow<&SakutaroPoemReplica.Collection>(from: SakutaroPoemReplica.CollectionStoragePath) ?? panic("Not Found")
        collectionRef.deposit(token: <- nft)
    }
}
