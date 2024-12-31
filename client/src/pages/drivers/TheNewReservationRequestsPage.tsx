import React, { useContext, useEffect, useState } from "react";
import TheNavBar from "../../components/TheNavBar";
import TheReactHelmet from "../../components/TheReactHelmet";
import TheFooter from "../../components/TheFooter";
import Context from "../../context/context";

// React icons
import { MdDone } from "react-icons/md";
import { BsFillTrash3Fill } from "react-icons/bs";
import apiEndPoint from "../../common/apiEndPoint";
import RequestsDetail from "../../interface/requestDetails";

const TheNewReservationRequestsPage = () => {
  let no = 1;
  const [requestsData, setRequestsData] = useState([]);

  const { countNewReservationRequest } = useContext(Context);
  // const context = useContext(Context);

  // console.log(context);

  const getNewRequestsDetail = async () => {
    try {
      const response = await fetch(apiEndPoint.getNewRequestsDetail.url, {
        credentials: "include",
        method: apiEndPoint.getNewRequestsDetail.method,
      });

      const respData = await response.json();
      if (!respData?.error && respData?.status === 200) {
        setRequestsData(respData?.data);
      }
      //   console.log(respData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAcceptRequest = async (id: string) => {
    try {
      const response = await fetch(apiEndPoint.acceptReservationRequest.url, {
        method: apiEndPoint.acceptReservationRequest.method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reservationId: id }),
      });

      const respData = await response.json();
      if (!respData?.error && respData?.status === 200) {
        getNewRequestsDetail();
        // Check if countNewReservationRequest is defined before calling it
        if (countNewReservationRequest) {
          countNewReservationRequest();
        }
      }
      console.log(respData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRejectRequest = (id: string) => {
    console.log(id);
  };

  useEffect(() => {
    getNewRequestsDetail();
  }, []);

  return (
    <>
      <TheReactHelmet title="New requests | City-Taxi" />

      <div className="wrapper min-h-screen px-2 sm:px-20">
        <h3 className=" font-semibold text-center text-xl block mt-[6em] text-gray-700">
          New Ride Requests
        </h3>

        <div className="relative mt-3 overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  S.No
                </th>
                <th scope="col" className="px-6 py-3">
                  Passenger name
                </th>
                <th scope="col" className="px-6 py-3">
                  Pickup location
                </th>
                <th scope="col" className="px-6 py-3">
                  Drop location
                </th>

                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {requestsData.length > 0 ? (
                requestsData.map((requestDetails: RequestsDetail) => (
                  <tr
                    key={requestDetails?._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4">#{no++}</td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {requestDetails?.passengerId?.name}
                    </th>

                    <td className="px-6 py-4">
                      {requestDetails?.pickupLocation}
                    </td>

                    <td className="px-6 py-4">
                      {requestDetails?.dropLocation}
                    </td>

                    <td className="px-6 py-4 text-right flex items-center gap-4">
                      {/* Accept button */}
                      <div
                        onClick={() => handleAcceptRequest(requestDetails?._id)}
                        className="cursor-pointer bg-green-500 text-white p-1 text-lg rounded-full hover:bg-green-600 transition-all"
                      >
                        <MdDone />
                      </div>

                      {/* Reject button */}
                      <div
                        onClick={() => handleRejectRequest(requestDetails?._id)}
                        className="cursor-pointer bg-red-500 text-white p-1 text-lg rounded-full hover:bg-red-600 transition-all"
                      >
                        <BsFillTrash3Fill />
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="">
                  <td
                    colSpan={5}
                    className="px-6 py-4 text-center text-red-500"
                  >
                    No new request found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <TheFooter />
    </>
  );
};

export default TheNewReservationRequestsPage;
