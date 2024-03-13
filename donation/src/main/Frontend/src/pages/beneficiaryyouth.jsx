import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import BeneficiaryListCard from "../components/BeneficiaryListCard";

const BeneficiaryYouth = () => {
  const [benewallet, setBenewallet] = useState([]);
  const { email } = useOutletContext();

  useEffect(() => {
    axios({
      method: "post",
      url: "/api/getBeneficiaryList",
      data: {
        type: "youth",
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setBenewallet(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [email]);

  return (
    <div className="bg-pink-100 min-h-screen flex items-center">
      <div className="border border-black w-full h-[500px] grid grid-cols-3 gap-5 p-3">
        {benewallet?.map((v, i) => (
          <BeneficiaryListCard key={i} wallet={v.benefiwalletaddr} />
        ))}
      </div>
    </div>
  );
};

export default BeneficiaryYouth;
