import { HomeTemplate } from "./HomeTemplate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

export const IndexPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10"
        role="banner"
      >
        <nav
          className="container mx-auto px-6 py-4 flex justify-between items-center"
          role="navigation"
          aria-label="メインナビゲーション"
        >
          <a
            href="https://sakutaro.on.fleek.co/"
            className="text-white/90 hover:text-white transition-colors duration-300 font-light tracking-wide focus:outline-none focus:ring-2 focus:ring-white/50 rounded"
            aria-label="萩原朔太郎 詩のNFT ホームページ"
          >
            <span className="text-lg md:text-xl">萩原朔太郎</span>
            <br />
            <span className="text-sm md:text-base opacity-80">詩のNFT</span>
          </a>
          <a
            href="https://sakutaro.poesy.run/en"
            className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 bg-white/5 hover:bg-white/10 px-3 py-2 rounded-lg backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="英語版に切り替え"
          >
            <span className="font-medium">EN</span>
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
              萩原朔太郎
            </span>
            <span className="block text-2xl md:text-4xl lg:text-5xl text-white/80 font-extralight">詩のNFT</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 font-light tracking-wider mb-12">詩×フルオンチェーンNFT</p>

          <div
            className="w-24 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto"
            aria-hidden="true"
          ></div>
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
              萩原朔太郎の晩年の自選集『宿命』より 39 篇の詩が、フルオンチェーンの NFT
              としてブロックチェーン上に刻まれました。この NFT は、
              <span className="text-white font-medium">持ち主によって中身が変化する</span>
              という、ちょっと変わった性質を持っています。
            </p>
          </div>
        </div>
      </section>
      {/* Chains Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-[0.2em] uppercase opacity-90">
              Chains
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-8"></div>
          </div>

          <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 hover:bg-white/10 transition-all duration-500">
            <div className="text-center mb-8">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light tracking-wide mb-8">
                この NFT は、複数のブロックチェーン上で発行されます。
              </p>

              <div className="mb-8">
                <ul className="text-lg md:text-xl text-white/80 leading-relaxed font-light tracking-wide text-center space-y-1 chain-list">
                  <li>Ethereum / Polygon / BSC / Arbitrum / Optimism / Shiden</li>
                  <li>Avalanche C-Chain / Flow / Tezos / Sui / Aptos</li>
                </ul>
              </div>

              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light tracking-wide">
                各チェーン最大 <span className="text-white font-medium">39枚</span> まで発行できます。
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
            <div className="space-y-6 text-center">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light tracking-wide">
                萩原朔太郎の文学作品が好きです。
              </p>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light tracking-wide">
                これに付加価値をつけて、長くデジタル空間に残すためにはどうしたらよいだろう。
              </p>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light tracking-wide">
                NFTの規格やSVGデータはどれほど永続的なものだろうか。長く残るにはどのチェーンを使えばよいだろうか。
                <br />
                これは、何年も先の未来を見据えた実験です。
              </p>
            </div>
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
              <div
                key={index}
                className="group relative bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
              >
                <img src={src} alt={`萩原朔太郎の詩 NFT ${index + 1}`} className="w-full h-auto" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          <p className="text-center text-white/60 text-lg font-light italic">and more...</p>
        </div>
      </section>
      {/* Structure Section */}
      <section id="structure" className="py-20 px-6 bg-gradient-to-b from-black/30 to-transparent">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-[0.2em] uppercase opacity-90">
              Structure
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500">
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light tracking-wide">
                  <span className="text-white font-medium">画像を含むすべてのメタデータ</span>
                  はオンチェーンに格納されています。
                </p>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light tracking-wide">
                  <span className="text-white font-medium">所有者のアドレス</span>
                  によって、どの詩になるかが決定されます。
                </p>
              </div>
            </div>

            <div className="bg-black border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500">
              <img
                src="/assets/nft-overview.png"
                alt="NFT構造の概要図"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Mint Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-8 tracking-[0.2em] uppercase opacity-90">
              Mint
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-8"></div>
          </div>

          <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
            <div className="text-center space-y-6">
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light tracking-wide">
                NFT の発行は<span className="text-white/80 font-medium">無料</span>です（Gas 代は必要となります）。
              </p>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light tracking-wide">
                チェーンごとに <span className="text-white/80 font-medium">1人1つまで</span> でお願いいたします。
              </p>
              <p className="text-lg md:text-xl text-white/80 leading-relaxed font-light tracking-wide">
                NFT のビューアがまだ存在しないチェーンもあります。この点ご承知おきください。
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Mint Buttons */}
      <div className="bg-gradient-to-b from-black/30 to-black/50">
        <HomeTemplate />
      </div>
      {/* Quote Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-black/50 to-black">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 relative">
            <div className="absolute top-6 left-8 text-white/30 text-4xl">
              <i className="fa fa-quote-left"></i>
            </div>

            <div className="pt-8">
              <blockquote className="text-lg md:text-xl text-white/70 leading-relaxed font-light tracking-wide text-center space-y-6">
                <p className="text-white/70">詩の表現の目的は単に情調のための情調を表現することではない。</p>
                <p className="text-white/70">幻覚のための幻覚を描くことでもない。</p>
                <p className="text-white/70">同時にまたある種の思想を宣伝演繹することのためでもない。</p>
                <p className="text-white/70">
                  詩の本来の目的は寧ろそれらの者を通じて、人心の内部に顫動する所の感情そのものの本質を凝視し、かつ感情をさかんに流露させることである。
                </p>
                <p className="text-white/70">詩とは感情の神経を掴んだものである。生きて働く心理学である。</p>
              </blockquote>

              <div className="mt-12 text-center">
                <cite className="text-white/70 font-light text-lg">― 萩原 朔太郎</cite>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-2 tracking-wide">萩原朔太郎</h2>
            <p className="text-lg md:text-xl text-white/70 font-light tracking-wider">詩のNFT</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12 mb-12">
            <a
              href="https://x.com/arandoros"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm"
            >
              <i className="fa fa-twitter text-xl"></i>
              <span className="font-medium">X</span>
            </a>

            <a
              href="https://github.com/avcdsld/sakutaro-poem-nft"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm"
            >
              <i className="fa fa-github text-xl"></i>
              <span className="font-medium">GitHub</span>
            </a>
          </div>

          <div className="text-center mb-12">
            <p className="text-white/60 font-light">ご不明点等あれば X でご連絡ください。</p>
          </div>

          <div className="text-center">
            <a
              href="/#top"
              className="inline-flex items-center space-x-2 text-white/60 hover:text-white transition-colors duration-300 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm font-medium"
            >
              <div className="w-4 h-4 border-2 border-current rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-current rounded-full"></div>
              </div>
              <span>Back to the top</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
