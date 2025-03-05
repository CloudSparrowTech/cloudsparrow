import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Common/Loader";
import authService from "../../backend/auth";
import userService from "../../backend/user";
import { toast } from "react-toastify";

const AdminLayout = ({ children, role }) => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);

  const getRoleStatus = async () => {
    try {
      const currUser = await authService.getCurrUser();
      const userData = await userService.getUserById(currUser?._id);
      if (!role.includes(userData.permission)) {
        navigate("/notadmin");
      }
      setLoader(false);
    } catch (error) {
      toast(error.message);
    }
  };

  useEffect(() => {
    getRoleStatus();
  }, [navigate]);

  return loader ? <Loader text={"Authenticating..."} /> : <>{children}</>;
};

export default AdminLayout;
