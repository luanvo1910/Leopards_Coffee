import React from "react";

const Table = ({ table, onShowDetails }) => {
  return (
    <div className="p-4 bg-[#D8D2C2] bg-opacity-85 rounded shadow-md flex flex-col justify-between h-32 cursor-pointer"
    onClick={() => onShowDetails(table)}
    >
      <div>
        <h2 className="text-lg text-[#4A4947] font-bold">Table {table.id}</h2>
        {table.orders.length > 0 ? (
          <ul className="text-[#4A4947] text-sm">
            {table.orders.map((order, index) => (
              <li key={index}>
                {order.name} - {order.price} VND
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-[#4A4947]">Trống</p>
        )}
        {table.orders.length > 0 && (
          <p className="font-bold text-[#4A4947] mt-2">
            Total: {table.orders.reduce((sum, order) => sum + order.price, 0)}{" "}
            VND
          </p>
        )}
      </div>
    </div>
  );
};

export default Table;