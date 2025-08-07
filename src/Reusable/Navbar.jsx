import React from "react";

import {
  FaHome,
  FaInfoCircle,
  FaPhoneAlt,
  FaBuilding,
  FaBriefcase,
  FaUser,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="flex bg-zinc-700 p-4 justify-between">
        <span className="w-[4rem] ml-10 rounded-full h-[4rem]">
          <img
            src="/logo.png"
            className="w-full h-full rounded-full border-white border-solid border object-center object-cover"
            alt=""
          />
        </span>
        <ul className="flex justify-end gap-x-10 text-[1rem] pr-10  ">
          <li className="flex gap-x-3 items-center hover:text-red-700 cursor-pointer duration-300">
            <FaHome className="hidden sm:visible" size={20} />
            Home
          </li>
          <li className="flex gap-x-3 items-center hover:text-red-700 cursor-pointer duration-300">
            <FaInfoCircle className="hidden sm:visible" size={20} />
            About Us
          </li>
          <li className="flex gap-x-3 items-center hover:text-red-700 cursor-pointer duration-300">
            <FaPhoneAlt className="hidden sm:visible" size={20} />
            Contact Us
          </li>
          <li className="flex gap-x-3 items-center hover:text-red-700 cursor-pointer duration-300">
            <FaBuilding className="hidden sm:visible" size={20} />
            Companies
          </li>
          <li className="flex gap-x-3 items-center hover:text-red-700 cursor-pointer duration-300">
            <FaBriefcase className="hidden sm:visible" size={20} />
            Browse Jobs
          </li>
          <li className="flex gap-x-3 items-center hover:text-red-700 cursor-pointer duration-300 bg-zinc-900 px-4 rounded-md">
            <FaUser className="hidden sm:visible" size={20} />
            Login/Register
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
