import React from "react";

const HomeMenuItem = ({ name, imageUrl, price }) => {
  return (
    <div className="flex items-center justify-between p-6 rounded-3xl bg-accent shadow-loginForm">
      <img alt={name} src={imageUrl} className="h-20 w-20 object-contain" />
      <h2 className="text-2xl font-bold tracking-tight text-secondary pl-10">{name}</h2>
      <span className="text-xl font-semibold text-secondary ml-auto">{price}$</span>
    </div>
  );
};

export default HomeMenuItem;
