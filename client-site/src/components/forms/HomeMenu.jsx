import React from "react";
import HomeMenuItem from "../items/HomeMenuItem";

const HomeMenu = ({ menuType }) => {
  return (
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
  );
};

export default HomeMenu;