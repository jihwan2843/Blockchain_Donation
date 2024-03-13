import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = ({ email, setEmail, setIsLogin }) => {
  const [passwd, setPasswd] = useState();

  const navigate = useNavigate();

  const onSubmitLogin = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "/api/LoginFromReact",
      data: {
        email: email,
        password: passwd,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.data === "Login Failure") {
          alert("아이디와 비밀번호가 틀렸습니다. 다시 시도해주세요");
        } else {
          alert(response.data);
          setIsLogin(true);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center mx-auto">
      <div className="bg-yellow-100 border border-black w-[500px] h-[600px]">
        <div className="bg-blue-100 h-1/6 flex justify-center items-center font-semibold text-2xl">
          로그인
        </div>
        <form
          className="h-5/6 flex flex-col justify-center p-4"
          onSubmit={onSubmitLogin}
        >
          <div className="bg-red-300 mb-4 p-4">
            <h3>Email</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="bg-green-300 mt-4 p-4">
            <h3>Password</h3>
            <input
              type="password"
              value={passwd}
              onChange={(e) => setPasswd(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-row items-center p-2">
            <input
              className="bg-purple-100 mt-4 left-1 p-3 mr-3"
              type="submit"
              value="Login"
            />
            <Link to="/signup" className="bg-sky-300 mt-4 p-3">
              Sign up
            </Link>
          </div>

          <Link
            to="/beneficiarylogin"
            className="bg-blue-300 ml-2 mt-6 p-3 text-center"
          >
            수혜자 로그인
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
