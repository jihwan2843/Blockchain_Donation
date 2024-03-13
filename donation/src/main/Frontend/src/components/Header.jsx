import { Link, useNavigate } from "react-router-dom";

const Header = ({ isLogin, setIsLogin, email }) => {
  const navigate = useNavigate();

  const onClickLogout = () => {
    setIsLogin(false);
    alert("로그아웃 되었습니다.");
    navigate("/login");
  };

  return (
    <div className="bg-pink-300 h-16 flex">
      <div className="bg-blue-100 w-4/5 flex flex-row items-center">
        <Link to="/" className="border border-black mx-2 px-4">
          로고
        </Link>
        <div className="flex flex-row gap-8 bg-yellow-100">
          <Link to="/domesticdonation">후원하기</Link>
          {isLogin ? (
            <Link to="/nftpurchase">NFT 구매하기</Link>
          ) : (
            <button onClick={() => alert("로그인을 해주세요")}>
              NFT 구매하기
            </button>
          )}
        </div>
      </div>
      <div className="bg-green-100 w-1/5 flex flex-row items-center pl-4">
        {isLogin ? (
          <div className="border border-black mr-3" onClick={onClickLogout}>
            로그아웃
          </div>
        ) : (
          <Link to="/login" className="border border-black mr-3">
            로그인
          </Link>
        )}
        {isLogin ? (
          <Link
            to="/myprofile"
            className="border border-black ml-3"
            email={email}
          >
            MyProfile
          </Link>
        ) : (
          <div
            className="border border-black ml-3"
            onClick={() => alert("로그인을 해주세요")}
          >
            MyProfile
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
