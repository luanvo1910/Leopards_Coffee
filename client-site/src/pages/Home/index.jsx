import React, { useState } from "react";
import Background from "../../assets/image/background.png";
import HomeButton from "../../components/buttons/HomeButton";
import HomeLinkButton from "../../components/buttons/HomeLink";

import HomeMenu from "../../components/forms/HomeMenu";

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
      <div className="flex flex-col w-1/3 h-screen">
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
            <HomeButton type="submit" icon={CoffeeIcon}>
              Drink Menu
            </HomeButton>
          </div>

          <div>
            <HomeButton type="submit" icon={AboutIcon}>
              About Us
            </HomeButton>
          </div>

          <div>
            <HomeButton type="submit" icon={DrinkIcon}>
              Special Items
            </HomeButton>
          </div>

          <div>
            <HomeButton type="submit" icon={GroupIcon}>
              Contact
            </HomeButton>
          </div>
        </div>
      </div>

      <div className="w-2/3 items-center justify-center">
        <div className="w-3/4 h-[10vh] bg-[#D8D2C2] flex items-center justify-center gap-4 px-6 rounded-lg shadow-lg mx-auto mt-10">
          <HomeLinkButton onClick={() => setMenuType("iced-coffee")}>
            Iced Coffee
          </HomeLinkButton>
          <HomeLinkButton onClick={() => setMenuType("hot-coffee")}>
          Hot Coffee
          </HomeLinkButton>
          <HomeLinkButton onClick={() => setMenuType("fruit-juice")}>
          Fruit Juice
          </HomeLinkButton>
        </div>
        <div className="w-3/4 items-center justify-center gap-4 px-6 mx-auto mt-10">
          <HomeMenu menuType={menuType}/>
        </div>
      </div>
    </div>
  );
};

export default Home;