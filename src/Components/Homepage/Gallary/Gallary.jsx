import React from "react";
import { IoStar } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";

const Gallary = () => {
  return (
    <section className="flex h-auto py-20" id="about">
      <div className="w-1/2 flex-col justify-center items-center text-justify ps-28">
        <div className="flex text-gold py-6">
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
          <IoStar />
        </div>
        <p className="font-BarlowCondensed text-offWhite text-xl tracking-[3px] pb-6">
          THE MUSE LUXURY HOTEL
        </p>
        <h1 className="font-GildaDisplay text-5xl tracking-wide pb-6">
          Enjoy a Luxury <br /> Experience
        </h1>
        <p className="font-Barlow text-offWhite">
          Welcome to The Muse, the pinnacle of luxury among five-star deluxe
          hotels in New York City. At The Muse, we are dedicated to providing an
          unmatched experience where every aspect is meticulously crafted to
          surpass your expectations. <br /> <br />
          From the moment you arrive, our team is committed to ensuring your
          comfort and satisfaction. Step into our elegant vestibule and enter a
          world of refined luxury, where every detail has been thoughtfully
          considered.
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
      <div className="w-1/2 flex justify-center top-[200px]">
        <img
          src="https://i.ibb.co/T4pjwQj/1.jpg"
          className="w-1/3 h-4/6 object-cover mt-[-20px] m-8"
          alt="Image"
        />
        <img
          src="https://i.ibb.co/KcZdnxd/6.jpg"
          className="w-1/3 h-4/6 object-cover mt-[100px] m-8"
          alt="Image"
        />
      </div>
    </section>
  );
};

export default Gallary;
