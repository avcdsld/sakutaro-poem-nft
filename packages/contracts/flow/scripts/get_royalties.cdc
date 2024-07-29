import "SakutaroPoem"
import "MetadataViews"

access(all) fun main(): MetadataViews.Royalties {
    return SakutaroPoem.getRoyalties()
}
