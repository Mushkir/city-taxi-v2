import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Navigate, Outlet } from "react-router";

const ThePrivateRoute = () => {
  const currentUser = useSelector((state: RootState) => state?.user?.user);

  return currentUser ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ThePrivateRoute;
