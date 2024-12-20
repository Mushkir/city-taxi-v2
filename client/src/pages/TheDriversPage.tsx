import React, { useEffect, useState } from "react";
import TheReactHelmet from "../components/TheReactHelmet";
import apiEndPoint from "../common/apiEndPoint";
import TheSkeletonLoading from "../components/TheSkeletonLoading";
import Driver from "../interface/driver";
import { Link, useNavigate } from "react-router";
import { TbSearch } from "react-icons/tb";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import TheReservationModal from "../components/TheReservationModal";
import { addReservationDriverId } from "../redux/reservation/reservationSlice";

const TheDriversPage = () => {
  const [availableDrivers, setAvailableDrivers] = useState<Driver[]>([]);
  const [loading, setLoading] = useState(false);
  const [openReservationModal, setOpenReservationModal] = useState(false);

  const closeReservationModal = () => {
    setOpenReservationModal(false);
  };

  const navigate = useNavigate();

  const currentUser = useSelector((state: RootState) => state?.user?.user);
  // console.log(currentUser);

  const dispatch = useDispatch();

  const getAllAvailableDrivers = async () => {
    try {
      setLoading(true);
      const response = await fetch(apiEndPoint.getAllDrivers.url, {
        method: apiEndPoint.getAllDrivers.method,
        credentials: "include",
      });

      setLoading(false);
      const respData = await response.json();
      if (!respData?.error) {
        setAvailableDrivers(respData?.data);
      }
      // console.log(respData?.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleReservation = (id: string) => {
    try {
      if (!currentUser) {
        navigate("/login");
        setTimeout(() => {
          toast.error("Please login to make a reservation");
        }, 200);
        return;
      } else {
        dispatch(addReservationDriverId(id));
        setOpenReservationModal(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllAvailableDrivers();
  }, []);

  return (
    <div className="pt-[6rem]">
      <TheReactHelmet title="Available drivers | City-Taxi" />
      <div>
        {/* <!-- Card Blog --> */}
        <div className="max-w-[70rem] container px-2 sm:px-10 mx-auto mb-5 mt-5">
          <form action="" method="post" className="relative mb-5">
            <input
              type="text"
              className=" w-full px-3 py-2 rounded-md"
              placeholder="Search..."
            />

            <div className=" absolute right-3 top-3">
              <TbSearch />
            </div>
          </form>

          <h3 className=" text-2xl text-center font-semibold mb-3">
            Available drivers
          </h3>
          {/* <!-- Grid --> */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* <!-- Card --> */}
            {loading ? (
              <TheSkeletonLoading
                listsToRender={6}
                content={
                  <div className="group flex flex-col h-full bg-white shadow-sm rounded-xl overflow-hidden  animate-pulse">
                    <div className="h-52 flex flex-col justify-center items-center bg-white rounded-t-xl">
                      <img
                        className="w-32 h-32 object-cover rounded-full border border-slate-200 bg-slate-200 animate-pulse"
                        // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlAaXJYEMzWUxt4tqcpZ5r3YjOkTDjwHePkA&s"
                        // alt={`image`}
                      />
                    </div>
                    <div className="p-4 md:p-6">
                      <div className=" flex items-center justify-between">
                        <h3 className="text-lg font-semibold bg-slate-200 p-3 w-[10rem] animate-pulse"></h3>

                        <span className=" bg-slate-200 p-3 w-24 rounded-full text-gray-200 text-sm animate-pulse"></span>
                      </div>
                      <p className="mt-3 text-gray-500 dark:text-neutral-500 bg-slate-200 p-5 rounded-md animate-pulse"></p>

                      {/* Contact No */}
                      <div className="mt-2">
                        <span className=" bg-slate-200 px-12 animate-pulse"></span>{" "}
                        &nbsp;
                        <span className="bg-slate-200 px-12 animate-pulse"></span>
                      </div>

                      <div className=" flex justify-between items-center">
                        {/* Start time */}
                        <div className="mt-2 mr-5">
                          <span className=" bg-slate-200 px-10 animate-pulse"></span>{" "}
                          &nbsp;
                          <span className="bg-slate-200 px-7 animate-pulse"></span>
                        </div>

                        {/* End time */}
                        <div className="mt-2">
                          <span className=" bg-slate-200 px-10 animate-pulse"></span>{" "}
                          &nbsp;
                          <span className="bg-slate-200 px-7 animate-pulse"></span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                      <button
                        type="button"
                        className="w-full py-6 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl animate-pulse"
                      ></button>
                    </div>
                  </div>
                }
              />
            ) : (
              availableDrivers.map((driver: Driver) => {
                return (
                  <div
                    key={driver?._id}
                    className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
                  >
                    <div className="h-52 flex flex-col justify-center items-center bg-amber-500 rounded-t-xl">
                      <img
                        className="w-32 h-32 rounded-full object-cover"
                        src={driver?.profileImg}
                        alt={`${driver?.name}'s image`}
                      />
                    </div>
                    <div className="p-4 md:p-6">
                      <div className=" flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-neutral-300 dark:hover:text-white">
                          {driver?.name}
                        </h3>

                        <span className=" bg-green-600 px-3 py-1 rounded-full text-gray-200 text-sm">
                          Available
                        </span>
                      </div>
                      <p className="mt-3 text-gray-500 dark:text-neutral-500">
                        📍 No. {driver?.address}, {driver?.city},{" "}
                        {driver?.country}.
                      </p>

                      {/* Contact No */}
                      <div className="mt-2">
                        <span className=" text-gray-300 font-semibold">
                          Contact No:
                        </span>{" "}
                        <Link
                          className=" text-gray-500"
                          to={`tel:${driver?.phone}`}
                        >
                          {driver?.phone}
                        </Link>
                      </div>

                      <div className=" flex justify-between items-center">
                        {/* Start time */}
                        <div className="mt-2">
                          <span className=" text-gray-300 font-semibold">
                            Start Time:
                          </span>{" "}
                          <span className=" text-gray-500">
                            {driver?.startTime}
                          </span>
                        </div>

                        {/* End time */}
                        <div className="mt-2">
                          <span className=" text-gray-300 font-semibold">
                            End Time:
                          </span>{" "}
                          <span className=" text-gray-500">
                            {driver?.endTime}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                      <button
                        type="button"
                        onClick={() => {
                          handleReservation(driver?._id);
                        }}
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      >
                        Reserve for Ride
                      </button>
                    </div>
                  </div>
                );
              })
            )}
            {/* <!-- End Card --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
        {/* <!-- End Card Blog --> */}
      </div>
      {openReservationModal && (
        <TheReservationModal onClose={closeReservationModal} />
      )}
    </div>
  );
};

export default TheDriversPage;
