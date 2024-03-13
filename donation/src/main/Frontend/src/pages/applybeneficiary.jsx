import BeneficiaryProfileCategory from "../components/BeneficiaryProfileCategory";
import axios from "axios";
import { useOutletContext } from "react-router-dom";
import { DONATION_CONTRACT_ADDRESS } from "../ABI/contractAddress";
import donationABI from "../ABI/donationABI.json";
import { ethers } from "ethers";
import { useSDK } from "@metamask/sdk-react";

const Applybeneficiary = () => {
  const { email } = useOutletContext();
  const { sdk } = useSDK();

  const applyBeneficiaryOnContract = async (type) => {
    try {
      await sdk?.connect();
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(
        DONATION_CONTRACT_ADDRESS,
        donationABI,
        signer
      );
      contract.setBeneficiary(type);
    } catch (error) {
      console.error(error);
    }
  };

  const OnClickYouth = () => {
    axios({
      method: "post",
      url: "/api/BeneficiaryList",
      data: {
        email: email,
        type: "youth",
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.data == "Register success") {
          applyBeneficiaryOnContract("youth");
          alert(response.data);
        } else {
          alert("You have already registered");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const OnClickTeen = () => {
    axios({
      method: "post",
      url: "/api/BeneficiaryList",
      data: {
        email: email,
        type: "teen",
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.data == "Register success") {
          applyBeneficiaryOnContract("teen");
          alert(response.data);
        } else {
          alert("You have already registered");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-row min-h-screen">
      <div className="w-1/5">
        <BeneficiaryProfileCategory email={email} />
      </div>
      <div className="bg-yellow-100 w-4/5">
        <div className="border border-black min-h-screen mt-20 p-10 ml-2">
          <div
            className="bg-blue-100 border border-black w-32 text-center p-4 font-semibold rounded-xl"
            onClick={OnClickYouth}
          >
            자립 청년
          </div>
          <div
            className="bg-sky-100 border border-black mt-4 w-32 text-center p-4 font-semibold rounded-xl"
            onClick={OnClickTeen}
          >
            저소득층 청소년
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applybeneficiary;
