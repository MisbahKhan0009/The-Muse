import React from "react";
import "./Rooms.css";
import SingleRoom from "./SingleRoom";
import DoubleRoom from "./DoubleRoom";
import FamilyRoom from "./FamilyRoom";
import RoyalSuite from "./RoyalSuite";

const Rooms = () => {
  return (
    <div className="parallax">
      <div className="parallax__bg"></div>
      <div className="text-white h-[40%] flex mt-20 flex-col justify-center ps-48">
        <h2 className="font-BarlowCondensed tracking-[4px] text-lg">
          The Muse Luxury Hotel
        </h2>
        <p className="font-GildaDisplay text-[60px]">Rooms & Suites</p>
      </div>
      <div className="">
        <SingleRoom />
        <DoubleRoom />
        <FamilyRoom />
        <RoyalSuite />
      </div>
    </div>
  );
};

export default Rooms;
