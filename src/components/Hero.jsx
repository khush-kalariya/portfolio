import React from "react";
import Profile from "../assets/a653a959b2f589eba2488d2ba08e3a09.jpg";

const Hero = () => {
  return (
    <section id="home" className="w-full h-full">
      <div className="w-full flex flex-col items-center pt-28">
        {/* Profile Image */}
        <div className="w-56 h-56 rounded-full overflow-hidden">
          <img
            src={Profile}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="text-center pt-10.25">
          <div className="lg:text-[50px] md:text-[40px] text-[30px] text-white font-extrabold">
            <h1>
              <span className="block">Hi, I'm Khush!</span>
              <span>FRONTEND DEVELOPER</span>
            </h1>
          </div>
        </div>

        <div className="text-center pt-5">
          <div className="text-[#C5C5C5] font-light text-sm px-2.5 md:px-30 lg:px-50 xl:px-130">
            <p>
              I am a frontend developer focused on building modern, responsive,
              and user-friendly web applications. I specialize in creating clean
              UI, seamless user experiences, and scalable frontend solutions
              using modern web technologies.
            </p>
          </div>
        </div>

        <div className="pt-8">
          <div className="flex flex-wrap justify-center gap-5">
            <button className="px-7 py-3 font-semibold bg-white rounded-full cursor-pointer">
              <a href="#contact">Get In Touch</a>
            </button>
            <a href="/Khush Kalariya.pdf" download>
              <button className="px-7 py-3 font-semibold text-white border rounded-full cursor-pointer transition-all duration-100 hover:bg-white/10 hover:text-white hover:backdrop-blur-md hover:border-white/40 hover:shadow-lg">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
