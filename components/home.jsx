"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import {ReactTyped} from "react-typed";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";   // ✅ important: import CSS

const HomePage = () => {

  useEffect(()=>{
    Aos.init({
       duration:1000,
       once:true,
    });
  },[]);

  return (
    <section
      id="home"
      className="w-full min-h-screen lg:min-h-[60vh] flex items-center justify-center pt-20  bg-gray-900 px-6"  >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <Image
            src="/me2.png"
            alt="My Image"
            data-aos="fade-right"
            data-aos-delay="100"      
            data-aos-duration="500"
            width={350}
            height={350}
            className="rounded-full shadow-lg border-4 border-gray-700 hover:scale-105 transition-all hover:duration-1000"
          />
        </div>

        {/* Right Side - Text */}
        <div
            data-aos="fade-left"
            data-aos-delay="200"      
            data-aos-duration="500"

         className="text-center md:text-left space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            I am <span className="text-blue-400">Syed Muhammad Abdullah</span>
          </h1>

        <p className="text-lg md:text-2xl font-bold text-white">
            I am a{" "}
        <ReactTyped
              strings={[
          "Full Stack Developer",
          "MERN Stack Developer"
        ]}
        className="text-blue-400 font-extrabold"
          typeSpeed={60}
          backSpeed={40}
          backDelay={1500}
          loop
          />
        </p>

          <p className="text-gray-400">
            Passionate about building modern, responsive, and scalable web
            applications.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <a
              href="#Projects"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href="#Contact"
              className="px-6 py-3 bg-gray-800 text-gray-200 font-semibold rounded-lg shadow-md border border-gray-600 hover:bg-gray-700 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
           
        <Link href="/cv.pdf" target="_blank" className=" fixed text-end bottom-4 right-5  z-50 px-4 py-3 bg-[#4e8bca] text-white font-semibold text-xl rounded-2xl  hover:bg-blue-600 transition-all duration-300  ">CV</Link>         
         


    </section>
  );
};

export default HomePage;
