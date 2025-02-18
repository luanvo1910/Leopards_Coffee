import React from "react";
import { Outlet } from "react-router-dom";
import Background from "../../assets/image/background.png";
import Sidebar from "../../components/sidebar/Sidebar";

const StaffLayout = () => {
  return (
    <div
      className="flex h-screen"
      style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover" }}
    >
      <Sidebar />
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default StaffLayout;