import React from "react";
import "./Booking.module.css";

import {
  PiEnvelopeThin,
  PiPhoneCallThin,
  PiMapPinLineThin,
} from "react-icons/pi";
import { Link } from "react-router-dom";
import { DatePicker } from "antd";
import Swal from "sweetalert2";

const Booking = () => {
  const handleToast = () => {
    Swal.fire({
      icon: "success",
      title: "Room  Booked Successfully!",
      showConfirmButton: true,
    });
  };

  return (
    <div className="parallax">
      <div className="parallax__bg"></div>
      <div className="text-white h-[40%] flex mt-20 flex-col justify-center ps-48">
        <h2 className="font-BarlowCondensed tracking-[4px] text-lg">
          GET IN TOUCH
        </h2>
        <p className="font-GildaDisplay text-[60px]">Book a Room</p>
      </div>
      <div className="bg-offWhiteBg h-auto  py-24">
        <div className="text-gold h-[40%] flex mt-20 flex-col justify-center ps-48">
          <h2 className="font-BarlowCondensed tracking-[4px] text-lg">
            Check availability
          </h2>
          <p className="font-GildaDisplay text-[40px]">Select Room</p>
        </div>
        <div className="grid grid-cols-6 mx-48 my-16">
          <div>
            <p className="text-gold text-lg pb-1 ps-1">Check In</p>
            <div className="bg-white border  border-offWhiteBg p-3">
              <DatePicker name="checkin" />
            </div>
          </div>

          <div>
            <p className="text-gold text-lg pb-1 ps-1">Check Out</p>
            <div className="bg-white border  border-offWhiteBg p-3">
              <DatePicker name="checkin" />
            </div>
          </div>
          <div>
            <p className="text-gold text-lg pb-1 ps-1">Adult</p>
            <div className="bg-white border  border-offWhiteBg p-3">
              <select id="room" className="pb-[9px]">
                <option value="adultOne">1</option>
                <option value="adultTwo">2</option>
                <option value="adultThree">3</option>
                <option value="adultFour">4</option>
              </select>
            </div>
          </div>
          <div>
            <p className="text-gold text-lg pb-1 ps-1">Children</p>
            <div className="bg-white border  border-offWhiteBg p-3">
              <select id="room" className="pb-[9px]">
                <option value="childOne">1</option>
                <option value="childTwo">2</option>
                <option value="childThree">3</option>
                <option value="childFour">4</option>
              </select>
            </div>
          </div>
          <div>
            <p className="text-gold text-lg pb-1 ps-1">Room</p>
            <div className="bg-white border  border-offWhiteBg p-3">
              <select id="room" className="pb-[9px]">
                <option value="singleRoom">Signle Room</option>
                <option value="doubleRoom">Double Room</option>
                <option value="familyRoom">Family Room</option>
                <option value="royalSuite">Royal Suite</option>
              </select>
            </div>
          </div>

          <div className="">
            <p className="text-offWhiteBg text-lg pb-1 ps-1">Book Now</p>
            <div className="bg-gold text-xl text-white font-BarlowCondensed text-center p-[14px]">
              <button onClick={handleToast}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;



