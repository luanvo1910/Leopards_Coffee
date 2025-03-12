import React from "react";

const Dish = ({ dishData, onEdit }) => {
  const { name, price, isValid, image, category } = dishData;

  return (
    <div
      className="p-4 bg-accent bg-opacity-85 rounded shadow-md cursor-pointer hover:bg-opacity-95 hover:shadow-2xl transition"
      onClick={() => onEdit(dishData)}
    >
      <div className="relative flex items-start">
        {image && (
          <img
            src={image}
            alt={name}
            className="h-32 object-cover rounded-xl"
          />
        )}

        <div className="absolute top-0 right-0 mt-2 mr-2 text-right">
          <h2 className="text-lg font-bold">{name}</h2>
          <p className="text-sm text-gray-700">{category}</p>
        </div>
      </div>

      <p className="font-bold mt-1">{price.toLocaleString("vi-VN")} VND</p>
      <p
        className={`font-semibold mt-1 ${
          isValid ? "text-primary" : "text-red-500"
        }`}
      >
        {isValid ? "Available" : "Unavailable"}
      </p>
    </div>
  );
};

export default Dish;
