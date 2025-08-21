// // import React from 'react'
// // import Image from 'next/image'
// // let Tech=[
// //   {
// //     img:"/js.png"
// //   },{
// //     img:"/react1.png"
// //   },{
// //     img:"/node.jpg"
// //   },{
// //     img:"/express1.png"
// //   },{
// //     img:"mongodb.png"
// //   },{
// //     img:"tailwind.png"
// //   },{
// //     img:"/redux toolkit.jpg"
// //   },{
// //     img:"/github.jpeg"
// //   }
// // ]

// // const Skills = () => {
// //   return (
// //     <div
// //     id="Skills"
// //       className="w-full bg-gray-900 sm:px-16 px-6 py-10 text-[#ece3e3]">
// //       <h1 className='text-center font-bold text-2xl sm:text-4xl mb-10'>Skills</h1>
// //       {Tech.map((items, i) => (
// //                 <div
// //                   key={i}
// //                   className="bg-gray-800 rounded-2xl border-2 border-blue-200 hover:shadow-lg hover:shadow-blue-200  overflow-hidden hover:scale-105 transition-all duration-500 ">
// //                   <div className="relative w-full h-56 ">
// //                     <Image
// //                       src={items.img}
// //                       alt="skills"
// //                       fill
// //                     />
// //                   </div>
// //     </div>
// //   ))
// // }
// // </div>
// //   )}
// // export default Skills



// import React from "react";
// import Image from "next/image";

// let Tech = [
//   { img: "/js.png" },
//   { img: "/react.png" },
//   { img: "/node.png" },
//   { img: "/express.png" },
//   { img: "/mongodb.png" },
//   { img: "/tailwind.png" },
//   { img: "/redux_toolkit.png" },
//   { img: "/github.png" },
// ];

// const Skills = () => {
//   return (
//     <div
//       id="Skills"
//       className="w-full bg-gray-900 sm:px-16 px-6 py-16 text-[#ece3e3]"
//     >
//       <h1 className="text-center font-bold text-3xl sm:text-4xl mb-12">
//         Skills
//       </h1>

//       {/* Skills Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3  gap-8">
//         {Tech.map((items, i) => (
//           <div
//             key={i}
//             className="bg-gray-200 rounded-2xl h-44 sm:h-52  border border-blue-400 p-6 flex justify-center items-center hover:shadow-xl hover:shadow-blue-400 hover:scale-105 transition-all duration-500"
//           >
//            <div className="relative w-40 h-40"> 
//               {/* <div className="w-20"> */}
//               <Image
//                 src={items.img}
//                 alt="skill"
//                 fill
//                 className="object-contain"
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;

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
      <h1 className="text-center font-bold text-3xl sm:text-4xl mb-12">
        Skills
      </h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {Tech.map((items, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-2xl border border-blue-500 p-6 flex flex-col justify-center items-center hover:shadow-lg hover:shadow-blue-100 hover:scale-105 transition-all duration-500"
          >
            {/* Skill Image */}
            <div className="relative w-32 h-32 mb-4">
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
