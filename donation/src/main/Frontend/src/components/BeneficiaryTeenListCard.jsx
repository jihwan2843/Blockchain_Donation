import { useEffect, useState } from "react";
import { useSDK } from "@metamask/sdk-react";
import { ethers } from "ethers";
import donationABI from "../ABI/donationABI.json";
import DONATION_CONTRACT_ADDRESS from "../ABI/contractAddress";

const BeneficiaryTeenListCard = ({ wallet }) => {
  const [amount, setAmount] = useState();
  const { sdk } = useSDK();
  const [currentAmount, setCurrentAmount] = useState(0);

  useEffect(() => {
    const getBeneficiaryAmount = async () => {
      let provider;
      let signer;
      try {
        await sdk?.connect();
        provider = new ethers.BrowserProvider(window.ethereum);
        signer = await provider.getSigner();
        let contract = new ethers.Contract(
          DONATION_CONTRACT_ADDRESS,
          donationABI,
          signer
        );
        setCurrentAmount(await contract.getBenefiAmount());
      } catch (error) {
        console.error(error);
      }
    };
    getBeneficiaryAmount();
  }, [currentAmount]);

  const onSubmitSend = async (e) => {
    e.preventDefault();
    let provider;
    let signer;
    try {
      if (!window.ethereum) return;
      await sdk?.connect();
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      let contract = new ethers.Contract(
        DONATION_CONTRACT_ADDRESS,
        donationABI,
        signer
      );
      // 실험할때 주석 풀기
      //await contract.donate(value, wallet);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-blue-100">
      <div>
        {wallet.substring(0, 5)}...{wallet.substring(wallet.length - 5)}
      </div>
      <div>
        우리들의 미래인 아이들의 건강한 성장을 위해 진심 어린 따듯한 응원을
        전달해주세요
      </div>
      <div>현재 기부 현황 : {(currentAmount / 2000000) * 100}%</div>
      <form onSubmit={onSubmitSend}>
        <input type="text" onChange={(e) => setAmount(e.target.value)}></input>
        <input type="submit" value="후원하기"></input>
      </form>
    </div>
  );
};

export default BeneficiaryTeenListCard;
