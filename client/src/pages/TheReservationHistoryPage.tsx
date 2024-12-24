import React, { useEffect } from "react";
import TheNavBar from "../components/TheNavBar";
import TheReactHelmet from "../components/TheReactHelmet";
import apiEndPoint from "../common/apiEndPoint";

const TheReservationHistoryPage = () => {
  const getAllReservationDetails = async () => {
    try {
      const response = await fetch(apiEndPoint.showReservationHistory.url, {
        credentials: "include",
        method: apiEndPoint.showReservationHistory.method,
      });

      const respData = await response.json();
      console.log(respData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllReservationDetails();
  }, []);

  return (
    <>
      <TheReactHelmet title="Reservations | City-Taxi" />
      <TheNavBar />

      <div className="wrapper px-5">
        <div className="container mx-auto">
          <h3 className="text-2xl font-semibold text-center pt-10 text-yellow-700">
            Dear Mushkir! Here you can explore your whole trip log...
          </h3>

          <table className="table-auto mx-auto w-full mt-4">
            <thead className="border-b-2 border-slate-900">
              <tr className="bg-slate-400 ">
                <th className="p-2">S.No</th>
                <th className="p-2">Reservation ID</th>
                <th className="p-2">Driver Name</th>
                <th className="p-2">Driver Contact No.</th>
                <th className="p-2">Pickup Location</th>
                <th className="p-2">Drop Location</th>
                <th className="p-2">Status</th>
                <th className="p-2">Date</th>
                <th className="p-2">Payment Process</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-slate-300">
                <td className="p-2 text-center">!!!</td>
                <td className="p-2 text-center">!!!</td>
                <td className="p-2 text-center">!!!</td>
                <td className="p-2 text-center">!!!</td>
                <td className="p-2 text-center">!!!</td>
                <td className="p-2 text-center">!!!</td>
                <td className="p-2 text-center">!!!</td>
                <td className="p-2 text-center">!!!</td>
                <td className="p-2 text-center">!!!</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TheReservationHistoryPage;
