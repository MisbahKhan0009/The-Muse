import React from "react";
import {
  PiUsersThreeThin,
  PiHouseLineThin,
  PiWifiHighThin,
  PiBowlFoodThin,
  PiSwimmingPoolThin,
  PiBedThin,
  PiArrowRightThin,
} from "react-icons/pi";

import { Link } from "react-router-dom";

const SingleRoom = () => {
  return (
    <div className="bg-white h-auto grid content-center grid-cols-2  py-24">
      <div className="left-40 p-10 bg-white mt-6 w-11/12  me-30 z-50 relative flex justify-center flex-col h-[90%] border border-gold">
        <p className="text-offWhite">
          <span className="font-GildaDisplay text-2xl tracking-wide text-gold pe-1">
            150$
          </span>
          / Night
        </p>
        <h2 className="text-4xl font-GildaDisplay py-3">Single Room</h2>
        <p className="text-offWhite">
          Spacious, bright guestrooms with tasteful furnishing, wooden floor and{" "}
          <br /> panoramic windows from the ceiling to the floor.
        </p>
        <div className="grid my-5 text-offWhite grid-cols-3 gap-6">
          <div className="flex items-center">
            <PiUsersThreeThin className="text-gold text-2xl" />
            <p className="ps-2">1 Person</p>
          </div>
          <div className="flex items-center">
            <PiBedThin className="text-gold text-2xl" />
            <p className="ps-2">1 Signle Bed</p>
          </div>
          <div className="flex items-center">
            <PiHouseLineThin className="text-gold text-2xl" />
            <p className="ps-2">150 sqt Room</p>
          </div>
          <div className="flex items-center">
            <PiWifiHighThin className="text-gold text-2xl" />
            <p className="ps-2">Free WiFi</p>
          </div>
          <div className="flex items-center">
            <PiBowlFoodThin className="text-gold text-2xl" />
            <p className="ps-2">Free Breakfast</p>
          </div>
          <div className="flex items-center">
            <PiSwimmingPoolThin className="text-gold text-2xl" />
            <p className="ps-2">Swimming Pool</p>
          </div>
        </div>
        <hr />
        <div className="flex py-6 me-10 font-BarlowCondensed text-xl justify-between">
          <button className="text-offWhite hover:text-gold">
            <Link className="flex items-center">
              Details <PiArrowRightThin />
            </Link>
          </button>
          <button className="border border-gold bg-gold text-white text-center py-2 px-5  hover:bg-white hover:text-gold">
            <Link to="/booking">Book</Link>
          </button>
        </div>
      </div>
      <div className="">
        <img
          src="https://i.ibb.co/GdvVR0L/3.jpg"
          className="w-11/12 right-28 relative h-full object-cover transition-transform duration-300 transform hover:scale-110"
          alt=""
        />
      </div>
    </div>
  );
};

export default SingleRoom;
