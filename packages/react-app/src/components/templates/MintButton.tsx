import React from "react";

import { useWallet } from "../../hooks/useWallet";
import { useNFT } from "../../hooks/useContract";
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";
import { getNFTContract } from "../../lib/web3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faStoreAlt } from "@fortawesome/free-solid-svg-icons";
import { MerkleTree } from "merkletreejs";
import keccak256 from "keccak256";
declare global {
  interface Window {
    ethereum?: any;
  }
}

const poemTitles = [
  "ああ固い氷を破つて",
  "芝生の上で",
  "舌のない眞理",
  "慈悲",
  "秋晴",
  "陸橋を渡る",
  "涙ぐましい夕暮",
  "地球を跳躍して",
  "夜汽車の窓で",
  "春のくる時",
  "極光地方から",
  "斷橋",
  "運命への忍辱",
  "寂寥の川邊",
  "船室から",
  "記憶を捨てる",
  "情緒よ！　君は歸らざるか",
  "港の雜貨店で",
  "鏡",
  "狐",
  "吹雪の中で",
  "銃器店の前で",
  "虚數の虎",
  "自然の中で",
  "觸手ある空間",
  "大佛",
  "家",
  "黒い洋傘",
  "恐ろしき人形芝居",
  "齒をもてる意志",
  "建築の Nostalgia",
  "父",
  "敵",
  "物質の感情",
  "物體",
  "龍",
  "橋",
  "山上の祈",
  "戰場での幻想",
];

const poemBodies = [
  "ああ固い氷を破つて突進する、一つの寂しい帆船よ。あの高い空にひるがへる、浪浪の固體した印象から、その隔離した地方の物侘しい冬の光線から、あはれに煤ぼけて見える小さな黒い獵鯨船よ。孤獨な環境の海に漂泊する船の羅針が、一つの鋭どい<ruby><rb>意志の尖角</rb><rp>（</rp><rt>・・・・・</rt><rp>）</rp></ruby>が、ああ如何に固い冬の氷を突き破つて驀進することよ。",
  "若草の芽が萌えるやうに、この日當りのよい芝生の上では、思想が後から後からと成長してくる。けれどもそれらの思想は、私にまで何の交渉があらうぞ。私はただ青空を眺めて居たい。あの蒼天の夢の中に溶けてしまふやうな、さういふ思想の幻想だけを育くみたいのだ。私自身の情緒の影で、なつかしい緑陰の夢をつくるやうな、それらの「情調ある思想」だけを語りたいのだ。空飛ぶ小鳥よ。",
  "とある幻燈の中で、青白い雪の降りつもつてゐる、しづかなしづかな景色の中で、私は一つの眞理をつかんだ。物言ふことのできない、永遠に永遠にうら悲しげな、私は「舌のない眞理」を感じた。景色の、幻燈の、雪のつもる影を過ぎ去つて行く、さびしい青猫の<ruby><rb>像</rb><rp>（</rp><rt>かたち</rt><rp>）</rp></ruby>をかんじた。",
  "風琴の<ruby><rb>鎭魂樂</rb><rp>（</rp><rt>れくれえむ</rt><rp>）</rp></ruby>をきくやうに、冥想の厚い壁の影で、靜かに湧きあがつてくる黒い感情。情慾の強い惱みを抑へ、果敢ない運命への叛逆や、何といふこともない生活の暗愁や、いらいらした心の焦燥やを忘れさせ、安らかな安らかな寢臺の上で、靈魂の深みある眠りをさそふやうな、一つの力ある靜かな感情。それは生活の疲れた薄暮に、響板の鈍いうなりをたてる、大きな幅のある靜かな感情。――佛陀の教へた慈悲の哲學！",
  "牧場の牛が草を食つてゐるのをみて、閑散や怠惰の趣味を解しないほど、それほど<ruby><rb>近代的になつてしまつた</rb><rp>（</rp><rt>・・・・・・・・・・・</rt><rp>）</rp></ruby>人人にまで、私はいかなる會話をもさけるであらう。私の肌にしみ込んでくる、この秋日和の物倦い眠たさに就いて、この古風なる私の思想の情調に就いて、この上もはや語らないであらう。",
  "憂鬱に沈みながら、ひとり寂しく陸橋を渡つて行く。かつて何物にさへ妥協せざる、何物にさへ安易せざる、この一つの感情をどこへ行かうか。落日は地平に低く、環境は怒りに燃えてる。一切を憎惡し、粉碎し、叛逆し、嘲笑し、斬奸し、敵愾する、この一個の黒い影をマントにつつんで、ひとり寂しく陸橋を渡つて行く。かの高い架空の橋を越えて、はるかの幻燈の市街にまで。",
  "これらの夕暮は涙ぐましく、私の書齋に訪れてくる。思想は情調の影にぬれて、感じのよい温雅の色合を帶びて見える。ああいかに今の私にまで、一つの惠まれた徳はないか。何物の卑劣にすら、何物の虚僞にすら、あへて高貴の寛容を示し得るやうな、一つの穩やかにして閑雅なる徳はないか。――私をして獨り寂しく、今日の夕暮の空に默思せしめよ。",
  "たしかに私は、ある一つの特異な才能を持つてゐる。けれどもそれが丁度<ruby><rb>あてはまる</rb><rp>（</rp><rt>・・・・・</rt><rp>）</rp></ruby>やうな、どんな特別な「仕事」も今日の地球の上に有りはしない。むしろ私をして、地球を遠く圈外に跳躍せしめよ。",
  "夜汽車の中で、電燈は暗く、沈鬱した空氣の中で、人人は深い眠りに落ちてゐる。一人起きて窓をひらけば、夜風はつめたく肌にふれ、闇夜の暗黒な野原を飛ぶ、しきりに飛ぶ火蟲をみる。ああこの眞つ暗な恐ろしい景色を貫通する！　深夜の轟轟といふ響の中で、いづこへ、いづこへ、私の夜汽車は行かうとするのか。",
  "扇もつ若い娘ら、春の屏風の前に居て、君のしなやかな肩をすべらせ、艶めかしい曲線は足にからむ。扇もつ若い娘ら、君の笑顏に情をふくめよ、春は來らんとす。",
  "<ruby><rb>海豹</rb><rp>（</rp><rt>あざらし</rt><rp>）</rp></ruby>のやうに、極光の見える氷の上で、ぼんやりと「自分を忘れて」坐つてゐたい。そこに時劫がすぎ去つて行く。晝夜のない極光地方の、いつも暮れ方のやうな光線が、鈍く悲しげに幽滅するところ。ああその遠い北極圈の氷の上で、ぼんやりと海豹のやうに坐つて居たい。永遠に、永遠に、自分を忘れて、思惟のほの暗い海に浮ぶ、一つの侘しい幻象を眺めて居たいのです。",
  "夜道を走る汽車まで、一つの赤い燈火を示せよ。今そこに危險がある。斷橋！　斷橋！　ああ悲鳴は風をつんざく。だれがそれを知るか。精神は闇の曠野をひた走る。急行し、急行し、急行し、彼の悲劇の終驛へと。",
  "とはいへ環境の闇を突破すべき、どんな力がそこにあるか。齒がみてこらへよ。こらへよ。こらへよ。",
  "古驛の、柳のある川の岸で、かれは何を釣らうとするのか。やがて生活の薄暮がくるまで、そんなにも長い間、針のない釣竿で……。「否」とその支那人が答へた。「魚の美しく走るを眺めよ、水の靜かに行くを眺めよ。いかに君はこの靜謐を好まないか。この風景の聰明な情趣を。むしろ私は、終日<ruby><rb>釣り得ない</rb><rp>（</rp><rt>・・・・・</rt><rp>）</rp></ruby>ことを希望してゐる。されば日當り好い寂寥の岸邊に坐して、私のどんな環境をも亂すなかれ。」",
  "嵐、嵐、浪、浪、大浪、大浪、大浪。傾むく地平線、上昇する地平線、落ちくる地平線。がちやがちや、がちやがちや。上甲板へ、上甲板へ。<ruby><rb>鎖</rb><rp>（</rp><rt>チエン</rt><rp>）</rp></ruby>を卷け、<ruby><rb>鎖</rb><rp>（</rp><rt>チエン</rt><rp>）</rp></ruby>を卷け。突進する、突進する水夫ら。船室の窓、窓、窓、窓。傾むく地平線、上昇する地平線。<ruby><rb>鎖</rb><rp>（</rp><rt>チエン</rt><rp>）</rp></ruby>、<ruby><rb>鎖</rb><rp>（</rp><rt>チエン</rt><rp>）</rp></ruby>、<ruby><rb>鎖</rb><rp>（</rp><rt>チエン</rt><rp>）</rp></ruby>。風、風、風。水、水、水。<ruby><rb>船窓</rb><rp>（</rp><rt>ハツチ</rt><rp>）</rp></ruby>を閉めろ。<ruby><rb>船窓</rb><rp>（</rp><rt>ハツチ</rt><rp>）</rp></ruby>を閉めろ。右舷へ、左舷へ。浪、浪、浪。ほひゆーる。ほひゆーる。ほひゆーる。",
  "森からかへるとき、私は帽子をぬぎすてた。ああ、記憶。恐ろしく破れちぎつた記憶。みじめな、泥水の中に腐つた記憶。さびしい雨景の道にふるへる私の帽子。背後に捨てて行く。",
  "書生は町に行き、工場の下を通り、機關車の鳴る響を聽いた。火夫の走り、車輪の廻り、群鴉の喧號する巷の中で、はや一つの胡弓は荷造され、貨車に積まれ、さうして港の倉庫の方へ、税關の門をくぐつて行つた。<br/>十月下旬。書生は飯を食はうとして、枯れた芝草の倉庫の影に、音樂の忍び居り、蟋蟀のやうに鳴くのを聽いた。<br/>――情緒よ、君は歸らざるか。",
  "この鋏の槓力でも、女の錆びついた<ruby><rb>銅牌</rb><rp>（</rp><rt>メダル</rt><rp>）</rp></ruby>が切れないのか。水夫よ！　汝の<ruby><rb>隱衣</rb><rp>（</rp><rt>かくし</rt><rp>）</rp></ruby>の錢をかぞへて、無用の情熱を捨ててしまへ！",
  "鏡のうしろへ廻つてみても、「私」はそこに居ないのですよ。お孃さん！",
  "見よ！　彼は風のやうに來る。その額は憂鬱に青ざめてゐる。耳はするどく切つ立ち、まなじりは怒に裂けてゐる。<br/>君よ！　<ruby><rb>狡智</rb><rp>（</rp><rt>・・</rt><rp>）</rp></ruby>のかくの如き美しき表情をどこに見たか。",
  "單に孤獨であるばかりでない。敵を以て充たされてゐる！",
  "明るい硝子戸の店の中で、一つの磨かれた銃器さへも、火藥を裝填してないのである。――何たる虚妄ぞ。<ruby><rb>懶爾</rb><rp>（</rp><rt>らんじ</rt><rp>）</rp></ruby>として笑へ！",
  "博徒等集まり、投げつけられたる生涯の<ruby><rb>機因</rb><rp>（</rp><rt>チヤンス</rt><rp>）</rp></ruby>の上で、虚數の情熱を賭け合つてゐる。みな兇暴のつら<ruby><rb>魂</rb><rp>（</rp><rt>だましひ</rt><rp>）</rp></ruby>。<ruby><rb>仁義</rb><rp>（</rp><rt>じんぎ</rt><rp>）</rp></ruby>を構へ、虎のやうな空洞に居る。",
  "荒寥とした山の中腹で、壁のやうに沈默してゐる、一の巨大なる耳を見た。",
  "宿命的なる東洋の建築は、その屋根の下で忍從しながら、<ruby><rb>甍</rb><rp>（</rp><rt>いらか</rt><rp>）</rp></ruby>に於て怒り立つてゐる。",
  "その内部に構造の支柱を持ち、暗い梯子と經文を藏する佛陀よ！　海よりも遠く、人畜の住む世界を越えて、指のやうに尨大なれ！",
  "人が家の中に住んでるのは、地上の悲しい風景である。",
  "憂鬱の長い柄から、雨がしとしとと<ruby><rb>滴</rb><rp>（</rp><rt>しづく</rt><rp>）</rp></ruby>をしてゐる。眞黒の大きな洋傘！",
  "理髮店の青い窓から、葱のやうに突き出す棍棒。そいつの馬鹿らしい機械仕掛で、夢中になぐられ、なぐられて居る。",
  "意志！　そは夕暮の海よりして、鱶の如くに泳ぎ來り、齒を以て肉に噛みつけり。",
  "建築――特に群團した建築――の樣式は、空の穹窿に對して構想されねばならぬ。即ち切斷されたる球の弧形に對して、槍状の垂直線や、圓錐形やの交錯せる構想を用意すべきである。<br/>この蒼空の下に於ける、遠方の都會の印象として、おほむねの建築は一つの重要な意匠を忘れてゐる。",
  "父は永遠に悲壯である。",
  "敵は常に哄笑してゐる。さうでもなければ、何者の表象が怒らせるのか？",
  "機械人間にもし感情があるとすれば？　無限の哀傷のほかの何者でもない。",
  "私がもし物體であらうとも、神は再度朗らかに笑ひはしない。ああ、琴の音が聽えて來る。――小さな一つの<ruby><rb>倫理</rb><rp>（</rp><rt>モラル</rt><rp>）</rp></ruby>が、喪失してしまつたのだ。",
  "龍は帝王の欲望を象徴してゐる。權力の祥雲に乘つて居ながら、常に憤ほろしい恚怒に燃え、不斷の爭鬪のために牙をむいてる。",
  "すべての橋は、一つの建築意匠しか持つてゐない。時間を空間の上に架け、或る夢幻的な一つの<ruby><rb>觀念</rb><rp>（</rp><rt>イデア</rt><rp>）</rp></ruby>を、現實的に辨證することの熱意である。<br/>橋とは――夢を架空した數學である。",
  "多くの先天的の詩人や藝術家等は、彼等の宿命づけられた仕事に對して、あの悲痛な耶蘇の祈をよく知つてる。「神よ！　もし御心に適ふならば、この苦き酒盃を離し給へ。されど爾にして欲するならば、御心のままに爲し給へ。」",
  "機關銃よりも悲しげに、繋留氣球よりも憂鬱に、炸裂彈よりも殘忍に、毒瓦斯よりも沈痛に、曳火彈よりも蒼白く、大砲よりもロマンチツクに、煙幕よりも寂しげに、銃火の白く閃めくやうな詩が書きたい！",
];

export const MintButton: React.FC<{
  chainId: number;
  label: string;
  max: number;
  chainParams: any;
  jsonRpcProvider: any;
  explorerUrlPrefix?: string;
  openseaUrl?: string;
  otherMarketUrl?: string;
  externalUrl?: string;
}> = (props) => {
  const [connectWallet, account, chainId] = useWallet();
  const [totalNumber, setTotalNumber] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);
  const [txHash, setTxHash] = React.useState(null);
  const nftContractWithSigner = useNFT(props.chainId);

  const elements: string[] = [];
  for (let i = 0; i < poemTitles.length; i++) {
    elements.push(poemTitles[i] + poemBodies[i]);
  }
  const merkleTree = new MerkleTree(elements, keccak256, { hashLeaves: true, sortPairs: true });

  const connectWalletAndSwitchNetwork = async () => {
    await connectWallet();
    if (window.ethereum) {
      try {
        const chainId = props.chainParams.chainId;
        await window.ethereum.request({ method: "wallet_switchEthereumChain", params: [{ chainId }] });
      } catch (e: any) {
        // This error code indicates that the chain has not been added to MetaMask
        // if it is not, then install it into the user MetaMask
        if (e.code === 4902) {
          window.ethereum.request({ method: "wallet_addEthereumChain", params: [props.chainParams] });
        }
      }
    }
  };

  const mint = async () => {
    try {
      if (window.ethereum) {
        const chainId = await window.ethereum.request({ method: "eth_chainId" });
        if (chainId !== props.chainParams.chainId) {
          alert("Switch your network to " + props.chainParams.chainName);
          return;
        }
      }

      setLoading(true);
      let tx;
      if (nftContractWithSigner.poemTitles) {
        const id = (await nftContractWithSigner.totalSupply()).toString();
        const leaf = keccak256(elements[id]);
        const proof = merkleTree.getHexProof(leaf);
        console.log({ id });
        tx = await nftContractWithSigner.mint(account, id, poemTitles[id], poemBodies[id], proof, {});
      } else {
        tx = await nftContractWithSigner.mint(account, {});
      }
      setTxHash(tx.hash);
      alert("NFT mining has been started!");
      await tx.wait();
      setLoading(false);
    } catch (e: any) {
      if (e.code !== 4001) {
        alert(JSON.stringify(e, Object.getOwnPropertyNames(e)));
      }
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const nftContract = getNFTContract(props.chainId, props.jsonRpcProvider);
    nftContract
      .totalSupply()
      .then((supply: number) => {
        setTotalNumber(supply.toString());
      })
      .catch((e: any) => {
        console.log(e);
      });
  });

  return (
    <>
      <div>
        <Text align="center" color="white" weight="bold">
          {props.label}
        </Text>

        {Number(totalNumber) >= Number(props.max) ? (
          <div className="m-auto p-4">
            <Text align="center" color="light-gray" className="mt-3 mb-3">
              All minted
            </Text>
          </div>
        ) : (
          <>
            <div className="m-auto p-4">
              {chainId !== props.chainId ? (
                <Button onClick={connectWalletAndSwitchNetwork} color="red" rounded={true}>
                  Connect Wallet
                </Button>
              ) : (
                <Button onClick={mint} color="red" rounded={true} disabled={isLoading}>
                  {isLoading ? "sending.." : "Mint"}
                </Button>
              )}
              {txHash ? (
                <>
                  <div className="mt-5">
                    {props.explorerUrlPrefix ? (
                      <a href={props.explorerUrlPrefix + txHash} target="_blank" rel="noreferrer">
                        <Text align="center" className="underline" color="white">
                          View Tx
                        </Text>
                      </a>
                    ) : (
                      <Text align="center" className="underline" color="white">
                        {txHash}
                      </Text>
                    )}
                  </div>
                </>
              ) : null}
            </div>
          </>
        )}

        <div style={{ textAlign: "center", fontSize: "0.9em" }} className="flex items-center justify-center mb-10">
          <Text align="center" color="white">
            {totalNumber} / {props.max} minted
          </Text>
          {props.openseaUrl ? (
            <a href={props.openseaUrl} target="_blank" rel="noreferrer">
              <img className="ml-2 mr-1" width="20px" src="/assets/opensea-logo.png" alt="View on OpenSea" />
            </a>
          ) : null}
          {props.otherMarketUrl ? (
            <a href={props.otherMarketUrl} target="_blank" rel="noreferrer" className="mt-0">
              <FontAwesomeIcon className="ml-2" icon={faStoreAlt} color="white" />
            </a>
          ) : null}
          {props.externalUrl ? (
            <a href={props.externalUrl} target="_blank" rel="noreferrer" className="mt-1">
              <FontAwesomeIcon className="ml-2" icon={faLink} color="white" />
            </a>
          ) : null}
        </div>
      </div>
    </>
  );
};
