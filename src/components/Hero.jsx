import React from "react";
import Profile from "../assets/a653a959b2f589eba2488d2ba08e3a09.jpg";

const Hero = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="w-full flex flex-col items-center pt-24 gap-10">
        {/* Profile Image */}
        <div className="w-56 h-56 bg-amber-700 rounded-full overflow-hidden">
          <img
            src={Profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="text-center">
          <h1 className="text-[55px] text-white font-semibold ">
            <span className="block">I do code and craft</span>
            <span>modern web experiences.</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
