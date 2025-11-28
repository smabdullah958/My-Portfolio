
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Project = () => {
  let Projects = [
    {
      name: "Tourist Website",
      image:"/Tourist App.png",
      repo:"https://github.com/smabdullah958/Ibnsahratravels",
      link:"https://ibnsahratravels.vercel.app/"
    },{
      name: "Porfolio Website",
      image:"/Portfolio.png",
      repo:"https://github.com/smabdullah958/world-link-company-",
      link:"https://world-link-company-orpin.vercel.app/"
    },{
      name: "E-Commerce Website",
      image: "/e_commerce_website.jpeg",
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
    },{
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
          data-aos="fade-down"
          data-aos-delay="200"
          data_aos-duration="500"
       className="font-extrabold pb-10 text-center text-3xl sm:text-4xl">
        🚀 Latest Projects
      </h1>

      <div
      
       className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pb-5">
        {Projects.map((items, i) => (
          <div 
           data-aos="fade-right"
            data-aos-delay="200"      
            data-aos-duration="700"
            key={i}
            style={{
              transition: 'all 0.3s ease-in-out'
            }}
            className="bg-gray-800 rounded-2xl border-2 border-blue-200 hover:shadow-lg hover:shadow-blue-200  overflow-hidden hover:scale-105 transition-all  ">
            <div className="relative w-full h-56 ">
              <Image
                src={items.image}
                alt={items.name}
                fill
              />
            </div>
            <div className="p-4 text-center ">
            <h2 className="text-lg sm:text-xl font-bold text-[#ece3e3]">{items.name}</h2>
                         <div className="flex flex-col gap-2">
                <Link 
                  href={items.repo} 
                  target='_blank' 
                  className='inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg border border-blue-400 hover:border-blue-300 transition-all duration-300 hover:scale-105 group'
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>View Code</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                {items.link && (
                  <Link 
                    href={items.link} 
                    target='_blank' 
                    className='inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 group'
                  >
                    <span>View Live</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                )}
</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Project
