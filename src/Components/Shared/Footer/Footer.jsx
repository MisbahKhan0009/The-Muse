import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { FaPinterest, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full z-[-1]  bg-darkBg text-white py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-6 py-16 mb-10">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <a
            className="flex-none text-4xl text-gold font-GildaDisplay font-bold "
            href="#"
            aria-label="Brand"
          >
            The Muse
          </a>
          <p className="pt-12 text-offWhite pb-9">
            Welcome to The Muse, where luxury meets tranquility in the heart of
            elegance. Nestled amidst breathtaking landscapes, <br /> The Muse
            stands tall as a beacon of sophistication.
          </p>
          <p className="mt-3 text-offWhite">© The Muse</p>
        </div>

        <div className="ms-32">
          <h4 className=" font-extralight text-2xl mb-4 font-GildaDisplay ">
            Explore
          </h4>

          <div className="mt-3 grid space-y-3 text-normal">
            <p>
              <a className="inline-flex text-offWhite gap-x-2" href="#">
                Home
              </a>
            </p>
            <p>
              <a className="inline-flex text-offWhite gap-x-2" href="#">
                Rooms & Suites
              </a>
            </p>
            <p>
              <a className="inline-flex text-offWhite gap-x-2" href="#">
                About
              </a>
            </p>
            <p>
              <a className="inline-flex text-offWhite gap-x-2" href="#">
                Contact
              </a>
            </p>
            <p>
              <a className="inline-flex text-offWhite gap-x-2" href="#">
                Resturant
              </a>
            </p>
          </div>
        </div>

        <div>
          <h4 className=" font-extralight text-2xl mb-4 font-GildaDisplay ">
            Contact
          </h4>

          <div className="mt-3 grid space-y-3 text-normal">
            <p>
              <a className="inline-flex text-offWhite gap-x-2" href="#">
                1616 Broadway NY, New York 10001 <br /> United States of America
              </a>
            </p>

            <p className="text-2xl py-5">
              <a
                className="inline-flex items-center text-offWhite gap-x-2"
                href="#"
              >
                <LuPhoneCall /> 855 100 4444
              </a>
            </p>

            <p>
              <a
                className="inline-flex text-xl text-offWhite gap-x-2"
                href="mailto:info@themuse.com"
              >
                <span className="relative">
                  <span className=" text-offWhite">info@themuse.com</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold"></span>
                </span>
              </a>
            </p>
            <div className="flex text-xl pt-6 text-offWhite ">
              <RiInstagramFill className="me-3 hover:text-gold" />
              <FaFacebook className="me-3 hover:text-gold" />
              <FaYoutube className="me-3 hover:text-gold" />
              <FaXTwitter className="me-3 hover:text-gold" />
              <FaPinterest className="me-3 hover:text-gold" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
