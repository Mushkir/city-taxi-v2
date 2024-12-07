import React from "react";
import { Route, Routes } from "react-router";
import TheGuestLayout from "../layouts/TheGuestLayout";
import TheHomePage from "../pages/TheHomePage";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<TheGuestLayout />}>
        <Route path="/" element={<TheHomePage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
