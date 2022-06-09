import ExcitingMoments from "../contracts/ExcitingMoments.cdc"
import MetadataViews from "../contracts/MetadataViews.cdc"

pub fun main(): MetadataViews.Royalties {
    return ExcitingMoments.getRoyalties()
}
