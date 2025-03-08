import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/AuthPage";
import Home from "./pages/Home/index";
import Menu from "./pages/Menu/Menu";

import Staff from "./pages/Staff/index";
import Dashboard from "./pages/Staff/Dashboard";
import TableManage from "./pages/Staff/Table/TablesManage";
import DishesManage from "./pages/Staff/DishesManage";
import BillsManage from "./pages/Staff/BillsManage";
import StaffCheckout from "./pages/Staff/Checkout"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />

        <Route path="/staff" element={<Staff />}>
          <Route index element={<Dashboard />} />
          <Route path="tables" element={<TableManage />} />
          <Route path="dishes" element={<DishesManage />} />
          <Route path="bills" element={<BillsManage />} />
          <Route path="checkout" element={<StaffCheckout />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
