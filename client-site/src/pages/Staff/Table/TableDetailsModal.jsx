import React from "react";

const TableDetailsModal = ({ table, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Table {table.id}</h2>
        <ul>
          {table.orders.map((order, index) => (
            <li key={index} className="flex justify-between border-b py-2">
              <span>{order.name}</span>
              <span>{order.price} VND</span>
            </li>
          ))}
        </ul>
        <div className="font-bold mt-4">
          Total: {table.orders.reduce((sum, order) => sum + order.price, 0)} VND
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded"
            onClick={onClose}
          >
            Close
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableDetailsModal;