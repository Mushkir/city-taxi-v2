import React from "react";
import TheReactHelmet from "../../components/TheReactHelmet";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const TheDashboardSummaryPage = () => {
  const passengerData = useSelector((state: RootState) => state?.user?.user);

  return (
    <div>
      <TheReactHelmet
        title={`${passengerData?.name}'s Dashboard Summary | City-Taxi`}
      />
      TheDashboardSummaryPage
    </div>
  );
};

export default TheDashboardSummaryPage;
