import React from "react";
import taxiImg from "../../assets/img/taxi-img.png";

const TheIntroSection = () => {
  return (
    <div className=" bg-yellow-500 py-10 px-2 sm:px-20 md:flex justify-between items-center gap-10 mb-4">
      {/* Intro */}
      <div className="w-full md:w-2/4">
        <small className=" font-semibold">Best in City</small>
        <h3 className=" text-2xl font-semibold mt-1">
          Trusted Taxi Services in Sri Lanka 🇱🇰
        </h3>

        <p className=" mt-2 text-justify">
          "Step into a world of convenience and comfort! Greetings from your
          go-to City Taxi service. Ready to embark on a hassle-free journey
          through the heart of the city? Buckle up for a ride that blends style,
          efficiency, and local expertise. Your destination awaits – let's make
          every mile memorable together!"
        </p>
      </div>

      {/* Taxi pic */}
      <div className="w-full md:w-2/4">
        <img src={taxiImg} alt="Taxi image" />
      </div>
    </div>
  );
};

export default TheIntroSection;
