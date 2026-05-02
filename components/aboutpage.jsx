import Image from "next/image";
const aboutpage = () => {
  return (
    <div
      id="about"
      className="w-full h-full 2xl:py-14 bg-gray-900 sm:px-16 px-10  pt-8 md:pt-0 text-[#ece3e3] text-xl "
    >
      <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="500">
        <h1 className="text-3xl font-bold pt-5 sm:pt-10 pb-5 text-center">
          About Me
        </h1>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-12">
          <div className="text-justify md:col-span-2 text-[12px] sm:text-sm md:text-[16px] flex-col justify-center items-center content-center order-2 md:order-1">
            I am a{" "}
            <span className="text-blue-400 font-bold">
              AI-Powered MERN Stack Developer
            </span>{" "}
            specializing in building modern, scalable, and intelligent web
            applications using MongoDB, Express.js, React, and Node.js. I focus
            on creating full-stack solutions with clean architecture, responsive
            UI/UX, and secure backend systems. I also integrate AI features into
            web applications to make them smarter and more efficient. I have
            built <span className="text-blue-400 font-bold"> 12+ </span>{" "}
            real-world projects including an{" "}
            <span className="text-blue-400 font-bold">
              AI Career Assistant, a tourism website, and a client-based digital
              marketing platform{" "}
            </span>
            , along with several full-stack applications that strengthened my
            skills in MERN development, API integration, and AI-powered
            features. My goal is to continuously grow as a developer while
            building impactful digital products that solve real-world problems.
          </div>
          <div className="flex justify-center pt-5 order-1 md:order-2">
            <Image
              src="/me (2).jpeg"
              alt="My Image"
              width={200}
              height={200}
              loading="lazy"
              className="rounded-4xl shadow-lg  hover:scale-105 transition-all hover:duration-1000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutpage;
