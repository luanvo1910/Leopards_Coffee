import React, { useState } from "react";
import Dish from "./Dish";

const dishes = [
  { id: 1, name: "Cà phê sữa", price: 30000, category: "Coffee", isValid: true, image: "https://cubes-asia.com/storage/blogs/2024-12/5-cach-pha-ca-phe-sua-tuoi-khong-duong-co.jpeg" },
  { id: 2, name: "Trà đào", price: 25000, category: "Tea", isValid: true, image: "data:image/jpeg;base64,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" },
  { id: 3, name: "Espresso", price: 40000, category: "Coffee", isValid: true, image: "https://vinbarista.com/uploads/editer/images/blogs/espresso-la-gi.jpg" },
  { id: 4, name: "Cappuccino", price: 45000, category: "Coffee", isValid: false, image: "https://noithatcaphe.vn/images/2022/07/15/cappuccino-cafe-2.jpg" },
  { id: 5, name: "Bánh ngọt", price: 50000, category: "Dessert", isValid: true, image: "https://savourebakery.com/storage/images/san-pham/Banh-lanh/436234970-841978384626757-6998579166814659493-N.jpg" },
];

const DishesManage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [validFilter, setValidFilter] = useState("");

  const filteredDishes = dishes.filter((dish) => {
    return (
      dish.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (categoryFilter === "" || dish.category === categoryFilter) &&
      (validFilter === "" || dish.isValid === (validFilter === "true"))
    );
  });

  return (
    <div>
      <h2 className="text-xl font-bold p-4">Dish Management</h2>
      <div className="p-4 flex gap-4">
        <input
          type="text"
          placeholder="Search for a dish..."
          className="p-2 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="p-2 border rounded"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          {[...new Set(dishes.map((dish) => dish.category))].map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          className="p-2 border rounded"
          value={validFilter}
          onChange={(e) => setValidFilter(e.target.value)}
        >
          <option value="">All Statuses</option>
          <option value="true">Available</option>
          <option value="false">Unavailable</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-6 p-4">
        {filteredDishes.map((dish) => (
          <Dish key={dish.id} dishData={dish} />
        ))}
      </div>
    </div>
  );
};

export default DishesManage;
