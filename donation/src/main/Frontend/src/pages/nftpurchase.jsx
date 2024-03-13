import { useEffect, useState } from "react";
import { NFT_CONTRACT_ADDRESS } from "../ABI/nftContractAddress";
import nftABI from "../ABI/nftABI.json";
import { ethers } from "ethers";
import axios from "axios";
import NftCard from "../components/NftCard";

const Nftpurchase = () => {
  const [metadataArr, setMetadataArr] = useState([]);

  const getSaleNFT = async () => {
    if (!window.ethereum) return;
    try {
      let provider = new ethers.BrowserProvider(window.ethereum);
      let signer = await provider.getSigner();
      let contract = new ethers.Contract(NFT_CONTRACT_ADDRESS, nftABI, signer);
      let metadata = [];
      for (let i = 1; i <= 4; i++) {
        let metadataURI = await contract.tokenURI(i);
        let response = await axios.get(metadataURI);
        metadata.push({ ...response.data, tokenID: i });
      }
      setMetadataArr(metadata);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSaleNFT();
  }, [NFT_CONTRACT_ADDRESS]);
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="border border-black p-4">
        <ul className="grid grid-cols-2 gap-4">
          {metadataArr?.map((v, i) => (
            <NftCard
              key={i}
              decription={v.decription}
              image={v.image}
              name={v.name}
              tokenId={v.tokenID}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nftpurchase;
