import React from "react";
import { Route, Routes } from "react-router";
import TheGuestLayout from "../layouts/TheGuestLayout";
import TheHomePage from "../pages/TheHomePage";
import TheDriversPage from "../pages/TheDriversPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<TheGuestLayout />}>
        <Route path="/" element={<TheHomePage />} />
        <Route path="/drivers" element={<TheDriversPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
