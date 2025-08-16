import { HomeTemplate } from "./HomeTemplate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

export const IndexPageEn: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 font-japanese">
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
        role="banner"
      >
        <nav
          className="container mx-auto px-6 py-4 flex justify-between items-center"
          role="navigation"
          aria-label="Main navigation"
        >
          <a
            href="https://sakutaro.on.fleek.co/en"
            className="text-white/90 hover:text-white transition-colors duration-300 font-light tracking-wide focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
            aria-label="Sakutaro Hagiwara Poem NFT Homepage"
          >
            <span className="text-lg md:text-xl">SAKUTARO</span>
            <br />
            <span className="text-sm md:text-base opacity-80">Poem NFT</span>
          </a>
          <a
            href="/"
            className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 bg-white/5 hover:bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Switch to Japanese"
          >
            <span className="font-medium">日本語</span>
            <FontAwesomeIcon icon={faLanguage} aria-hidden="true" />
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6 pt-20"
        role="main"
        aria-labelledby="hero-title"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1
            id="hero-title"
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight tracking-wide"
          >
            <span className="block mb-2 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              SAKUTARO
            </span>
            <span className="text-2xl md:text-4xl lg:text-5xl text-white/80 font-extralight">Poem NFT</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-light tracking-wide">Poem × Full-on-chain NFT</p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-hidden="true">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black/50 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-[0.2em] uppercase opacity-90">
              About
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-8"></div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 hover:bg-white/10 transition-all duration-500">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light tracking-wide text-center">
              Thirty-nine poems from Sakutaro Hagiwara's late self-selected collection "Fate" have been inscribed on the
              blockchain as full-on-chain NFTs, preserving them in digital space for the long term. These NFTs possess a
              unique property: their contents transform according to their owner.
            </p>
          </div>
        </div>
      </section>
      {/* Chains Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-[0.2em] uppercase opacity-90">
              Chains
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-8"></div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 hover:bg-white/10 transition-all duration-500">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light tracking-wide mb-6 text-center">
                These NFTs are issued on multiple blockchains.
              </p>
              <div className="mb-8">
                <ul className="text-lg md:text-xl text-white/80 leading-relaxed font-light tracking-wide text-center space-y-1 chain-list">
                  <li>Ethereum / Polygon / BSC / Arbitrum / Optimism / Shiden</li>
                  <li>Avalanche C-Chain / Flow / Tezos / Sui / Aptos / Filecoin</li>
                </ul>
              </div>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light tracking-wide text-center">
                Up to 39 NFTs can be issued per chain.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Motivation Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black/30 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-[0.2em] uppercase opacity-90">
              Motivation
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-8"></div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 hover:bg-white/10 transition-all duration-500">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light tracking-wide mb-6 text-center">
              I love the literary works of Sakutaro Hagiwara.
            </p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light tracking-wide mb-6 text-center">
              What can we do to add value to these poems and preserve them in digital space for the long term?
            </p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light tracking-wide text-center">
              How durable are NFT standards and SVG data? Which chains should be used to ensure long-term preservation?
              This is an experiment to be conducted many years into the future.
            </p>
          </div>
        </div>
      </section>
      {/* Contents Section */}
      <section id="contents" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-[0.2em] uppercase opacity-90">
              Contents
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {[
              "/assets/s-1024x1024_v-fs_webp_0dfbf5ec-e130-44f4-884a-2b4b9f9438be_small.webp",
              "/assets/s-1024x1024_v-fs_webp_8b38e7c7-a084-424d-82cb-cd120c451c8d_small.webp",
              "/assets/s-1024x1024_v-fs_webp_4a1035b6-6799-4c9f-be63-a3764c96c89a_small.webp",
              "/assets/s-1024x1024_v-fs_webp_e962b4a1-774e-4213-8669-46d2fdb69360_small.webp",
              "/assets/s-1024x1024_v-fs_webp_475f9333-9a52-41d5-a973-6e78910f944a_small.webp",
              "/assets/s-1024x1024_v-fs_webp_5eba3afc-6e31-4dbd-ae09-c90ea6be13ae_small.webp",
              "/assets/s-1024x1024_v-fs_webp_c0e4fc72-1ee1-42cb-bd42-c7991c87e2bd_small.webp",
              "/assets/s-1024x1024_v-fs_webp_3834921f-236a-437c-894a-56a8f4e5804b_small.webp",
            ].map((src, index) => (
              <div key={index} className="hover:scale-105 transition-transform duration-300">
                <img src={src} alt={`Poetry NFT sample ${index + 1}`} className="w-full h-auto" />
              </div>
            ))}
          </div>
          <p className="text-xl md:text-2xl text-white/80 font-light text-center">and more...</p>
        </div>
      </section>
      {/* Structure Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black/30 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-[0.2em] uppercase opacity-90">
              Structure
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-8"></div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 hover:bg-white/10 transition-all duration-500">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light tracking-wide mb-6 text-center">
              All metadata, including images, are stored on-chain.
            </p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light tracking-wide mb-8 text-center">
              Each NFT displays a different poem based on the owner's address.
            </p>
            <div className="max-w-2xl mx-auto bg-black p-4 rounded-lg">
              <img src="/assets/nft-overview.png" alt="NFT Structure Overview" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Mint Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-black/40">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-[0.2em] uppercase opacity-90">
              Mint
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-8"></div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 hover:bg-white/10 transition-all duration-500">
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light tracking-wide mb-6 text-center">
              NFT issuance is free (Gas fees are required).
            </p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light tracking-wide mb-6 text-center">
              We kindly request that you mint only 1 NFT per person per chain.
            </p>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light tracking-wide text-center">
              Some chains may not have NFT viewers available yet.
            </p>
          </div>
        </div>
      </section>
      {/* Mint Buttons */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <HomeTemplate />
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black/40 to-transparent">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="text-6xl md:text-7xl text-white/30 flex-shrink-0">"</div>
              <div className="flex-1">
                <blockquote className="mb-6">
                  <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light tracking-wide quote-text">
                    詩の表現の目的は単に情調のための情調を表現することではない。
                    <br />
                    <br />
                    幻覚のための幻覚を描くことでもない。
                    <br />
                    <br />
                    同時にまたある種の思想を宣伝演繹することのためでもない。
                    <br />
                    <br />
                    詩の本来の目的は寧ろそれらの者を通じて、人心の内部に顫動する所の感情そのものの本質を凝視し、かつ感情をさかんに流露させることである。
                    <br />
                    <br />
                    詩とは感情の神経を掴んだものである。生きて働く心理学である。
                  </p>
                </blockquote>
                <cite className="text-lg md:text-xl text-white/70 font-light italic">― 萩原 朔太郎</cite>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-2 tracking-wide">SAKUTARO</h2>
            <p className="text-lg md:text-xl text-white/80 font-light">Poem NFT</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com/arandoros"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"
              >
                <span className="text-sm md:text-base">X</span>
                <i className="fa fa-twitter text-xl"></i>
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/avcdsld/sakutaro-poem-nft"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-300"
              >
                <span className="text-sm md:text-base">GitHub</span>
                <i className="fa fa-github text-xl"></i>
              </a>
            </div>
          </div>

          <p className="text-center text-sm md:text-base text-white/60 mb-8">
            For any questions, please reach out via X.
          </p>

          <div className="text-center">
            <a
              href="/en#"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white/80 transition-colors duration-300"
            >
              <span className="text-white/60 font-medium">Back to the top</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
