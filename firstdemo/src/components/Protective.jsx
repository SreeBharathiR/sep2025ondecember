import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Protective = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      return navigate("/login");
    }
  }, [isAuth, navigate]);
  return children;
};

export default Protective;
