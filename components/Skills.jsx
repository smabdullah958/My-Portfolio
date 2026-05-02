import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiRedux,
  SiOpenai,
  SiGooglegemini,
  SiLangchain,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="w-full bg-gray-900 text-white py-16 px-6">
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-12">
        My Skills
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Frontend */}
        <div className="bg-gray-800 p-6 rounded-2xl border border-blue-500 hover:scale-105 transition-all duration-700">
          <h2 className="text-xl font-bold text-blue-400 mb-4">Frontend</h2>

          <div className="flex items-center gap-3 mb-2">
            <SiReact className="text-blue-400 size-8" /> React.js
          </div>

          <div className="flex items-center gap-3 mb-2">
            <SiNextdotjs className="size-8" /> Next.js
          </div>

          <div className="flex items-center gap-3">
            <SiTailwindcss className="text-sky-400 size-8 " /> Tailwind CSS
          </div>
        </div>

        {/* Backend */}
        <div className="bg-gray-800 p-6 rounded-2xl border border-blue-500 hover:scale-105 transition-all duration-700">
          <h2 className="text-xl font-bold text-blue-400 mb-4">Backend</h2>

          <div className="flex items-center gap-3 mb-2">
            <SiNodedotjs className="text-green-500 size-8" /> Node.js
          </div>

          <div className="flex items-center gap-3 mb-2">
            <SiExpress className="size-8" /> Express.js
          </div>

          <div className="flex items-center gap-3">
            <SiMongodb className="text-green-400 size-8" /> MongoDB
          </div>
        </div>

        {/* Tools */}
        <div className="bg-gray-800 p-6 rounded-2xl border border-blue-500 hover:scale-105 transition-all duration-700">
          <h2 className="text-xl font-bold text-blue-400 mb-4">Tools</h2>

          <div className="flex items-center gap-3 mb-2">
            <SiGithub className="size-8" /> GitHub
          </div>

          <div className="flex items-center gap-3">
            <SiRedux className="text-purple-400 size-8 mt-3" /> Redux Toolkit
          </div>
        </div>

        {/* AI */}
        <div className="bg-gray-800 p-6 rounded-2xl border border-blue-500 hover:scale-105 transition-all duration-700">
          <h2 className="text-xl font-bold text-blue-400 mb-4">AI / LLM</h2>

          <div className="flex items-center gap-3 mb-2">
            <SiOpenai /> ChatGPT (OpenAI)
          </div>

          <div className="flex items-center gap-3 mb-2">
            <SiGooglegemini className="size-8" /> Google Gemini
          </div>

          <div className="flex items-center gap-3 mb-2">
            <SiLangchain className="size-8" /> LangChain
          </div>

          <div className="flex items-center gap-3 ">
            {" "}
            <span className="size-8">🧠</span> Vector Databases
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
