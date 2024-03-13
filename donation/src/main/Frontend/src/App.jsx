import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Myprofile from "./pages/myprofile";
import Registerwallet from "./pages/registerwallet";
import Mydonationlist from "./pages/mydonationlist";
import Domesticdonation from "./pages/domesticdonation";
import Internationaldonation from "./pages/internationaldonation";
import MyInfo from "./pages/myInfo";
import { useState } from "react";
import Beneficiarysignup from "./pages/beneficiarysignup";
import Beneficiarylogin from "./pages/beneficiarylogin";
import Applybeneficiary from "./pages/applybeneficiary";
import BeneficiaryYouth from "./pages/beneficiaryyouth";
import BeneficiaryTeen from "./pages/beneficiaryteen";
import Nftpurchase from "./pages/nftpurchase";

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout isLogin={isLogin} setIsLogin={setIsLogin} email={email} />
          }
        >
          <Route path="/" />
          <Route
            path="/login"
            element={
              <Login
                setIsLogin={setIsLogin}
                email={email}
                setEmail={setEmail}
              />
            }
          />
          <Route
            path="/signup"
            element={<Signup email={email} setEmail={setEmail} />}
          />
          <Route path="/myprofile" element={<Myprofile />} />
          <Route path="/myInfo" element={<MyInfo email={email} />} />
          <Route
            path="/registerwallet"
            element={<Registerwallet email={email} />}
          />
          <Route
            path="/mydonationlist"
            element={<Mydonationlist email={email} />}
          />
          <Route
            path="/domesticdonation"
            element={<Domesticdonation isLogin={isLogin} />}
          />
          <Route path="/international" element={<Internationaldonation />} />
          <Route path="/beneficiaryYouth" element={<BeneficiaryYouth />} />
          <Route path="/beneficiaryTeen" element={<BeneficiaryTeen />} />
          <Route path="/beneficiarysignup" element={<Beneficiarysignup />} />
          <Route path="/nftpurchase" element={<Nftpurchase />} />
          <Route path="/applybeneficiary" element={<Applybeneficiary />} />
          <Route
            path="/beneficiarylogin"
            element={
              <Beneficiarylogin
                setIsLogin={setIsLogin}
                email={email}
                setEmail={setEmail}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
