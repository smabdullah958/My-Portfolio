const WhyChooseMe = () => {
  const points = [
    "Strong foundation in MERN Stack development",
    "Experience building real-world full-stack applications",
    "Ability to integrate AI into modern web apps",
    "Focus on clean, scalable, and maintainable code",
    "Problem-solving mindset with attention to detail",
    "Continuously learning and adapting to new technologies",
  ];

  return (
    <section id="why" className="w-full bg-gray-900 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Me</h2>

        {/* Subtext */}
        <p className="text-gray-400 mb-10">
          What makes me a strong choice for building modern web applications
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {points.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-5 rounded-xl border border-blue-500 hover:scale-105 transition-all duration-300"
            >
              <p className="flex items-start gap-3">
                <span className="text-blue-400 text-xl">✔</span>
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
