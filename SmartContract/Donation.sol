// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";


contract DonationNFT is ERC721Enumerable{
    string metadataURI;
    uint maxSupply;
    constructor (string memory _name,string memory _symbol,string memory _metadataURI,uint _maxSupply) ERC721 (_name,_symbol){
        metadataURI=_metadataURI;
        maxSupply=_maxSupply;
    }

    function mintNFT()public {
        require(totalSupply()<500,"no more Mint.");
        uint tokenId=totalSupply()+1;
        _mint(msg.sender,tokenId);
    }
    function tokenURI(uint _tokenId) public view override returns (string memory){
        return string(abi.encodePacked(metadataURI,'/','Donation',Strings.toString(_tokenId),'.json'));
    }


}

contract DonationToken is ERC20{
    // 토큰 초기 발행자(=발권자)
    address private owner;
    
    constructor() ERC20("DonationToken","DONE"){
        owner = msg.sender;
        // 초기 발행량 1억개
        _mint(msg.sender, 100000000);
    }

    function extraMintToken(uint256 value) public {
        // 발권자만 추가로 토큰 발행 가능
        require(msg.sender == owner, "You are not Owner");
        _mint(msg.sender, value);
    }

    function decimals() public pure override returns(uint8){
        return 1;
    }
}


contract Donation is DonationToken{
    struct Donator {
        uint donateDate;
        uint totalDonationAmount;
        mapping(address=>uint256) donationAmount;
    }

    struct Beneficiary{
        uint applyDate;
        uint amount;
        string donationType;
        bool isApply;
    }
    // 수혜자와 수혜정보 맵핑
    mapping(address=>Beneficiary) public beneficiary;
    
    // 기부자와 기부정보 맵핑
    mapping(address=>Donator) public donator;
    
    
    // 수혜자가 수혜 신청하는 기능
    function setBeneficiary(string memory _type) public {
        require(beneficiary[msg.sender].isApply !=true, "You have aleardy registered the beneficiary");
        beneficiary[msg.sender] = Beneficiary(block.timestamp,0,_type,true);
    }
    // 기부자가 기부하는 기능
    function donate(uint _value, address benefi) public{
        require(balanceOf(msg.sender)>=_value,"You do not have sufficient value");
        transfer(address(this), _value);
        donator[msg.sender].donateDate = block.timestamp;
        donator[msg.sender].totalDonationAmount+=_value;
        donator[msg.sender].donationAmount[benefi] = _value;

        beneficiary[benefi].amount+=_value;      
    }
    // 기부 기간이 지나거나 기부 목표 금액이 다 채워졌을때 수혜자에게 기부금 전달하기
    function finishDonate(address benefi) external {
        require(block.timestamp >= beneficiary[benefi].applyDate + 60 days || beneficiary[benefi].amount >= 2000000);
        transferFrom(address(this), benefi, beneficiary[benefi].amount);
        delete beneficiary[benefi];
    }

    // 수혜자가 받은 기부 금액 출력하기
    function getBenefiAmount(address _benefi) external view returns(uint){
        return beneficiary[_benefi].amount;
    }

    function test() public pure returns(string memory){
        return "test";
    }
}