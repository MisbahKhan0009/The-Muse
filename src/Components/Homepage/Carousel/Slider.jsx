import React from "react";
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Slider.css";

const Slider = () => {
  return (
    <div
      data-hs-carousel='{
        "loadingClasses": "opacity-0",
        "isAutoPlay": true
      }'
      className="relative slider h-100vh w-100vw mt-[-90px]"
    >
      <div className="hs-carousel relative overflow-hidden w-full h-full min-h-[350px] bg-transparent">
        <div className="hs-carousel-body absolute top-0 bottom-0 end-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
          <div className="hs-carousel-slide">
            <div className="flex justify-center w-full object-cover h-full bg-offWhite ">
              <span className=" transition duration-700">
                <div className="relative flex flex-col justify-center items-center">
                  <img
                    src="/img/slider/1.jpg"
                    alt="Slider Image 1"
                    className="slider-img"
                  />
                  <div className="absolute top-1/4 ">
                    <div className=" text-center  relative">
                      <p className="flex justify-center text-xl py-3 text-gold">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                      </p>
                      <h1 className="text-[55px] py-3 font-GildaDisplay uppercase tracking-[15px] text-white">
                        Enjoy A Luxury <br /> Experience
                      </h1>
                      <button
                        type="button"
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-lg font-BarlowCondensed font-medium  border border-gold text-white bg-gold shadow-sm hover:bg-transparent hover:text-white  disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <Link to={"/rooms"}>Rooms & Suites</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
          <div className="hs-carousel-slide">
            <div className="flex justify-center w-full object-cover h-full bg-offWhite ">
              <span className=" transition duration-700">
                <div className="relative flex flex-col  items-center">
                  <img src="/img/slider/2.jpg" alt="" className="slider-img" />
                  <div className="absolute top-1/4 ">
                    <div className=" text-center  relative">
                      <p className="flex justify-center py-3 text-xl text-gold">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </p>
                      <h1 className="text-[55px] font-GildaDisplay py-3 uppercase tracking-[15px] text-white">
                        Enjoy the best <br /> moment of your life
                      </h1>
                      <button
                        type="button"
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-lg font-BarlowCondensed font-medium  border border-gold text-white bg-gold shadow-sm hover:bg-transparent hover:text-white  disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <Link to={"/rooms"}>Rooms & Suites</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
          <div className="hs-carousel-slide">
            <div className="flex justify-center w-full object-cover h-full bg-offWhite ">
              <span className=" transition duration-700">
                <div className="relative flex flex-col  items-center">
                  <img src="/img/slider/3.jpg" alt="" className="slider-img" />
                  <div className="absolute top-1/4 ">
                    <div className=" text-center  relative">
                      <p className="flex justify-center text-xl py-3 text-gold">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </p>
                      <h1 className="text-[55px] font-GildaDisplay py-3 uppercase tracking-[15px] text-white">
                        The Perfect Base <br /> For You
                      </h1>
                      <button
                        type="button"
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-lg font-BarlowCondensed font-medium  border border-gold text-white bg-gold shadow-sm hover:bg-transparent hover:text-white  disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <Link to={"/rooms"}>Rooms & Suites</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
          <div className="hs-carousel-slide">
            <div className="flex justify-center w-full object-cover h-full bg-offWhite ">
              <span className=" transition duration-700">
                <div className="relative flex flex-col  items-center">
                  <img src="/img/slider/4.jpg" alt="" className="slider-img" />
                  <div className="absolute top-1/4 ">
                    <div className=" text-center  relative">
                      <p className="flex justify-center py-3 text-xl text-gold">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStarHalf />
                      </p>
                      <h1 className="text-[55px] font-GildaDisplay py-3 uppercase tracking-[15px] text-white">
                        Luxury and elegence <br /> in one place
                      </h1>
                      <button
                        type="button"
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-lg font-BarlowCondensed font-medium  border border-gold text-white bg-gold shadow-sm hover:bg-transparent hover:text-white  disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <Link to={"/rooms"}>Rooms & Suites</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
          <div className="hs-carousel-slide">
            <div className="flex justify-center w-full object-cover h-full bg-offWhite ">
              <span className=" transition duration-700">
                <div className="relative flex flex-col  items-center">
                  <img src="/img/slider/5.jpg" alt="" className="slider-img" />
                  <div className="absolute top-1/4 ">
                    <div className=" text-center  relative">
                      <p className="flex justify-center py-3 text-xl text-gold">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                      </p>
                      <h1 className="text-[55px] font-GildaDisplay py-3 uppercase tracking-[15px] text-white">
                        live life in <br /> elegence
                      </h1>
                      <button
                        type="button"
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-lg font-BarlowCondensed font-medium  border border-gold text-white bg-gold shadow-sm hover:bg-transparent hover:text-white  disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <Link to={"/rooms"}>Rooms & Suites</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
          <div className="hs-carousel-slide">
            <div className="flex justify-center w-full object-cover h-full bg-offWhite ">
              <span className=" transition duration-700">
                <div className="relative flex flex-col  items-center">
                  <img src="/img/slider/6.jpg" alt="" className="slider-img" />
                  <div className="absolute top-1/4 ">
                    <div className=" text-center  relative">
                      <p className="flex justify-center py-3 text-xl text-gold">
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                        <IoStar />
                      </p>
                      <h1 className="text-[55px] font-GildaDisplay py-3 uppercase tracking-[15px] text-white">
                        every moment you stay <br /> is luxurious
                      </h1>
                      <button
                        type="button"
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-lg font-BarlowCondensed font-medium  border border-gold text-white bg-gold shadow-sm hover:bg-transparent hover:text-white  disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      >
                        <Link to={"/rooms"}>Rooms & Suites</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end top-11/12 mr-6">
        <button
          type="button"
          className="hs-carousel-prev hs-carousel:disabled:opacity-50 border-offWhite disabled:pointer-events-none mt-[-60px] relative border rounded-full w-[40px] h-[40px] inline-flex justify-center items-center m-5 text-white hover:text-gold hover:border-gold"
        >
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          type="button"
          className="hs-carousel-next hs-carousel:disabled:opacity-50 border-offWhite disabled:pointer-events-none mt-[-60px] relative border rounded-full w-[40px] h-[40px] inline-flex justify-center items-center   text-white hover:text-gold hover:border-gold"
        >
          <span className="sr-only">Next</span>
          <span className="text-2xl" aria-hidden="true">
            <svg
              className="size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </span>
        </button>
      </div>

      <div className="hs-carousel-pagination flex flex-col text-xl justify-center items-end absolute top-1/3 start-0 end-0 right-6 text-offWhite space-x-2">
        <span className="hs-carousel-active:text-gold  size-3 border-0 p-3 ">
          1
        </span>
        <span className="hs-carousel-active:text-gold  size-3 border-0 p-3">
          2
        </span>
        <span className="hs-carousel-active:text-gold  size-3 border-0 p-3">
          3
        </span>
        <span className="hs-carousel-active:text-gold  size-3 border-0 p-3">
          4
        </span>
        <span className="hs-carousel-active:text-gold  size-3 border-0 p-3">
          5
        </span>
        <span className="hs-carousel-active:text-gold  size-3 border-0 p-3">
          6
        </span>
      </div>
    </div>
  );
};

export default Slider;
