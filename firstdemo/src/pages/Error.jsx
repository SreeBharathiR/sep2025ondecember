import React from "react";
import { Link } from "react-router-dom";
import "./Error.css";
const Error = () => {
  return (
    <div>
      Error Page!!
      <br></br>
      <Link to="/">Go to home</Link>
    </div>
  );
};

export default Error;
