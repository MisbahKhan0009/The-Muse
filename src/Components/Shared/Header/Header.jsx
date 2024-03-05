import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/Authprovider/Authprovider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <header className="flex flex-wrap py-6  sm:justify-start sm:flex-nowrap z-50 w-full  text-sm ">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link className="flex-none text-4xl text-gold font-bold font-GildaDisplay ">
            The Muse
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none "
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-16 font-extralight font-BarlowCondensed lg:text-2xl  lg:me-20 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <Link className=" text-offWhite hover:text-gold  ">Home</Link>
            <Link to="/#about" className=" text-offWhite hover:text-gold ">
              About
            </Link>
            <Link to="/rooms" className=" text-offWhite hover:text-gold ">
              Rooms
            </Link>
            <Link to="/contact" className=" text-offWhite hover:text-gold ">
              Contact
            </Link>
            {user?.uid ? (
              <Link onClick={logOut} className="text-offWhite hover:text-gold">
                Log Out
              </Link>
            ) : (
              <>
                <Link to="/signup" className="text-offWhite hover:text-gold">
                  Sign up
                </Link>
                <Link to="/signin" className="text-offWhite hover:text-gold">
                  Log in
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
