import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

const Layout = ({ isLogin, setIsLogin, email }) => {
  const [isBeneficiary, setIsBeneficiary] = useState(false);

  return (
    <div className="bg-red-100 min-h-screen">
      <Header
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        email={email}
        context={{ isBeneficiary }}
      />
      <Outlet context={{ isBeneficiary, setIsBeneficiary, email }} />
    </div>
  );
};

export default Layout;
