import "SakutaroPoem"
import "MetadataViews"

access(all) struct NFT {
    access(all) let owner: Address
    access(all) let display: MetadataViews.Display
    access(all) let royalties: MetadataViews.Royalties
    access(all) let metadata: SakutaroPoem.SakutaroPoemMetadataView

    init(
        owner: Address,
        display: MetadataViews.Display,
        royalties: MetadataViews.Royalties,
        metadata: SakutaroPoem.SakutaroPoemMetadataView,
    ) {
        self.owner = owner
        self.display = display
        self.royalties = royalties
        self.metadata = metadata
    }
}

access(all) fun main(address: Address, id: UInt64): NFT {
    let collection = getAccount(address)
        .capabilities.get<&SakutaroPoem.Collection>(SakutaroPoem.CollectionPublicPath)
        .borrow()
        ?? panic("Not Found")

    let nft = collection.borrowPoem(id)!
    let display = nft.resolveView(Type<MetadataViews.Display>())!
    let royalties = nft.resolveView(Type<MetadataViews.Royalties>())!
    let metadata = nft.resolveView(Type<SakutaroPoem.SakutaroPoemMetadataView>())!

    return NFT(
        owner: nft.owner!.address,
        display: display as! MetadataViews.Display,
        royalties: royalties as! MetadataViews.Royalties,
        metadata: metadata as! SakutaroPoem.SakutaroPoemMetadataView,
    )
}
