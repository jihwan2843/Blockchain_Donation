import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = ({ email, setEmail }) => {
  const [passwd, setPasswd] = useState();

  const navigate = useNavigate();

  const onSubmitSignup = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "/api/SignupFromReact",
      data: {
        email: email,
        password: passwd,
      },
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        alert(response.data);
        setEmail("");
        setPasswd("");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center mx-auto">
      <div className="bg-yellow-100 border border-black w-[500px] h-[600px]">
        <div className="bg-blue-100 h-1/6 flex justify-center items-center font-semibold text-2xl">
          Sign up
        </div>
        <form
          className="h-5/6 flex flex-col justify-center p-4"
          onSubmit={onSubmitSignup}
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
              value="Sign up"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
