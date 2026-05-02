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
  SiPostman,
} from "react-icons/si";

const Skills = () => {
  return (
    <div className="w-full bg-gray-900 text-white py-16 px-6">
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-12">
        My Skills
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Frontend */}
        <div className="bg-gray-800 p-6 rounded-2xl border border-blue-500 hover:scale-105 transition-all duration-500">
          <h2 className="text-xl font-bold text-blue-400 mb-4">Frontend</h2>

          <Skill
            name="React.js"
            icon={<SiReact className="text-blue-400 w-6 h-6" />}
            level={90}
          />
          <Skill
            name="Next.js"
            icon={<SiNextdotjs className="w-6 h-6" />}
            level={85}
          />
          <Skill
            name="Tailwind CSS"
            icon={<SiTailwindcss className="text-sky-400 w-6 h-6" />}
            level={90}
          />
        </div>

        {/* Backend */}
        <div className="bg-gray-800 p-6 rounded-2xl border border-blue-500 hover:scale-105 transition-all duration-500">
          <h2 className="text-xl font-bold text-blue-400 mb-4">Backend</h2>

          <Skill
            name="Node.js"
            icon={<SiNodedotjs className="text-green-500 w-6 h-6" />}
            level={85}
          />
          <Skill
            name="Express.js"
            icon={<SiExpress className="w-6 h-6" />}
            level={90}
          />
          <Skill
            name="MongoDB"
            icon={<SiMongodb className="text-green-400 w-6 h-6" />}
            level={85}
          />
        </div>

        {/* Tools */}
        <div className="bg-gray-800 p-6 rounded-2xl border border-blue-500 hover:scale-105 transition-all duration-500">
          <h2 className="text-xl font-bold text-blue-400 mb-4">Tools</h2>

          <Skill
            name="GitHub"
            icon={<SiGithub className="w-6 h-6" />}
            level={70}
          />
          <Skill
            name="Redux Toolkit"
            icon={<SiRedux className="text-purple-400 w-6 h-6" />}
            level={85}
          />
          <Skill
            name="Postman"
            icon={<SiPostman className="text-orange-400 w-6 h-6" />}
            level={90}
          />
        </div>

        {/* AI */}
        <div className="bg-gray-800 p-6 rounded-2xl border border-blue-500 hover:scale-105 transition-all duration-500">
          <h2 className="text-xl font-bold text-blue-400 mb-4">AI / LLM</h2>

          <Skill
            name="ChatGPT (OpenAI)"
            icon={<SiOpenai className="w-6 h-6" />}
            level={85}
          />
          <Skill
            name="Google Gemini"
            icon={<SiGooglegemini className="w-6 h-6" />}
            level={90}
          />
          <Skill
            name="LangChain"
            icon={<SiLangchain className="w-6 h-6" />}
            level={70}
          />
          <Skill name="Vector DB" icon={<span>🧠</span>} level={80} />
        </div>
      </div>
    </div>
  );
};

/* Skill Component */
const Skill = ({ name, icon, level }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-3 mb-1">
        {icon}
        <span>{name}</span>
      </div>

      <div className="w-full bg-gray-700 h-1 rounded-full">
        <div
          className="bg-blue-500 h-1 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
