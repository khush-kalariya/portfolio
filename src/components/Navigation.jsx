import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="h-20 bg-[#222222] flex items-center px-6 md:px-12">
        <div className="w-full flex items-center justify-between">
          {/* Logo */}
          <div className="text-white text-lg font-semibold">Khush</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex justify-center gap-12 text-white text-base">
            <li className="cursor-pointer hover:text-gray-300">Home</li>
            <li className="cursor-pointer hover:text-gray-300">Projects</li>
            <li className="cursor-pointer hover:text-gray-300">Experience</li>
            <li className="cursor-pointer hover:text-gray-300">Contact</li>
          </ul>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <IoClose /> : <CiMenuBurger />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#222222] text-white">
          <ul className="flex flex-col items-center gap-6 py-6">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Projects</li>
            <li className="cursor-pointer">Experience</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;
