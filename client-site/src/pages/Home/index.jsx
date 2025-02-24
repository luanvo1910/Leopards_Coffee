import React, { useState } from "react";
import Background from "../../assets/image/background.png";

import HomeMenuItem from "../../components/items/HomeMenuItem";

import Leocf from "../../assets/icons/leopardcf.svg";
import CoffeeIcon from "../../assets/icons/coffee.svg";
import GroupIcon from "../../assets/icons/group.svg";
import DrinkIcon from "../../assets/icons/drink.svg";
import AboutIcon from "../../assets/icons/about.svg";

const Home = () => {
  const [menuType, setMenuType] = useState("iced-coffee");
  return (
    <div
      className="flex min-h-screen"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="flex flex-col w-1/3 h-screen pl-5">
        <div className="w-full h-[10vh] bg-[#D8D2C2] flex items-center justify-center gap-4 px-6 rounded-lg shadow-lg mx-auto mt-10">
          <img
            alt="Leopards Coffee"
            src={Leocf}
            className="h-12 w-auto text-[#B17457]"
          />
          <h1 className="text-2xl font-bold tracking-tight text-[#B17457]">
            Leopards Coffee
          </h1>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4 pt-4">
          <div>
            <button
              type="submit"
              className="flex items-center justify-center gap-3 w-full h-full rounded-md bg-[#D8D2C2] px-6 py-10 text-lg font-semibold text-[#B17457] shadow-lg hover:bg-[#4A4947] hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-[#4A4947]"
            >
              <img
                src={CoffeeIcon}
                alt="icon"
                className="h-6 w-6 filter invert sepia saturate-1000 hue-rotate-[330deg] brightness-90 contrast-100"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(57%) sepia(5%) saturate(4275%) hue-rotate(335deg) brightness(86%) contrast(80%)",
                }}
              />
              Drink Menu
            </button>
          </div>

          <div>
            <button
              type="submit"
              className="flex items-center justify-center gap-3 w-full h-full rounded-md bg-[#D8D2C2] px-6 py-10 text-lg font-semibold text-[#B17457] shadow-lg hover:bg-[#4A4947] hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-[#4A4947]"
            >
              <img
                src={AboutIcon}
                alt="icon"
                className="h-6 w-6 filter invert sepia saturate-1000 hue-rotate-[330deg] brightness-90 contrast-100"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(57%) sepia(5%) saturate(4275%) hue-rotate(335deg) brightness(86%) contrast(80%)",
                }}
              />
              About Us
            </button>
          </div>

          <div>
            <button
              type="submit"
              className="flex items-center justify-center gap-3 w-full h-full rounded-md bg-[#D8D2C2] px-6 py-10 text-lg font-semibold text-[#B17457] shadow-lg hover:bg-[#4A4947] hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-[#4A4947]"
            >
              <img
                src={DrinkIcon}
                alt="icon"
                className="h-6 w-6 filter invert sepia saturate-1000 hue-rotate-[330deg] brightness-90 contrast-100"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(57%) sepia(5%) saturate(4275%) hue-rotate(335deg) brightness(86%) contrast(80%)",
                }}
              />
              Special Items
            </button>
          </div>

          <div>
            <button
              type="submit"
              className="flex items-center justify-center gap-3 w-full h-full rounded-md bg-[#D8D2C2] px-6 py-10 text-lg font-semibold text-[#B17457] shadow-lg hover:bg-[#4A4947] hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-[#4A4947]"
            >
              <img
                src={GroupIcon}
                alt="icon"
                className="h-6 w-6 filter invert sepia saturate-1000 hue-rotate-[330deg] brightness-90 contrast-100"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(57%) sepia(5%) saturate(4275%) hue-rotate(335deg) brightness(86%) contrast(80%)",
                }}
              />
              Contact
            </button>
          </div>
        </div>
      </div>

      <div className="w-2/3 items-center justify-center">
        <div className="w-3/4 h-[10vh] bg-[#D8D2C2] grid grid-cols-3 items-center px-6 rounded-lg shadow-lg mx-auto mt-10">
          <div className="flex justify-center">
            <button
              onClick={() => setMenuType("iced-coffee")}
              className="text-[#B17457] text-xl font-bold hover:underline"
            >
              Iced Coffee
            </button>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => setMenuType("hot-coffee")}
              className="text-[#B17457] text-xl font-bold hover:underline"
            >
              Hot Coffee
            </button>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => setMenuType("fruit-juice")}
              className="text-[#B17457] text-xl font-bold hover:underline"
            >
              Fruit Juice
            </button>
          </div>
        </div>

        <div className="w-3/4 gap-4 px-6 mx-auto mt-10">
          <>
            {menuType === "iced-coffee" ? (
              <>
                <HomeMenuItem
                  name="iced Coffee"
                  imageUrl="https://images.immediate.co.uk/production/volatile/sites/2/2021/08/coldbrew-iced-latte-with-my-recipe-photo-by-@ellamiller_photo-f1e3d9e.jpg?quality=90&resize=556,505"
                  price="50"
                ></HomeMenuItem>
              </>
            ) : menuType === "hot-coffee" ? (
              <>
                <HomeMenuItem
                  name="hot Coffee"
                  imageUrl="https://imgcdn.stablediffusionweb.com/2024/5/8/a1667464-9b2b-4075-9c37-a970f76bc14b.jpg"
                  price="30"
                ></HomeMenuItem>
              </>
            ) : (
              <>
                <HomeMenuItem
                  name="fruit juice"
                  imageUrl="https://emilylaurae.com/wp-content/uploads/2022/08/passion-fruit-juice-2.jpg"
                  price="70"
                ></HomeMenuItem>
              </>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default Home;
