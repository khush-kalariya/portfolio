import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="w-full flex justify-center bg-[#191919]">
      <div className="w-full max-w-4xl py-21 lg:px-0 px-5">
        <h1 className="text-white text-2xl font-bold mb-6">Contact</h1>

        <p className="text-gray-400 max-w-xl text-sm leading-relaxed mb-6">
          Frontend Developer specializing in React.js, focused on building
          clean, responsive, and user-centric web interfaces. Passionate about
          modern web technologies, performance, and continuous learning.
        </p>

        <div className="flex flex-col gap-3 text-gray-300 mb-8">
          <div className="flex items-center gap-2">
            <MdEmail size={30} className="text-lg" />
            <a
              href="mailto:khushpatel9532@gmail.com"
              className="text-base hover:text-gray-400 transition"
            >
              khushpatel9532@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <MdPhone size={30} className="text-lg" />
            <a
              href="tel:+916353620241"
              className="text-base hover:text-gray-400 transition"
            >
              +91 63536 20241
            </a>
          </div>
        </div>

        <div className="flex gap-6 text-white text-lg">
          <a
            href="https://www.linkedin.com/in/khush-kalariya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaLinkedin size={36} className="cursor-pointer" />
          </a>

          <a
            href="https://github.com/khush-kalariya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub size={36} className="cursor-pointer" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
