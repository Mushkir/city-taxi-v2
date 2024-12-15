import React from "react";
import { Route, Routes } from "react-router";
import TheGuestLayout from "../layouts/TheGuestLayout";
import TheHomePage from "../pages/TheHomePage";
import TheDriversPage from "../pages/TheDriversPage";
import TheRegisterLayout from "../layouts/TheRegisterLayout";
import TheDriverSignUpPage from "../pages/TheDriverSignUpPage";
import ThePassengerSignUpPage from "../pages/ThePassengerSignUpPage";
import TheLoginPage from "../pages/TheLoginPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<TheGuestLayout />}>
        <Route path="/" element={<TheHomePage />} />
        <Route path="/drivers" element={<TheDriversPage />} />
        <Route path="/login" element={<TheLoginPage />} />
      </Route>

      <Route path="register" element={<TheRegisterLayout />}>
        <Route path="driver" element={<TheDriverSignUpPage />} />
        <Route path="passenger" element={<ThePassengerSignUpPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
