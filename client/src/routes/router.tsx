import React from "react";
import { Route, Routes } from "react-router";
import TheGuestLayout from "../layouts/TheGuestLayout";
import TheHomePage from "../pages/TheHomePage";
import TheDriversPage from "../pages/TheDriversPage";
import TheRegisterLayout from "../layouts/TheRegisterLayout";
import TheDriverSignUpPage from "../pages/TheDriverSignUpPage";
import ThePassengerSignUpPage from "../pages/ThePassengerSignUpPage";
import TheLoginPage from "../pages/TheLoginPage";
import ThePassengerDashboardLayout from "../layouts/ThePassengerDashboardLayout";
import ThePrivateRoute from "../components/ThePrivateRoute";
import TheReservationHistoryPage from "../pages/TheReservationHistoryPage";
import TheDriverDashboardLayout from "../layouts/TheDriverDashboardLayout";
import TheNewReservationRequestsPage from "../pages/drivers/TheNewReservationRequestsPage";
import TheDashboardSummaryPage from "../pages/passenger/TheDashboardSummaryPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<TheGuestLayout />}>
        <Route path="/" element={<TheHomePage />} />
        <Route path="/drivers" element={<TheDriversPage />} />
        <Route path="/login" element={<TheLoginPage />} />
      </Route>

      {/* Sign-up routes */}
      <Route path="register" element={<TheRegisterLayout />}>
        <Route path="driver" element={<TheDriverSignUpPage />} />
        <Route path="passenger" element={<ThePassengerSignUpPage />} />
      </Route>

      <Route path="*" element={<ThePrivateRoute />}>
        {/* Passenger profile dashboard route */}
        <Route
          path="passenger-dashboard"
          element={<ThePassengerDashboardLayout />}
        >
          <Route path="" element={<TheDashboardSummaryPage />} />
        </Route>

        {/* Driver profile dashboard route */}
        <Route path="driver-dashboard" element={<TheDriverDashboardLayout />} />

        <Route element={<TheGuestLayout />}>
          {/* Driver Route */}
          <Route
            path="new-reservation"
            element={<TheNewReservationRequestsPage />}
          />

          {/* Passenger Route */}
          <Route path="reservations" element={<TheReservationHistoryPage />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
