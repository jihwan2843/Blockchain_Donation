import { Link } from "react-router-dom";

const MyprofileCategory = () => {
  return (
    <div className="border border-black mt-20">
      <Link
        to="/myInfo"
        className="bg-sky-100 mb-3 flex justify-center py-3 mt-3"
      >
        내 정보
      </Link>
      <Link
        to="/mydonationlist"
        className="bg-sky-100 mb-3 flex justify-center py-3"
      >
        나의 후원 내역
      </Link>
      <div className="bg-sky-100 mb-3 flex justify-center py-3">
        후원 영수증
      </div>
      <Link
        to="/registerwallet"
        className="bg-sky-100 mb-3 flex justify-center py-3"
      >
        지갑 주소 등록
      </Link>
    </div>
  );
};

export default MyprofileCategory;
