import React from "react";
import TheNavBar from "../../components/TheNavBar";
import TheReactHelmet from "../../components/TheReactHelmet";
import TheFooter from "../../components/TheFooter";
import { Link } from "react-router";

// React icons
import { MdDone } from "react-icons/md";
import { BsFillTrash3Fill } from "react-icons/bs";

const TheNewReservationRequestsPage = () => {
  return (
    <>
      <TheReactHelmet title="New requests | City-Taxi" />
      <TheNavBar />

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
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">#1</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
                <td className="px-6 py-4">$2999</td>
                <td className="px-6 py-4 text-right flex items-center gap-4">
                  <Link
                    to={"/"}
                    className="bg-green-500 text-white p-1 text-lg rounded-full hover:bg-green-600 transition-all"
                  >
                    <MdDone />
                  </Link>
                  <Link
                    to={"/"}
                    className="bg-red-500 text-white p-1 text-lg rounded-full hover:bg-red-600 transition-all"
                  >
                    <BsFillTrash3Fill />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <TheFooter />
    </>
  );
};

export default TheNewReservationRequestsPage;
