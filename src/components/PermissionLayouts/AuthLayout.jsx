import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../Common/Loader";

const AuthLayout = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.authSlice?.status ?? false);

  useEffect(() => {
    if (authStatus === null) return; // Wait until authStatus is resolved

    if (authentication && !authStatus) {
      navigate("/login");
    } else if (!authentication && authStatus) {
      navigate("/");
    } else {
      setLoader(false);
    }
  }, [authStatus, authentication, navigate]);

  return loader ? <Loader text={"Authenticating..."} /> : <>{children}</>;
};

export default AuthLayout;
