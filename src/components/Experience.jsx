import React from "react";
import { FaGitAlt, FaGithub, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from "react-icons/io5";
import { SiBootstrap, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { SiVercel } from "react-icons/si";

const icons = [
  { icon: FaGitAlt, className: "text-orange-600" },
  { icon: FaGithub, className: "text-white" },
  { icon: FiFigma, className: "text-pink-500" },
  { icon: IoLogoHtml5, className: "text-orange-500" },
  { icon: IoLogoCss3, className: "text-blue-500" },
  { icon: SiBootstrap, className: "text-purple-500" },

  { icon: IoLogoJavascript, className: "text-yellow-400" },
  { icon: SiTailwindcss, className: "text-sky-400" },
  { icon: FaReact, className: "text-cyan-400" },
  { icon: SiNextdotjs, className: "text-white" },
  { icon: SiVercel, className: "text-white" },
];

const Experience = () => {
  return (
    <section className="w-full py-20.5 flex justify-center">
      <div className="text-center">
        <h2 className="text-white tracking-[0.3em] text-xl font-semibold pb-12">
          EXPERIENCE WITH
        </h2>

        <div className="flex items-center justify-center flex-wrap gap-10 text-gray-300 px-5">
          {icons.map(({ icon: Icon, className }, index) => (
            <Icon
              key={index}
              className={`text-5xl transition ${className}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
