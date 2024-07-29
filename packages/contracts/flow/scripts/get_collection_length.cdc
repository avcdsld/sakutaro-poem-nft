import "NonFungibleToken"
import "SakutaroPoem"

access(all) fun main(address: Address): Int {
    let collectionRef = getAccount(address)
        .capabilities.get<&{NonFungibleToken.CollectionPublic}>(SakutaroPoem.CollectionPublicPath)
        .borrow()
        ?? panic("Not Found")
    return collectionRef.getIDs().length
}
