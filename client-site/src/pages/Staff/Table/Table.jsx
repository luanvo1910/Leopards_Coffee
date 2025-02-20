import React from "react";

const Table = ({ tableData, onShowDetails }) => {
  const { id, orders } = tableData;
  const totalAmount = orders.reduce((sum, order) => sum + order.price, 0);

  return (
    <div
      className="p-4 bg-accent bg-opacity-85 rounded shadow-md flex flex-col justify-between h-32 cursor-pointer hover:bg-opacity-95 hover:shadow-2xl transition"
      onClick={() => onShowDetails(tableData)}
    >
      <div>
        <h2 className="text-lg text-secondary font-bold">Table {id}</h2>
        {orders.length > 0 ? (
          <ul className="text-secondary text-sm">
            {orders.map((order, index) => (
              <li key={index}>
                {order.name} - {order.price.toLocaleString("vi-VN")} VND
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-secondary">Trống</p>
        )}
        {orders.length > 0 && (
          <p className="font-bold text-secondary mt-2">
            Total: {totalAmount.toLocaleString("vi-VN")} VND
          </p>
        )}
      </div>
    </div>
  );
};

export default Table;
