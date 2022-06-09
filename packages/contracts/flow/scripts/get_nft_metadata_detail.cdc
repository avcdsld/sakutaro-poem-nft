import SakutaroPoem from "../contracts/SakutaroPoem.cdc"
import MetadataViews from "../contracts/core/MetadataViews.cdc"

pub struct NFT {
    pub let owner: Address
    pub let display: MetadataViews.Display
    pub let royalties: MetadataViews.Royalties
    pub let metadata: SakutaroPoem.SakutaroPoemMetadataView

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

pub fun main(address: Address, id: UInt64): NFT {
    let collection = getAccount(address)
        .getCapability(SakutaroPoem.CollectionPublicPath)
        .borrow<&{SakutaroPoem.SakutaroPoemCollectionPublic}>()
        ?? panic("Not Found")

    let nft = collection.borrowPoem(id: id)!
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
