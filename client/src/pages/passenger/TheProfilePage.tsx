import React from "react";
import TheReactHelmet from "../../components/TheReactHelmet";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import TheProfileCard from "../../components/TheProfileCard";

const TheProfilePage = () => {
  const currentUser = useSelector((state: RootState) => state?.user?.user);

  return (
    <>
      <TheReactHelmet title={`${currentUser?.name}'s Profile | City-Taxi`} />

      <div className="container">
        <TheProfileCard userData={currentUser} />
      </div>
    </>
  );
};

export default TheProfilePage;
