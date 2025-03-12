import React from "react";
import { Outlet } from "react-router-dom";
import Background from "../../assets/image/background.png";
import Sidebar from "../../components/sidebar/Sidebar";

const StaffLayout = () => {
  return (
    <div
      className="flex min-h-screen"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Sidebar />
      <div className="flex-1 p-8 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default StaffLayout;
