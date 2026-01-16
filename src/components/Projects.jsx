import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import Myusual from "../assets/4.webp"
import Atozvisioncare from "../assets/1.webp"
import Trothlab from "../assets/2.webp"
import Moviehub from "../assets/5.webp"
import Portfolio from "../assets/3.webp"
import CoffeeTime from "../assets/6.webp"
import GoalTrack from "../assets/7.webp"


// ✅ Vite-safe image imports
// const moviehubImg = new URL("../assets/image.png", import.meta.url).href;
// const myusualImg = new URL("../assets/myusal.png", import.meta.url).href;
// const atozImg = new URL("../assets/atozeyecare.png", import.meta.url).href;
// const portfolioImg = new URL("../assets/portfolio.png", import.meta.url).href;
// const trothlabsImg = new URL("../assets/trothlabs.png", import.meta.url).href;
// const coffeeImg = new URL("../assets/coffetime.png", import.meta.url).href;
// const goalImg = new URL("../assets/goaltrack.png", import.meta.url).href;

const projectsData = [
  {
    id: 1,
    title: "Myusual",
    image: Myusual,
    link: "https://myusual.vercel.app/",
  },
  {
    id: 2,
    title: "AtoZVisionCare",
    image: Atozvisioncare,
    link: "https://github.com/khush-kalariya/AtoZVisionCare",
  },
  {
    id: 3,
    title: "Moviehub",
    image: Moviehub,
    link: "https://moviehub-blush.vercel.app/",
  },
  {
    id: 4,
    title: "PortfolioWebsite",
    image: Portfolio,
  },
  {
    id: 5,
    title: "Trothlabs",
    image: Trothlab,
    link: "https://trothlabs.vercel.app/",
  },
  {
    id: 6,
    title: "Coffee Time",
    image: CoffeeTime,
    link: "https://github.com/khush-kalariya/Foodwebsite/",
  },
  {
    id: 7,
    title: "Goal-Track",
    image: GoalTrack,
    link: "https://github.com/khush-kalariya/Goal-Track",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="w-full pb-24 px-5">
        <h1 className="text-center uppercase text-white font-extrabold text-[35px] tracking-widest">
          Projects
        </h1>

        <div className="max-w-4xl mx-auto pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-48 object-cover "
                  />

                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-400 font-extrabold">
                        CLICK HERE TO VISIT
                      </p>
                      <h3 className="text-white text-xl font-extrabold">
                        {project.title}
                      </h3>
                    </div>

                    <span className="text-white text-lg">
                      <FaLocationArrow />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
