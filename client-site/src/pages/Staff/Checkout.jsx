import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const employees = [
  { id: "1", name: "Linh" },
  { id: "2", name: "Huy" },
  { id: "3", name: "Luan" }
];

const CheckoutPage = ({ onConfirm }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const table = location.state?.table;

  const [checkoutTime, setCheckoutTime] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(employees[0]?.id || "");

  useEffect(() => {
    if (!table) {
      navigate("/staff/tables");
    } else {
      const now = new Date();
      setCheckoutTime(now.toLocaleString());
    }
  }, [table, navigate]);

  if (!table) return null; 

  const total = table.orders.reduce((sum, order) => sum + order.price, 0);

  return (
    <div className="p-6 max-w-lg mx-auto bg-accent bg-opacity-85 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <p><strong>Table:</strong> {table.id}</p>
      <p><strong>Checkout Time:</strong> {checkoutTime}</p>
      
      <ul className="my-4 border-t pt-2">
        {table.orders.map((order, index) => (
          <li key={index} className="flex justify-between border-b py-2">
            <span>{order.name}</span>
            <span>{order.price} VND</span>
          </li>
        ))}
      </ul>
      
      <div className="font-bold mt-4">Total: {total} VND</div>
      
      <div className="mt-4">
        <label className="block mb-2 font-bold">Employee</label>
        <select
          className="w-full p-2 border rounded"
          value={selectedEmployee}
          onChange={(e) => setSelectedEmployee(e.target.value)}
        >
          {employees.map((employee) => (
            <option key={employee.id} value={employee.id}>{employee.name}</option>
          ))}
        </select>
      </div>
      
      <div className="mt-4 flex justify-end space-x-2">
        <button
          className="px-4 py-2 bg-primary text-white rounded"
          onClick={() => navigate(-1)}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 bg-secondary text-white rounded"
          onClick={() => onConfirm({ tableId: table.id, checkoutTime, selectedEmployee, total })}
        >
          Confirm Checkout
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
