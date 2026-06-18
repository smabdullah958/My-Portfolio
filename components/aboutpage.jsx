
import Image from "next/image";

const AboutPage = () => {
  return (
    <div
      id="about"
      className="w-full h-full 2xl:py-14 bg-gray-900 sm:px-16 px-10 pt-8 md:pt-0 text-[#ece3e3] text-xl"
    >
      <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="500">
        <h1 className="text-3xl font-bold pt-5 sm:pt-10 pb-5 text-center">
          About Me
        </h1>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-12">
          <div className="text-justify md:col-span-2 text-[14px] sm:text-[16px] flex flex-col justify-center order-2 md:order-1 space-y-4">
            <p>
              I am an{" "}
              <span className="text-blue-400 font-bold">
                Full Stack Developer with AI Integration
              </span>{" "}
              focused on building intelligent, scalable applications. With{" "}
              <span className="text-blue-400 font-bold">
                6+ real-world projects
              </span>
              , including AI-based applications and real client work, which has
              helped me gain strong hands-on experience in both frontend and
              backend development.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm md:text-base">
              <li className="flex items-center gap-2">
                <span className="text-blue-400">▹</span> <b>Full-Stack:</b> MERN
                + Next.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">▹</span> <b>AI Integration:</b>{" "}
                Gemini API & LLMs
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">▹</span> <b>Agency Ready:</b>{" "}
                White-label services
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">▹</span> <b>Performance:</b> SEO
                & Speed optimized
              </li>
            </ul>

            <p className="text-sm md:text-base text-gray-400 italic">
              From an AI Career Assistant to professional Marketing Platforms, I
              deliver clean architecture and secure backend systems that solve
              real business problems.
            </p>
          </div>

          <div className="flex justify-center pt-5 order-1 md:order-2">
            <Image
              src="/me.jpeg"
              alt="Syed Muhammad Abdullah"
              width={220}
              height={220}
              loading="lazy"
              className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500 border-2 border-blue-400/30"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
