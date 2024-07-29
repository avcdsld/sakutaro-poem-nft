import "SakutaroPoemReplica"
import "MetadataViews"

access(all) struct NFT {
    access(all) let owner: Address
    access(all) let display: MetadataViews.Display

    init(
        owner: Address,
        display: MetadataViews.Display,
    ) {
        self.owner = owner
        self.display = display
    }
}

access(all) fun main(address: Address, id: UInt64): NFT {
    let collection = getAccount(address)
        .capabilities.get<&SakutaroPoemReplica.Collection>(SakutaroPoemReplica.CollectionPublicPath)
        .borrow()
        ?? panic("Not Found")

    let nft = collection.borrowPoem(id)!
    let display = nft.resolveView(Type<MetadataViews.Display>())!

    return NFT(
        owner: nft.owner!.address,
        display: display as! MetadataViews.Display,
    )
}
