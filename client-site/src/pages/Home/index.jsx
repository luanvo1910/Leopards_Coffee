import React, { useState } from "react";
import Background from "../../assets/image/background.png";

import HomeMenuItem from "../../components/items/HomeMenuItem";
import Leocf from "../../assets/icons/leopardcf.svg";
import CoffeeIcon from "../../assets/icons/coffee.svg";
import GroupIcon from "../../assets/icons/group.svg";
import DrinkIcon from "../../assets/icons/drink.svg";
import AboutIcon from "../../assets/icons/about.svg";

const menuItems = [
  { id: "iced-coffee", name: "Iced Coffee", imageUrl: "https://images.immediate.co.uk/production/volatile/sites/2/2021/08/coldbrew-iced-latte-with-my-recipe-photo-by-@ellamiller_photo-f1e3d9e.jpg?quality=90&resize=556,505", price: "50" },
  { id: "hot-coffee", name: "Hot Coffee", imageUrl: "https://imgcdn.stablediffusionweb.com/2024/5/8/a1667464-9b2b-4075-9c37-a970f76bc14b.jpg", price: "30" },
  { id: "fruit-juice", name: "Fruit Juice", imageUrl: "https://emilylaurae.com/wp-content/uploads/2022/08/passion-fruit-juice-2.jpg", price: "70" }
];

const menuCategories = [
  { name: "Drink Menu", icon: CoffeeIcon, link: "/drink-menu" },
  { name: "About Us", icon: AboutIcon, link: "/about" },
  { name: "Special Items", icon: DrinkIcon, link: "/special-items" },
  { name: "Contact", icon: GroupIcon, link: "/contact" }
];

const Home = () => {
  const [menuType, setMenuType] = useState("iced-coffee");

  return (
    <div className="flex min-h-screen" style={{ backgroundImage: `url(${Background})` }}>
      <div className="flex flex-col w-1/3 h-screen pl-5">
        <div className="w-full h-[10vh] bg-[#D8D2C2] flex items-center justify-center gap-4 px-6 rounded-lg shadow-lg mx-auto mt-10">
          <img alt="Leopards Coffee" src={Leocf} className="h-12 w-auto text-[#B17457]" />
          <h1 className="text-2xl font-bold tracking-tight text-[#B17457]">Leopards Coffee</h1>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4 pt-4">
          {menuCategories.map((category, index) => (
            <div key={index}>
              <button
                type="submit"
                className="flex items-center justify-center gap-3 w-full h-full rounded-md bg-[#D8D2C2] px-6 py-10 text-lg font-semibold text-[#B17457] shadow-lg hover:bg-[#4A4947] hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-[#4A4947]"
              >
                <img
                  src={category.icon}
                  alt="icon"
                  className="h-6 w-6 filter invert sepia saturate-1000 hue-rotate-[330deg] brightness-90 contrast-100"
                  style={{
                    filter: "brightness(0) saturate(100%) invert(57%) sepia(5%) saturate(4275%) hue-rotate(335deg) brightness(86%) contrast(80%)"
                  }}
                />
                {category.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="w-2/3 items-center justify-center">
        <div className="w-3/4 h-[10vh] bg-[#D8D2C2] grid grid-cols-3 items-center px-6 rounded-lg shadow-lg mx-auto mt-10">
          {menuItems.map((item, index) => (
            <div key={index} className="flex justify-center">
              <button
                onClick={() => setMenuType(item.id)}
                className="text-[#B17457] text-xl font-bold hover:underline"
              >
                {item.name}
              </button>
            </div>
          ))}
        </div>

        <div className="w-3/4 gap-4 px-6 mx-auto mt-10">
          {menuItems
            .filter(item => item.id === menuType)
            .map(item => (
              <HomeMenuItem
                key={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                price={item.price}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
