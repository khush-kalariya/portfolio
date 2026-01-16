import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full">
      {/* Navbar (HALF WIDTH & CENTERED) */}
      <nav
        className=" mx-auto h-16 w-16 md:h-16 md:w-[45%]
    backdrop-blur-lg bg-black/40 border border-white/30
    rounded-full flex items-center justify-center px-6"
      >
        {/* Desktop Menu */}
        <ul className="hidden md:flex xl:gap-20 gap-5 text-white text-sm">
          <li className="cursor-pointer hover:text-gray-300 transition">
            <a href="#home">Home</a>
          </li>

          <li className="cursor-pointer hover:text-gray-300 transition">
            <a href="#projects">Projects</a>
          </li>

          <li className="cursor-pointer hover:text-gray-300 transition">
            <a href="#Companyexperience">Experience</a>
          </li>

          <li className="cursor-pointer hover:text-gray-300 transition">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl ml-auto"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoClose /> : <CiMenuBurger />}
        </button>
      </nav>

      {open && (
        <div
          className="md:hidden mt-4 mx-auto w-[90%] 
          backdrop-blur-xl bg-black/50 border border-white/50 rounded-2xl"
        >
          <ul className="flex flex-col items-center gap-6 py-6 text-white">
            <li className="cursor-pointer">
              <a href="#home" onClick={() => setOpen(false)}>
                Home
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            </li>
            <li className="cursor-pointer">
              <a href="#Companyexperience" onClick={() => setOpen(false)}>Experience</a>
            </li>
            <li className="cursor-pointer" onClick={() => setOpen(false)}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navigation;
