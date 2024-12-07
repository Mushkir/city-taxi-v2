import React from "react";
import { FaMobileScreen } from "react-icons/fa6";
import { Link } from "react-router";

const TheHeroSection = () => {
  return (
    <div>
      <h3 className="text-yellow-500 uppercase font-semibold text-lg md:text-3xl">
        Book your taxi now
      </h3>

      <Link
        to={"tel:+94777195282"}
        className=" flex items-center justify-center gap-1.5 text-white mt-2 text-balance md:text-xl"
      >
        <FaMobileScreen />
        +94 777195282
      </Link>
    </div>
  );
};

export default TheHeroSection;
