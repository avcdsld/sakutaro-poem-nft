import NonFungibleToken from "../contracts/core/NonFungibleToken.cdc"
import SakutaroPoemReplica from "../contracts/SakutaroPoemReplica.cdc"

transaction {
    prepare(signer: AuthAccount) {
        if signer.borrow<&SakutaroPoemReplica.Collection>(from: SakutaroPoemReplica.CollectionStoragePath) != nil {
            return
        }
        signer.save(<- SakutaroPoemReplica.createEmptyCollection(), to: SakutaroPoemReplica.CollectionStoragePath)
        signer.link<&{NonFungibleToken.CollectionPublic, SakutaroPoemReplica.SakutaroPoemReplicaCollectionPublic}>(
            SakutaroPoemReplica.CollectionPublicPath,
            target: SakutaroPoemReplica.CollectionStoragePath
        )
    }
}
