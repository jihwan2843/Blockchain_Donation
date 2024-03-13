import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import BeneficiaryTeenListCard from "../components/BeneficiaryTeenListCard";

const BeneficiaryTeen = () => {
  const [benewallet, setBenewallet] = useState([]);
  const { email } = useOutletContext();

  useEffect(() => {
    axios({
      method: "post",
      url: "/api/getBeneficiaryList",
      data: {
        type: "teen",
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
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
          <BeneficiaryTeenListCard key={i} wallet={v.benefiwalletaddr} />
        ))}
      </div>
    </div>
  );
};
export default BeneficiaryTeen;
