import React from "react";

const educationData = [
  {
    institute: "Master of Computer Applications (MCA)",
    location: "Rajkot",
    duration: "2023 – 2025",
    college: "B H Gardi College of Engineering and Technology",
  },
  {
    institute: "Bachelor of Computer Applications (BCA)",
    location: "Morbi",
    duration: "2020 - 2023",
    college: "OM VVIM COLLEGE",
  },
];

const Education = () => {
  return (
    <section id="education" className="w-full pb-24 flex justify-center">
      <div className="w-full max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="uppercase text-white font-extrabold text-[35px] tracking-widest">
            Education
          </h1>
        </div>

        <div className="relative lg:p-0 px-4 space-y-10">
          {educationData.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-1">
                <div className="flex justify-between items-center flex-wrap gap-1">
                  <h3 className="text-white font-bold text-[22px]">
                    {item.institute}{" "}
                    <span className="text-xs text-gray-400">
                      ({item.location})
                    </span>
                  </h3>

                  <span className="text-sm text-white">{item.duration}</span>
                </div>

                <p className="text-[#8491A0] text-sm mt-2 leading-relaxed font-normal">
                  {item.college}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
