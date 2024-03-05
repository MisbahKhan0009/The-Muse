import React from "react";

import { IoMdArrowForward } from "react-icons/io";
import {
  PiBedThin,
  PiWifiHighThin,
  PiSwimmingPoolThin,
  PiBowlFoodThin,
  PiCarProfileThin,
  PiAirplaneLandingThin,
} from "react-icons/pi";
import { Link } from "react-router-dom";

const Facilities = () => {
  return (
    <section className="h-auto grid grid-cols-1 place-content-center pt-20 mx-40 my-4">
      <p className="font-BarlowCondensed text-offWhite py-3 text-lg tracking-[4px]">
        OUR SERVICES
      </p>
      <h2 className="font-GildaDisplay mb-10 text-darkBg text-5xl">
        Hotel Facilities
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        <div className="border border-offWhite p-4">
          <PiAirplaneLandingThin className="text-gold  text-[50px] my-6" />
          <h2 className="font-GildaDisplay text-darkBg text-2xl pb-4">
            Pick Up & Drop
          </h2>
          <p className="text-offWhite font-Barlow mb-4">
            We will pick up from airport while you comfy on your ride, you don't
            have to worry about taxi.
          </p>
        </div>
        <div className="border border-offWhite p-4">
          <PiCarProfileThin className="text-gold text-[50px] my-6" />
          <h2 className="font-GildaDisplay text-darkBg text-2xl pb-4">
            Parking Space
          </h2>
          <p className="text-offWhite font-Barlow mb-4">
            If you have a car then we have a right place to keep them, with
            proper sequirity.
          </p>
        </div>
        <div className="border border-offWhite p-4">
          <PiBedThin className="text-gold text-[50px] my-6" />
          <h2 className="font-GildaDisplay text-darkBg text-2xl pb-4">
            Room Service
          </h2>
          <p className="text-offWhite font-Barlow mb-4">
            Our room service are included cleaning and food delivary, no need to
            come down to eat.
          </p>
        </div>
        <div className="border border-offWhite p-4">
          <PiSwimmingPoolThin className="text-gold text-[50px] my-6" />
          <h2 className="font-GildaDisplay text-darkBg text-2xl pb-4">
            Swimming Pool
          </h2>
          <p className="text-offWhite font-Barlow mb-4">
            Our swimming pool are open for all guest. You can relax there any
            time of the day.
          </p>
        </div>
        <div className="border border-offWhite p-4">
          <PiWifiHighThin className="text-gold text-[50px] my-6" />
          <h2 className="font-GildaDisplay text-darkBg text-2xl pb-4">
            Free WiFi
          </h2>
          <p className="text-offWhite font-Barlow mb-4">
            Stay connected with the world via WiFi while staying.
          </p>
        </div>
        <div className="border border-offWhite p-4">
          <PiBowlFoodThin className="text-gold text-[50px] my-6" />
          <h2 className="font-GildaDisplay text-darkBg text-2xl pb-4">
            Breakfast
          </h2>
          <p className="text-offWhite font-Barlow mb-4">
            Every morning we will serve breakfast for you. Your day will start
            with freshly cooked food.
          </p>
        </div>
      </div>
      <div className="py-20  flex justify-center">
        <button className="border border-gold bg-gold text-white text-xl   px-10 py-6 hover:border-gold hover:bg-white hover:text-gold">
          <Link to="/rooms" className="flex items-center">
            Start Booking <IoMdArrowForward className="ms-3" />
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Facilities;
