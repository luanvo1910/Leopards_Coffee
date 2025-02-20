import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/icons/leopardcf.svg";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/staff" },
    { name: "Dish Manage", path: "/staff/dishes" },
    { name: "Table Manage", path: "/staff/tables" },
    { name: "Bill Manage", path: "/staff/bills" },
  ];

  return (
    <div className="w-64 h-screen bg-accent bg-opacity-85 text-white p-5 flex flex-col">
      <div className="flex items-center space-x-3 mb-8">
        <img src={Logo} alt="Leopard Coffee" className="w-10" />
        <span className="text-xl font-bold text-secondary">Leopard Coffee</span>
      </div>
      <nav className="flex flex-col space-y-3">
        {menuItems.map((item) => (
          <button
            key={item.path}
            className={`text-left text-secondary bg-background p-2 rounded transition-all duration-200
              ${location.pathname === item.path ? "bg-primary text-white" : "hover:bg-primary hover:text-white"}`}
            onClick={() => navigate(item.path)}
          >
            {item.name}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
