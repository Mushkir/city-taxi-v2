import React, { useEffect, useState } from "react";
import TheReactHelmet from "../../components/TheReactHelmet";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { FaTrashCan } from "react-icons/fa6";
import apiEndPoint from "../../common/apiEndPoint";
import Reservation from "../../interface/reservation";
import { Link } from "react-router";
import dayjs from "dayjs";
import { setReservationId } from "../../redux/reservation/deleteReservation";
import TheConfirmationPopUp from "../../components/popups/TheConfirmationPopUp";

const TheTripLogPage = () => {
  let no: number = 1;

  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state?.user?.user);

  const [tripLog, setTripLog] = useState([]);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);

  const onCloseModal = () => {
    setOpenConfirmationModal(false);
  };

  const showEntireTripLog = async () => {
    try {
      const response = await fetch(apiEndPoint.showReservationHistory.url, {
        method: apiEndPoint.showReservationHistory.method,
        credentials: "include",
      });

      const respData = await response.json();
      if (respData?.status === 200 && !respData?.error) {
        setTripLog(respData?.data);
      }

      console.log(respData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteReservation = async (id: string) => {
    dispatch(setReservationId(id));
    setOpenConfirmationModal(true);
  };

  useEffect(() => {
    showEntireTripLog();
  }, []);

  return (
    <>
      <TheReactHelmet title={`${currentUser?.name}'s Trip Logs | City-Taxi`} />

      <div className="container">
        <h3 className=" text-center text-xl font-semibold text-gray-700 mt-10">
          Recent Taxi Fairs
        </h3>

        <div className="overflow-x-scroll no-scrollbar">
          <table className="table-auto mx-auto w-full mt-4">
            <thead className="border-b-2 border-slate-900">
              <tr className="bg-slate-400 border-2 border-slate-900 ">
                <th className="p-2">S.No</th>
                <th className="p-2">Reservation ID</th>
                <th className="p-2">Driver Name</th>
                <th className="p-2">Driver Contact No.</th>
                <th className="p-2">Pickup Location</th>
                <th className="p-2">Drop Location</th>
                <th className="p-2">Status</th>
                <th className="p-2">Date</th>
                <th className="p-2">Payment Process</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {tripLog.length > 0 ? (
                tripLog.map((log: Reservation) => {
                  return (
                    <tr
                      className="bg-slate-300 border-2 border-slate-900"
                      key={log?._id}
                    >
                      <td className="p-2 text-center border-r-2 border-slate-900">
                        #{no++}
                      </td>
                      <td className="p-2 text-center border-r-2 border-slate-900">
                        {log?._id}
                      </td>
                      <td className="p-2 text-center border-r-2 border-slate-900">
                        {log?.driverId?.name}
                      </td>
                      <td className="p-2 text-center border-r-2 border-slate-900">
                        <Link to={`tel:${log?.driverId?.phone}`}>
                          {" "}
                          {log?.driverId?.phone}{" "}
                        </Link>
                      </td>
                      <td className="p-2 text-center border-r-2 border-slate-900">
                        {log?.pickupLocation}
                      </td>
                      <td className="p-2 text-center border-r-2 border-slate-900">
                        {log?.dropLocation}
                      </td>
                      <td className="p-2 text-center capitalize border-r-2 border-slate-900">
                        {log?.status}
                      </td>
                      <td className="p-2 text-center border-r-2 border-slate-900">
                        {dayjs(log?.createdAt).format(
                          "dddd, MMMM D, YYYY h:mm A"
                        )}
                      </td>
                      <td className="p-2 text-center border-r-2 border-slate-900">
                        Pay
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div
                          onClick={() => handleDeleteReservation(log?._id)}
                          className="hover:-translate-y-1 block transition-all cursor-pointer"
                        >
                          <FaTrashCan />
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr></tr>
              )}
            </tbody>
          </table>
        </div>

        {openConfirmationModal && (
          <TheConfirmationPopUp
            content={
              "Are you sure you want to cancel this reservation. This action cannot be undone."
            }
            confirmation="Yes! Cancel Reservation"
            cancelation="No"
            onClose={onCloseModal}
          />
        )}
      </div>
    </>
  );
};

export default TheTripLogPage;
