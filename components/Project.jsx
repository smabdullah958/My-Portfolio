

import React from 'react'
import Image from 'next/image'

const Project = () => {
  let Projects = [
    {
      name: "E-Commerce Website",
      image: "/e commerce website.jpeg",
      repo:"https://github.com/smabdullah958/Ecommerce_Website"
    },
    {
      name: "Complaint Management System",
      image: "/complaint.png",
      repo:"https://github.com/smabdullah958/CMS_Frontend"
    },
    {
      name: "Mini Client RelationShip Manager",
      image: "/CRM.png",
      repo:"https://github.com/smabdullah958/Mini_CRM"
    },
    {
      name: "Mini Goal Tracker",
      image: "/goal.png",
      repo:"https://github.com/smabdullah958/Goal_Tracker"
    }
  ]

  return (
    <div
      id="Projects"
      className="w-full bg-gray-900 sm:px-16 px-6 py-5 text-white">
      <div>
      <h1
      data-aos="fade-right"
       data-aos-delay="100"      
       data-aos-duration="300"
       className="font-extrabold pb-10 text-center text-3xl sm:text-4xl">
        🚀 Latest Projects
      </h1>

      <div
      
       className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-5">
        {Projects.map((items, i) => (
          <div 
           data-aos="fade-right"
            data-aos-delay="200"      
            data-aos-duration="300"
            key={i}
            className="bg-gray-800 rounded-2xl border-2 border-blue-200 hover:shadow-lg hover:shadow-blue-200  overflow-hidden hover:scale-105 transition-all duration-500 ">
            <div className="relative w-full h-56 ">
              <Image
                src={items.image}
                alt={items.name}
                fill
              />
            </div>
            <div className="p-4 text-center ">
            <h2 className="text-lg sm:text-xl font-bold text-[#ece3e3]">{items.name}</h2>
            <a href={items.repo} target='_blank' className='text-blue-400' >view code</a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Project
