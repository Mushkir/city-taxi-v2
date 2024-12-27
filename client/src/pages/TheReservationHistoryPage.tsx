import React, { useEffect, useState } from "react";
import TheNavBar from "../components/TheNavBar";
import TheReactHelmet from "../components/TheReactHelmet";
import apiEndPoint from "../common/apiEndPoint";
import Reservation from "../interface/reservation";
import { Link } from "react-router";
import dayjs from "dayjs";
import TheFooter from "../components/TheFooter";
import { FaTrashCan } from "react-icons/fa6";
import TheConfirmationPopUp from "../components/popups/TheConfirmationPopUp";
import { useDispatch } from "react-redux";
import { setReservationId } from "../redux/reservation/deleteReservation";

const TheReservationHistoryPage = () => {
  const dispatch = useDispatch();

  const [reservationData, setReservationData] = useState<Reservation[]>([]);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);

  let no: number = 1; // For serial number in table

  const getAllReservationDetails = async () => {
    try {
      const response = await fetch(apiEndPoint.showReservationHistory.url, {
        credentials: "include",
        method: apiEndPoint.showReservationHistory.method,
      });

      const respData = await response.json();
      if (respData?.status === 200 && !respData?.error) {
        setReservationData(respData?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onCloseModal = () => {
    setOpenConfirmationModal(false);
  };

  const handleDeleteReservation = async (id: string) => {
    dispatch(setReservationId(id));
    setOpenConfirmationModal(true);
  };

  useEffect(() => {
    getAllReservationDetails();
  }, []);

  return (
    <>
      <TheReactHelmet title="Reservations | City-Taxi" />
      <TheNavBar />

      <div className="wrapper px-10 min-h-screen">
        <div className="">
          <h3 className="text-2xl font-semibold text-center pt-10 text-yellow-700">
            Dear Mushkir! Here you can explore your whole trip log...
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
                {reservationData.length !== 0 ? (
                  reservationData.map((reservation: Reservation) => (
                    <tr
                      className="bg-slate-300 border-2 border-slate-900"
                      key={reservation?._id}
                    >
                      <td className="p-2 text-center border-r-2 border-slate-900">
                        #{no++}
                      </td>
                      <td className="p-2 text-center border-r-2 border-slate-900">
                        {reservation?._id}
                      </td>
                      <td className="p-2 text-center border-r-2 border-slate-900">
                        {reservation?.driverId?.name}
                      </td>
                      <td className="p-2 text-center border-r-2 border-slate-900">
                        <Link to={`tel:${reservation?.driverId?.phone}`}>
                          {reservation?.driverId?.phone}
                        </Link>
                      </td>
                      <td className="p-2 text-center border-r-2 border-slate-900">
                        {reservation?.pickupLocation}
                      </td>
                      <td className="p-2 text-center border-r-2 border-slate-900">
                        {reservation?.dropLocation}
                      </td>
                      <td className="p-2 text-center capitalize border-r-2 border-slate-900">
                        {reservation?.status}
                      </td>
                      <td className="p-2 text-center border-r-2 border-slate-900">
                        {dayjs(reservation?.createdAt).format(
                          "dddd, MMMM D, YYYY h:mm A"
                        )}
                      </td>
                      <td className="p-2 text-center border-r-2 border-slate-900">
                        Pay
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div
                          onClick={() =>
                            handleDeleteReservation(reservation?._id)
                          }
                          className="hover:-translate-y-1 block transition-all cursor-pointer"
                        >
                          <FaTrashCan />
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="bg-slate-300 col-span-10"></tr>
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
      </div>

      <TheFooter />
    </>
  );
};

export default TheReservationHistoryPage;
