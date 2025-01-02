import React from "react";
import { Outlet } from "react-router";
import TheSideMenu from "../components/passenger-dashboard/TheSideMenu";
import TheFooter from "../components/TheFooter";

const ThePassengerDashboardLayout = () => {
  return (
    <div className="relative">
      <aside
        id="sidebar-multi-level-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <TheSideMenu />
      </aside>
      <main className="p-4 sm:ml-64 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default ThePassengerDashboardLayout;
