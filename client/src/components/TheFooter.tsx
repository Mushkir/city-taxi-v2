import React from "react";
import { Link } from "react-router";

const TheFooter = () => {
  return (
    <div className="bg-yellow-500 py-5 px-2 sm:px-20 text-center">
      <p className=" font-semibold">
        Copyright&copy; - {new Date().getFullYear()} | Designed & Developed by:{" "}
        <Link
          className=" hover:text-gray-800 hover:underline transition-all"
          to={"https://github.com/Mushkir/city-taxi-v2"}
          target="_blank"
        >
          Mohamed Mushkir
        </Link>{" "}
        ❤️
      </p>
    </div>
  );
};

export default TheFooter;
