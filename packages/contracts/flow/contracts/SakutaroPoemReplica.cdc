//
//  _____         _            _
// /  ___|       | |          | |
// \ `--.   __ _ | | __ _   _ | |_   __ _  _ __   ___
//  `--. \ / _` || |/ /| | | || __| / _` || '__| / _ \
// /\__/ /| (_| ||   < | |_| || |_ | (_| || |   | (_) |
// \____/  \__,_||_|\_\ \__,_| \__| \__,_||_|    \___/
//
//
import "NonFungibleToken"
import "ViewResolver"
import "MetadataViews"
import "SakutaroPoemContent"

access(all) contract SakutaroPoemReplica: NonFungibleToken {
    access(all) let CollectionPublicPath: PublicPath
    access(all) let CollectionStoragePath: StoragePath
    access(all) var totalSupply: UInt64

    access(all) resource NFT: NonFungibleToken.NFT {
        access(all) let id: UInt64

        init(id: UInt64) {
            self.id = id
        }

        access(all) view fun getViews(): [Type] {
            return [
                Type<MetadataViews.Display>()
            ]
        }

        access(all) fun resolveView(_ view: Type): AnyStruct? {
            switch view {
                case Type<MetadataViews.Display>():
                    let poem = self.getPoem()
                    return MetadataViews.Display(
                        name: (poem?.title ?? SakutaroPoemContent.name).concat(" [Replica]"),
                        description: SakutaroPoemContent.description,
                        thumbnail: MetadataViews.IPFSFile(cid: poem?.ipfsCid ?? "", path: nil),
                    )
            }
            return nil
        }

        access(all) fun getPoemID(): UInt32? {
            if self.owner == nil {
              return nil
            }
            var num: UInt32 = 0
            var val = self.owner!.address.toBytes()
            for v in val {
                num = num + UInt32(v)
            }
            return num % 39
        }

        access(all) fun getPoem(): SakutaroPoemContent.Poem? {
            let poemID = self.getPoemID()
            if poemID == nil {
              return nil
            }
            return SakutaroPoemContent.getPoem(poemID!)
        }

        access(all) fun createEmptyCollection(): @{NonFungibleToken.Collection} {
            return <- SakutaroPoemReplica.createEmptyCollection(nftType: Type<@SakutaroPoemReplica.NFT>())
        }
    }

    access(all) resource interface SakutaroPoemReplicaCollectionPublic {
        access(all) fun deposit(token: @{NonFungibleToken.NFT})
        access(all) view fun getIDs(): [UInt64]
        access(all) view fun borrowNFT(_ id: UInt64): &{NonFungibleToken.NFT}?
        access(all) view fun borrowPoem(_ id: UInt64): &SakutaroPoemReplica.NFT? {
            post {
                (result == nil) || (result?.id == id):
                    "Cannot borrow Poem reference: the ID of the returned reference is incorrect"
            }
        }
    }

    access(all) resource Collection: SakutaroPoemReplicaCollectionPublic, NonFungibleToken.Collection {
        access(all) var ownedNFTs: @{UInt64: {NonFungibleToken.NFT}}

        init () {
            self.ownedNFTs <- {}
        }

        access(all) view fun getSupportedNFTTypes(): {Type: Bool} {
            let supportedTypes: {Type: Bool} = {}
            supportedTypes[Type<@SakutaroPoemReplica.NFT>()] = true
            return supportedTypes
        }

        access(all) view fun isSupportedNFTType(type: Type): Bool {
            return type == Type<@SakutaroPoemReplica.NFT>()
        }

        access(NonFungibleToken.Withdraw) fun withdraw(withdrawID: UInt64): @{NonFungibleToken.NFT} {
            let token <- self.ownedNFTs.remove(key: withdrawID) ?? panic("Missing NFT")
            return <- token
        }

        access(all) fun deposit(token: @{NonFungibleToken.NFT}) {
            let token <- token as! @SakutaroPoemReplica.NFT
            let id: UInt64 = token.id
            let oldToken <- self.ownedNFTs[id] <- token
            destroy oldToken
        }

        access(all) view fun getIDs(): [UInt64] {
            return self.ownedNFTs.keys
        }

        access(all) view fun borrowNFT(_ id: UInt64): &{NonFungibleToken.NFT}? {
            return &self.ownedNFTs[id] as &{NonFungibleToken.NFT}?
        }
 
        access(all) view fun borrowPoem(_ id: UInt64): &SakutaroPoemReplica.NFT? {
            if self.ownedNFTs[id] != nil {
                let ref = &self.ownedNFTs[id] as &{NonFungibleToken.NFT}?
                return ref as! &SakutaroPoemReplica.NFT?
            }
            return nil
        }

        access(all) view fun borrowViewResolver(id: UInt64): &{ViewResolver.Resolver}? {
            if let nft = &self.ownedNFTs[id] as &{NonFungibleToken.NFT}? {
                return nft as &{ViewResolver.Resolver}
            }
            return nil
        }

        access(all) fun createEmptyCollection(): @{NonFungibleToken.Collection} {
            return <- SakutaroPoemReplica.createEmptyCollection(nftType: Type<@SakutaroPoemReplica.NFT>())
        }
    }

    access(all) fun createEmptyCollection(nftType: Type): @{NonFungibleToken.Collection} {
        return <- create Collection()
    }

    access(all) view fun getContractViews(resourceType: Type?): [Type] {
        return [
            Type<MetadataViews.NFTCollectionData>()
        ]
    }

    access(all) view fun resolveContractView(resourceType: Type?, viewType: Type): AnyStruct? {
        switch viewType {
            case Type<MetadataViews.NFTCollectionData>():
                let collectionData = MetadataViews.NFTCollectionData(
                    storagePath: self.CollectionStoragePath,
                    publicPath: self.CollectionPublicPath,
                    publicCollection: Type<&SakutaroPoemReplica.Collection>(),
                    publicLinkedType: Type<&SakutaroPoemReplica.Collection>(),
                    createEmptyCollectionFunction: (fun(): @{NonFungibleToken.Collection} {
                        return <- SakutaroPoemReplica.createEmptyCollection(nftType: Type<@SakutaroPoemReplica.NFT>())
                    })
                )
                return collectionData
        }
        return nil
    }

    access(all) fun mintNFT(): @NFT {
        pre {
            SakutaroPoemReplica.totalSupply < 10000: "Can't mint any more"
        }
        SakutaroPoemReplica.totalSupply = SakutaroPoemReplica.totalSupply + 1
        return <- create NFT(id: SakutaroPoemReplica.totalSupply)
    }

    init() {
        self.CollectionPublicPath = /public/SakutaroPoemReplicaCollection
        self.CollectionStoragePath = /storage/SakutaroPoemReplicaCollection
        self.totalSupply = 0

        self.account.storage.save(<- create Collection(), to: self.CollectionStoragePath)
        let cap: Capability = self.account.capabilities.storage.issue<&SakutaroPoemReplica.Collection>(self.CollectionStoragePath)
        self.account.capabilities.publish(cap, at: self.CollectionPublicPath)
    }
}
