import React, { FunctionComponent } from "react";
import TheNavBar from "../components/TheNavBar";
import { Outlet } from "react-router";
import TheFooter from "../components/TheFooter";
import { ToastContainer } from "react-toastify";
import Context from "../context/context";
import type { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const TheGuestLayout: FunctionComponent = () => {
  const currentUser = useSelector((state: RootState) => state?.user);

  return (
    <div>
      <Context.Provider value={{ currentUser }}>
        <TheNavBar />
        <main className="min-h-screen">
          <Outlet />
        </main>

        <footer>
          <TheFooter />
        </footer>
        <ToastContainer />
      </Context.Provider>
    </div>
  );
};

export default TheGuestLayout;
