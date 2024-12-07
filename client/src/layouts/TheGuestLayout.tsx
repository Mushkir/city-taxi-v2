import React from "react";
import TheNavBar from "../components/TheNavBar";
import { Outlet } from "react-router";

const TheGuestLayout = () => {
  return (
    <div>
      <TheNavBar />
      <Outlet />
    </div>
  );
};

export default TheGuestLayout;
