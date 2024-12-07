import React from "react";
import { Link } from "react-router";
import { FaMobileScreen } from "react-icons/fa6";

const TheContactSection = () => {
  return (
    <div className="bg-yellow-500 p-10">
      <h3 className=" text-xl text-center font-semibold">
        We are ready to take your call 24 hours, 07 days!
      </h3>
      <Link
        to={"/"}
        className="text-4xl flex items-center justify-center mt-3 font-bold"
      >
        {" "}
        <FaMobileScreen /> <span>+94777195282</span>
      </Link>
    </div>
  );
};

export default TheContactSection;
