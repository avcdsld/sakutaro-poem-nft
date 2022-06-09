import SakutaroPoem from "../contracts/SakutaroPoem.cdc"
import MetadataViews from "../contracts/core/MetadataViews.cdc"

pub fun main(address: Address, id: UInt64): String {
    let collection = getAccount(address)
        .getCapability(SakutaroPoem.CollectionPublicPath)
        .borrow<&{SakutaroPoem.SakutaroPoemCollectionPublic}>()
        ?? panic("Not Found")

    let nft = collection.borrowPoem(id: id)!
    let metadata = nft.resolveView(Type<SakutaroPoem.SakutaroPoemMetadataView>())!
    let poem = metadata as! SakutaroPoem.SakutaroPoemMetadataView

    return poem.svg ?? ""
}
