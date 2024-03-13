import { Link } from "react-router-dom";

const Domesticdonation = ({ isLogin }) => {
  return (
    <div className="bg-pink-100 min-h-screen flex items-center">
      <div className="border border-black w-full h-[500px] p-3 flex justify-center items-center">
        {isLogin ? (
          <>
            <button className="border border-black p-8 mr-10">
              <Link to="/beneficiaryYouth">자립준비청년 후원하기</Link>
            </button>
            <button className="border border-black p-8 ml-10">
              <Link to="/beneficiaryTeen">저소득 청소년 후원하기</Link>
            </button>
          </>
        ) : (
          <>
            <button
              className="border border-black p-8 mr-10"
              onClick={() => alert("로그인을 해주세요")}
            >
              자립준비청년 후원하기
            </button>
            <button
              className="border border-black p-8 ml-10"
              onClick={() => alert("로그인을 해주세요")}
            >
              저소득 청소년 후원하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default Domesticdonation;
