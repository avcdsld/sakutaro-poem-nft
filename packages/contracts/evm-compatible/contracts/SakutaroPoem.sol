// SPDX-License-Identifier: MIT
//
//  _____         _            _
// /  ___|       | |          | |
// \ `--.   __ _ | | __ _   _ | |_   __ _  _ __   ___
//  `--. \ / _` || |/ /| | | || __| / _` || '__| / _ \
// /\__/ /| (_| ||   < | |_| || |_ | (_| || |   | (_) |
// \____/  \__,_||_|\_\ \__,_| \__| \__,_||_|    \___/
//
pragma solidity ^0.8.2;

import {ERC721} from "@rari-capital/solmate/src/tokens/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import {Base64} from "./Base64.sol";

interface ITokenURI {
    function tokenURI(uint256 tokenId) external view returns (string memory);
}

contract SakutaroPoem is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    uint256 public constant maxElements = 39;
    uint256 public constant secondarySaleRoyalty = 10_00000; // 10.0%
    uint256 public constant modulo = 100_00000; // precision 100.00000%

    address public tokenURIContractAddress;
    address public royaltyReceiver;
    uint256 private seed;

    constructor(address _tokenURIContractAddress) ERC721("Sakurato Poem", "SAKU") {
        tokenURIContractAddress = _tokenURIContractAddress;
        royaltyReceiver = msg.sender;
        seed = block.timestamp;
    }

    function _baseURI() internal view virtual returns (string memory) {
        return "";
    }

    function totalSupply() public view returns (uint256) {
        return _tokenIdCounter.current();
    }

    function mint(address to) public {
        require(_tokenIdCounter.current() < maxElements, "Mint would exceed max supply of NFTs");
        _tokenIdCounter.increment();
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(to, tokenId);
    }

    function _burn(uint256 tokenId) internal override(ERC721) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId) public view override(ERC721) returns (string memory) {
        uint256 id = (uint160(ownerOf[tokenId]) + seed) % uint256(39);
        return ITokenURI(tokenURIContractAddress).tokenURI(id);
    }

    function supportsInterface(bytes4 interfaceId) public pure virtual override(ERC721) returns (bool) {
        return
            interfaceId == 0x01ffc9a7 || // ERC165 Interface ID for ERC165
            interfaceId == 0x80ac58cd || // ERC165 Interface ID for ERC721
            interfaceId == 0x5b5e139f || // ERC165 Interface ID for ERC721Metadata
            interfaceId == 0x2a55205a; // ERC165 Interface ID for ERC2981
    }

    // ERC-2981
    function royaltyInfo(
        uint256, /* _tokenId */
        uint256 _value
    ) external view returns (address _receiver, uint256 _royaltyAmount) {
        _receiver = royaltyReceiver;
        _royaltyAmount = (_value / modulo) * secondarySaleRoyalty;
    }
}
