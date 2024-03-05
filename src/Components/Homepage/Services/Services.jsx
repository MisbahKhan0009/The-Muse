import React, { useEffect, useRef } from "react";
import { LuPhoneCall } from "react-icons/lu";
import { IoCheckmarkSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import "./Services.css";

const Services = () => {
  useEffect(() => {
    setTimeout(() => {
      const leftDiv = document.querySelector(".animate-leftDiv");
      const rightDiv = document.querySelector(".animate-rightDiv");
      if (leftDiv && rightDiv) {
        leftDiv.classList.add("moveLeftDiv");
        rightDiv.classList.add("moveRightDiv");
      }
    }, 1000);
  }, []);

  return (
    <section className="flex bg-darkBg text-offWhite h-svh">
      <div className="w-1/2 pe-5 flex-col justify-center items-center text-justify ps-28 pt-28">
        <p className="font-BarlowCondensed text-gold text-xl tracking-[3px] pb-6">
          BEST PRICES
        </p>
        <h1 className="font-GildaDisplay text-5xl tracking-wide pb-6">
          Extra Services
        </h1>
        <p className="font-Barlow text-offWhite">
          A complimentary breakfast is a staple offering, providing guests with
          a convenient and delicious start to their day without having to
          venture outside the hotel. This service often includes a variety of
          options to cater to different dietary preferences and needs, ranging
          from continental to full hot breakfast buffets. <br /> <br /> On the
          other hand, laundry services save guests the hassle of finding nearby
          laundromats or washing clothes themselves while traveling. Hotels may
          offer both self-service facilities and full-service laundry options,
          ensuring guests can maintain their wardrobe's cleanliness and
          freshness throughout their stay.
        </p>
        <div className=" py-5 font-BarlowCondensed">
          <p className="text-gold text-2xl pb-3">Reservation</p>
          <a
            className="inline-flex text-3xl items-center text-offWhite gap-x-2"
            href="#"
          >
            <LuPhoneCall /> 855 100 4444
          </a>
        </div>
      </div>
      <div className="w-1/2 relative flex justify-center ms-5 items-center">
        <div className="flex m-4 w-[45%] right-96 h-[60vh] flex-col bg-offWhiteBg shadow-sm absolute animate-leftDiv dark:bg-slate-900  dark:shadow-slate-700/[.7]">
          <img
            className="w-full h-auto m-0 p-0"
            src="https://i.ibb.co/27NWHMb/2.jpg"
            alt="Image Description"
          />
          <div className="p-4 md:p-5">
            <h3 className="text-2xl font-GildaDisplay tracking-[2px] text-darkBg pb-3 dark:text-white">
              Room Breakfast
            </h3>
            <h3 className="pb-5">
              <span className="text-[40px] font-GildaDisplay text-gold">
                $25
              </span>
              / daily
            </h3>
            <ul>
              <li className="flex items-center">
                <IoCheckmarkSharp /> Tea at bedside.
              </li>
              <li className="flex items-center">
                <IoCheckmarkSharp /> Breakfast at room.
              </li>
              <li className="flex items-center">
                <RxCross1 /> Complementary Room Cleaning.
              </li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="flex m-4 w-[45%] h-[60vh] right-0 flex-col bg-offWhiteBg shadow-sm absolute animate-RightDiv dark:bg-slate-900  dark:shadow-slate-700/[.7]">
          <img
            className="w-full h-auto m-0 p-0"
            src="https://i.ibb.co/QnMT0JH/1.jpg"
            alt="Image Description"
          />
          <div className="p-4 md:p-5">
            <h3 className="text-2xl font-GildaDisplay tracking-[2px] text-darkBg pb-3 dark:text-white">
              Cleaning Service
            </h3>
            <h3 className="pb-5">
              <span className="text-[40px] font-GildaDisplay text-gold">
                $15
              </span>
              / daily
            </h3>
            <ul>
              <li className="flex items-center">
                <IoCheckmarkSharp /> Collect clothes from room.
              </li>
              <li className="flex items-center">
                <IoCheckmarkSharp /> Deliver clothes to room.
              </li>
              <li className="flex items-center">
                <RxCross1 /> No hand wash.
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
