import "SakutaroPoem"
import "MetadataViews"

access(all) fun main(address: Address, id: UInt64): String {
    let collection = getAccount(address)
        .capabilities.get<&SakutaroPoem.Collection>(SakutaroPoem.CollectionPublicPath)
        .borrow()
        ?? panic("Not Found")

    let nft = collection.borrowPoem(id)!
    let metadata = nft.resolveView(Type<SakutaroPoem.SakutaroPoemMetadataView>())!
    let poem = metadata as! SakutaroPoem.SakutaroPoemMetadataView

    return poem.svg ?? ""
}
