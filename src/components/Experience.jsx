import React from "react";
import { FaGitAlt, FaGithub, FaReact } from "react-icons/fa";
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from "react-icons/io5";
import {
  SiBootstrap,
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiVercel,
} from "react-icons/si";
import { FiFigma } from "react-icons/fi";

const icons = [
  { icon: FaGitAlt, className: "text-orange-600", label: "Git" },
  { icon: FaGithub, className: "text-white", label: "GitHub" },
  { icon: FiFigma, className: "text-pink-500", label: "Figma" },
  { icon: IoLogoHtml5, className: "text-orange-500", label: "HTML5" },
  { icon: IoLogoCss3, className: "text-blue-500", label: "CSS3" },
  { icon: SiBootstrap, className: "text-purple-500", label: "Bootstrap" },
  { icon: IoLogoJavascript, className: "text-yellow-400", label: "JavaScript" },
  { icon: SiTailwindcss, className: "text-sky-400", label: "Tailwind CSS" },
  { icon: FaReact, className: "text-cyan-400", label: "React" },
  { icon: SiNextdotjs, className: "text-white", label: "Next.js" },
  { icon: SiVercel, className: "text-white", label: "Vercel" },
  { icon: SiShadcnui, className: "text-white", label: "shadcn/ui" },
];

const Experience = () => {
  return (
    <section className="w-full py-20.5 flex justify-center">
      <div className="text-center">
        <h2 className="text-white tracking-[0.3em] text-xl font-semibold pb-12">
          EXPERIENCE WITH
        </h2>

        <div className="flex items-center justify-center flex-wrap gap-10 text-gray-300 px-5">
          {icons.map(({ icon: Icon, className, label }, index) => (
            <div key={index} className="relative group">
              {/* Icon (UNCHANGED UI) */}
              <Icon
                className={`text-5xl transition-transform duration-100 ease-in-out 
                hover:scale-200 ${className}`}
              />

              {/* Tooltip (NEW) */}
              <span
                className="pointer-events-none absolute top-full left-1/2 mt-5 
                  -translate-x-1/2 whitespace-nowrap
                  rounded-md px-3 py-1 text-[10px] text-white
                  bg-white/10 backdrop-blur-md border border-white/20
                  shadow-lg
                  opacity-0 group-hover:opacity-100 
                  transition-all duration-200"
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
