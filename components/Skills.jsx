
import React from "react";
import Image from "next/image";

let Tech = [
  { img: "/js.png", name: "JavaScript" },
  { img: "/react.png", name: "React" },
  { img: "/node.png", name: "Node.js" },
  { img: "/express.png", name: "Express.js" },
  { img: "/mongodb.png", name: "MongoDB" },
  { img: "/tailwind.png", name: "Tailwind CSS" },
  { img: "/redux.png", name: "Redux Toolkit" },
  { img: "/github.png", name: "GitHub" },
];

const Skills = () => {
  return (
    <div
      id="Skills"
      className="w-full bg-gray-900 sm:px-16 px-6 py-16 text-[#ece3e3]"
    >
      <h1  data-aos="fade-right"
            data-aos-delay="200"      
            data-aos-duration="300"
           className="text-center font-bold text-3xl sm:text-4xl mb-12">
        Skills
      </h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {Tech.map((items, i) => (
          <div
           data-aos="fade-right"
            data-aos-delay="200"      
            data-aos-duration="500"

            key={i}
            className="bg-gray-800 rounded-2xl border border-blue-500 p-6 flex flex-col justify-center items-center hover:shadow-lg hover:shadow-blue-100 hover:scale-105 transition-all duration-1000"
          >
            {/* Skill Image */}   
            <div className="relative w-20 h-20 sm:w-32 sm:h-32 mb-4">
              <Image
                src={items.img}
                alt={items.name}
                fill
                className="object-contain"
              />
            </div>

            {/* Skill Name */}
            <p className="text-center text-lg font-medium">{items.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
