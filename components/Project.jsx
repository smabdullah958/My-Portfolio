"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Project = () => {
  const Projects = [
    {
      name: "AI Career Assistant",
      image: "/AI_Powered_Career_Assistant.png",
      repo: "https://github.com/smabdullah958/AI-Career-Assistant",
      link: "https://ai-career-assistant-lake.vercel.app/",
      desc: `AI-powered career guidance platform:

• ATS-friendly resume generator  
• AI interview simulator (HR, Technical, CEO)  
• Resume analyzer with ATS score, weaknesses & suggestions`,
    },
    {
      name: "Tourist Website",
      image: "/Tourist App.png",
      repo: "https://github.com/smabdullah958/Ibnsahratravels",
      link: "http://toursite.site/",
      desc: `Travel booking platform:

• Book destinations and travel packages  
• Select transport options (car / bus seat)  
• Smooth UI for trip planning and booking`,
    },
    {
      name: "AI web application",
      image: "/PDFSummary.png",
      repo: "https://github.com/smabdullah958/PdfSummary",
      link: "https://chatsummary.vercel.app/",
      desc: `AI document processing tool:

• Summarizes PDFs in multiple languages  
• Supports short, normal, and long formats  
• Fast AI-based text processing`,
    },
    {
      name: "Digital Marketing Website",
      image: "/Humexa_Adnest.png",
      repo: "https://github.com/smabdullah958/humexaadnestPortfolio",
      link: "https://www.humexaadnest.com",
      desc: `Agency website for client business:

• Modern service-based landing page  
• SEO optimized structure  
• Designed for client conversion`,
    },
    {
      name: "Import Export Website",
      image: "/Portfolio.png",
      repo: "https://github.com/smabdullah958/world-link-company-",
      link: "https://world-link-company-orpin.vercel.app/",
      desc: `Business website for import-export company:

• Company profile and services showcase  
• Clean UI for international clients  
• Product and service presentation`,
    },
    {
      name: "PDF Generator",
      image: "/PDFSummaryGeneratore.png",
      repo: "https://github.com/smabdullah958/PDF_Summary_Generator",
      link: "https://pdf-summary-generator.vercel.app/",
      desc: `AI-powered PDF summarization tool:

• Multi-language support  
• Adjustable summary length (short / medium / long)  
• Structured AI output processing`,
    },
  ];

  return (
    <div
      id="Projects"
      className="w-full bg-gray-900 sm:px-16 px-6 py-10 text-white"
    >
      <h1 className="font-extrabold pb-10 text-center text-3xl sm:text-4xl">
        Latest Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {Projects.map((items, i) => (
          <div
            key={i}
            className="relative group rounded-2xl border-2 border-blue-200 overflow-hidden hover:scale-105 transition-all duration-500"
          >
            {/* IMAGE BACKGROUND */}
            <div className="relative w-full h-72">
              <Image
                src={items.image}
                alt={items.name}
                fill
                className="object-cover"
              />
            </div>

            {/* TITLE (always visible) */}
            <div className="absolute top-0 left-0 w-full p-3 bg-gradient-to-b from-black/70 to-transparent">
              <h2 className="text-lg font-bold">{items.name}</h2>
            </div>

            {/* OVERLAY */}
            <div
              className="
                absolute inset-0 
                bg-black/70 sm:bg-black/80 
                flex flex-col justify-center items-center 
                px-4 text-left
                opacity-100 sm:opacity-0 sm:group-hover:opacity-100
                transition-all duration-300
              "
            >
              <p className="text-xs text-gray-300 whitespace-pre-line">
                {items.desc}
              </p>

              <div className="flex gap-3 mt-5">
                <Link
                  href={items.repo}
                  target="_blank"
                  className="px-4 py-2 bg-gray-700 rounded-lg text-sm hover:bg-gray-600 transition"
                >
                  Code
                </Link>

                <Link
                  href={items.link}
                  target="_blank"
                  className="px-4 py-2 bg-blue-500 rounded-lg text-sm hover:bg-blue-600 transition"
                >
                  Live
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
