import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { IoCloseSharp } from "react-icons/io5";
import TheReadOnlyLabel from "./TheReadOnlyLabel";

const TheReservationModal = () => {
  const currentUser = useSelector((state: RootState) => state?.user);
  const driverId = useSelector(
    (state: RootState) => state?.reservation?.driverId
  );

  const getSelectedDriverDetail = async () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSelectedDriverDetail();
  }, [driverId]);

  return (
    <div className="fixed w-full h-full top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-slate-200 bg-opacity-90">
      <div className="bg-black w-full max-w-lg rounded-md overflow-hidden">
        <div className="p-3 flex justify-between items-center">
          <h3 className="text-lg text-white font-semibold">
            The Taxi Fair Reservation
          </h3>

          <div className="text-white text-lg hover:bg-white hover:text-black rounded-full cursor-pointer transition-all">
            <IoCloseSharp />
          </div>
        </div>

        <form method="post" className=" p-3 mt-1 bg-yellow-600">
          <TheReadOnlyLabel
            name="name"
            label="Passenger Name"
            value={currentUser?.name}
          />

          {/* Passenger Contact no */}
          <TheReadOnlyLabel
            name="contactNo"
            label="Passenger Contact No:"
            value={currentUser?.phone}
          />

          {/* Pick up Location */}
          <TheReadOnlyLabel
            name="pickUpLocation"
            label="Pick-up Location"
            value=""
          />
        </form>
      </div>
    </div>
  );
};

export default TheReservationModal;
