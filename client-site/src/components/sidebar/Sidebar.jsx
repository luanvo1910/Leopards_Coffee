import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/leopardcf.svg";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-64 h-screen bg-[#D8D2C2] bg-opacity-85 text-white p-5 flex flex-col">
      <div className="flex items-center space-x-3 mb-8">
        <img src={Logo} alt="Leopard Coffee" className="w-10" />
        <span className="text-xl font-bold text-[#B17457]">Leopard Coffee</span>
      </div>
      <nav className="flex flex-col space-y-3">
        <button className="text-left text-[#B17457] bg-[#FAF7F0] p-2 hover:bg-[#4A4947] rounded"
          onClick={() => navigate("/staff")}>
          Dashboard
        </button>
        <button className="text-left text-[#B17457] bg-[#FAF7F0] p-2 hover:bg-[#4A4947] rounded"
          onClick={() => navigate("/staff/dishes")}>
          Dish Manage
        </button>
        <button className="text-left text-[#B17457] bg-[#FAF7F0] p-2 hover:bg-[#4A4947] rounded"
          onClick={() => navigate("/staff/tables")}>
          Table Manage
        </button>
        <button className="text-left text-[#B17457] bg-[#FAF7F0] p-2 hover:bg-[#4A4947] rounded"
          onClick={() => navigate("/staff/bills")}>
          Bill Manage
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;