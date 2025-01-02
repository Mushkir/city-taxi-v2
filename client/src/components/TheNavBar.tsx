import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import TheProfileImageView from "./TheProfileImageView";
import apiEndPoint from "../common/apiEndPoint";
import { userLogout } from "../redux/user/userSlice";
import Context from "../context/context";

const TheNavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const { noOfNewReservationRequest } = useContext(Context);

  const dispatch = useDispatch();

  const currentUser = useSelector((state: RootState) => state?.user?.user);
  const countReservations = useSelector(
    (state: RootState) => state?.countReservation?.count
  );

  const handleOpenNavMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(apiEndPoint.logout.url, {
        credentials: "include",
        method: apiEndPoint.logout.method,
      });
      const respData = await response.json();
      if (respData?.status === 200) {
        dispatch(userLogout());
        navigate("/");
      }
      console.log(respData?.status);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="bg-white mx-auto fixed top-0 left-0 right-0 w-full z-40">
      <header className="flex items-center justify-between px-2 sm:px-10 lg:px-20 py-5 relative">
        <Link
          to={"/"}
          className="text-4xl font-semibold bg-yellow-500 p-2 rounded"
        >
          City<span className=" text-gray-50">Taxi</span>
        </Link>

        <div
          className=" md:hidden text-3xl text-yellow-700"
          onClick={() => handleOpenNavMenu()}
        >
          {isOpen ? <MdOutlineClose /> : <IoMdMenu />}
        </div>

        <ul className="hidden md:flex gap-5">
          {/* Home */}
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>

          {/* Pick a driver / New Requests */}
          <li>
            {currentUser?.role === "passenger" ? (
              <NavLink to={"/drivers"}>Pick a Driver</NavLink>
            ) : currentUser?.role === "driver" ? (
              <NavLink to={"/new-reservation"}>
                New Requests
                {noOfNewReservationRequest > 0 && (
                  <sup className="bg-yellow-500 px-1 rounded-full text-black">
                    {noOfNewReservationRequest}
                  </sup>
                )}
              </NavLink>
            ) : (
              <li>
                <NavLink to={"/drivers"}>Pick a Driver</NavLink>
              </li>
            )}
          </li>

          <li>
            {currentUser?.role === "passenger" && (
              <NavLink to={"/reservations"}>
                Reservations{" "}
                <sup className="bg-yellow-500 px-1 rounded-full text-black">
                  {countReservations !== undefined
                    ? countReservations.toString()
                    : "0"}
                </sup>
              </NavLink>
            )}
          </li>

          {/* Profile Picture */}
          <li>
            <div className="w-10 h-10">
              {currentUser?.role === "passenger" ? (
                <Link to={"/passenger-dashboard"} className="w-full h-full">
                  <TheProfileImageView image={currentUser?.profileImage} />
                </Link>
              ) : currentUser?.role === "driver" ? (
                <Link to={"/driver-dashboard"} className="w-full h-full">
                  <TheProfileImageView image={currentUser?.profileImg} />
                </Link>
              ) : (
                ""
              )}
            </div>
          </li>

          {/* Login & Logout button */}
          <li>
            {currentUser?._id ? (
              <button
                onClick={handleLogout}
                className="border bg-yellow-500 w-10 h-10 text-3xl flex justify-center items-center rounded-full hover:bg-yellow-600 hover:text-white transition-all"
              >
                <IoMdLogOut />
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="border bg-yellow-500 px-5 py-1.5 rounded hover:bg-yellow-600 hover:text-white transition-all"
              >
                Login
              </button>
            )}
          </li>

          {/* Register button */}
          <li>
            {!currentUser?._id && (
              <button
                onClick={() => {
                  navigate("/register/driver");
                }}
                className=" border border-yellow-500 px-5 py-1.5 rounded hover:bg-yellow-600 hover:text-white transition-all"
              >
                Register
              </button>
            )}
          </li>
        </ul>

        {/* Mobile version */}
        {isOpen && (
          <ul className="md:hidden absolute bg-white w-full top-[6rem] left-0 right-0 flex flex-col justify-center items-end px-3 sm:px-10 pb-4 space-y-5">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>

            <li>
              {currentUser?.role !== "driver" && (
                <NavLink to={"drivers"}>Pick a Driver</NavLink>
              )}
            </li>

            <li>
              {currentUser?._id && (
                <div className="w-10 h-10">
                  <Link to={"/"} className="w-full h-full">
                    <TheProfileImageView image={currentUser?.profileImage} />
                  </Link>
                </div>
              )}
            </li>

            <li>
              {currentUser?._id ? (
                <button
                  onClick={handleLogout}
                  className="border bg-yellow-500 w-10 h-10 text-3xl flex justify-center items-center rounded-full hover:bg-yellow-600 hover:text-white transition-all"
                >
                  <IoMdLogOut />
                </button>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="border bg-yellow-500 px-5 py-1.5 rounded hover:bg-yellow-600 hover:text-white transition-all"
                >
                  Login
                </button>
              )}
            </li>
            <li>
              {!currentUser?._id && (
                <button
                  onClick={() => {
                    navigate("/register/driver");
                  }}
                  className=" border border-yellow-500 px-5 py-1.5 rounded hover:bg-yellow-600 hover:text-white transition-all"
                >
                  Register
                </button>
              )}
            </li>
          </ul>
        )}
      </header>
    </nav>
  );
};

export default TheNavBar;
