import React from "react";
import "./Contact.css";

import { IoMdArrowForward } from "react-icons/io";
import {
  PiEnvelopeThin,
  PiPhoneCallThin,
  PiMapPinLineThin,
} from "react-icons/pi";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Contact = () => {
  return (
    <div className="parallax">
      <div className="parallax__bg"></div>
      <div className="text-white h-[40%] flex mt-20 flex-col justify-center ps-48">
        <h2 className="font-BarlowCondensed tracking-[4px] text-lg">
          GET IN TOUCH
        </h2>
        <p className="font-GildaDisplay text-[60px]">Contact Us</p>
      </div>
      <div className="bg-white h-auto grid grid-cols-2  py-24">
        <div className="ps-32">
          <h2 className="font-GildaDisplay text-4xl text-darkBg pb-6">
            The Muse Luxury Hotel
          </h2>
          <p className="text-offWhite font-Barlow pb-6">
            Welcome to The Muse, where luxury meets tranquility in the <br />
            heart of elegance. Nestled amidst breathtaking landscapes,
            <br /> The Muse stands tall as a beacon of sophistication.
          </p>
          <div className="flex items-center pb-3">
            <div className="pe-4 text-gold text-4xl">
              <PiPhoneCallThin />
            </div>
            <div>
              <p className="text-offWhite text-lg">Reservation</p>
              <p className="text-gold text-3xl">855 100 4444</p>
            </div>
          </div>
          <div className="flex items-center pb-3">
            <div className="pe-4 text-gold text-4xl">
              <PiEnvelopeThin />
            </div>
            <div>
              <p className="text-offWhite text-lg">Email Info</p>
              <p className="text-gold text-3xl">info@luxuryhotel.com</p>
            </div>
          </div>
          <div className="flex items-center pb-3">
            <div className="pe-4 text-gold text-4xl">
              <PiMapPinLineThin />
            </div>
            <div>
              <p className="text-offWhite text-lg">Address</p>
              <p className="text-offWhite text-lg">
                1616 Broadway NY, New York 10001
              </p>
              <p className="text-offWhite text-lg">United States of America</p>
            </div>
          </div>
        </div>
        <div className="me-20 text-lg">
          <h2 className="font-GildaDisplay text-2xl text-darkBg pb-6">
            Get In Touch
          </h2>
          <div className="grid grid-cols-2 gap-4 ">
            <input
              type="text"
              className="py-3 px-4 block w-full border-gold border focus:border-gold focus:ring-gold disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="py-3 px-4 block w-full border-gold border focus:border-gold focus:ring-gold disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Email"
              required
            />
            <input
              type="text"
              className="py-3 px-4 block w-full border-gold border focus:border-gold focus:ring-gold disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Phone"
              required
            />
            <input
              type="text"
              className="py-3 px-4 block w-full border-gold border focus:border-gold focus:ring-gold disabled:opacity-50 disabled:pointer-events-none"
              placeholder="Subject"
              required
            />
          </div>
          <div className="py-4">
            <textarea
              className="py-3 me-20 px-4 block w-full border border-gold focus:border-gold focus:ring-gold  disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>
          <div>
            <button className="border border-gold bg-gold text-white text-xl flex items-center  px-5 py-3 hover:border-gold hover:bg-white hover:text-gold">
              Send <IoMdArrowForward className="ms-3" />
            </button>
          </div>
        </div>
      </div>

      {/* <div className="h-auto py-10">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div> */}
    </div>
  );
};

export default Contact;
