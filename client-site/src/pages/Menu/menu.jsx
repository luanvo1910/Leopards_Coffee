import React, { useState } from "react";
import Background from "../../assets/image/background.png";
import Dish from "../../components/items/dish";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [menuType, setMenuType] = useState("");

  return (
    <div
      className="flex min-h-screen flex-1 flex-col px-6 py-12"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <div className="w-3/4 flex justify-center mx-auto mb-6">
        <input
          placeholder="Enter dish's name"
          className="block w-full rounded-xl bg-[#D8D2C2] text-[#4A4947] px-3 py-2 text-lg placeholder:text-[#4A4947] focus:outline-none focus:ring-2 focus:ring-[#4A4947]"
        />
      </div>

      <div className="w-3/4 mx-auto p-4 rounded-lg shadow-md bg-[#D8D2C2] flex items-center gap-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 rounded-md bg-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B17457] flex-1"
        >
          <option value="">Select Category</option>
          <option value="iced-coffee">Iced Coffee</option>
          <option value="hot-coffee">Hot Coffee</option>
          <option value="fruit-juice">Fruit Juice</option>
        </select>

        <button
          onClick={() => setMenuType(selectedCategory)}
          className="px-4 py-2 bg-[#FAF7F0] text-[#B17457] rounded-md font-bold hover:bg-[#B17457] hover:text-[#FAF7F0] transition"
        >
          Filter
        </button>

        <button
          onClick={() => {
            setMenuType("");
            setSelectedCategory("");
          }}
          className="px-4 py-2 bg-gray-500 text-white rounded-md font-bold hover:bg-gray-700 transition"
        >
          Clear
        </button>
      </div>

      <div className="w-3/4 mx-auto mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {menuType === "iced-coffee" ? (
          <Dish
            name="Iced Coffee"
            imageUrl="https://images.immediate.co.uk/production/volatile/sites/2/2021/08/coldbrew-iced-latte-with-my-recipe-photo-by-@ellamiller_photo-f1e3d9e.jpg?quality=90&resize=556,505"
            price="50"
          />
        ) : menuType === "hot-coffee" ? (
          <Dish
            name="Hot Coffee"
            imageUrl="https://imgcdn.stablediffusionweb.com/2024/5/8/a1667464-9b2b-4075-9c37-a970f76bc14b.jpg"
            price="30"
          />
        ) : menuType === "fruit-juice" ? (
          <Dish
            name="Fruit Juice"
            imageUrl="https://emilylaurae.com/wp-content/uploads/2022/08/passion-fruit-juice-2.jpg"
            price="70"
          />
        ) : (
          <>
            <Dish
              name="Iced Coffee"
              imageUrl="https://images.immediate.co.uk/production/volatile/sites/2/2021/08/coldbrew-iced-latte-with-my-recipe-photo-by-@ellamiller_photo-f1e3d9e.jpg?quality=90&resize=556,505"
              price="50"
            />
            <Dish
              name="Hot Coffee"
              imageUrl="https://imgcdn.stablediffusionweb.com/2024/5/8/a1667464-9b2b-4075-9c37-a970f76bc14b.jpg"
              price="30"
            />
            <Dish
              name="Fruit Juice"
              imageUrl="https://emilylaurae.com/wp-content/uploads/2022/08/passion-fruit-juice-2.jpg"
              price="70"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Menu;