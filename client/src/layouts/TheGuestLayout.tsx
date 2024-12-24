import React, { FunctionComponent, useEffect, useState } from "react";
import TheNavBar from "../components/TheNavBar";
import { Outlet } from "react-router";
import TheFooter from "../components/TheFooter";
import { ToastContainer } from "react-toastify";
import Context from "../context/context";
import type { RootState } from "../redux/store";
import apiEndPoint from "../common/apiEndPoint";
import { useDispatch, useSelector } from "react-redux";
import { setCountReservation } from "../redux/reservation/countReservationSlice";

const TheGuestLayout: FunctionComponent = () => {
  // const currentUser = useSelector((state: RootState) => state?.user?.user);
  const dispatch = useDispatch();

  // const [countOfReservations, setCountOfReservations] = useState(0);
  const [countOfReservations, setCountOfReservations] = useState<number>(0);

  const countReservations = async () => {
    try {
      const response = await fetch(apiEndPoint.countReservations.url, {
        method: apiEndPoint.countReservations.method,
        credentials: "include",
      });

      const respData = await response.json();
      if (respData?.status === 200 && !respData?.error) {
        // setCountOfReservations(respData?.count);
        dispatch(setCountReservation(respData?.count));
      }
      // console.log(respData);
    } catch (error) {
      console.error(error);
    }
  };

  // console.log(countOfReservations);

  useEffect(() => {
    countReservations();
  }, []);

  return (
    <div>
      <Context.Provider
        value={{
          countOfReservations,
          setCountOfReservations,
          countReservations,
        }}
      >
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
