import React, { useState } from "react";
import Background from "../../assets/image/background.png";
import Dish from "../../components/items/dish";

const menuItems = [
  {
    name: "Iced Coffee",
    category: "iced-coffee",
    imageUrl:
      "https://images.immediate.co.uk/production/volatile/sites/2/2021/08/coldbrew-iced-latte-with-my-recipe-photo-by-@ellamiller_photo-f1e3d9e.jpg?quality=90&resize=556,505",
    price: "50",
  },
  {
    name: "Hot Coffee",
    category: "hot-coffee",
    imageUrl:
      "https://imgcdn.stablediffusionweb.com/2024/5/8/a1667464-9b2b-4075-9c37-a970f76bc14b.jpg",
    price: "30",
  },
  {
    name: "Fruit Juice",
    category: "fruit-juice",
    imageUrl:
      "https://emilylaurae.com/wp-content/uploads/2022/08/passion-fruit-juice-2.jpg",
    price: "70",
  },
];

const categories = [
  { label: "All Categories", value: "" },
  { label: "Iced Coffee", value: "iced-coffee" },
  { label: "Hot Coffee", value: "hot-coffee" },
  { label: "Fruit Juice", value: "fruit-juice" },
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredMenu = selectedCategory
    ? menuItems.filter((item) => item.category === selectedCategory)
    : menuItems;

  return (
    <div
      className="flex min-h-screen flex-1 flex-col px-6 py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="w-3/4 flex justify-center mx-auto mb-6">
        <input
          placeholder="Enter dish's name"
          className="block w-full rounded-xl bg-accent text-secondary px-3 py-2 text-lg placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="w-3/4 mx-auto p-4 rounded-lg shadow-md bg-accent flex items-center gap-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 rounded-md bg-white border border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary flex-1"
        >
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>

        <button
          onClick={() => setSelectedCategory("")}
          className="px-4 py-2 bg-gray-500 text-white rounded-md font-bold hover:bg-gray-700 transition"
        >
          Clear
        </button>
      </div>

      <div className="w-3/4 mx-auto mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMenu.map((dish) => (
          <Dish key={dish.name} {...dish} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
