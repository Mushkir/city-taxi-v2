import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";

const TheNavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenNavMenu = () => {
    setIsOpen(!isOpen);
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

        <ul className="hidden md:flex gap-5 ">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"drivers"}>Pick a Driver</NavLink>
          </li>
          <li>
            <button
              onClick={() => navigate("/login")}
              className="border bg-yellow-500 px-5 py-1.5 rounded hover:bg-yellow-600 hover:text-white transition-all"
            >
              Login
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/register/driver");
              }}
              className=" border border-yellow-500 px-5 py-1.5 rounded hover:bg-yellow-600 hover:text-white transition-all"
            >
              Register
            </button>
          </li>
        </ul>

        {/* Mobile version */}
        {isOpen && (
          <ul className="md:hidden absolute bg-white w-full top-[6rem] left-0 right-0 flex flex-col justify-center items-end px-3 sm:px-10 pb-4 space-y-5">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"drivers"}>Pick a Driver</NavLink>
            </li>
            <li>
              <button className="border bg-yellow-500 px-5 py-1.5 rounded hover:bg-yellow-600 hover:text-white transition-all">
                Login
              </button>
            </li>
            <li>
              <button className=" border border-yellow-500 px-5 py-1.5 rounded hover:bg-yellow-600 hover:text-white transition-all">
                Register
              </button>
            </li>
          </ul>
        )}
      </header>
    </nav>
  );
};

export default TheNavBar;
