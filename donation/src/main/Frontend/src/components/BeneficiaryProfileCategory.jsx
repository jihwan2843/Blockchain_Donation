import { Link } from "react-router-dom";

const BeneficiaryProfileCategory = ({ email }) => {
  return (
    <div className="border border-black mt-20">
      <Link to="" className="bg-sky-100 mb-3 flex justify-center py-3 mt-3">
        내 정보
      </Link>
      <Link
        to="/applybeneficiary"
        className="bg-sky-100 mb-3 flex justify-center py-3"
        email={email}
      >
        수혜 신청하기
      </Link>
      <Link
        to="/registerwallet"
        className="bg-sky-100 mb-3 flex justify-center py-3"
      >
        지갑 주소 등록
      </Link>
    </div>
  );
};

export default BeneficiaryProfileCategory;
