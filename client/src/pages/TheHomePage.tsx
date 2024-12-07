import React from "react";
import TheReactHelmet from "../components/TheReactHelmet";
import TheHeroSection from "../components/home/TheHeroSection";
import TheIntroSection from "../components/home/TheIntroSection";

const TheHomePage = () => {
  return (
    <div>
      <TheReactHelmet title={"City Taxi"} />
      <div className="mt-[6rem] background-gradient-image w-full min-h-[80vh] flex justify-center items-center">
        <TheHeroSection />
      </div>

      <TheIntroSection />
    </div>
  );
};

export default TheHomePage;
