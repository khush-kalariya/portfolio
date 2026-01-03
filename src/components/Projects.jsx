import React from "react";
import { FaLocationArrow } from "react-icons/fa";

const projectsData = [
  {
    id: 1,
    title: "Moviehub",
    image: "src/assets/image.png",
    link: "https://moviehub-blush.vercel.app/",
  },
  {
    id: 2,
    title: "Trothlabs",
    image: "src/assets/trothlabs.png",
    link: "https://trothlabs.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <div className="w-full h-full pb-24 px-5">
        <div className="text-center uppercase text-white font-extrabold text-[35px] tracking-widest">
          <h1>projects</h1>
        </div>

        <div className="max-w-4xl mx-auto pt-6.75">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden hover:scale-[1.02] transition cursor-pointer">
                  <div className="w-full object-cover">
                    <img src={project.image} alt={project.title} />
                  </div>

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
