//
//  _____         _            _
// /  ___|       | |          | |
// \ `--.   __ _ | | __ _   _ | |_   __ _  _ __   ___
//  `--. \ / _` || |/ /| | | || __| / _` || '__| / _ \
// /\__/ /| (_| ||   < | |_| || |_ | (_| || |   | (_) |
// \____/  \__,_||_|\_\ \__,_| \__| \__,_||_|    \___/
//
//
import "Base64Util"

access(all) contract SakutaroPoemContent {
    access(all) let name: String
    access(all) let description: String
    access(self) let poems: [Poem]

    access(all) struct Poem {
        access(all) let title: String
        access(all) let body: String
        access(all) let ipfsCid: String

        init(
            title: String,
            body: String,
            ipfsCid: String
        ) {
            self.title = title
            self.body = body
            self.ipfsCid = ipfsCid
        }

        access(all) fun getSvg(): String {
            var svg = ""
            svg = svg.concat("<svg width=\"400\" height=\"400\" viewBox=\"0, 0, 400, 400\" xmlns=\"http://www.w3.org/2000/svg\">")
            svg = svg.concat("<defs><linearGradient id=\"grad1\" x1=\"0%\" y1=\"50%\"><stop offset=\"0%\" stop-color=\"#0f2350\">")
            svg = svg.concat("<animate id=\"a1\" attributeName=\"stop-color\" values=\"#0f2350; #6a5acd\" begin=\"0; a2.end\" dur=\"3s\" />")
            svg = svg.concat("<animate id=\"a2\" attributeName=\"stop-color\" values=\"#6a5acd; #0f2350\" begin=\"a1.end\" dur=\"3s\" /></stop><stop offset=\"100%\" stop-color=\"#6a5acd\" >")
            svg = svg.concat("<animate id=\"a3\" attributeName=\"stop-color\" values=\"#6a5acd; #0f2350\" begin=\"0; a4.end\" dur=\"3s\" />")
            svg = svg.concat("<animate id=\"a4\" attributeName=\"stop-color\" values=\"#0f2350; #6a5acd\" begin=\"a3.end\" dur=\"3s\" /></stop></linearGradient></defs>")
            svg = svg.concat("<style type=\"text/css\">p {font-family: serif; color: white;}</style>")
            svg = svg.concat("<rect width=\"400\" height=\"400\" fill=\"url(#grad1)\" />")
            svg = svg.concat("<foreignObject x=\"25\" y=\"15\" width=\"350\" height=\"370\"><p class=\"shadow\" xmlns=\"http://www.w3.org/1999/xhtml\">")
            svg = svg.concat(self.title)
            svg = svg.concat("</p><p xmlns=\"http://www.w3.org/1999/xhtml\">")
            svg = svg.concat(self.body)
            svg = svg.concat("</p><p style=\"padding-top: 1em\" xmlns=\"http://www.w3.org/1999/xhtml\">")
            svg = svg.concat("― 萩原 朔太郎")
            svg = svg.concat("</p></foreignObject></svg>")
            return svg
        }

        access(all) fun getSvgBase64(): String {
            return "data:image/svg+xml;base64,".concat(Base64Util.encode(self.getSvg()))
        }
    }

    access(all) fun getPoem(_ poemID: UInt32): Poem? {
        return self.poems[poemID]
    }

    init() {
        self.name = "Sakutaro Poem"
        self.description = "Thirty-nine poems from Sakutaro Hagiwara\'s late self-selected collection \"Shukumei\" have been inscribed on Blockchain as full-onchain NFTs. The content of this NFT changes depending on the owner."
        self.poems = [
          Poem(title: "ああ固い氷を破つて", body: "ああ固い氷を破つて突進する、一つの寂しい帆船よ。あの高い空にひるがへる、浪浪の固體した印象から、その隔離した地方の物侘しい冬の光線から、あはれに煤ぼけて見える小さな黒い獵鯨船よ。孤獨な環境の海に漂泊する船の羅針が、一つの鋭どい<ruby><rb>意志の尖角</rb><rp>（</rp><rt>・・・・・</rt><rp>）</rp></ruby>が、ああ如何に固い冬の氷を突き破つて驀進することよ。", ipfsCid: "QmbYfnRTp9XnUcxkwKCLr6WDXVanDuzmLmQNFnv1bSgNc3"),
          Poem(title: "芝生の上で", body: "若草の芽が萌えるやうに、この日當りのよい芝生の上では、思想が後から後からと成長してくる。けれどもそれらの思想は、私にまで何の交渉があらうぞ。私はただ青空を眺めて居たい。あの蒼天の夢の中に溶けてしまふやうな、さういふ思想の幻想だけを育くみたいのだ。私自身の情緒の影で、なつかしい緑陰の夢をつくるやうな、それらの「情調ある思想」だけを語りたいのだ。空飛ぶ小鳥よ。", ipfsCid: "QmPavMiuvQZEzrTNAv1DsnqGXia5URvTVfZUjcvv59RwX2"),
          Poem(title: "舌のない眞理", body: "とある幻燈の中で、青白い雪の降りつもつてゐる、しづかなしづかな景色の中で、私は一つの眞理をつかんだ。物言ふことのできない、永遠に永遠にうら悲しげな、私は「舌のない眞理」を感じた。景色の、幻燈の、雪のつもる影を過ぎ去つて行く、さびしい青猫の<ruby><rb>像</rb><rp>（</rp><rt>かたち</rt><rp>）</rp></ruby>をかんじた。", ipfsCid: "QmYzUDTo6sB1xuuEjMT6bLpFFwvQBJqZZDXf4oojgTCH9D"),
          Poem(title: "慈悲", body: "風琴の<ruby><rb>鎭魂樂</rb><rp>（</rp><rt>れくれえむ</rt><rp>）</rp></ruby>をきくやうに、冥想の厚い壁の影で、靜かに湧きあがつてくる黒い感情。情慾の強い惱みを抑へ、果敢ない運命への叛逆や、何といふこともない生活の暗愁や、いらいらした心の焦燥やを忘れさせ、安らかな安らかな寢臺の上で、靈魂の深みある眠りをさそふやうな、一つの力ある靜かな感情。それは生活の疲れた薄暮に、響板の鈍いうなりをたてる、大きな幅のある靜かな感情。――佛陀の教へた慈悲の哲學！", ipfsCid: "QmYcZ5opqDnGdbK23siLpXBaAgdZcZqneJfQ2as3TQqwbY"),
          Poem(title: "秋晴", body: "牧場の牛が草を食つてゐるのをみて、閑散や怠惰の趣味を解しないほど、それほど<ruby><rb>近代的になつてしまつた</rb><rp>（</rp><rt>・・・・・・・・・・・</rt><rp>）</rp></ruby>人人にまで、私はいかなる會話をもさけるであらう。私の肌にしみ込んでくる、この秋日和の物倦い眠たさに就いて、この古風なる私の思想の情調に就いて、この上もはや語らないであらう。", ipfsCid: "QmVxFjWXfNr5PPmdYDzJ4sjVApU3s6mDEwgqYUBFa1PcDa"),
          Poem(title: "陸橋を渡る", body: "憂鬱に沈みながら、ひとり寂しく陸橋を渡つて行く。かつて何物にさへ妥協せざる、何物にさへ安易せざる、この一つの感情をどこへ行かうか。落日は地平に低く、環境は怒りに燃えてる。一切を憎惡し、粉碎し、叛逆し、嘲笑し、斬奸し、敵愾する、この一個の黒い影をマントにつつんで、ひとり寂しく陸橋を渡つて行く。かの高い架空の橋を越えて、はるかの幻燈の市街にまで。", ipfsCid: "QmYDtEFJagdtc4tL5aa8FPq2QfdtNufudYp7aeahP18i4T"),
          Poem(title: "涙ぐましい夕暮", body: "これらの夕暮は涙ぐましく、私の書齋に訪れてくる。思想は情調の影にぬれて、感じのよい温雅の色合を帶びて見える。ああいかに今の私にまで、一つの惠まれた徳はないか。何物の卑劣にすら、何物の虚僞にすら、あへて高貴の寛容を示し得るやうな、一つの穩やかにして閑雅なる徳はないか。――私をして獨り寂しく、今日の夕暮の空に默思せしめよ。", ipfsCid: "QmWFkr2osTqivLXVCpLb54S9YDeDW3Ss6UgMfYtd1FCcSa"),
          Poem(title: "地球を跳躍して", body: "たしかに私は、ある一つの特異な才能を持つてゐる。けれどもそれが丁度<ruby><rb>あてはまる</rb><rp>（</rp><rt>・・・・・</rt><rp>）</rp></ruby>やうな、どんな特別な「仕事」も今日の地球の上に有りはしない。むしろ私をして、地球を遠く圈外に跳躍せしめよ。", ipfsCid: "QmfR8D4d8XSq8nJpXSttLe5cMkkye3grHnsAmJ8XbQTqhH"),
          Poem(title: "夜汽車の窓で", body: "夜汽車の中で、電燈は暗く、沈鬱した空氣の中で、人人は深い眠りに落ちてゐる。一人起きて窓をひらけば、夜風はつめたく肌にふれ、闇夜の暗黒な野原を飛ぶ、しきりに飛ぶ火蟲をみる。ああこの眞つ暗な恐ろしい景色を貫通する！　深夜の轟轟といふ響の中で、いづこへ、いづこへ、私の夜汽車は行かうとするのか。", ipfsCid: "QmNfhMNdTw1aXpFCNFWimt5Y4jQoBvarQCoWARw2LvBYfZ"),
          Poem(title: "春のくる時", body: "扇もつ若い娘ら、春の屏風の前に居て、君のしなやかな肩をすべらせ、艶めかしい曲線は足にからむ。扇もつ若い娘ら、君の笑顏に情をふくめよ、春は來らんとす。", ipfsCid: "QmQ4pugZXpSXuAbQaEpvF9JPEnpodgdAwdBn6LUYKQHNZP"),
          Poem(title: "極光地方から", body: "<ruby><rb>海豹</rb><rp>（</rp><rt>あざらし</rt><rp>）</rp></ruby>のやうに、極光の見える氷の上で、ぼんやりと「自分を忘れて」坐つてゐたい。そこに時劫がすぎ去つて行く。晝夜のない極光地方の、いつも暮れ方のやうな光線が、鈍く悲しげに幽滅するところ。ああその遠い北極圈の氷の上で、ぼんやりと海豹のやうに坐つて居たい。永遠に、永遠に、自分を忘れて、思惟のほの暗い海に浮ぶ、一つの侘しい幻象を眺めて居たいのです。", ipfsCid: "QmRu3WpioSnwaCGfT4crHH3WuGNWZ71gKh3zPgWJG6aDNJ"),
          Poem(title: "斷橋", body: "夜道を走る汽車まで、一つの赤い燈火を示せよ。今そこに危險がある。斷橋！　斷橋！　ああ悲鳴は風をつんざく。だれがそれを知るか。精神は闇の曠野をひた走る。急行し、急行し、急行し、彼の悲劇の終驛へと。", ipfsCid: "QmS6Qenkq7gFSCU4rhyzpfV7vuDQhEx3oMa21UtNKVACLG"),
          Poem(title: "運命への忍辱", body: "とはいへ環境の闇を突破すべき、どんな力がそこにあるか。齒がみてこらへよ。こらへよ。こらへよ。", ipfsCid: "QmSCzcg15pHz6oEaD5FSy16sKgUHDRbFmLEZukTrieuwJ8"),
          Poem(title: "寂寥の川邊", body: "古驛の、柳のある川の岸で、かれは何を釣らうとするのか。やがて生活の薄暮がくるまで、そんなにも長い間、針のない釣竿で……。「否」とその支那人が答へた。「魚の美しく走るを眺めよ、水の靜かに行くを眺めよ。いかに君はこの靜謐を好まないか。この風景の聰明な情趣を。むしろ私は、終日<ruby><rb>釣り得ない</rb><rp>（</rp><rt>・・・・・</rt><rp>）</rp></ruby>ことを希望してゐる。されば日當り好い寂寥の岸邊に坐して、私のどんな環境をも亂すなかれ。」", ipfsCid: "QmRXxuTCE7SidDSFETpEVE2yk7MLnPhKUWckypLMRuQYZk"),
          Poem(title: "船室から", body: "嵐、嵐、浪、浪、大浪、大浪、大浪。傾むく地平線、上昇する地平線、落ちくる地平線。がちやがちや、がちやがちや。上甲板へ、上甲板へ。<ruby><rb>鎖</rb><rp>（</rp><rt>チエン</rt><rp>）</rp></ruby>を卷け、<ruby><rb>鎖</rb><rp>（</rp><rt>チエン</rt><rp>）</rp></ruby>を卷け。突進する、突進する水夫ら。船室の窓、窓、窓、窓。傾むく地平線、上昇する地平線。<ruby><rb>鎖</rb><rp>（</rp><rt>チエン</rt><rp>）</rp></ruby>、<ruby><rb>鎖</rb><rp>（</rp><rt>チエン</rt><rp>）</rp></ruby>、<ruby><rb>鎖</rb><rp>（</rp><rt>チエン</rt><rp>）</rp></ruby>。風、風、風。水、水、水。<ruby><rb>船窓</rb><rp>（</rp><rt>ハツチ</rt><rp>）</rp></ruby>を閉めろ。<ruby><rb>船窓</rb><rp>（</rp><rt>ハツチ</rt><rp>）</rp></ruby>を閉めろ。右舷へ、左舷へ。浪、浪、浪。ほひゆーる。ほひゆーる。ほひゆーる。", ipfsCid: "QmazcwQWWXQngDGEv14iJTFPYyU3jQnKrbvQWyN2gf83jo"),
          Poem(title: "記憶を捨てる", body: "森からかへるとき、私は帽子をぬぎすてた。ああ、記憶。恐ろしく破れちぎつた記憶。みじめな、泥水の中に腐つた記憶。さびしい雨景の道にふるへる私の帽子。背後に捨てて行く。", ipfsCid: "QmWNmnZDDavFLUaKCcoSqNdBpXq935QwTXnJ9yxTYqGseJ"),
          Poem(title: "情緒よ！　君は歸らざるか", body: "書生は町に行き、工場の下を通り、機關車の鳴る響を聽いた。火夫の走り、車輪の廻り、群鴉の喧號する巷の中で、はや一つの胡弓は荷造され、貨車に積まれ、さうして港の倉庫の方へ、税關の門をくぐつて行つた。<br/>十月下旬。書生は飯を食はうとして、枯れた芝草の倉庫の影に、音樂の忍び居り、蟋蟀のやうに鳴くのを聽いた。<br/>――情緒よ、君は歸らざるか。", ipfsCid: "QmQwAo8ktnVb6SzDRh6cfy4SQewhsQXNKHF2DpZXt924si"),
          Poem(title: "港の雜貨店で", body: "この鋏の槓力でも、女の錆びついた<ruby><rb>銅牌</rb><rp>（</rp><rt>メダル</rt><rp>）</rp></ruby>が切れないのか。水夫よ！　汝の<ruby><rb>隱衣</rb><rp>（</rp><rt>かくし</rt><rp>）</rp></ruby>の錢をかぞへて、無用の情熱を捨ててしまへ！", ipfsCid: "QmcTcnxgXsEUqTcAQm9Gk1gqVJ4ker6SuDC8K74et8kfsT"),
          Poem(title: "鏡", body: "鏡のうしろへ廻つてみても、「私」はそこに居ないのですよ。お孃さん！", ipfsCid: "QmPztz1JR5QqMtNmkdF6n6ZcmZJAbWPuYRzyir3t4sT4TA"),
          Poem(title: "狐", body: "見よ！　彼は風のやうに來る。その額は憂鬱に青ざめてゐる。耳はするどく切つ立ち、まなじりは怒に裂けてゐる。<br/>君よ！　<ruby><rb>狡智</rb><rp>（</rp><rt>・・</rt><rp>）</rp></ruby>のかくの如き美しき表情をどこに見たか。", ipfsCid: "QmdWxe1SsXC8vmxqfujpnXjMqtKzg3XX9wm5uYrwzon8v6  False"),
          Poem(title: "吹雪の中で", body: "單に孤獨であるばかりでない。敵を以て充たされてゐる！", ipfsCid: "Qmf27h13kcDLzNAHV1acMAWEJgDNPgLo8DeixspvjCciJy"),
          Poem(title: "銃器店の前で", body: "明るい硝子戸の店の中で、一つの磨かれた銃器さへも、火藥を裝填してないのである。――何たる虚妄ぞ。<ruby><rb>懶爾</rb><rp>（</rp><rt>らんじ</rt><rp>）</rp></ruby>として笑へ！", ipfsCid: "QmXp2qruZSDf4YfvNpyk5eSFt9AagH6j5yaHMUVYGzRp8z"),
          Poem(title: "虚數の虎", body: "博徒等集まり、投げつけられたる生涯の<ruby><rb>機因</rb><rp>（</rp><rt>チヤンス</rt><rp>）</rp></ruby>の上で、虚數の情熱を賭け合つてゐる。みな兇暴のつら<ruby><rb>魂</rb><rp>（</rp><rt>だましひ</rt><rp>）</rp></ruby>。<ruby><rb>仁義</rb><rp>（</rp><rt>じんぎ</rt><rp>）</rp></ruby>を構へ、虎のやうな空洞に居る。", ipfsCid: "QmbzaojNMRrzFKxuYSx2kBE7NQDxKbarW3iQZwBpYvtaCG"),
          Poem(title: "自然の中で", body: "荒寥とした山の中腹で、壁のやうに沈默してゐる、一の巨大なる耳を見た。", ipfsCid: "QmZDyFXXyf3QPd35D2afQ7d8RLgTBwUHCX4xUc7UgB925v"),
          Poem(title: "觸手ある空間", body: "宿命的なる東洋の建築は、その屋根の下で忍從しながら、<ruby><rb>甍</rb><rp>（</rp><rt>いらか</rt><rp>）</rp></ruby>に於て怒り立つてゐる。", ipfsCid: "QmSCnediq6fUyX8oyWSot4easJwH8QU1UTvSMzen17ep9z"),
          Poem(title: "大佛", body: "その内部に構造の支柱を持ち、暗い梯子と經文を藏する佛陀よ！　海よりも遠く、人畜の住む世界を越えて、指のやうに尨大なれ！", ipfsCid: "QmXKXq2NknPcsR2zGW6MpW9Ms3HjHa2s311gUpGXdfEEru"),
          Poem(title: "家", body: "人が家の中に住んでるのは、地上の悲しい風景である。", ipfsCid: "QmYmsgtSs1YX7USceneYsNa1ETRnLc9PCWTr3xT9Jiwn8a"),
          Poem(title: "黒い洋傘", body: "憂鬱の長い柄から、雨がしとしとと<ruby><rb>滴</rb><rp>（</rp><rt>しづく</rt><rp>）</rp></ruby>をしてゐる。眞黒の大きな洋傘！", ipfsCid: "QmWLfkAv2KPMQdYLpdApiCRa3iZN7xU4uJZohMdhndg59z"),
          Poem(title: "恐ろしき人形芝居", body: "理髮店の青い窓から、葱のやうに突き出す棍棒。そいつの馬鹿らしい機械仕掛で、夢中になぐられ、なぐられて居る。", ipfsCid: "QmPakHw8qULkd4GxCtLm4zSNtyZKZAyaVCb4cDDfTwM4jN"),
          Poem(title: "齒をもてる意志", body: "意志！　そは夕暮の海よりして、鱶の如くに泳ぎ來り、齒を以て肉に噛みつけり。", ipfsCid: "QmVVuKnhuGB1G9HoNEixmw9X8c2XnRnqtK5DdofEDScgQ6"),
          Poem(title: "建築の Nostalgia", body: "建築――特に群團した建築――の樣式は、空の穹窿に對して構想されねばならぬ。即ち切斷されたる球の弧形に對して、槍状の垂直線や、圓錐形やの交錯せる構想を用意すべきである。<br/>この蒼空の下に於ける、遠方の都會の印象として、おほむねの建築は一つの重要な意匠を忘れてゐる。", ipfsCid: "QmWBykKyUaf3M4YjzajmuGEke9b6UhSGhieyxR8CT8EoJz"),
          Poem(title: "父", body: "父は永遠に悲壯である。", ipfsCid: "QmNrhQgoQfWtUrphjeuwb6ZJUBRhHUWs9wVVHbd5oCqiLK"),
          Poem(title: "敵", body: "敵は常に哄笑してゐる。さうでもなければ、何者の表象が怒らせるのか？", ipfsCid: "QmY2fJuJ5noorkU5cQio5B5m2JLeQwmPu86iFA8F8Ljw5r"),
          Poem(title: "物質の感情", body: "機械人間にもし感情があるとすれば？　無限の哀傷のほかの何者でもない。", ipfsCid: "Qmc3rnb4aBECadfJK1AQVenaNyFuFrDd8p2zzBJfCKdjFx"),
          Poem(title: "物體", body: "私がもし物體であらうとも、神は再度朗らかに笑ひはしない。ああ、琴の音が聽えて來る。――小さな一つの<ruby><rb>倫理</rb><rp>（</rp><rt>モラル</rt><rp>）</rp></ruby>が、喪失してしまつたのだ。", ipfsCid: "Qmcsx4msRwfB7g2mYymwLpY5jmRsW9Vo1SptCnhXQTPY3N"),
          Poem(title: "龍", body: "龍は帝王の欲望を象徴してゐる。權力の祥雲に乘つて居ながら、常に憤ほろしい恚怒に燃え、不斷の爭鬪のために牙をむいてる。", ipfsCid: "QmPZmv2uZP9Ee9jvHWnWuS9ZhsA1E5cdnYfyfqfuZNVCsc"),
          Poem(title: "橋", body: "すべての橋は、一つの建築意匠しか持つてゐない。時間を空間の上に架け、或る夢幻的な一つの<ruby><rb>觀念</rb><rp>（</rp><rt>イデア</rt><rp>）</rp></ruby>を、現實的に辨證することの熱意である。<br/>橋とは――夢を架空した數學である。", ipfsCid: "QmcLAFRF3MPinSjS9GnkMukCMRgzMU4rRXHRWPEH4seeoX"),
          Poem(title: "山上の祈", body: "多くの先天的の詩人や藝術家等は、彼等の宿命づけられた仕事に對して、あの悲痛な耶蘇の祈をよく知つてる。「神よ！　もし御心に適ふならば、この苦き酒盃を離し給へ。されど爾にして欲するならば、御心のままに爲し給へ。」", ipfsCid: "QmbNgbzgm4tcYKpTfzWmXsTXjuERcGGNFpYy5pe6wFUKaj"),
          Poem(title: "戰場での幻想", body: "機關銃よりも悲しげに、繋留氣球よりも憂鬱に、炸裂彈よりも殘忍に、毒瓦斯よりも沈痛に、曳火彈よりも蒼白く、大砲よりもロマンチツクに、煙幕よりも寂しげに、銃火の白く閃めくやうな詩が書きたい！", ipfsCid: "QmVUD5ongfzjQPHAHymWfWsydkQDTA218WTRu7yFRfPVjt")
        ]
    }
}
