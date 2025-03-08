import React from "react";

const Dish = ({ dishData }) => {
  const { name, price, isValid, image, category } = dishData;

  return (
    <div className="p-4 bg-accent bg-opacity-85 rounded shadow-md cursor-pointer hover:bg-opacity-95 hover:shadow-2xl transition">
      <img
        src={image}
        alt={name}
        className="h-32 object-cover rounded-xl"
      />
      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <p className="text-sm text-gray-700">{category?.name}</p>
      <p className="font-bold mt-1">{price.toLocaleString("vi-VN")} VND</p>
      {!isValid && <p className="text-red-500 font-semibold mt-1">Unavailable</p>}
    </div>
  );
};

export default Dish;
