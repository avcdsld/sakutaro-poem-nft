import "NonFungibleToken"
import "SakutaroPoem"

transaction {
    prepare(signer: auth(BorrowValue, SaveValue, IssueStorageCapabilityController, PublishCapability) &Account) {
        if signer.storage.borrow<&SakutaroPoem.Collection>(from: SakutaroPoem.CollectionStoragePath) != nil {
            return
        }
        signer.storage.save(<- SakutaroPoem.createEmptyCollection(nftType: Type<@SakutaroPoem.NFT>()), to: SakutaroPoem.CollectionStoragePath)
        let cap = signer.capabilities.storage.issue<&SakutaroPoem.Collection>(SakutaroPoem.CollectionStoragePath)
        signer.capabilities.publish(cap, at: SakutaroPoem.CollectionPublicPath)
    }
}
