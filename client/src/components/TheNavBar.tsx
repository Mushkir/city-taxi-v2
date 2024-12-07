import React from "react";
import { Link, NavLink } from "react-router";

const TheNavBar = () => {
  return (
    <React.Fragment>
      <nav>
        <header className="bg-white flex items-center justify-between px-20 py-5">
          <Link
            to={"/"}
            className="text-4xl font-semibold bg-yellow-500 p-2 rounded"
          >
            City<span className=" text-gray-50">Taxi</span>
          </Link>

          <ul className=" flex gap-5">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <Link to={"drivers"}>Pick a Driver</Link>
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
        </header>
      </nav>
    </React.Fragment>
  );
};

export default TheNavBar;
