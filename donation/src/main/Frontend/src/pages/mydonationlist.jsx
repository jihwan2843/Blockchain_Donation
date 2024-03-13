import { useEffect, useState } from "react";
import MyprofileCategory from "../components/MyprofileCategory";
import axios from "axios";
import MyDonationListChart from "../components/MyDonationListChart";

const Mydonationlist = ({ email }) => {
  const [myDonationList, setMyDonationList] = useState([]);
  useEffect(() => {
    axios({
      method: "post",
      url: "/api/myDonationList",
      data: {
        email: email,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setMyDonationList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [email]);

  return (
    <div className="flex flex-row min-h-screen">
      <div className="w-1/5">
        <MyprofileCategory />
      </div>
      <div className="bg-yellow-100 w-4/5">
        <div className="border border-black min-h-screen mt-20 ml-2 flex justify-center items-center">
          <table className="bg-blue-100 border border-black">
            <tr>
              <th>No</th>
              <th>후원종류</th>
              <th>납부일</th>
              <th>후원금액</th>
            </tr>
            {myDonationList?.map((v, i) => (
              <MyDonationListChart
                key={i}
                no={i + 1}
                type={v.donationtype}
                date={v.donationdate}
                amount={v.donationamount}
              />
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};
export default Mydonationlist;
