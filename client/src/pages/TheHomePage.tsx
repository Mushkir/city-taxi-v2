import React from "react";
import TheReactHelmet from "../components/TheReactHelmet";

const TheHomePage = () => {
  return (
    <div className="mt-[6rem] min-h-screen bg-yellow-500">
      <TheReactHelmet title={"City Taxi"} />
      <h1>Welcome to City Taxi</h1>
    </div>
  );
};

export default TheHomePage;
