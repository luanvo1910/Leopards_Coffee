import React from "react";

const HomeMenuItem = ({ name, imageUrl, price }) => {
  return (
    <div className="flex flex-col gap-8 p-10 sm:flex-row sm:items-center sm:gap-6 rounded-3xl bg-[#D8D2C2] shadow-loginForm w-full max-w-2xl">
      <img src={imageUrl} className="mx-auto h-20 w-auto text-[#B17457]" />
      <h2 className="text-center text-2xl font-bold tracking-tight text-[#B17457]">{name}</h2>
      <a>{price}$</a>
    </div>
  );
};

export default HomeMenuItem;