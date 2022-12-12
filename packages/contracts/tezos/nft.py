import smartpy as sp
# FA2 = sp.io.import_template("fa2_lib.py")
FA2 = sp.io.import_script_from_url("https://smartpy.io/templates/fa2_lib.py")

class NFT(FA2.OnchainviewBalanceOf, FA2.OffchainviewTokenMetadata, FA2.Fa2Nft):
   def __init__(self):
      FA2.Fa2Nft.__init__(self, sp.big_map(
         l = {"": sp.utils.bytes_of_string("ipfs://QmdcPN2PhtU3BSNRVV3mfUx5DTLZ6UBiGiirmRwgYptqve")},
         tkey = sp.TString,
         tvalue = sp.TBytes,
      ))
      self.update_initial_storage(
         token_info_base=sp.map(
            l = {
               "decimals": sp.utils.bytes_of_string("%d" % 0),
               "symbol": sp.utils.bytes_of_string("SAKU"),
               "description": sp.utils.bytes_of_string("Thirty-nine poems from Sakutaro Hagiwara's late self-selected collection \"Shukumei\" have been inscribed on Blockchain as full-onchain NFTs. The content of this NFT changes depending on the owner."),
            },
            tkey = sp.TString,
            tvalue = sp.TBytes,
         ),
         poem_svg_parts=sp.map(
            l = {
               0: sp.utils.bytes_of_string("<svg width=\"400\" height=\"400\" viewBox=\"0, 0, 400, 400\" xmlns=\"http://www.w3.org/2000/svg\"><defs><linearGradient id=\"grad1\" x1=\"0%\" y1=\"50%\" ><stop offset=\"0%\" stop-color=\"#0f2350\" ><animate id=\"a1\" attributeName=\"stop-color\" values=\"#0f2350; #6a5acd\" begin=\"0; a2.end\" dur=\"3s\" /><animate id=\"a2\" attributeName=\"stop-color\" values=\"#6a5acd; #0f2350\" begin=\"a1.end\" dur=\"3s\" /></stop><stop offset=\"100%\" stop-color=\"#6a5acd\" ><animate id=\"a3\" attributeName=\"stop-color\" values=\"#6a5acd; #0f2350\" begin=\"0; a4.end\" dur=\"3s\" /><animate id=\"a4\" attributeName=\"stop-color\" values=\"#0f2350; #6a5acd\" begin=\"a3.end\" dur=\"3s\" /></stop></linearGradient></defs><style type=\"text/css\">p {font-family: serif; color: white;}</style><rect width=\"400\" height=\"400\" fill=\"url(#grad1)\" /><foreignObject x=\"25\" y=\"15\" width=\"350\" height=\"370\"><p class=\"shadow\" xmlns=\"http://www.w3.org/1999/xhtml\">"),
               1: sp.utils.bytes_of_string("</p><p xmlns=\"http://www.w3.org/1999/xhtml\">"),
               2: sp.utils.bytes_of_string("</p><p style=\"padding-top: 1em\" xmlns=\"http://www.w3.org/1999/xhtml\">― 萩原 朔太郎</p></foreignObject></svg>"),
            },
            tkey=sp.TNat,
            tvalue=sp.TBytes,
         ),
         poems=sp.map(
            l = {
               0: sp.record(title = sp.utils.bytes_of_string("ああ固い氷を破つて"), body = sp.utils.bytes_of_string("ああ固い氷を破つて突進する、一つの寂しい帆船よ。あの高い空にひるがへる、浪浪の固體した印象から、その隔離した地方の物侘しい冬の光線から、あはれに煤ぼけて見える小さな黒い獵鯨船よ。孤獨な環境の海に漂泊する船の羅針が、一つの鋭どい<ruby><rb>意志の尖角</rb><rp>（</rp><rt>・・・・・</rt><rp>）</rp></ruby>が、ああ如何に固い冬の氷を突き破つて驀進することよ。"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmNREv8ovF11ViuZSHtEcFzc5Hb8gMMRXEJgYtDVBu3NRr")),
               1: sp.record(title = sp.utils.bytes_of_string("芝生の上で"), body = sp.utils.bytes_of_string("若草の芽が萌えるやうに、この日當りのよい芝生の上では、思想が後から後からと成長してくる。けれどもそれらの思想は、私にまで何の交渉があらうぞ。私はただ青空を眺めて居たい。あの蒼天の夢の中に溶けてしまふやうな、さういふ思想の幻想だけを育くみたいのだ。私自身の情緒の影で、なつかしい緑陰の夢をつくるやうな、それらの「情調ある思想」だけを語りたいのだ。空飛ぶ小鳥よ。"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmfKHsnjqhYQZKhcgEjEanNwyZehVzE5SuaipmKwTYjkqp")),
               2: sp.record(title = sp.utils.bytes_of_string("舌のない眞理"), body = sp.utils.bytes_of_string("とある幻燈の中で、青白い雪の降りつもつてゐる、しづかなしづかな景色の中で、私は一つの眞理をつかんだ。物言ふことのできない、永遠に永遠にうら悲しげな、私は「舌のない眞理」を感じた。景色の、幻燈の、雪のつもる影を過ぎ去つて行く、さびしい青猫の<ruby><rb>像</rb><rp>（</rp><rt>かたち</rt><rp>）</rp></ruby>をかんじた。"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmSyve6wEBy8FfQbxZvsZhLL13TDGCbjremrWoGrQEMS5X")),
               3: sp.record(title = sp.utils.bytes_of_string("慈悲"), body = sp.utils.bytes_of_string("風琴の<ruby><rb>鎭魂樂</rb><rp>（</rp><rt>れくれえむ</rt><rp>）</rp></ruby>をきくやうに、冥想の厚い壁の影で、靜かに湧きあがつてくる黒い感情。情慾の強い惱みを抑へ、果敢ない運命への叛逆や、何といふこともない生活の暗愁や、いらいらした心の焦燥やを忘れさせ、安らかな安らかな寢臺の上で、靈魂の深みある眠りをさそふやうな、一つの力ある靜かな感情。それは生活の疲れた薄暮に、響板の鈍いうなりをたてる、大きな幅のある靜かな感情。――佛陀の教へた慈悲の哲學！"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmPjU4Zp2BZobSFqu4Z9TZuiAVF2EmDQpHUpTSxNucod2i")),
               4: sp.record(title = sp.utils.bytes_of_string("秋晴"), body = sp.utils.bytes_of_string("牧場の牛が草を食つてゐるのをみて、閑散や怠惰の趣味を解しないほど、それほど<ruby><rb>近代的になつてしまつた</rb><rp>（</rp><rt>・・・・・・・・・・・</rt><rp>）</rp></ruby>人人にまで、私はいかなる會話をもさけるであらう。私の肌にしみ込んでくる、この秋日和の物倦い眠たさに就いて、この古風なる私の思想の情調に就いて、この上もはや語らないであらう。"), ipfsUri = sp.utils.bytes_of_string("ipfs://Qma8oQonq28pKo31xjKtwAGcFnnmnK7tDv2tPfKjHdGKtq")),
               5: sp.record(title = sp.utils.bytes_of_string("陸橋を渡る"), body = sp.utils.bytes_of_string("憂鬱に沈みながら、ひとり寂しく陸橋を渡つて行く。かつて何物にさへ妥協せざる、何物にさへ安易せざる、この一つの感情をどこへ行かうか。落日は地平に低く、環境は怒りに燃えてる。一切を憎惡し、粉碎し、叛逆し、嘲笑し、斬奸し、敵愾する、この一個の黒い影をマントにつつんで、ひとり寂しく陸橋を渡つて行く。かの高い架空の橋を越えて、はるかの幻燈の市街にまで。"), ipfsUri = sp.utils.bytes_of_string("ipfs://Qmevof6HRQS2aJo7onM1SbdoKbD8T6BGp8Gw2ZPJWTFVah")),
               6: sp.record(title = sp.utils.bytes_of_string("涙ぐましい夕暮"), body = sp.utils.bytes_of_string("これらの夕暮は涙ぐましく、私の書齋に訪れてくる。思想は情調の影にぬれて、感じのよい温雅の色合を帶びて見える。ああいかに今の私にまで、一つの惠まれた徳はないか。何物の卑劣にすら、何物の虚僞にすら、あへて高貴の寛容を示し得るやうな、一つの穩やかにして閑雅なる徳はないか。――私をして獨り寂しく、今日の夕暮の空に默思せしめよ。"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmbfD8wcsHLSBzhvHjeBwVjexq7tv6TNYCtAARg7b3zgov")),
               7: sp.record(title = sp.utils.bytes_of_string("地球を跳躍して"), body = sp.utils.bytes_of_string("たしかに私は、ある一つの特異な才能を持つてゐる。けれどもそれが丁度<ruby><rb>あてはまる</rb><rp>（</rp><rt>・・・・・</rt><rp>）</rp></ruby>やうな、どんな特別な「仕事」も今日の地球の上に有りはしない。むしろ私をして、地球を遠く圈外に跳躍せしめよ。"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmQj6nx5RpjX7HvuZm384RmHwDRSzxyvJFVoacRb2sgDQD")),
               8: sp.record(title = sp.utils.bytes_of_string("夜汽車の窓で"), body = sp.utils.bytes_of_string("夜汽車の中で、電燈は暗く、沈鬱した空氣の中で、人人は深い眠りに落ちてゐる。一人起きて窓をひらけば、夜風はつめたく肌にふれ、闇夜の暗黒な野原を飛ぶ、しきりに飛ぶ火蟲をみる。ああこの眞つ暗な恐ろしい景色を貫通する！　深夜の轟轟といふ響の中で、いづこへ、いづこへ、私の夜汽車は行かうとするのか。"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmNNUzh371bM47dbh1ZxeFb8jC5NuAia653WPawatan29U")),
               9: sp.record(title = sp.utils.bytes_of_string("春のくる時"), body = sp.utils.bytes_of_string("扇もつ若い娘ら、春の屏風の前に居て、君のしなやかな肩をすべらせ、艶めかしい曲線は足にからむ。扇もつ若い娘ら、君の笑顏に情をふくめよ、春は來らんとす。"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmQ4pugZXpSXuAbQaEpvF9JPEnpodgdAwdBn6LUYKQHNZP")),
               10: sp.record(title = sp.utils.bytes_of_string("極光地方から"), body = sp.utils.bytes_of_string("<ruby><rb>海豹</rb><rp>（</rp><rt>あざらし</rt><rp>）</rp></ruby>のやうに、極光の見える氷の上で、ぼんやりと「自分を忘れて」坐つてゐたい。そこに時劫がすぎ去つて行く。晝夜のない極光地方の、いつも暮れ方のやうな光線が、鈍く悲しげに幽滅するところ。ああその遠い北極圈の氷の上で、ぼんやりと海豹のやうに坐つて居たい。永遠に、永遠に、自分を忘れて、思惟のほの暗い海に浮ぶ、一つの侘しい幻象を眺めて居たいのです。"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmUMhCjwp4CptciYw4FW394W9dJcCQLLkaiLCjwomEsu2W")),
               11: sp.record(title = sp.utils.bytes_of_string("斷橋"), body = sp.utils.bytes_of_string("夜道を走る汽車まで、一つの赤い燈火を示せよ。今そこに危險がある。斷橋！　斷橋！　ああ悲鳴は風をつんざく。だれがそれを知るか。精神は闇の曠野をひた走る。急行し、急行し、急行し、彼の悲劇の終驛へと。"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmNcCXPGaSSj4bCapWZnD2yHEsUGWKXBjPVJbtLscCi8zA")),
               12: sp.record(title = sp.utils.bytes_of_string("運命への忍辱"), body = sp.utils.bytes_of_string("とはいへ環境の闇を突破すべき、どんな力がそこにあるか。齒がみてこらへよ。こらへよ。こらへよ。"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmPY1dAx5Gm67t2K9rN6ercU2RXdBiYMbbokmNG6FYxXXx")),
               13: sp.record(title = sp.utils.bytes_of_string("寂寥の川邊"), body = sp.utils.bytes_of_string("古驛の、柳のある川の岸で、かれは何を釣らうとするのか。やがて生活の薄暮がくるまで、そんなにも長い間、針のない釣竿で……。「否」とその支那人が答へた。「魚の美しく走るを眺めよ、水の靜かに行くを眺めよ。いかに君はこの靜謐を好まないか。この風景の聰明な情趣を。むしろ私は、終日<ruby><rb>釣り得ない</rb><rp>（</rp><rt>・・・・・</rt><rp>）</rp></ruby>ことを希望してゐる。されば日當り好い寂寥の岸邊に坐して、私のどんな環境をも亂すなかれ。」"), ipfsUri = sp.utils.bytes_of_string("ipfs://Qmb3HnqAyRwhQS8TFiQFm6N5FkahCPjhoQCaXmSi11t2ck")),
               14: sp.record(title = sp.utils.bytes_of_string("船室から"), body = sp.utils.bytes_of_string("嵐、嵐、浪、浪、大浪、大浪、大浪。傾むく地平線、上昇する地平線、落ちくる地平線。がちやがちや、がちやがちや。上甲板へ、上甲板へ。<ruby><rb>鎖</rb><rp>（</rp><rt>チエン</rt><rp>）</rp></ruby>を卷け、<ruby><rb>鎖</rb><rp>（</rp><rt>チエン</rt><rp>）</rp></ruby>を卷け。突進する、突進する水夫ら。船室の窓、窓、窓、窓。傾むく地平線、上昇する地平線。<ruby><rb>鎖</rb><rp>（</rp><rt>チエン</rt><rp>）</rp></ruby>、<ruby><rb>鎖</rb><rp>（</rp><rt>チエン</rt><rp>）</rp></ruby>、<ruby><rb>鎖</rb><rp>（</rp><rt>チエン</rt><rp>）</rp></ruby>。風、風、風。水、水、水。<ruby><rb>船窓</rb><rp>（</rp><rt>ハツチ</rt><rp>）</rp></ruby>を閉めろ。<ruby><rb>船窓</rb><rp>（</rp><rt>ハツチ</rt><rp>）</rp></ruby>を閉めろ。右舷へ、左舷へ。浪、浪、浪。ほひゆーる。ほひゆーる。ほひゆーる。"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmNqKJomkUseWsgQrypeJc4VrgsRrmy331vUVjN9RP9KVd")),
               15: sp.record(title = sp.utils.bytes_of_string("記憶を捨てる"), body = sp.utils.bytes_of_string("森からかへるとき、私は帽子をぬぎすてた。ああ、記憶。恐ろしく破れちぎつた記憶。みじめな、泥水の中に腐つた記憶。さびしい雨景の道にふるへる私の帽子。背後に捨てて行く。"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmXeMuWKnztTSYF798gXspSXJHZuymDTdAFpCGRirXkm7T")),
               16: sp.record(title = sp.utils.bytes_of_string("情緒よ！　君は歸らざるか"), body = sp.utils.bytes_of_string("書生は町に行き、工場の下を通り、機關車の鳴る響を聽いた。火夫の走り、車輪の廻り、群鴉の喧號する巷の中で、はや一つの胡弓は荷造され、貨車に積まれ、さうして港の倉庫の方へ、税關の門をくぐつて行つた。<br/>十月下旬。書生は飯を食はうとして、枯れた芝草の倉庫の影に、音樂の忍び居り、蟋蟀のやうに鳴くのを聽いた。<br/>――情緒よ、君は歸らざるか。"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmVWAT6AuhLLF18Vo2YBBr7DtqUFzy4VpntKCFVEuhE9Ah")),
               17: sp.record(title = sp.utils.bytes_of_string("港の雜貨店で"), body = sp.utils.bytes_of_string("この鋏の槓力でも、女の錆びついた<ruby><rb>銅牌</rb><rp>（</rp><rt>メダル</rt><rp>）</rp></ruby>が切れないのか。水夫よ！　汝の<ruby><rb>隱衣</rb><rp>（</rp><rt>かくし</rt><rp>）</rp></ruby>の錢をかぞへて、無用の情熱を捨ててしまへ！"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmaHFyTJx6h95i5J742D1dbe3XSs8Qjj74pBKwsEuzrxaq")),
               18: sp.record(title = sp.utils.bytes_of_string("鏡"), body = sp.utils.bytes_of_string("鏡のうしろへ廻つてみても、「私」はそこに居ないのですよ。お孃さん！"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmRNtnYcYVrSPGQ6QrtesQChL9W4CEHJmF5Kvc35bYFDvv")),
               19: sp.record(title = sp.utils.bytes_of_string("狐"), body = sp.utils.bytes_of_string("見よ！　彼は風のやうに來る。その額は憂鬱に青ざめてゐる。耳はするどく切つ立ち、まなじりは怒に裂けてゐる。<br/>君よ！　<ruby><rb>狡智</rb><rp>（</rp><rt>・・</rt><rp>）</rp></ruby>のかくの如き美しき表情をどこに見たか。"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmS9zTrQMVRZdqv3Ew2t5UHiBp91mrdG5wC4PT2jDPrQSE")),
               20: sp.record(title = sp.utils.bytes_of_string("吹雪の中で"), body = sp.utils.bytes_of_string("單に孤獨であるばかりでない。敵を以て充たされてゐる！"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmXxD1my8MbuNFF5FDp7PZnWMqJsmdtTWyw43wx2fVDEV7")),
               21: sp.record(title = sp.utils.bytes_of_string("銃器店の前で"), body = sp.utils.bytes_of_string("明るい硝子戸の店の中で、一つの磨かれた銃器さへも、火藥を裝填してないのである。――何たる虚妄ぞ。<ruby><rb>懶爾</rb><rp>（</rp><rt>らんじ</rt><rp>）</rp></ruby>として笑へ！"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmdsLG5PhHhtV5EAwBEk2FicV8DppueRP4sn7BQhgi5yxF")),
               22: sp.record(title = sp.utils.bytes_of_string("虚數の虎"), body = sp.utils.bytes_of_string("博徒等集まり、投げつけられたる生涯の<ruby><rb>機因</rb><rp>（</rp><rt>チヤンス</rt><rp>）</rp></ruby>の上で、虚數の情熱を賭け合つてゐる。みな兇暴のつら<ruby><rb>魂</rb><rp>（</rp><rt>だましひ</rt><rp>）</rp></ruby>。<ruby><rb>仁義</rb><rp>（</rp><rt>じんぎ</rt><rp>）</rp></ruby>を構へ、虎のやうな空洞に居る。"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmRPe9QKrExbUj4VB2HZzNS25xijDuxNPcxgid8pgsjvMR")),
               23: sp.record(title = sp.utils.bytes_of_string("自然の中で"), body = sp.utils.bytes_of_string("荒寥とした山の中腹で、壁のやうに沈默してゐる、一の巨大なる耳を見た。"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmYZSs12a47ViGc7yM56VcQm1uebnrmdmFeGF2FvM6AVJb")),
               24: sp.record(title = sp.utils.bytes_of_string("觸手ある空間"), body = sp.utils.bytes_of_string("宿命的なる東洋の建築は、その屋根の下で忍從しながら、<ruby><rb>甍</rb><rp>（</rp><rt>いらか</rt><rp>）</rp></ruby>に於て怒り立つてゐる。"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmWqkbEHknifGDQQzmEN4jVRW5psAM9AGsEPfVg8czrqA4")),
               25: sp.record(title = sp.utils.bytes_of_string("大佛"), body = sp.utils.bytes_of_string("その内部に構造の支柱を持ち、暗い梯子と經文を藏する佛陀よ！　海よりも遠く、人畜の住む世界を越えて、指のやうに尨大なれ！"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmXdsCTik7YERw98u5kLtUEvSr284ar4odraQ6FSpCwSF2")),
               26: sp.record(title = sp.utils.bytes_of_string("家"), body = sp.utils.bytes_of_string("人が家の中に住んでるのは、地上の悲しい風景である。"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmNtqRBrB551pT2FcW7FX4vySYcuZ7qMoHzv2mPzJvKSdw")),
               27: sp.record(title = sp.utils.bytes_of_string("黒い洋傘"), body = sp.utils.bytes_of_string("憂鬱の長い柄から、雨がしとしとと<ruby><rb>滴</rb><rp>（</rp><rt>しづく</rt><rp>）</rp></ruby>をしてゐる。眞黒の大きな洋傘！"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmWET6N7SSjbZmm6cmqcGfrx11kYacT6bcqeHK9SSUo3CD")),
               28: sp.record(title = sp.utils.bytes_of_string("恐ろしき人形芝居"), body = sp.utils.bytes_of_string("理髮店の青い窓から、葱のやうに突き出す棍棒。そいつの馬鹿らしい機械仕掛で、夢中になぐられ、なぐられて居る。"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmSEZri6qJzqMPDt7uh6wCSqqzjMUXg4GUNJ431LuWy9YQ")),
               29: sp.record(title = sp.utils.bytes_of_string("齒をもてる意志"), body = sp.utils.bytes_of_string("意志！　そは夕暮の海よりして、鱶の如くに泳ぎ來り、齒を以て肉に噛みつけり。"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmRugS4GCrWQB9iiLpDXLyztcXTpb2R7YnUxWXRZGz6azB")),
               30: sp.record(title = sp.utils.bytes_of_string("建築の Nostalgia"), body = sp.utils.bytes_of_string("建築――特に群團した建築――の樣式は、空の穹窿に對して構想されねばならぬ。即ち切斷されたる球の弧形に對して、槍状の垂直線や、圓錐形やの交錯せる構想を用意すべきである。<br/>この蒼空の下に於ける、遠方の都會の印象として、おほむねの建築は一つの重要な意匠を忘れてゐる。"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmYfAFkDmPBAdoL3rSVWwcepN3eXungT67gWBMwfvH5gP9")),
               31: sp.record(title = sp.utils.bytes_of_string("父"), body = sp.utils.bytes_of_string("父は永遠に悲壯である。"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmWDy5VDpJAL3cjFJxTeTTZRgggDmmjr1hgvdxX8AWAk1a")),
               32: sp.record(title = sp.utils.bytes_of_string("敵"), body = sp.utils.bytes_of_string("敵は常に哄笑してゐる。さうでもなければ、何者の表象が怒らせるのか？"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmUQckgF6Tr5BSDQAjfeVk8qpJj1gAHryLN4X7i1VMwymg")),
               33: sp.record(title = sp.utils.bytes_of_string("物質の感情"), body = sp.utils.bytes_of_string("機械人間にもし感情があるとすれば？　無限の哀傷のほかの何者でもない。"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmTBth13ZJAAKHJtRhtCou5QAsY9oi6FV2EmtsgduSdZN4")),
               34: sp.record(title = sp.utils.bytes_of_string("物體"), body = sp.utils.bytes_of_string("私がもし物體であらうとも、神は再度朗らかに笑ひはしない。ああ、琴の音が聽えて來る。――小さな一つの<ruby><rb>倫理</rb><rp>（</rp><rt>モラル</rt><rp>）</rp></ruby>が、喪失してしまつたのだ。"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmZLEDYbgDD7XfFqEXD5Jyf6KfT31tUV8ghRE5AfZTRVQ5")),
               35: sp.record(title = sp.utils.bytes_of_string("龍"), body = sp.utils.bytes_of_string("龍は帝王の欲望を象徴してゐる。權力の祥雲に乘つて居ながら、常に憤ほろしい恚怒に燃え、不斷の爭鬪のために牙をむいてる。"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmSPCxQVbCp8RRFb6xafpqqdVkk8r9r4P37D5xMKR4a4EL")),
               36: sp.record(title = sp.utils.bytes_of_string("橋"), body = sp.utils.bytes_of_string("すべての橋は、一つの建築意匠しか持つてゐない。時間を空間の上に架け、或る夢幻的な一つの<ruby><rb>觀念</rb><rp>（</rp><rt>イデア</rt><rp>）</rp></ruby>を、現實的に辨證することの熱意である。<br/>橋とは――夢を架空した數學である。"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmPVYxLLwcUXqXwyJbxgovfTnESgmQ743QkNVFCTF5XNb5")),
               37: sp.record(title = sp.utils.bytes_of_string("山上の祈"), body = sp.utils.bytes_of_string("多くの先天的の詩人や藝術家等は、彼等の宿命づけられた仕事に對して、あの悲痛な耶蘇の祈をよく知つてる。「神よ！　もし御心に適ふならば、この苦き酒盃を離し給へ。されど爾にして欲するならば、御心のままに爲し給へ。」"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmcagR96QQSABketfAmzngjXSZoeagBKDdZPXMTH6DbeuN")),
               38: sp.record(title = sp.utils.bytes_of_string("戰場での幻想"), body = sp.utils.bytes_of_string("機關銃よりも悲しげに、繋留氣球よりも憂鬱に、炸裂彈よりも殘忍に、毒瓦斯よりも沈痛に、曳火彈よりも蒼白く、大砲よりもロマンチツクに、煙幕よりも寂しげに、銃火の白く閃めくやうな詩が書きたい！"), ipfsUri = sp.utils.bytes_of_string("ipfs://QmPds4nYmCsnZNe3DHDEY8X1DMm6GvdHFdTB8xPysqno7N")),
            },
            tkey=sp.TNat,
            tvalue=sp.TRecord(
               title=sp.TBytes, body=sp.TBytes, ipfsUri=sp.TBytes
            ).layout(("title", ("body", "ipfsUri"))),
         ),
         bytes_to_nat = {
            sp.bytes('0x00'): 0, sp.bytes('0x01'): 1,
            sp.bytes('0x02'): 2, sp.bytes('0x03'): 3,
            sp.bytes('0x04'): 4, sp.bytes('0x05'): 5,
            sp.bytes('0x06'): 6, sp.bytes('0x07'): 7,
            sp.bytes('0x08'): 8, sp.bytes('0x09'): 9,
            sp.bytes('0x0a'): 10, sp.bytes('0x0b'): 11,
            sp.bytes('0x0c'): 12, sp.bytes('0x0d'): 13,
            sp.bytes('0x0e'): 14, sp.bytes('0x0f'): 15,
            sp.bytes('0x10'): 16, sp.bytes('0x11'): 17,
            sp.bytes('0x12'): 18, sp.bytes('0x13'): 19,
            sp.bytes('0x14'): 20, sp.bytes('0x15'): 21,
            sp.bytes('0x16'): 22, sp.bytes('0x17'): 23,
            sp.bytes('0x18'): 24, sp.bytes('0x19'): 25,
            sp.bytes('0x1a'): 26, sp.bytes('0x1b'): 27,
            sp.bytes('0x1c'): 28, sp.bytes('0x1d'): 29,
            sp.bytes('0x1e'): 30, sp.bytes('0x1f'): 31,
            sp.bytes('0x20'): 32, sp.bytes('0x21'): 33,
            sp.bytes('0x22'): 34, sp.bytes('0x23'): 35,
            sp.bytes('0x24'): 36, sp.bytes('0x25'): 37,
            sp.bytes('0x26'): 38, sp.bytes('0x27'): 39,
            sp.bytes('0x28'): 40, sp.bytes('0x29'): 41,
            sp.bytes('0x2a'): 42, sp.bytes('0x2b'): 43,
            sp.bytes('0x2c'): 44, sp.bytes('0x2d'): 45,
            sp.bytes('0x2e'): 46, sp.bytes('0x2f'): 47,
            sp.bytes('0x30'): 48, sp.bytes('0x31'): 49,
            sp.bytes('0x32'): 50, sp.bytes('0x33'): 51,
            sp.bytes('0x34'): 52, sp.bytes('0x35'): 53,
            sp.bytes('0x36'): 54, sp.bytes('0x37'): 55,
            sp.bytes('0x38'): 56, sp.bytes('0x39'): 57,
            sp.bytes('0x3a'): 58, sp.bytes('0x3b'): 59,
            sp.bytes('0x3c'): 60, sp.bytes('0x3d'): 61,
            sp.bytes('0x3e'): 62, sp.bytes('0x3f'): 63,
            sp.bytes('0x40'): 64, sp.bytes('0x41'): 65,
            sp.bytes('0x42'): 66, sp.bytes('0x43'): 67,
            sp.bytes('0x44'): 68, sp.bytes('0x45'): 69,
            sp.bytes('0x46'): 70, sp.bytes('0x47'): 71,
            sp.bytes('0x48'): 72, sp.bytes('0x49'): 73,
            sp.bytes('0x4a'): 74, sp.bytes('0x4b'): 75,
            sp.bytes('0x4c'): 76, sp.bytes('0x4d'): 77,
            sp.bytes('0x4e'): 78, sp.bytes('0x4f'): 79,
            sp.bytes('0x50'): 80, sp.bytes('0x51'): 81,
            sp.bytes('0x52'): 82, sp.bytes('0x53'): 83,
            sp.bytes('0x54'): 84, sp.bytes('0x55'): 85,
            sp.bytes('0x56'): 86, sp.bytes('0x57'): 87,
            sp.bytes('0x58'): 88, sp.bytes('0x59'): 89,
            sp.bytes('0x5a'): 90, sp.bytes('0x5b'): 91,
            sp.bytes('0x5c'): 92, sp.bytes('0x5d'): 93,
            sp.bytes('0x5e'): 94, sp.bytes('0x5f'): 95,
            sp.bytes('0x60'): 96, sp.bytes('0x61'): 97,
            sp.bytes('0x62'): 98, sp.bytes('0x63'): 99,
            sp.bytes('0x64'): 100, sp.bytes('0x65'): 101,
            sp.bytes('0x66'): 102, sp.bytes('0x67'): 103,
            sp.bytes('0x68'): 104, sp.bytes('0x69'): 105,
            sp.bytes('0x6a'): 106, sp.bytes('0x6b'): 107,
            sp.bytes('0x6c'): 108, sp.bytes('0x6d'): 109,
            sp.bytes('0x6e'): 110, sp.bytes('0x6f'): 111,
            sp.bytes('0x70'): 112, sp.bytes('0x71'): 113,
            sp.bytes('0x72'): 114, sp.bytes('0x73'): 115,
            sp.bytes('0x74'): 116, sp.bytes('0x75'): 117,
            sp.bytes('0x76'): 118, sp.bytes('0x77'): 119,
            sp.bytes('0x78'): 120, sp.bytes('0x79'): 121,
            sp.bytes('0x7a'): 122, sp.bytes('0x7b'): 123,
            sp.bytes('0x7c'): 124, sp.bytes('0x7d'): 125,
            sp.bytes('0x7e'): 126, sp.bytes('0x7f'): 127,
            sp.bytes('0x80'): 128, sp.bytes('0x81'): 129,
            sp.bytes('0x82'): 130, sp.bytes('0x83'): 131,
            sp.bytes('0x84'): 132, sp.bytes('0x85'): 133,
            sp.bytes('0x86'): 134, sp.bytes('0x87'): 135,
            sp.bytes('0x88'): 136, sp.bytes('0x89'): 137,
            sp.bytes('0x8a'): 138, sp.bytes('0x8b'): 139,
            sp.bytes('0x8c'): 140, sp.bytes('0x8d'): 141,
            sp.bytes('0x8e'): 142, sp.bytes('0x8f'): 143,
            sp.bytes('0x90'): 144, sp.bytes('0x91'): 145,
            sp.bytes('0x92'): 146, sp.bytes('0x93'): 147,
            sp.bytes('0x94'): 148, sp.bytes('0x95'): 149,
            sp.bytes('0x96'): 150, sp.bytes('0x97'): 151,
            sp.bytes('0x98'): 152, sp.bytes('0x99'): 153,
            sp.bytes('0x9a'): 154, sp.bytes('0x9b'): 155,
            sp.bytes('0x9c'): 156, sp.bytes('0x9d'): 157,
            sp.bytes('0x9e'): 158, sp.bytes('0x9f'): 159,
            sp.bytes('0xa0'): 160, sp.bytes('0xa1'): 161,
            sp.bytes('0xa2'): 162, sp.bytes('0xa3'): 163,
            sp.bytes('0xa4'): 164, sp.bytes('0xa5'): 165,
            sp.bytes('0xa6'): 166, sp.bytes('0xa7'): 167,
            sp.bytes('0xa8'): 168, sp.bytes('0xa9'): 169,
            sp.bytes('0xaa'): 170, sp.bytes('0xab'): 171,
            sp.bytes('0xac'): 172, sp.bytes('0xad'): 173,
            sp.bytes('0xae'): 174, sp.bytes('0xaf'): 175,
            sp.bytes('0xb0'): 176, sp.bytes('0xb1'): 177,
            sp.bytes('0xb2'): 178, sp.bytes('0xb3'): 179,
            sp.bytes('0xb4'): 180, sp.bytes('0xb5'): 181,
            sp.bytes('0xb6'): 182, sp.bytes('0xb7'): 183,
            sp.bytes('0xb8'): 184, sp.bytes('0xb9'): 185,
            sp.bytes('0xba'): 186, sp.bytes('0xbb'): 187,
            sp.bytes('0xbc'): 188, sp.bytes('0xbd'): 189,
            sp.bytes('0xbe'): 190, sp.bytes('0xbf'): 191,
            sp.bytes('0xc0'): 192, sp.bytes('0xc1'): 193,
            sp.bytes('0xc2'): 194, sp.bytes('0xc3'): 195,
            sp.bytes('0xc4'): 196, sp.bytes('0xc5'): 197,
            sp.bytes('0xc6'): 198, sp.bytes('0xc7'): 199,
            sp.bytes('0xc8'): 200, sp.bytes('0xc9'): 201,
            sp.bytes('0xca'): 202, sp.bytes('0xcb'): 203,
            sp.bytes('0xcc'): 204, sp.bytes('0xcd'): 205,
            sp.bytes('0xce'): 206, sp.bytes('0xcf'): 207,
            sp.bytes('0xd0'): 208, sp.bytes('0xd1'): 209,
            sp.bytes('0xd2'): 210, sp.bytes('0xd3'): 211,
            sp.bytes('0xd4'): 212, sp.bytes('0xd5'): 213,
            sp.bytes('0xd6'): 214, sp.bytes('0xd7'): 215,
            sp.bytes('0xd8'): 216, sp.bytes('0xd9'): 217,
            sp.bytes('0xda'): 218, sp.bytes('0xdb'): 219,
            sp.bytes('0xdc'): 220, sp.bytes('0xdd'): 221,
            sp.bytes('0xde'): 222, sp.bytes('0xdf'): 223,
            sp.bytes('0xe0'): 224, sp.bytes('0xe1'): 225,
            sp.bytes('0xe2'): 226, sp.bytes('0xe3'): 227,
            sp.bytes('0xe4'): 228, sp.bytes('0xe5'): 229,
            sp.bytes('0xe6'): 230, sp.bytes('0xe7'): 231,
            sp.bytes('0xe8'): 232, sp.bytes('0xe9'): 233,
            sp.bytes('0xea'): 234, sp.bytes('0xeb'): 235,
            sp.bytes('0xec'): 236, sp.bytes('0xed'): 237,
            sp.bytes('0xee'): 238, sp.bytes('0xef'): 239,
            sp.bytes('0xf0'): 240, sp.bytes('0xf1'): 241,
            sp.bytes('0xf2'): 242, sp.bytes('0xf3'): 243,
            sp.bytes('0xf4'): 244, sp.bytes('0xf5'): 245,
            sp.bytes('0xf6'): 246, sp.bytes('0xf7'): 247,
            sp.bytes('0xf8'): 248, sp.bytes('0xf9'): 249,
            sp.bytes('0xfa'): 250, sp.bytes('0xfb'): 251,
            sp.bytes('0xfc'): 252, sp.bytes('0xfd'): 253,
            sp.bytes('0xfe'): 254, sp.bytes('0xff'): 255
         }
      )

   # ref: https://github.com/asbjornenge/tezos-randomizer/blob/main/randomizer.py
   def hash_to_nat(self, hash_bytes):
      sp.set_type(hash_bytes, sp.TBytes)
      hash = sp.local('hash', sp.sha256(hash_bytes)).value
      x = sp.local('x', 0)
      total = sp.local('total', 0)
      hash_len = sp.local("hash_len", sp.len(hash))
      sp.while x.value < hash_len.value:
         total.value = (total.value * 256 + self.data.bytes_to_nat[sp.slice(hash, x.value, 1).open_some()])
         x.value = x.value + 1
      return total.value

   def get_poem_id(self, addr):
      return self.hash_to_nat(sp.pack(addr)) % 39

   def get_poem(self, addr):
      return self.data.poems[self.get_poem_id(addr)]

   def update_metadata(self, token_id, addr):
      parts = self.data.poem_svg_parts
      poem = self.get_poem(addr)
      self.data.token_metadata[token_id] = sp.record(
         token_id=token_id,
         token_info=sp.map(
            l = {
               "name": poem.title,
               "description": self.data.token_info_base["description"],
               "decimals": self.data.token_info_base["decimals"],
               "symbol": self.data.token_info_base["symbol"],
               "artifactUri": poem.ipfsUri,
               "displayUri": poem.ipfsUri,
               "thumbnailUri": poem.ipfsUri,
               "svg": parts[0] + poem.title + parts[1] + poem.body + parts[2],
            },
            tkey = sp.TString,
            tvalue = sp.TBytes,
         ),
      )

   @sp.entry_point
   def mint(self):
      """Anyone can mint new tokens (Max: 39)"""
      token_id = sp.compute(self.data.last_token_id)
      sp.verify(token_id < 39, "MAX_SUPPLY")
      self.data.ledger[token_id] = sp.sender
      self.data.last_token_id += 1
      self.update_metadata(token_id, sp.sender)

   def transfer_tx_(self, from_, tx):
      sp.verify(
         (tx.amount == 1) & (self.data.ledger[tx.token_id] == from_),
         message="FA2_INSUFFICIENT_BALANCE",
      )
      self.data.ledger[tx.token_id] = tx.to_
      self.update_metadata(tx.token_id, tx.to_)

   @sp.offchain_view()
   def token_metadata(self, token_id):
      sp.result(self.data.token_metadata[token_id])

@sp.add_test(name="FA2 NFT tokens")
def test():
   user1 = sp.test_account("user1")
   user2 = sp.test_account("user2")
   user3 = sp.test_account("user3")

   scenario = sp.test_scenario()
   scenario.table_of_contents()
   scenario.h2("FA2")
   nft = NFT()
   scenario += nft

   nft.mint().run(sender = user1)
   nft.mint().run(sender = user2)
   nft.mint().run(sender = user3)

   scenario.show(nft.token_metadata(0))

   nft.transfer(
      [
         sp.record(
            from_ = user1.address,
            txs = [
               sp.record(
                  amount = sp.nat(1),
                  to_  = user2.address,
                  token_id  = sp.nat(0),
               ),
            ],
         )
      ]
   ).run(sender = user1)

   scenario.show(nft.token_metadata(0))
