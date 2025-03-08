import React from "react";
import { useNavigate } from "react-router-dom";

const TableDetailsModal = ({ table, onClose }) => {
  const navigate = useNavigate();
  
  const total = table.orders.reduce((sum, order) => sum + order.price, 0);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-accent bg-opacity-85 rounded p-6 shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Table {table.id}</h2>
        <ul>
          {table.orders.map((order, index) => (
            <li key={index} className="flex justify-between border-b py-2">
              <span>{order.name}</span>
              <span>{order.price} VND</span>
            </li>
          ))}
        </ul>
        <div className="font-bold mt-4">Total: {total} VND</div>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-primary text-white rounded"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="px-4 py-2 bg-secondary text-white rounded"
            onClick={() => navigate("/staff/checkout", { state: { table } })}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableDetailsModal;
