module sakutaro_poem::sakutaro_poem {
    use std::bcs;
    use std::vector;
    use std::option;
    use std::hash::sha3_256;
    use std::signer::address_of;
    use std::string::{Self, String, utf8, append, append_utf8};
    use aptos_framework::account;
    use aptos_framework::resource_account;
    use aptos_framework::event::{Self, EventHandle};
    use aptos_token::token::{Self, TokenDataId};
    use aptos_token::property_map;
    use aptos_std::string_utils::to_string;
    use aptos_std::from_bcs;
    use sakutaro_poem::base64;

    struct TokenMintingEvent has drop, store {
        token_receiver_address: address,
        token_data_id: TokenDataId,
    }

    struct ModuleData has key {
        signer_cap: account::SignerCapability,
        token_minting_events: EventHandle<TokenMintingEvent>,
    }

    const EMAX_SUPPLY: u64 = 0;

    const COLLECTION_NAME: vector<u8> = b"Sakutaro Poem";

    const COLLECTION_DESCRIPTION: vector<u8> = b"Thirty-nine poems from Sakutaro Hagiwara's late self-selected collection \"Shukumei\" have been inscribed on Blockchain as full-onchain NFTs. The content of this NFT changes depending on the owner.";

    const POEM_TITLES: vector<vector<u8>> = vector[
        x"e38182e38182e59bbae38184e6b0b7e38292e7a0b4e381a4e381a6",
        x"e88a9de7949fe381aee4b88ae381a7",
        x"e8888ce381aee381aae38184e79c9ee79086",
        x"e68588e682b2",
        x"e7a78be699b4",
        x"e999b8e6a98be38292e6b8a1e3828b",
        x"e6b699e38190e381bee38197e38184e5a495e69aae",
        x"e59cb0e79083e38292e8b7b3e8ba8de38197e381a6",
        x"e5a49ce6b1bde8bb8ae381aee7aa93e381a7",
        x"e698a5e381aee3818fe3828be69982",
        x"e6a5b5e58589e59cb0e696b9e3818be38289",
        x"e696b7e6a98b",
        x"e9818be591bde381b8e381aee5bf8de8beb1",
        x"e5af82e5afa5e381aee5b79de9828a",
        x"e888b9e5aea4e3818be38289",
        x"e8a898e686b6e38292e68da8e381a6e3828b",
        x"e68385e7b792e38288efbc81e38080e5909be381afe6adb8e38289e38196e3828be3818b",
        x"e6b8afe381aee99b9ce8b2a8e5ba97e381a7",
        x"e98fa1",
        x"e78b90",
        x"e590b9e99baae381aee4b8ade381a7",
        x"e98a83e599a8e5ba97e381aee5898de381a7",
        x"e8999ae695b8e381aee8998e",
        x"e887aae784b6e381aee4b8ade381a7",
        x"e8a7b8e6898be38182e3828be7a9bae99693",
        x"e5a4a7e4bd9b",
        x"e5aeb6",
        x"e9bb92e38184e6b48be58298",
        x"e68190e3828de38197e3818de4babae5bda2e88a9de5b185",
        x"e9bd92e38292e38282e381a6e3828be6848fe5bf97",
        x"e5bbbae7af89e381ae204e6f7374616c676961",
        x"e788b6",
        x"e695b5",
        x"e789a9e8b3aae381aee6849fe68385",
        x"e789a9e9ab94",
        x"e9be8d",
        x"e6a98b",
        x"e5b1b1e4b88ae381aee7a588",
        x"e688b0e5a0b4e381a7e381aee5b9bbe683b3",
    ];

    const POEM_BODIES: vector<vector<u8>> = vector[
        x"e38182e38182e59bbae38184e6b0b7e38292e7a0b4e381a4e381a6e7aa81e980b2e38199e3828be38081e4b880e381a4e381aee5af82e38197e38184e5b886e888b9e38288e38082e38182e381aee9ab98e38184e7a9bae381abe381b2e3828be3818ce381b8e3828be38081e6b5aae6b5aae381aee59bbae9ab94e38197e3819fe58db0e8b1a1e3818be38289e38081e3819de381aee99a94e99ba2e38197e3819fe59cb0e696b9e381aee789a9e4be98e38197e38184e586ace381aee58589e7b79ae3818be38289e38081e38182e381afe3828ce381abe785a4e381bce38191e381a6e8a68be38188e3828be5b08fe38195e381aae9bb92e38184e78db5e9afa8e888b9e38288e38082e5ada4e78da8e381aae792b0e5a283e381aee6b5b7e381abe6bc82e6b38ae38199e3828be888b9e381aee7be85e9879de3818ce38081e4b880e381a4e381aee98bade381a9e381843c727562793e3c72623ee6848fe5bf97e381aee5b096e8a7923c2f72623e3c72703eefbc883c2f72703e3c72743ee383bbe383bbe383bbe383bbe383bb3c2f72743e3c72703eefbc893c2f72703e3c2f727562793ee3818ce38081e38182e38182e5a682e4bd95e381abe59bbae38184e586ace381aee6b0b7e38292e7aa81e3818de7a0b4e381a4e381a6e9a980e980b2e38199e3828be38193e381a8e38288e38082",
        x"e88ba5e88d89e381aee88abde3818ce8908ce38188e3828be38284e38186e381abe38081e38193e381aee697a5e795b6e3828ae381aee38288e38184e88a9de7949fe381aee4b88ae381a7e381afe38081e6809de683b3e3818ce5be8ce3818be38289e5be8ce3818be38289e381a8e68890e995b7e38197e381a6e3818fe3828be38082e38191e3828ce381a9e38282e3819de3828ce38289e381aee6809de683b3e381afe38081e7a781e381abe381bee381a7e4bd95e381aee4baa4e6b889e3818ce38182e38289e38186e3819ee38082e7a781e381afe3819fe381a0e99d92e7a9bae38292e79cbae38281e381a6e5b185e3819fe38184e38082e38182e381aee892bce5a4a9e381aee5a4a2e381aee4b8ade381abe6bab6e38191e381a6e38197e381bee381b5e38284e38186e381aae38081e38195e38186e38184e381b5e6809de683b3e381aee5b9bbe683b3e381a0e38191e38292e882b2e3818fe381bfe3819fe38184e381aee381a0e38082e7a781e887aae8baabe381aee68385e7b792e381aee5bdb1e381a7e38081e381aae381a4e3818be38197e38184e7b791e999b0e381aee5a4a2e38292e381a4e3818fe3828be38284e38186e381aae38081e3819de3828ce38289e381aee3808ce68385e8aabfe38182e3828be6809de683b3e3808de381a0e38191e38292e8aa9ee3828ae3819fe38184e381aee381a0e38082e7a9bae9a39be381b6e5b08fe9b3a5e38288e38082",
        x"e381a8e38182e3828be5b9bbe78788e381aee4b8ade381a7e38081e99d92e799bde38184e99baae381aee9998de3828ae381a4e38282e381a4e381a6e38290e3828be38081e38197e381a5e3818be381aae38197e381a5e3818be381aae699afe889b2e381aee4b8ade381a7e38081e7a781e381afe4b880e381a4e381aee79c9ee79086e38292e381a4e3818be38293e381a0e38082e789a9e8a880e381b5e38193e381a8e381aee381a7e3818de381aae38184e38081e6b0b8e981a0e381abe6b0b8e981a0e381abe38186e38289e682b2e38197e38192e381aae38081e7a781e381afe3808ce8888ce381aee381aae38184e79c9ee79086e3808de38292e6849fe38198e3819fe38082e699afe889b2e381aee38081e5b9bbe78788e381aee38081e99baae381aee381a4e38282e3828be5bdb1e38292e9818ee3818ee58ebbe381a4e381a6e8a18ce3818fe38081e38195e381b3e38197e38184e99d92e78cabe381ae3c727562793e3c72623ee5838f3c2f72623e3c72703eefbc883c2f72703e3c72743ee3818be3819fe381a13c2f72743e3c72703eefbc893c2f72703e3c2f727562793ee38292e3818be38293e38198e3819fe38082",
        x"e9a2a8e790b4e381ae3c727562793e3c72623ee98eade9ad82e6a8823c2f72623e3c72703eefbc883c2f72703e3c72743ee3828ce3818fe3828ce38188e382803c2f72743e3c72703eefbc893c2f72703e3c2f727562793ee38292e3818de3818fe38284e38186e381abe38081e586a5e683b3e381aee58e9ae38184e5a381e381aee5bdb1e381a7e38081e99d9ce3818be381abe6b9a7e3818de38182e3818ce381a4e381a6e3818fe3828be9bb92e38184e6849fe68385e38082e68385e685bee381aee5bcb7e38184e683b1e381bfe38292e68a91e381b8e38081e69e9ce695a2e381aae38184e9818be591bde381b8e381aee58f9be98086e38284e38081e4bd95e381a8e38184e381b5e38193e381a8e38282e381aae38184e7949fe6b4bbe381aee69a97e68481e38284e38081e38184e38289e38184e38289e38197e3819fe5bf83e381aee784a6e787a5e38284e38292e5bf98e3828ce38195e3819be38081e5ae89e38289e3818be381aae5ae89e38289e3818be381aae5afa2e887bae381aee4b88ae381a7e38081e99d88e9ad82e381aee6b7b1e381bfe38182e3828be79ca0e3828ae38292e38195e3819de381b5e38284e38186e381aae38081e4b880e381a4e381aee58a9be38182e3828be99d9ce3818be381aae6849fe68385e38082e3819de3828ce381afe7949fe6b4bbe381aee796b2e3828ce3819fe89684e69aaee381abe38081e99fbfe69dbfe381aee9888de38184e38186e381aae3828ae38292e3819fe381a6e3828be38081e5a4a7e3818de381aae5b985e381aee38182e3828be99d9ce3818be381aae6849fe68385e38082e28095e28095e4bd9be99980e381aee69599e381b8e3819fe68588e682b2e381aee593b2e5adb8efbc81",
        x"e789a7e5a0b4e381aee7899be3818ce88d89e38292e9a39fe381a4e381a6e38290e3828be381aee38292e381bfe381a6e38081e99691e695a3e38284e680a0e683b0e381aee8b6a3e591b3e38292e8a7a3e38197e381aae38184e381bbe381a9e38081e3819de3828ce381bbe381a93c727562793e3c72623ee8bf91e4bba3e79a84e381abe381aae381a4e381a6e38197e381bee381a4e3819f3c2f72623e3c72703eefbc883c2f72703e3c72743ee383bbe383bbe383bbe383bbe383bbe383bbe383bbe383bbe383bbe383bbe383bb3c2f72743e3c72703eefbc893c2f72703e3c2f727562793ee4babae4babae381abe381bee381a7e38081e7a781e381afe38184e3818be381aae3828be69c83e8a9b1e38292e38282e38195e38191e3828be381a7e38182e38289e38186e38082e7a781e381aee8828ce381abe38197e381bfe8bebce38293e381a7e3818fe3828be38081e38193e381aee7a78be697a5e5928ce381aee789a9e580a6e38184e79ca0e3819fe38195e381abe5b0b1e38184e381a6e38081e38193e381aee58fa4e9a2a8e381aae3828be7a781e381aee6809de683b3e381aee68385e8aabfe381abe5b0b1e38184e381a6e38081e38193e381aee4b88ae38282e381afe38284e8aa9ee38289e381aae38184e381a7e38182e38289e38186e38082",
        x"e68682e9acb1e381abe6b288e381bfe381aae3818ce38289e38081e381b2e381a8e3828ae5af82e38197e3818fe999b8e6a98be38292e6b8a1e381a4e381a6e8a18ce3818fe38082e3818be381a4e381a6e4bd95e789a9e381abe38195e381b8e5a6a5e58d94e3819be38196e3828be38081e4bd95e789a9e381abe38195e381b8e5ae89e69893e3819be38196e3828be38081e38193e381aee4b880e381a4e381aee6849fe68385e38292e381a9e38193e381b8e8a18ce3818be38186e3818be38082e890bde697a5e381afe59cb0e5b9b3e381abe4bd8ee3818fe38081e792b0e5a283e381afe68092e3828ae381abe78783e38188e381a6e3828be38082e4b880e58887e38292e6868ee683a1e38197e38081e7b289e7a28ee38197e38081e58f9be98086e38197e38081e598b2e7ac91e38197e38081e696ace5a5b8e38197e38081e695b5e684bee38199e3828be38081e38193e381aee4b880e5808be381aee9bb92e38184e5bdb1e38292e3839ee383b3e38388e381abe381a4e381a4e38293e381a7e38081e381b2e381a8e3828ae5af82e38197e3818fe999b8e6a98be38292e6b8a1e381a4e381a6e8a18ce3818fe38082e3818be381aee9ab98e38184e69eb6e7a9bae381aee6a98be38292e8b68ae38188e381a6e38081e381afe3828be3818be381aee5b9bbe78788e381aee5b882e8a197e381abe381bee381a7e38082",
        x"e38193e3828ce38289e381aee5a495e69aaee381afe6b699e38190e381bee38197e3818fe38081e7a781e381aee69bb8e9bd8be381abe8a8aae3828ce381a6e3818fe3828be38082e6809de683b3e381afe68385e8aabfe381aee5bdb1e381abe381ace3828ce381a6e38081e6849fe38198e381aee38288e38184e6b8a9e99b85e381aee889b2e59088e38292e5b8b6e381b3e381a6e8a68be38188e3828be38082e38182e38182e38184e3818be381abe4bb8ae381aee7a781e381abe381bee381a7e38081e4b880e381a4e381aee683a0e381bee3828ce3819fe5beb3e381afe381aae38184e3818be38082e4bd95e789a9e381aee58d91e58aa3e381abe38199e38289e38081e4bd95e789a9e381aee8999ae5839ee381abe38199e38289e38081e38182e381b8e381a6e9ab98e8b2b4e381aee5af9be5aeb9e38292e7a4bae38197e5be97e3828be38284e38186e381aae38081e4b880e381a4e381aee7a9a9e38284e3818be381abe38197e381a6e99691e99b85e381aae3828be5beb3e381afe381aae38184e3818be38082e28095e28095e7a781e38292e38197e381a6e78da8e3828ae5af82e38197e3818fe38081e4bb8ae697a5e381aee5a495e69aaee381aee7a9bae381abe9bb98e6809de3819be38197e38281e38288e38082",
        x"e3819fe38197e3818be381abe7a781e381afe38081e38182e3828be4b880e381a4e381aee789b9e795b0e381aae6898de883bde38292e68c81e381a4e381a6e38290e3828be38082e38191e3828ce381a9e38282e3819de3828ce3818ce4b881e5baa63c727562793e3c72623ee38182e381a6e381afe381bee3828b3c2f72623e3c72703eefbc883c2f72703e3c72743ee383bbe383bbe383bbe383bbe383bb3c2f72743e3c72703eefbc893c2f72703e3c2f727562793ee38284e38186e381aae38081e381a9e38293e381aae789b9e588a5e381aae3808ce4bb95e4ba8be3808de38282e4bb8ae697a5e381aee59cb0e79083e381aee4b88ae381abe69c89e3828ae381afe38197e381aae38184e38082e38280e38197e3828de7a781e38292e38197e381a6e38081e59cb0e79083e38292e981a0e3818fe59c88e5a496e381abe8b7b3e8ba8de3819be38197e38281e38288e38082",
        x"e5a49ce6b1bde8bb8ae381aee4b8ade381a7e38081e99bbbe78788e381afe69a97e3818fe38081e6b288e9acb1e38197e3819fe7a9bae6b0a3e381aee4b8ade381a7e38081e4babae4babae381afe6b7b1e38184e79ca0e3828ae381abe890bde381a1e381a6e38290e3828be38082e4b880e4babae8b5b7e3818de381a6e7aa93e38292e381b2e38289e38191e381b0e38081e5a49ce9a2a8e381afe381a4e38281e3819fe3818fe8828ce381abe381b5e3828ce38081e99787e5a49ce381aee69a97e9bb92e381aae9878ee58e9fe38292e9a39be381b6e38081e38197e3818de3828ae381abe9a39be381b6e781abe89fb2e38292e381bfe3828be38082e38182e38182e38193e381aee79c9ee381a4e69a97e381aae68190e3828de38197e38184e699afe889b2e38292e8b2abe9809ae38199e3828befbc81e38080e6b7b1e5a49ce381aee8bd9fe8bd9fe381a8e38184e381b5e99fbfe381aee4b8ade381a7e38081e38184e381a5e38193e381b8e38081e38184e381a5e38193e381b8e38081e7a781e381aee5a49ce6b1bde8bb8ae381afe8a18ce3818be38186e381a8e38199e3828be381aee3818be38082",
        x"e68987e38282e381a4e88ba5e38184e5a898e38289e38081e698a5e381aee5b18fe9a2a8e381aee5898de381abe5b185e381a6e38081e5909be381aee38197e381aae38284e3818be381aae882a9e38292e38199e381b9e38289e3819be38081e889b6e38281e3818be38197e38184e69bb2e7b79ae381afe8b6b3e381abe3818be38289e38280e38082e68987e38282e381a4e88ba5e38184e5a898e38289e38081e5909be381aee7ac91e9a18fe381abe68385e38292e381b5e3818fe38281e38288e38081e698a5e381afe4be86e38289e38293e381a8e38199e38082",
        x"3c727562793e3c72623ee6b5b7e8b1b93c2f72623e3c72703eefbc883c2f72703e3c72743ee38182e38196e38289e381973c2f72743e3c72703eefbc893c2f72703e3c2f727562793ee381aee38284e38186e381abe38081e6a5b5e58589e381aee8a68be38188e3828be6b0b7e381aee4b88ae381a7e38081e381bce38293e38284e3828ae381a8e3808ce887aae58886e38292e5bf98e3828ce381a6e3808de59d90e381a4e381a6e38290e3819fe38184e38082e3819de38193e381abe69982e58aabe3818ce38199e3818ee58ebbe381a4e381a6e8a18ce3818fe38082e6999de5a49ce381aee381aae38184e6a5b5e58589e59cb0e696b9e381aee38081e38184e381a4e38282e69aaee3828ce696b9e381aee38284e38186e381aae58589e7b79ae3818ce38081e9888de3818fe682b2e38197e38192e381abe5b9bde6bb85e38199e3828be381a8e38193e3828de38082e38182e38182e3819de381aee981a0e38184e58c97e6a5b5e59c88e381aee6b0b7e381aee4b88ae381a7e38081e381bce38293e38284e3828ae381a8e6b5b7e8b1b9e381aee38284e38186e381abe59d90e381a4e381a6e5b185e3819fe38184e38082e6b0b8e981a0e381abe38081e6b0b8e981a0e381abe38081e887aae58886e38292e5bf98e3828ce381a6e38081e6809de6839fe381aee381bbe381aee69a97e38184e6b5b7e381abe6b5aee381b6e38081e4b880e381a4e381aee4be98e38197e38184e5b9bbe8b1a1e38292e79cbae38281e381a6e5b185e3819fe38184e381aee381a7e38199e38082",
        x"e5a49ce98193e38292e8b5b0e3828be6b1bde8bb8ae381bee381a7e38081e4b880e381a4e381aee8b5a4e38184e78788e781abe38292e7a4bae3819be38288e38082e4bb8ae3819de38193e381abe58db1e99aaae3818ce38182e3828be38082e696b7e6a98befbc81e38080e696b7e6a98befbc81e38080e38182e38182e682b2e9b3b4e381afe9a2a8e38292e381a4e38293e38196e3818fe38082e381a0e3828ce3818ce3819de3828ce38292e79fa5e3828be3818be38082e7b2bee7a59ee381afe99787e381aee69ba0e9878ee38292e381b2e3819fe8b5b0e3828be38082e680a5e8a18ce38197e38081e680a5e8a18ce38197e38081e680a5e8a18ce38197e38081e5bdbce381aee682b2e58a87e381aee7b582e9a99be381b8e381a8e38082",
        x"e381a8e381afe38184e381b8e792b0e5a283e381aee99787e38292e7aa81e7a0b4e38199e381b9e3818de38081e381a9e38293e381aae58a9be3818ce3819de38193e381abe38182e3828be3818be38082e9bd92e3818ce381bfe381a6e38193e38289e381b8e38288e38082e38193e38289e381b8e38288e38082e38193e38289e381b8e38288e38082",
        x"e58fa4e9a99be381aee38081e69fb3e381aee38182e3828be5b79de381aee5b2b8e381a7e38081e3818be3828ce381afe4bd95e38292e987a3e38289e38186e381a8e38199e3828be381aee3818be38082e38284e3818ce381a6e7949fe6b4bbe381aee89684e69aaee3818ce3818fe3828be381bee381a7e38081e3819de38293e381aae381abe38282e995b7e38184e99693e38081e9879de381aee381aae38184e987a3e7abbfe381a7e280a6e280a6e38082e3808ce590a6e3808de381a8e3819de381aee694afe982a3e4babae3818ce7ad94e381b8e3819fe38082e3808ce9ad9ae381aee7be8ee38197e3818fe8b5b0e3828be38292e79cbae38281e38288e38081e6b0b4e381aee99d9ce3818be381abe8a18ce3818fe38292e79cbae38281e38288e38082e38184e3818be381abe5909be381afe38193e381aee99d9ce8ac90e38292e5a5bde381bee381aae38184e3818be38082e38193e381aee9a2a8e699afe381aee881b0e6988ee381aae68385e8b6a3e38292e38082e38280e38197e3828de7a781e381afe38081e7b582e697a53c727562793e3c72623ee987a3e3828ae5be97e381aae381843c2f72623e3c72703eefbc883c2f72703e3c72743ee383bbe383bbe383bbe383bbe383bb3c2f72743e3c72703eefbc893c2f72703e3c2f727562793ee38193e381a8e38292e5b88ce69c9be38197e381a6e38290e3828be38082e38195e3828ce381b0e697a5e795b6e3828ae5a5bde38184e5af82e5afa5e381aee5b2b8e9828ae381abe59d90e38197e381a6e38081e7a781e381aee381a9e38293e381aae792b0e5a283e38292e38282e4ba82e38199e381aae3818be3828ce38082e3808d",
        x"e5b590e38081e5b590e38081e6b5aae38081e6b5aae38081e5a4a7e6b5aae38081e5a4a7e6b5aae38081e5a4a7e6b5aae38082e582bee38280e3818fe59cb0e5b9b3e7b79ae38081e4b88ae69887e38199e3828be59cb0e5b9b3e7b79ae38081e890bde381a1e3818fe3828be59cb0e5b9b3e7b79ae38082e3818ce381a1e38284e3818ce381a1e38284e38081e3818ce381a1e38284e3818ce381a1e38284e38082e4b88ae794b2e69dbfe381b8e38081e4b88ae794b2e69dbfe381b8e380823c727562793e3c72623ee98e963c2f72623e3c72703eefbc883c2f72703e3c72743ee38381e382a8e383b33c2f72743e3c72703eefbc893c2f72703e3c2f727562793ee38292e58db7e38191e380813c727562793e3c72623ee98e963c2f72623e3c72703eefbc883c2f72703e3c72743ee38381e382a8e383b33c2f72743e3c72703eefbc893c2f72703e3c2f727562793ee38292e58db7e38191e38082e7aa81e980b2e38199e3828be38081e7aa81e980b2e38199e3828be6b0b4e5a4abe38289e38082e888b9e5aea4e381aee7aa93e38081e7aa93e38081e7aa93e38081e7aa93e38082e582bee38280e3818fe59cb0e5b9b3e7b79ae38081e4b88ae69887e38199e3828be59cb0e5b9b3e7b79ae380823c727562793e3c72623ee98e963c2f72623e3c72703eefbc883c2f72703e3c72743ee38381e382a8e383b33c2f72743e3c72703eefbc893c2f72703e3c2f727562793ee380813c727562793e3c72623ee98e963c2f72623e3c72703eefbc883c2f72703e3c72743ee38381e382a8e383b33c2f72743e3c72703eefbc893c2f72703e3c2f727562793ee380813c727562793e3c72623ee98e963c2f72623e3c72703eefbc883c2f72703e3c72743ee38381e382a8e383b33c2f72743e3c72703eefbc893c2f72703e3c2f727562793ee38082e9a2a8e38081e9a2a8e38081e9a2a8e38082e6b0b4e38081e6b0b4e38081e6b0b4e380823c727562793e3c72623ee888b9e7aa933c2f72623e3c72703eefbc883c2f72703e3c72743ee3838fe38384e383813c2f72743e3c72703eefbc893c2f72703e3c2f727562793ee38292e99689e38281e3828de380823c727562793e3c72623ee888b9e7aa933c2f72623e3c72703eefbc883c2f72703e3c72743ee3838fe38384e383813c2f72743e3c72703eefbc893c2f72703e3c2f727562793ee38292e99689e38281e3828de38082e58fb3e888b7e381b8e38081e5b7a6e888b7e381b8e38082e6b5aae38081e6b5aae38081e6b5aae38082e381bbe381b2e38286e383bce3828be38082e381bbe381b2e38286e383bce3828be38082e381bbe381b2e38286e383bce3828be38082",
        x"e6a3aee3818be38289e3818be381b8e3828be381a8e3818de38081e7a781e381afe5b8bde5ad90e38292e381ace3818ee38199e381a6e3819fe38082e38182e38182e38081e8a898e686b6e38082e68190e3828de38197e3818fe7a0b4e3828ce381a1e3818ee381a4e3819fe8a898e686b6e38082e381bfe38198e38281e381aae38081e6b3a5e6b0b4e381aee4b8ade381abe88590e381a4e3819fe8a898e686b6e38082e38195e381b3e38197e38184e99ba8e699afe381aee98193e381abe381b5e3828be381b8e3828be7a781e381aee5b8bde5ad90e38082e8838ce5be8ce381abe68da8e381a6e381a6e8a18ce3818fe38082",
        x"e69bb8e7949fe381afe794bae381abe8a18ce3818de38081e5b7a5e5a0b4e381aee4b88be38292e9809ae3828ae38081e6a99fe9979ce8bb8ae381aee9b3b4e3828be99fbfe38292e881bde38184e3819fe38082e781abe5a4abe381aee8b5b0e3828ae38081e8bb8ae8bcaae381aee5bbbbe3828ae38081e7bea4e9b489e381aee596a7e8999fe38199e3828be5b7b7e381aee4b8ade381a7e38081e381afe38284e4b880e381a4e381aee883a1e5bc93e381afe88db7e980a0e38195e3828ce38081e8b2a8e8bb8ae381abe7a98de381bee3828ce38081e38195e38186e38197e381a6e6b8afe381aee58089e5baabe381aee696b9e381b8e38081e7a88ee9979ce381aee99680e38292e3818fe38190e381a4e381a6e8a18ce381a4e3819fe380823c62722f3ee58d81e69c88e4b88be697ace38082e69bb8e7949fe381afe9a3afe38292e9a39fe381afe38186e381a8e38197e381a6e38081e69eafe3828ce3819fe88a9de88d89e381aee58089e5baabe381aee5bdb1e381abe38081e99fb3e6a882e381aee5bf8de381b3e5b185e3828ae38081e89f8be89f80e381aee38284e38186e381abe9b3b4e3818fe381aee38292e881bde38184e3819fe380823c62722f3ee28095e28095e68385e7b792e38288e38081e5909be381afe6adb8e38289e38196e3828be3818be38082",
        x"e38193e381aee98b8fe381aee6a793e58a9be381a7e38282e38081e5a5b3e381aee98c86e381b3e381a4e38184e3819f3c727562793e3c72623ee98a85e7898c3c2f72623e3c72703eefbc883c2f72703e3c72743ee383a1e38380e383ab3c2f72743e3c72703eefbc893c2f72703e3c2f727562793ee3818ce58887e3828ce381aae38184e381aee3818be38082e6b0b4e5a4abe38288efbc81e38080e6b19de381ae3c727562793e3c72623ee99ab1e8a1a33c2f72623e3c72703eefbc883c2f72703e3c72743ee3818be3818fe381973c2f72743e3c72703eefbc893c2f72703e3c2f727562793ee381aee98ca2e38292e3818be3819ee381b8e381a6e38081e784a1e794a8e381aee68385e786b1e38292e68da8e381a6e381a6e38197e381bee381b8efbc81",
        x"e98fa1e381aee38186e38197e3828de381b8e5bbbbe381a4e381a6e381bfe381a6e38282e38081e3808ce7a781e3808de381afe3819de38193e381abe5b185e381aae38184e381aee381a7e38199e38288e38082e3818ae5ad83e38195e38293efbc81",
        x"e8a68be38288efbc81e38080e5bdbce381afe9a2a8e381aee38284e38186e381abe4be86e3828be38082e3819de381aee9a18de381afe68682e9acb1e381abe99d92e38196e38281e381a6e38290e3828be38082e880b3e381afe38199e3828be381a9e3818fe58887e381a4e7ab8be381a1e38081e381bee381aae38198e3828ae381afe68092e381abe8a382e38191e381a6e38290e3828be380823c62722f3ee5909be38288efbc81e380803c727562793e3c72623ee78ba1e699ba3c2f72623e3c72703eefbc883c2f72703e3c72743ee383bbe383bb3c2f72743e3c72703eefbc893c2f72703e3c2f727562793ee381aee3818be3818fe381aee5a682e3818de7be8ee38197e3818de8a1a8e68385e38292e381a9e38193e381abe8a68be3819fe3818be38082",
        x"e596aee381abe5ada4e78da8e381a7e38182e3828be381b0e3818be3828ae381a7e381aae38184e38082e695b5e38292e4bba5e381a6e58585e3819fe38195e3828ce381a6e38290e3828befbc81",
        x"e6988ee3828be38184e7a19de5ad90e688b8e381aee5ba97e381aee4b8ade381a7e38081e4b880e381a4e381aee7a3a8e3818be3828ce3819fe98a83e599a8e38195e381b8e38282e38081e781abe897a5e38292e8a39de5a1abe38197e381a6e381aae38184e381aee381a7e38182e3828be38082e28095e28095e4bd95e3819fe3828be8999ae5a684e3819ee380823c727562793e3c72623ee687b6e788be3c2f72623e3c72703eefbc883c2f72703e3c72743ee38289e38293e381983c2f72743e3c72703eefbc893c2f72703e3c2f727562793ee381a8e38197e381a6e7ac91e381b8efbc81",
        x"e58d9ae5be92e7ad89e99b86e381bee3828ae38081e68a95e38192e381a4e38191e38289e3828ce3819fe3828be7949fe6b6afe381ae3c727562793e3c72623ee6a99fe59ba03c2f72623e3c72703eefbc883c2f72703e3c72743ee38381e383a4e383b3e382b93c2f72743e3c72703eefbc893c2f72703e3c2f727562793ee381aee4b88ae381a7e38081e8999ae695b8e381aee68385e786b1e38292e8b3ade38191e59088e381a4e381a6e38290e3828be38082e381bfe381aae58587e69ab4e381aee381a4e382893c727562793e3c72623ee9ad823c2f72623e3c72703eefbc883c2f72703e3c72743ee381a0e381bee38197e381b23c2f72743e3c72703eefbc893c2f72703e3c2f727562793ee380823c727562793e3c72623ee4bb81e7bea93c2f72623e3c72703eefbc883c2f72703e3c72743ee38198e38293e3818e3c2f72743e3c72703eefbc893c2f72703e3c2f727562793ee38292e6a78be381b8e38081e8998ee381aee38284e38186e381aae7a9bae6b49ee381abe5b185e3828be38082",
        x"e88d92e5afa5e381a8e38197e3819fe5b1b1e381aee4b8ade885b9e381a7e38081e5a381e381aee38284e38186e381abe6b288e9bb98e38197e381a6e38290e3828be38081e4b880e381aee5b7a8e5a4a7e381aae3828be880b3e38292e8a68be3819fe38082",
        x"e5aebfe591bde79a84e381aae3828be69db1e6b48be381aee5bbbae7af89e381afe38081e3819de381aee5b18be6a0b9e381aee4b88be381a7e5bf8de5be9ee38197e381aae3818ce38289e380813c727562793e3c72623ee7948d3c2f72623e3c72703eefbc883c2f72703e3c72743ee38184e38289e3818b3c2f72743e3c72703eefbc893c2f72703e3c2f727562793ee381abe696bce381a6e68092e3828ae7ab8be381a4e381a6e38290e3828be38082",
        x"e3819de381aee58685e983a8e381abe6a78be980a0e381aee694afe69fb1e38292e68c81e381a1e38081e69a97e38184e6a2afe5ad90e381a8e7b693e69687e38292e8978fe38199e3828be4bd9be99980e38288efbc81e38080e6b5b7e38288e3828ae38282e981a0e3818fe38081e4babae7959ce381aee4bd8fe38280e4b896e7958ce38292e8b68ae38188e381a6e38081e68c87e381aee38284e38186e381abe5b0a8e5a4a7e381aae3828cefbc81",
        x"e4babae3818ce5aeb6e381aee4b8ade381abe4bd8fe38293e381a7e3828be381aee381afe38081e59cb0e4b88ae381aee682b2e38197e38184e9a2a8e699afe381a7e38182e3828be38082",
        x"e68682e9acb1e381aee995b7e38184e69f84e3818be38289e38081e99ba8e3818ce38197e381a8e38197e381a8e381a83c727562793e3c72623ee6bbb43c2f72623e3c72703eefbc883c2f72703e3c72743ee38197e381a5e3818f3c2f72743e3c72703eefbc893c2f72703e3c2f727562793ee38292e38197e381a6e38290e3828be38082e79c9ee9bb92e381aee5a4a7e3818de381aae6b48be58298efbc81",
        x"e79086e9abaee5ba97e381aee99d92e38184e7aa93e3818be38289e38081e891b1e381aee38284e38186e381abe7aa81e3818de587bae38199e6a38de6a392e38082e3819de38184e381a4e381aee9a6ace9b9bfe38289e38197e38184e6a99fe6a2b0e4bb95e68e9be381a7e38081e5a4a2e4b8ade381abe381aae38190e38289e3828ce38081e381aae38190e38289e3828ce381a6e5b185e3828be38082",
        x"e6848fe5bf97efbc81e38080e3819de381afe5a495e69aaee381aee6b5b7e38288e3828ae38197e381a6e38081e9b1b6e381aee5a682e3818fe381abe6b3b3e3818ee4be86e3828ae38081e9bd92e38292e4bba5e381a6e88289e381abe5999be381bfe381a4e38191e3828ae38082",
        x"e5bbbae7af89e28095e28095e789b9e381abe7bea4e59c98e38197e3819fe5bbbae7af89e28095e28095e381aee6a8a3e5bc8fe381afe38081e7a9bae381aee7a9b9e7aabfe381abe5b08de38197e381a6e6a78be683b3e38195e3828ce381ade381b0e381aae38289e381ace38082e58db3e381a1e58887e696b7e38195e3828ce3819fe3828be79083e381aee5bca7e5bda2e381abe5b08de38197e381a6e38081e6a78de78ab6e381aee59e82e79bb4e7b79ae38284e38081e59c93e98c90e5bda2e38284e381aee4baa4e98cafe3819be3828be6a78be683b3e38292e794a8e6848fe38199e381b9e3818de381a7e38182e3828be380823c62722f3ee38193e381aee892bce7a9bae381aee4b88be381abe696bce38191e3828be38081e981a0e696b9e381aee983bde69c83e381aee58db0e8b1a1e381a8e38197e381a6e38081e3818ae381bbe38280e381ade381aee5bbbae7af89e381afe4b880e381a4e381aee9878de8a681e381aae6848fe58ca0e38292e5bf98e3828ce381a6e38290e3828be38082",
        x"e788b6e381afe6b0b8e981a0e381abe682b2e5a3afe381a7e38182e3828be38082",
        x"e695b5e381afe5b8b8e381abe59384e7ac91e38197e381a6e38290e3828be38082e38195e38186e381a7e38282e381aae38191e3828ce381b0e38081e4bd95e88085e381aee8a1a8e8b1a1e3818ce68092e38289e3819be3828be381aee3818befbc9f",
        x"e6a99fe6a2b0e4babae99693e381abe38282e38197e6849fe68385e3818ce38182e3828be381a8e38199e3828ce381b0efbc9fe38080e784a1e99990e381aee59380e582b7e381aee381bbe3818be381aee4bd95e88085e381a7e38282e381aae38184e38082",
        x"e7a781e3818ce38282e38197e789a9e9ab94e381a7e38182e38289e38186e381a8e38282e38081e7a59ee381afe5868de5baa6e69c97e38289e3818be381abe7ac91e381b2e381afe38197e381aae38184e38082e38182e38182e38081e790b4e381aee99fb3e3818ce881bde38188e381a6e4be86e3828be38082e28095e28095e5b08fe38195e381aae4b880e381a4e381ae3c727562793e3c72623ee580abe790863c2f72623e3c72703eefbc883c2f72703e3c72743ee383a2e383a9e383ab3c2f72743e3c72703eefbc893c2f72703e3c2f727562793ee3818ce38081e596aae5a4b1e38197e381a6e38197e381bee381a4e3819fe381aee381a0e38082",
        x"e9be8de381afe5b89de78e8be381aee6acb2e69c9be38292e8b1a1e5beb4e38197e381a6e38290e3828be38082e6ac8ae58a9be381aee7a5a5e99bb2e381abe4b998e381a4e381a6e5b185e381aae3818ce38289e38081e5b8b8e381abe686a4e381bbe3828de38197e38184e6819ae68092e381abe78783e38188e38081e4b88de696b7e381aee788ade9acaae381aee3819fe38281e381abe78999e38292e38280e38184e381a6e3828be38082",
        x"e38199e381b9e381a6e381aee6a98be381afe38081e4b880e381a4e381aee5bbbae7af89e6848fe58ca0e38197e3818be68c81e381a4e381a6e38290e381aae38184e38082e69982e99693e38292e7a9bae99693e381aee4b88ae381abe69eb6e38191e38081e68896e3828be5a4a2e5b9bbe79a84e381aae4b880e381a4e381ae3c727562793e3c72623ee8a780e5bfb53c2f72623e3c72703eefbc883c2f72703e3c72743ee382a4e38387e382a23c2f72743e3c72703eefbc893c2f72703e3c2f727562793ee38292e38081e78fbee5afa6e79a84e381abe8bea8e8ad89e38199e3828be38193e381a8e381aee786b1e6848fe381a7e38182e3828be380823c62722f3ee6a98be381a8e381afe28095e28095e5a4a2e38292e69eb6e7a9bae38197e3819fe695b8e5adb8e381a7e38182e3828be38082",
        x"e5a49ae3818fe381aee58588e5a4a9e79a84e381aee8a9a9e4babae38284e8979de8a193e5aeb6e7ad89e381afe38081e5bdbce7ad89e381aee5aebfe591bde381a5e38191e38289e3828ce3819fe4bb95e4ba8be381abe5b08de38197e381a6e38081e38182e381aee682b2e7979be381aae880b6e89887e381aee7a588e38292e38288e3818fe79fa5e381a4e381a6e3828be38082e3808ce7a59ee38288efbc81e38080e38282e38197e5bea1e5bf83e381abe981a9e381b5e381aae38289e381b0e38081e38193e381aee88ba6e3818de98592e79b83e38292e99ba2e38197e7b5a6e381b8e38082e38195e3828ce381a9e788bee381abe38197e381a6e6acb2e38199e3828be381aae38289e381b0e38081e5bea1e5bf83e381aee381bee381bee381abe788b2e38197e7b5a6e381b8e38082e3808d",
        x"e6a99fe9979ce98a83e38288e3828ae38282e682b2e38197e38192e381abe38081e7b98be79599e6b0a3e79083e38288e3828ae38282e68682e9acb1e381abe38081e782b8e8a382e5bd88e38288e3828ae38282e6ae98e5bf8de381abe38081e6af92e793a6e696afe38288e3828ae38282e6b288e7979be381abe38081e69bb3e781abe5bd88e38288e3828ae38282e892bce799bde3818fe38081e5a4a7e7a0b2e38288e3828ae38282e383ade3839ee383b3e38381e38384e382afe381abe38081e78599e5b995e38288e3828ae38282e5af82e38197e38192e381abe38081e98a83e781abe381aee799bde3818fe99683e38281e3818fe38284e38186e381aae8a9a9e3818ce69bb8e3818de3819fe38184efbc81",
    ];

    const POEM_SVG_IPFS_CID: vector<vector<u8>> = vector[
        b"QmNREv8ovF11ViuZSHtEcFzc5Hb8gMMRXEJgYtDVBu3NRr",
        b"QmfKHsnjqhYQZKhcgEjEanNwyZehVzE5SuaipmKwTYjkqp",
        b"QmSyve6wEBy8FfQbxZvsZhLL13TDGCbjremrWoGrQEMS5X",
        b"QmPjU4Zp2BZobSFqu4Z9TZuiAVF2EmDQpHUpTSxNucod2i",
        b"Qma8oQonq28pKo31xjKtwAGcFnnmnK7tDv2tPfKjHdGKtq",
        b"Qmevof6HRQS2aJo7onM1SbdoKbD8T6BGp8Gw2ZPJWTFVah",
        b"QmbfD8wcsHLSBzhvHjeBwVjexq7tv6TNYCtAARg7b3zgov",
        b"QmQj6nx5RpjX7HvuZm384RmHwDRSzxyvJFVoacRb2sgDQD",
        b"QmNNUzh371bM47dbh1ZxeFb8jC5NuAia653WPawatan29U",
        b"QmQ4pugZXpSXuAbQaEpvF9JPEnpodgdAwdBn6LUYKQHNZP",
        b"QmUMhCjwp4CptciYw4FW394W9dJcCQLLkaiLCjwomEsu2W",
        b"QmNcCXPGaSSj4bCapWZnD2yHEsUGWKXBjPVJbtLscCi8zA",
        b"QmPY1dAx5Gm67t2K9rN6ercU2RXdBiYMbbokmNG6FYxXXx",
        b"Qmb3HnqAyRwhQS8TFiQFm6N5FkahCPjhoQCaXmSi11t2ck",
        b"QmNqKJomkUseWsgQrypeJc4VrgsRrmy331vUVjN9RP9KVd",
        b"QmXeMuWKnztTSYF798gXspSXJHZuymDTdAFpCGRirXkm7T",
        b"QmVWAT6AuhLLF18Vo2YBBr7DtqUFzy4VpntKCFVEuhE9Ah",
        b"QmaHFyTJx6h95i5J742D1dbe3XSs8Qjj74pBKwsEuzrxaq",
        b"QmRNtnYcYVrSPGQ6QrtesQChL9W4CEHJmF5Kvc35bYFDvv",
        b"QmS9zTrQMVRZdqv3Ew2t5UHiBp91mrdG5wC4PT2jDPrQSE",
        b"QmXxD1my8MbuNFF5FDp7PZnWMqJsmdtTWyw43wx2fVDEV7",
        b"QmdsLG5PhHhtV5EAwBEk2FicV8DppueRP4sn7BQhgi5yxF",
        b"QmRPe9QKrExbUj4VB2HZzNS25xijDuxNPcxgid8pgsjvMR",
        b"QmYZSs12a47ViGc7yM56VcQm1uebnrmdmFeGF2FvM6AVJb",
        b"QmWqkbEHknifGDQQzmEN4jVRW5psAM9AGsEPfVg8czrqA4",
        b"QmXdsCTik7YERw98u5kLtUEvSr284ar4odraQ6FSpCwSF2",
        b"QmNtqRBrB551pT2FcW7FX4vySYcuZ7qMoHzv2mPzJvKSdw",
        b"QmWET6N7SSjbZmm6cmqcGfrx11kYacT6bcqeHK9SSUo3CD",
        b"QmSEZri6qJzqMPDt7uh6wCSqqzjMUXg4GUNJ431LuWy9YQ",
        b"QmRugS4GCrWQB9iiLpDXLyztcXTpb2R7YnUxWXRZGz6azB",
        b"QmYfAFkDmPBAdoL3rSVWwcepN3eXungT67gWBMwfvH5gP9",
        b"QmWDy5VDpJAL3cjFJxTeTTZRgggDmmjr1hgvdxX8AWAk1a",
        b"QmUQckgF6Tr5BSDQAjfeVk8qpJj1gAHryLN4X7i1VMwymg",
        b"QmTBth13ZJAAKHJtRhtCou5QAsY9oi6FV2EmtsgduSdZN4",
        b"QmZLEDYbgDD7XfFqEXD5Jyf6KfT31tUV8ghRE5AfZTRVQ5",
        b"QmSPCxQVbCp8RRFb6xafpqqdVkk8r9r4P37D5xMKR4a4EL",
        b"QmPVYxLLwcUXqXwyJbxgovfTnESgmQ743QkNVFCTF5XNb5",
        b"QmcagR96QQSABketfAmzngjXSZoeagBKDdZPXMTH6DbeuN",
        b"QmPds4nYmCsnZNe3DHDEY8X1DMm6GvdHFdTB8xPysqno7N",
    ];

    const ROYALTY_PAYEE_ADDRESS: address = @resource_address;

    const ROYALTY_POINTS_DENOMINATOR: u64 = 10;

    const ROYALTY_POINTS_NUMERATOR: u64 = 1;

    fun init_module(resource_signer: &signer) {
        token::create_collection(
            resource_signer,
            utf8(COLLECTION_NAME),
            utf8(COLLECTION_DESCRIPTION),
            utf8(b""), // uri
            39, // maximum
            vector<bool>[false, false, false // mutate_setting - description, uri, maximum
        ]);

        move_to(resource_signer, ModuleData {
            signer_cap: resource_account::retrieve_resource_account_cap(resource_signer, @source_address),
            token_minting_events: account::new_event_handle<TokenMintingEvent>(resource_signer),
        });
    }

    public fun get_poem_id(owner: address): u64 {
        let bytes = bcs::to_bytes(&owner);
        return ((from_bcs::to_u256(sha3_256(bytes)) % 39) as u64)
    }

    public fun get_poem_title(poem_id: u64): String {
        return utf8(*vector::borrow(&POEM_TITLES, poem_id))
    }

    public fun get_poem_body(poem_id: u64): String {
        return utf8(*vector::borrow(&POEM_BODIES, poem_id))
    }

    public fun get_poem_svg_ipfs_cid(poem_id: u64): String {
        return utf8(*vector::borrow(&POEM_SVG_IPFS_CID, poem_id))
    }

    public fun get_poem_svg(poem_id: u64): String {
        let svg = utf8(b"");
        append_utf8(&mut svg, b"<svg width=\"400\" height=\"400\" viewBox=\"0, 0, 400, 400\" xmlns=\"http://www.w3.org/2000/svg\">");
        append_utf8(&mut svg, b"<defs><linearGradient id=\"grad1\" x1=\"0%\" y1=\"50%\"><stop offset=\"0%\" stop-color=\"#0f2350\">");
        append_utf8(&mut svg, b"<animate id=\"a1\" attributeName=\"stop-color\" values=\"#0f2350; #6a5acd\" begin=\"0; a2.end\" dur=\"3s\" />");
        append_utf8(&mut svg, b"<animate id=\"a2\" attributeName=\"stop-color\" values=\"#6a5acd; #0f2350\" begin=\"a1.end\" dur=\"3s\" /></stop><stop offset=\"100%\" stop-color=\"#6a5acd\" >");
        append_utf8(&mut svg, b"<animate id=\"a3\" attributeName=\"stop-color\" values=\"#6a5acd; #0f2350\" begin=\"0; a4.end\" dur=\"3s\" />");
        append_utf8(&mut svg, b"<animate id=\"a4\" attributeName=\"stop-color\" values=\"#0f2350; #6a5acd\" begin=\"a3.end\" dur=\"3s\" /></stop></linearGradient></defs>");
        append_utf8(&mut svg, b"<style type=\"text/css\">p {font-family: serif; color: white;}</style>");
        append_utf8(&mut svg, b"<rect width=\"400\" height=\"400\" fill=\"url(#grad1)\" />");
        append_utf8(&mut svg, b"<foreignObject x=\"25\" y=\"15\" width=\"350\" height=\"370\"><p class=\"shadow\" xmlns=\"http://www.w3.org/1999/xhtml\">");
        append(&mut svg, get_poem_title(poem_id));
        append_utf8(&mut svg, b"</p><p xmlns=\"http://www.w3.org/1999/xhtml\">");
        append(&mut svg, get_poem_body(poem_id));
        append_utf8(&mut svg, b"</p><p style=\"padding-top: 1em\" xmlns=\"http://www.w3.org/1999/xhtml\">");
        append_utf8(&mut svg, x"e2809520e890a9e58e9f20e69c94e5a4aae9838e");
        append_utf8(&mut svg, b"</p></foreignObject></svg>");
        return svg
    }

    public fun get_poem_svg_base64(poem_id: u64): String {
        let svg = get_poem_svg(poem_id);
        let svg_base64 = utf8(b"data:image/svg+xml;base64,");
        append_utf8(&mut svg_base64, base64::encode(string::bytes(&svg)));
        return svg_base64
    }

    public fun get_token_uri(poem_id: u64): String {
        let token_uri = utf8(b"ipfs://");
        append(&mut token_uri, get_poem_svg_ipfs_cid(poem_id));
        return token_uri
    }

    public fun get_token_name(token_index: u64): String {
        let token_name = utf8(b"#");
        append(&mut token_name, to_string<u64>(&token_index));
        return token_name
    }

    public fun new_token_name(): String {
        let collection_supply = token::get_collection_supply(@resource_address, utf8(COLLECTION_NAME));
        let token_index = option::extract<u64>(&mut collection_supply) + 1;
        return get_token_name(token_index)
    }

    public entry fun mint(receiver: &signer) acquires ModuleData {
        let module_data = borrow_global_mut<ModuleData>(@resource_address);
        let resource_signer = account::create_signer_with_capability(&module_data.signer_cap);

        let poem_id = get_poem_id(address_of(receiver));

        let token_data_id = token::create_tokendata(
            &resource_signer,
            utf8(COLLECTION_NAME),
            new_token_name(),
            utf8(COLLECTION_DESCRIPTION),
            1, // token_maximum,
            get_token_uri(poem_id),
            ROYALTY_PAYEE_ADDRESS,
            ROYALTY_POINTS_DENOMINATOR,
            ROYALTY_POINTS_NUMERATOR,
            token::create_token_mutability_config(&vector<bool>[ false, false, false, false, true ]), // token_mutate_setting - maximum, uri, royalty, description, properties
            vector<String>[ // token_property_keys
                utf8(b"poem_id"),
                utf8(b"poem_title"),
                utf8(b"poem_svg_base64"),
                utf8(b"svg_ipfs_cid")
            ],
            vector<vector<u8>>[ // token_property_values
                bcs::to_bytes<u64>(&poem_id),
                bcs::to_bytes<String>(&get_poem_title(poem_id)),
                bcs::to_bytes<String>(&get_poem_svg_base64(poem_id)),
                bcs::to_bytes<String>(&get_poem_svg_ipfs_cid(poem_id))
            ],
            vector<String>[ // token_property_types
                utf8(b"u64"),
                utf8(b"0x1::string::String"),
                utf8(b"0x1::string::String"),
                utf8(b"0x1::string::String")
            ],
        );

        let token_id = token::mint_token(&resource_signer, token_data_id, 1);
        token::direct_transfer(&resource_signer, receiver, token_id, 1);

        event::emit_event<TokenMintingEvent>(
            &mut module_data.token_minting_events,
            TokenMintingEvent {
                token_receiver_address: address_of(receiver),
                token_data_id,
            }
        );
    }

    public entry fun update(owner_address: address, token_index: u64) acquires ModuleData {
        let module_data = borrow_global_mut<ModuleData>(@resource_address);
        let resource_signer = account::create_signer_with_capability(&module_data.signer_cap);

        let token_data_id = token::create_token_data_id(@resource_address, utf8(COLLECTION_NAME), get_token_name(token_index));
        let token_property_version = token::get_tokendata_largest_property_version(@resource_address, token_data_id);
        let token_id = token::create_token_id(token_data_id, token_property_version);
        let property_map = token::get_property_map(owner_address, token_id);

        let poem_id = get_poem_id(owner_address);
        if (property_map::read_u64(&property_map, &utf8(b"poem_id")) == poem_id) {
            return
        };

        token::mutate_token_properties(
            &resource_signer,
            owner_address,
            @resource_address,
            utf8(COLLECTION_NAME),
            get_token_name(token_index),
            token_property_version,
            1, // amount
            vector<String>[ // token_property_keys
                utf8(b"poem_id"),
                utf8(b"poem_title"),
                utf8(b"poem_svg_base64"),
                utf8(b"svg_ipfs_cid")
            ],
            vector<vector<u8>>[ // token_property_values
                bcs::to_bytes<u64>(&poem_id),
                bcs::to_bytes<String>(&get_poem_title(poem_id)),
                bcs::to_bytes<String>(&get_poem_svg_base64(poem_id)),
                bcs::to_bytes<String>(&get_poem_svg_ipfs_cid(poem_id))
            ],
            vector<String>[ // token_property_types
                utf8(b"u64"),
                utf8(b"0x1::string::String"),
                utf8(b"0x1::string::String"),
                utf8(b"0x1::string::String")
            ],
        );
    }

    //
    // Tests
    //

    #[test (origin_account = @0xb21de0e2a7419d35d5abde4baa2a72159cd3a7cea042defd0e54b1faa022a474, resource_account = @0x6a34f9589eac7a9f36dd0795f01e4c90fac7ff80abd703d1b66d31744fdaaf4e, nft_receiver = @0x123, nft_receiver2 = @0x234)]
    public entry fun test_mint(origin_account: signer, resource_account: signer, nft_receiver: signer, nft_receiver2: signer) acquires ModuleData {
        account::create_account_for_test(address_of(&origin_account));
        resource_account::create_resource_account(&origin_account, b"sakutaro", x"");
        init_module(&resource_account);

        // let resource_addr = account::create_resource_address(&@0xb21de0e2a7419d35d5abde4baa2a72159cd3a7cea042defd0e54b1faa022a474, b"sakutaro");
        // std::debug::print(&b"sakutaro");
        // std::debug::print(&resource_addr);

        account::create_account_for_test(address_of(&nft_receiver));
        account::create_account_for_test(address_of(&nft_receiver2));

        mint(&nft_receiver);

        let token_data_id = token::create_token_data_id(@resource_address, utf8(COLLECTION_NAME), utf8(b"#1"));
        let token_property_version = token::get_tokendata_largest_property_version(@resource_address, token_data_id);
        let token_id = token::create_token_id(token_data_id, token_property_version);
        let property_map = token::get_property_map(address_of(&nft_receiver), token_id);
        std::debug::print(&property_map::read_u64(&property_map, &utf8(b"poem_id")));
        std::debug::print(&property_map::read_string(&property_map, &utf8(b"poem_title")));
        std::debug::print(&property_map::read_string(&property_map, &utf8(b"poem_svg_base64")));

        let amount = 1;
        token::direct_transfer(&nft_receiver, &nft_receiver2, token_id, amount);

        // mint(&nft_receiver2);

        let token_index = 1;
        update(address_of(&nft_receiver2), token_index);

        let token_data_id_2 = token::create_token_data_id(@resource_address, utf8(COLLECTION_NAME), utf8(b"#1"));
        let updated_token_property_version = token::get_tokendata_largest_property_version(@resource_address, token_data_id_2);
        let updated_token_id = token::create_token_id(token_data_id_2, updated_token_property_version);
        let updated_property_map = token::get_property_map(address_of(&nft_receiver2), updated_token_id);
        std::debug::print(&property_map::read_u64(&updated_property_map, &utf8(b"poem_id")));
        std::debug::print(&property_map::read_string(&updated_property_map, &utf8(b"poem_title")));
        std::debug::print(&property_map::read_string(&updated_property_map, &utf8(b"poem_svg_base64")));
    }
}
