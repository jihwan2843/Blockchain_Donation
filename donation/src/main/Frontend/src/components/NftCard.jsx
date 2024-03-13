import { useState } from "react";
import { ethers } from "ethers";
import { NFT_CONTRACT_ADDRESS } from "../ABI/nftContractAddress";
import nftABI from "../ABI/nftABI.json";
import { useSDK } from "@metamask/sdk-react";

const NftCard = ({ decription, image, name, tokenId }) => {
  const [amount, setAmount] = useState();
  const { sdk } = useSDK();

  const onSubmitPurchase = async (e) => {
    e.preventDefault();
    if (amount != 0.01) return;
    try {
      let accounts = await sdk?.connect();

      let provider = new ethers.BrowserProvider(window.ethereum);
      let signer = await provider.getSigner();
      let contract = new ethers.Contract(NFT_CONTRACT_ADDRESS, nftABI, signer);

      let owner = await contract.ownerOf(Number(tokenId));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="bg-green-100 p-3">
      <ul>{name}</ul>
      <img src={image} alt={name} width="250" />
      <ul>
        자립을 앞둔 청년들, 자립준비청년들이 꿈을꿀 수 있도록 응원해 주세요
      </ul>
      <ul>가격 : 1000 DONE</ul>
      <form onSubmit={onSubmitPurchase}>
        <input type="text" onChange={(e) => setAmount(e.target.value)} />
        <input type="submit" value="구매하기" />
      </form>
    </div>
  );
};

export default NftCard;
