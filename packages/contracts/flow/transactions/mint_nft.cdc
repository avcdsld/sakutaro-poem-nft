import "NonFungibleToken"
import "SakutaroPoem"

transaction() {
    prepare(signer: auth(BorrowValue, SaveValue, IssueStorageCapabilityController, PublishCapability) &Account) {
        if signer.storage.borrow<&SakutaroPoem.Collection>(from: SakutaroPoem.CollectionStoragePath) == nil {
            signer.storage.save(<- SakutaroPoem.createEmptyCollection(nftType: Type<@SakutaroPoem.NFT>()), to: SakutaroPoem.CollectionStoragePath)
            let cap = signer.capabilities.storage.issue<&SakutaroPoem.Collection>(SakutaroPoem.CollectionStoragePath)
            signer.capabilities.publish(cap, at: SakutaroPoem.CollectionPublicPath)
        }
        let nft <- SakutaroPoem.mintNFT()
        let collectionRef = signer.storage.borrow<&SakutaroPoem.Collection>(from: SakutaroPoem.CollectionStoragePath) ?? panic("Not Found")
        collectionRef.deposit(token: <- nft)
    }
}
