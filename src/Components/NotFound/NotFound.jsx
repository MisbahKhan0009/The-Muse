import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="relative h-100vh w-100vw top-[-140px]">
        <img src="/img/notFound.svg" className="w-full h-auto " alt="" />
      </div>
      <div className="bg-[#F8F5F0] py-10 text-center">
        <button className="relative top-[-50px] px-10 py-3 border text-xl font-light font-BarlowCondensed tracking-[2px] border-gold text-white bg-gold hover:text-gold hover:bg-transparent">
          <Link to={"/"}>Go Home</Link>
        </button>
      </div>
    </>
  );
};

export default NotFound;
