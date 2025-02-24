import React, { useState } from "react";
import CartIcon from "../../assets/icons/cart.svg";

const Dish = ({ name, imageUrl, price }) => {
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-accent p-4 rounded-lg shadow-md flex flex-col items-center text-center">
      <img
        alt={name}
        src={imageUrl}
        className="h-24 w-24 object-contain mb-2"
      />

      <h2 className="text-2xl font-bold tracking-tight text-secondary">
        {name}
      </h2>

      <span className="text-xl font-semibold text-secondary mt-2">
        {price}$
      </span>

      <div className="flex items-center gap-4 mt-4">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-16 p-2 text-center border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
        />

        <button
          onClick={() => console.log(`Added ${quantity} ${name} to cart`)}
          className="flex items-center justify-center px-4 py-2 bg-background text-secondary rounded-md font-bold hover:bg-secondary hover:text-background transition group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={CartIcon}
            alt="icon"
            className="h-6 w-6"
            style={{
              filter: isHovered
                ? "brightness(0) saturate(100%) invert(100%) sepia(40%) saturate(1441%) hue-rotate(304deg) brightness(117%) contrast(95%)"
                : "brightness(0) saturate(100%) invert(57%) sepia(5%) saturate(4275%) hue-rotate(335deg) brightness(86%) contrast(80%)",
            }}
          />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Dish;
