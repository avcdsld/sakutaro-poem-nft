import NonFungibleToken from "../contracts/core/NonFungibleToken.cdc"
import SakutaroPoem from "../contracts/SakutaroPoem.cdc"

pub fun main(address: Address): Int {
    let collectionRef = getAccount(address)
        .getCapability(SakutaroPoem.CollectionPublicPath)
        .borrow<&{NonFungibleToken.CollectionPublic}>()
        ?? panic("Not Found")
    return collectionRef.getIDs().length
}
