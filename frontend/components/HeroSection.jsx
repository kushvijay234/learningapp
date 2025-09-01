import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Empower Rural Kids with <span className="text-yellow-300">Tech Skills</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            A platform that bridges the digital divide and helps students gain industry-relevant skills.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg transition">
              Get Started
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black font-semibold py-3 px-6 rounded-lg transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Image / Illustration */}
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1581091870624-39b8e071a0a8?auto=format&fit=crop&w=600&q=80"
            alt="Rural Education"
            className="rounded-xl shadow-lg w-full max-w-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;