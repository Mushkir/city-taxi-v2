import React from "react";
import TheNavBar from "../components/TheNavBar";
import { Outlet } from "react-router";
import TheFooter from "../components/home/TheFooter";

const TheGuestLayout = () => {
  return (
    <div>
      <TheNavBar />
      <main>
        <Outlet />
      </main>

      {/* <footer>
        <TheFooter />
      </footer> */}
    </div>
  );
};

export default TheGuestLayout;
