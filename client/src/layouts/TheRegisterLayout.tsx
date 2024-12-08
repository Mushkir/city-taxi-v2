import React from "react";
import TheNavBar from "../components/TheNavBar";
import TheFooter from "../components/TheFooter";
import { NavLink, Outlet } from "react-router";

const TheRegisterLayout = () => {
  return (
    <div>
      <TheNavBar />
      <main className="min-h-screen pt-[7rem]">
        <div
          className=" w-full text-lg text-gray-900 max-w-lg mx-auto mt-7 flex justify-center items-center bg-gray-300 rounded overflow-hidden"
          id="registerContainer"
        >
          {/* Driver */}
          <NavLink to={"driver"} className=" p-3 w-full text-center">
            Driver
          </NavLink>

          {/* Passenger */}
          <NavLink to={"passenger"} className="p-3 w-full text-center ">
            Passenger
          </NavLink>
        </div>

        <Outlet />
      </main>

      <footer>
        <TheFooter />
      </footer>
    </div>
  );
};

export default TheRegisterLayout;
