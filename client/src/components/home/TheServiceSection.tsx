import React from "react";
import { FaTaxi } from "react-icons/fa6";
import { GiTrophyCup } from "react-icons/gi";

const TheServiceSection = () => {
  return (
    <div className=" mb-4 container mx-auto py-10 px-2 sm:px-10">
      <h3 className=" text-2xl font-semibold text-center mt-10">
        We do best than you wish
      </h3>

      <div className="sm:flex justify-center gap-10 space-y-5 sm:space-y-0 sm:px-8 mt-10">
        <div className="bg-slate-100 p-8 border border-gray-400 sm:w-[45%] rounded flex items-start gap-4">
          <div className=" bg-yellow-500 p-4 rounded-full">
            <FaTaxi />
          </div>

          <div>
            <h4 className=" text-lg font-semibold">Quick Pickup</h4>
            <p className=" mt-2">
              Fast, reliable, and just a tap away! Conveniently located around
              the city, we're ready to get you where you need to be, pronto.
              Tap, ride, and go with us!
            </p>
          </div>
        </div>

        <div className="bg-slate-100 p-8 border border-gray-400 sm:w-[45%] rounded flex items-start gap-4">
          <div className=" bg-yellow-500 p-4 rounded-full">
            <GiTrophyCup />
          </div>

          <div>
            <h4 className=" text-lg font-semibold">Fast Booking</h4>
            <p className=" mt-2">
              Swift bookings, seamless rides! With our taxi service, booking a
              ride is as quick as a tap. Experience instant reservations,
              hassle-free scheduling, and prompt pickups. Your journey starts
              with a click – book fast, ride faster
            </p>
          </div>
        </div>
      </div>

      <div className="sm:flex justify-center gap-10 space-y-5 sm:space-y-0 sm:px-8 mt-5 sm:mt-10">
        <div className="bg-slate-100 p-8 border border-gray-400 sm:w-[45%] rounded flex items-start gap-4">
          <div className=" bg-yellow-500 p-4 rounded-full">
            <FaTaxi />
          </div>

          <div>
            <h4 className=" text-lg font-semibold">Quick Pickup</h4>
            <p className=" mt-2">
              Fast, reliable, and just a tap away! Conveniently located around
              the city, we're ready to get you where you need to be, pronto.
              Tap, ride, and go with us!
            </p>
          </div>
        </div>

        <div className="bg-slate-100 p-8 border border-gray-400 sm:w-[45%] rounded flex items-start gap-4">
          <div className=" bg-yellow-500 p-4 rounded-full">
            <GiTrophyCup />
          </div>

          <div>
            <h4 className=" text-lg font-semibold">Fast Booking</h4>
            <p className=" mt-2">
              Swift bookings, seamless rides! With our taxi service, booking a
              ride is as quick as a tap. Experience instant reservations,
              hassle-free scheduling, and prompt pickups. Your journey starts
              with a click – book fast, ride faster
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheServiceSection;
