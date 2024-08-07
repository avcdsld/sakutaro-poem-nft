//
//  _____         _            _
// /  ___|       | |          | |
// \ `--.   __ _ | | __ _   _ | |_   __ _  _ __   ___
//  `--. \ / _` || |/ /| | | || __| / _` || '__| / _ \
// /\__/ /| (_| ||   < | |_| || |_ | (_| || |   | (_) |
// \____/  \__,_||_|\_\ \__,_| \__| \__,_||_|    \___/
//
//
import "FlowToken"
import "NonFungibleToken"
import "ViewResolver"
import "MetadataViews"
import "SakutaroPoemContent"

access(all) contract SakutaroPoem: NonFungibleToken {
    access(all) let CollectionPublicPath: PublicPath
    access(all) let CollectionStoragePath: StoragePath
    access(all) var totalSupply: UInt64
    access(self) var royalties: [MetadataViews.Royalty]

    access(all) struct SakutaroPoemMetadataView {
        access(all) let poemID: UInt32?
        access(all) let name: String?
        access(all) let description: String?
        access(all) let thumbnail: {MetadataViews.File}
        access(all) let svg: String?
        access(all) let svgBase64: String?
        access(all) let license: String
        access(all) let creator: String

        init(
            poemID: UInt32?,
            name: String?,
            description: String?,
            thumbnail: {MetadataViews.File},
            svg: String?,
            svgBase64: String?,
            license: String,
            creator: String
        ) {
            self.poemID = poemID
            self.name = name
            self.description = description
            self.thumbnail = thumbnail
            self.svg = svg
            self.svgBase64 = svgBase64
            self.license = license
            self.creator = creator
        }
    }

    access(all) resource NFT: NonFungibleToken.NFT {
        access(all) let id: UInt64

        init(id: UInt64) {
            self.id = id
        }

        access(all) view fun getViews(): [Type] {
            return [
                Type<MetadataViews.Display>(),
                Type<MetadataViews.Royalties>(),
                Type<SakutaroPoemMetadataView>()
            ]
        }

        access(all) fun resolveView(_ view: Type): AnyStruct? {
            switch view {
                case Type<MetadataViews.Display>():
                    let poem = self.getPoem()
                    return MetadataViews.Display(
                        name: poem?.title ?? SakutaroPoemContent.name,
                        description: SakutaroPoemContent.description,
                        thumbnail: MetadataViews.IPFSFile(cid: poem?.ipfsCid ?? "", path: nil),
                    )
                case Type<MetadataViews.Royalties>():
                    return MetadataViews.Royalties(
                        SakutaroPoem.royalties
                    )
                case Type<SakutaroPoemMetadataView>():
                    let poem = self.getPoem()
                    return SakutaroPoemMetadataView(
                        poemID: self.getPoemID() ?? 0,
                        name: poem?.title ?? SakutaroPoemContent.name,
                        description: SakutaroPoemContent.description,
                        thumbnail: MetadataViews.IPFSFile(cid: poem?.ipfsCid ?? "", path: nil),
                        svg: poem?.getSvg(),
                        svgBase64: poem?.getSvgBase64(),
                        license: "CC-BY 4.0",
                        creator: "Ara"
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
            return <- SakutaroPoem.createEmptyCollection(nftType: Type<@SakutaroPoem.NFT>())
        }
    }

    access(all) resource interface SakutaroPoemCollectionPublic {
        access(all) fun deposit(token: @{NonFungibleToken.NFT})
        access(all) view fun getIDs(): [UInt64]
        access(all) view fun getLength(): Int
        access(all) view fun borrowNFT(_ id: UInt64): &{NonFungibleToken.NFT}?
        access(all) view fun borrowPoem(_ id: UInt64): &SakutaroPoem.NFT? {
            post {
                (result == nil) || (result?.id == id):
                    "Cannot borrow Poem reference: the ID of the returned reference is incorrect"
            }
        }
    }

    access(all) resource Collection: SakutaroPoemCollectionPublic, NonFungibleToken.Collection {
        access(all) var ownedNFTs: @{UInt64: {NonFungibleToken.NFT}}

        init () {
            self.ownedNFTs <- {}
        }

        access(all) view fun getSupportedNFTTypes(): {Type: Bool} {
            let supportedTypes: {Type: Bool} = {}
            supportedTypes[Type<@SakutaroPoem.NFT>()] = true
            return supportedTypes
        }

        access(all) view fun isSupportedNFTType(type: Type): Bool {
            return type == Type<@SakutaroPoem.NFT>()
        }

        access(NonFungibleToken.Withdraw) fun withdraw(withdrawID: UInt64): @{NonFungibleToken.NFT} {
            let token <- self.ownedNFTs.remove(key: withdrawID) ?? panic("Missing NFT")
            return <- token
        }

        access(all) fun deposit(token: @{NonFungibleToken.NFT}) {
            let token <- token as! @SakutaroPoem.NFT
            let id: UInt64 = token.id
            let oldToken <- self.ownedNFTs[id] <- token
            destroy oldToken
            let authTokenRef = (&self.ownedNFTs[id] as auth(NonFungibleToken.Update) &{NonFungibleToken.NFT}?)!
            SakutaroPoem.emitNFTUpdated(authTokenRef)
        }

        access(all) view fun getIDs(): [UInt64] {
            return self.ownedNFTs.keys
        }

        access(all) view fun getLength(): Int {
            return self.ownedNFTs.length
        }

        access(all) view fun borrowNFT(_ id: UInt64): &{NonFungibleToken.NFT}? {
            return &self.ownedNFTs[id] as &{NonFungibleToken.NFT}?
        }
 
        access(all) view fun borrowPoem(_ id: UInt64): &SakutaroPoem.NFT? {
            if self.ownedNFTs[id] != nil {
                let ref = &self.ownedNFTs[id] as &{NonFungibleToken.NFT}?
                return ref as! &SakutaroPoem.NFT?
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
            return <- SakutaroPoem.createEmptyCollection(nftType: Type<@SakutaroPoem.NFT>())
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
                    publicCollection: Type<&SakutaroPoem.Collection>(),
                    publicLinkedType: Type<&SakutaroPoem.Collection>(),
                    createEmptyCollectionFunction: (fun(): @{NonFungibleToken.Collection} {
                        return <- SakutaroPoem.createEmptyCollection(nftType: Type<@SakutaroPoem.NFT>())
                    })
                )
                return collectionData
        }
        return nil
    }

    access(all) fun mintNFT(): @NFT {
        pre {
            SakutaroPoem.totalSupply < 39: "Can't mint any more"
        }
        SakutaroPoem.totalSupply = SakutaroPoem.totalSupply + 1
        return <- create NFT(id: SakutaroPoem.totalSupply)
    }

    access(all) fun getRoyalties(): MetadataViews.Royalties {
        return MetadataViews.Royalties(SakutaroPoem.royalties)
    }

    init() {
        self.CollectionPublicPath = /public/SakutaroPoemCollection
        self.CollectionStoragePath = /storage/SakutaroPoemCollection
        self.totalSupply = 0

        let receiver = self.account.capabilities.get<&FlowToken.Vault>(/public/flowTokenReceiver)
        self.royalties = [MetadataViews.Royalty(receiver: receiver, cut: 0.1, description: "39")]

        self.account.storage.save(<- create Collection(), to: self.CollectionStoragePath)
        let cap: Capability = self.account.capabilities.storage.issue<&SakutaroPoem.Collection>(self.CollectionStoragePath)
        self.account.capabilities.publish(cap, at: self.CollectionPublicPath)
    }
}
