import NonFungibleToken from "../contracts/core/NonFungibleToken.cdc"
import SakutaroPoem from "../contracts/SakutaroPoem.cdc"

transaction {
    prepare(signer: AuthAccount) {
        if signer.borrow<&SakutaroPoem.Collection>(from: SakutaroPoem.CollectionStoragePath) != nil {
            return
        }
        signer.save(<- SakutaroPoem.createEmptyCollection(), to: SakutaroPoem.CollectionStoragePath)
        signer.link<&{NonFungibleToken.CollectionPublic, SakutaroPoem.SakutaroPoemCollectionPublic}>(
            SakutaroPoem.CollectionPublicPath,
            target: SakutaroPoem.CollectionStoragePath
        )
    }
}
