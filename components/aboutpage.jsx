
import React from 'react'

const aboutpage = () => {
  return (
    <div id="about"
     className='w-full h-full lg:py-14 bg-gray-900 sm:px-16 px-10  pt-8 md:pt-0 text-[#ece3e3]
     text-xl '>
     <div  
      data-aos="fade-right"
      data-aos-delay="200"      
       data-aos-duration="500">
     <h1 className='text-3xl font-bold pt-5'>About Me</h1>
       
    I am a passionate <span className='text-blue-400 font-bold'>Full Stack Developer </span> specializing in the <span className='text-blue-400 font-bold'>MERN stack</span> (MongoDB, Express.js, React, Node.js).
I create scalable, modern, and user-friendly web applications with clean, maintainable code.
With expertise in both frontend and backend, I focus on seamless UI/UX and secure backend systems.
I enjoy problem-solving, exploring new technologies, and building impactful digital solutions.
Open to both remote and on-site opportunities, my goal is to grow as a developer while helping businesses 
achieve their vision.
</div>
    </div>
  )
}

export default aboutpage
