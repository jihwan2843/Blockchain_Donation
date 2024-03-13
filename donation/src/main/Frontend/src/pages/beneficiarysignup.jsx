import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Beneficiarysignup = () => {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  /*const [ssn1, setSsn1] = useState();
  const [ssn2, setSsn2] = useState();*/
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const onSubmitBeneSignup = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "/api/BeneficialySignup",
      data: {
        beneEmail: email,
        benePasswd: passwd,
        beneName: name,
        benePhone: phone,
        beneAddress: address,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        alert(response.data);
        navigate("/beneficiarylogin");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center mx-auto">
      <div className="bg-yellow-100 border border-black w-[500px] h-[800px]">
        <div className="bg-blue-100 h-1/6 flex justify-center items-center font-semibold text-2xl">
          수혜자 회원가입
        </div>
        <form
          onSubmit={onSubmitBeneSignup}
          className="h-5/6 flex flex-col justify-center p-4 "
        >
          <div className="bg-red-300 mt-3 p-4">
            <h3>Email</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="bg-green-300 mt-3 p-4">
            <h3>Password</h3>
            <input
              type="password"
              value={passwd}
              onChange={(e) => setPasswd(e.target.value)}
            ></input>
          </div>
          <div className="bg-green-300 mt-3 p-4">
            <h3>Name</h3>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="bg-green-300 mt-3 p-4">
            <h3>핸드폰</h3>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></input>
          </div>
          {/*
          <div className="bg-green-300 mt-3 p-4">
            <h3>주민등록번호</h3>
            <input
              type="text"
              value={ssn1}
              onChange={(e) => setSsn1(e.target.value)}
            ></input>{" "}
            -{" "}
            <input
              type="password"
              value={ssn2}
              onChange={(e) => setSsn2(e.target.value)}
            ></input>
          </div>
            */}
          <div className="bg-green-300 mt-3 p-4">
            <h3>주소</h3>
            <input
              className="w-full"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-row items-center p-2">
            <input
              className="bg-purple-100 mt-4 left-1 p-3 mr-3"
              type="submit"
              value="Sign up"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Beneficiarysignup;
