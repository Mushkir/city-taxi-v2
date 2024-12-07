import React from "react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { Link } from "react-router";

const TheFooterSection = () => {
  return (
    <div className="py-10 px-2 sm:px-20 bg-gray-950 flex justify-between w-full">
      <div className=" w-[33%]">
        <h3 className=" text-white font-semibold text-2xl">
          About City<span className=" text-yellow-500">Taxi</span>
        </h3>

        <p className=" text-white mt-1 text-justify">
          Meet City<span className=" text-yellow-500">Taxi</span> – your go-to
          for swift, safe rides! With a commitment to excellence, we offer
          seamless travel with a reliable fleet and professional drivers. Your
          journey, our priority. Choose us for a ride that exceeds expectations!
        </p>

        <div className="text-yellow-500 flex items-center gap-10 mt-5 text-lg">
          {/* Facebook */}
          <Link
            to={"/"}
            className="hover:text-yellow-600 transition-all hover:-translate-y-1"
          >
            <FaFacebookF />
          </Link>

          {/* WhatsApp */}
          <Link
            to={"/"}
            className="hover:text-yellow-600 transition-all hover:-translate-y-1"
          >
            <FaWhatsapp />
          </Link>

          {/* Instagram */}
          <Link
            to={"/"}
            className="hover:text-yellow-600 transition-all hover:-translate-y-1"
          >
            <IoLogoInstagram />
          </Link>

          {/* Twitter */}
          <Link
            to={"/"}
            className="hover:text-yellow-600 transition-all hover:-translate-y-1"
          >
            <FaXTwitter />
          </Link>
        </div>
      </div>

      <div className=" w-[33%]"></div>
    </div>
  );
};

export default TheFooterSection;
