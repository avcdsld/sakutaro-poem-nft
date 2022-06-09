import SakutaroPoemReplica from "../contracts/SakutaroPoemReplica.cdc"
import MetadataViews from "../contracts/core/MetadataViews.cdc"

pub struct NFT {
    pub let owner: Address
    pub let display: MetadataViews.Display

    init(
        owner: Address,
        display: MetadataViews.Display,
    ) {
        self.owner = owner
        self.display = display
    }
}

pub fun main(address: Address, id: UInt64): NFT {
    let collection = getAccount(address)
        .getCapability(SakutaroPoemReplica.CollectionPublicPath)
        .borrow<&{SakutaroPoemReplica.SakutaroPoemReplicaCollectionPublic}>()
        ?? panic("Not Found")

    let nft = collection.borrowPoem(id: id)!
    let display = nft.resolveView(Type<MetadataViews.Display>())!

    return NFT(
        owner: nft.owner!.address,
        display: display as! MetadataViews.Display,
    )
}
