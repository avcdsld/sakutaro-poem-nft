import NonFungibleToken from "../contracts/core/NonFungibleToken.cdc"
import SakutaroPoem from "../contracts/SakutaroPoem.cdc"

transaction(recipient: Address, withdrawID: UInt64) {
    prepare(signer: AuthAccount) {
        let recipient = getAccount(recipient)
        let collectionRef = signer.borrow<&SakutaroPoem.Collection>(from: SakutaroPoem.CollectionStoragePath) ?? panic("Not Found")
        let depositRef = recipient.getCapability(SakutaroPoem.CollectionPublicPath).borrow<&{NonFungibleToken.CollectionPublic}>() ?? panic("Not Found")
        let nft <- collectionRef.withdraw(withdrawID: withdrawID)
        depositRef.deposit(token: <-nft)
    }
}
