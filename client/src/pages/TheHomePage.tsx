import React from "react";
import TheReactHelmet from "../components/TheReactHelmet";
import TheHeroSection from "../components/home/TheHeroSection";

const TheHomePage = () => {
  return (
    <div className="mt-[6rem] background-gradient-image w-full min-h-[80vh] flex justify-center items-center">
      <TheReactHelmet title={"City Taxi"} />

      <TheHeroSection />
    </div>
  );
};

export default TheHomePage;
