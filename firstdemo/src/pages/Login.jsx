import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ name: "", pass: "" });
  //   const navigate = useNavigate();
  const handleLogin = () => {
    if (data.name.trim() === "" || data.pass.trim() === "") {
      console.log("Crediatials needed!!");
      return;
    }
    if (data.pass.length !== 8) {
      console.log("Invalid password");
      return;
    }
    // navigate("/");
    return <Navigate to="/"></Navigate>;
  };
  return (
    <div>
      <label>Username</label>
      <input
        type="text"
        onChange={(e) =>
          setData((prev) => {
            return { ...prev, name: e.target.value };
          })
        }
        value={data.name}
      ></input>
      <br></br>
      <label>Password</label>
      <input
        type="password"
        onChange={(e) =>
          setData((prev) => {
            return { ...prev, pass: e.target.value };
          })
        }
        value={data.pass}
      ></input>
      <br></br>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
