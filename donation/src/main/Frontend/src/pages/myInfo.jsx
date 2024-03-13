import MyprofileCategory from "../components/MyprofileCategory";

const MyInfo = () => {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="w-1/5">
        <MyprofileCategory />
      </div>
      <div className="bg-yellow-100 w-4/5">
        <div className="border border-black min-h-screen mt-20 ml-2">
          <div className="bg-green-100 border-b">
            내 지갑 주소 : 0x51345623465134
          </div>
          <div className="bg-green-100 border-b">
            총 국내 후원한 금액 : 100000000원
          </div>
          <div className="bg-green-100 border-b">
            총 해외 후원한 금액 : 10000000원
          </div>
          <div className="bg-green-100 border-b">
            총 NFT 후원 금액 : 100000원
          </div>
          <div className="bg-green-100 border-b">
            총 후원한 금액 : 10000000000000000000000원
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyInfo;
