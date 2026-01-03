import React from "react";

const experiences = [
  {
    company: "Troth Labs",
    location: "Rajkot",
    duration: "January 2025 – June 2025",
    role: "React.js Developer Intern",
    description:
      "I worked as a frontend developer focused on building modern, responsive, and user-friendly web applications. I specialized in creating clean UI, seamless user experiences, and scalable frontend solutions using modern web technologies.",
  },
];

const Companyexperience = () => {
  return (
    <section id="Companyexperience" className="w-full pb-24 flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="uppercase text-white font-extrabold text-[35px] tracking-widest">
            Experience
          </h1>
        </div>

        <div className="relative lg:p-0 px-4 space-y-10">
          {experiences.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-1">
                <div className="flex justify-between items-center flex-wrap gap-1">
                  <h3 className="text-white font-bold text-[22px]">
                    {item.company}{" "}
                    <span className="text-xs text-gray-400">
                      ({item.location})
                    </span>
                  </h3>

                  <span className="text-sm text-white">{item.duration}</span>
                </div>

                <p className="text-[#8491A0] text-base font-medium mt-2">
                  ({item.role})
                </p>

                <p className="text-[#8491A0] text-sm mt-2 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companyexperience;
