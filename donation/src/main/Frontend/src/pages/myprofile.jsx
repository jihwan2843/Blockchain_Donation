import { useOutletContext } from "react-router-dom";
import BeneficiaryProfileCategory from "../components/BeneficiaryProfileCategory";
import MyprofileCategory from "../components/MyprofileCategory";

const Myprofile = ({ email }) => {
  const { isBeneficiary } = useOutletContext();

  return (
    <div className="flex flex-row min-h-screen">
      <div className="w-1/5">
        {isBeneficiary ? (
          <BeneficiaryProfileCategory email={email} />
        ) : (
          <MyprofileCategory />
        )}
      </div>
      <div className="bg-yellow-100 w-4/5">
        <div className="border border-black min-h-screen mt-20 ml-2">
          rightasdfas
        </div>
      </div>
    </div>
  );
};
export default Myprofile;
