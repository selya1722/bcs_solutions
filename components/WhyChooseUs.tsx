"use client";

import React from "react";

const WhyChooseUs = () => {
  return (
    <section
      id="why-us"
      className="min-h-screen flex flex-col justify-center py-20 px-4 bg-primary-dark text-white bg-gradient-to-b from-primary-dark via-black to-primary-dark"
    >
      <div className="container mx-auto">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-3 animate-fade-in relative">
          Why Choose <span className="text-primary-yellow">BC Security Solutions?</span>
         {/* <div className="w-24 h-1 bg-primary-yellow mx-auto mt-2 rounded-full animate-pulse" />*/}
        </h2>

        {/* Subheading */}
        <p className="text-lg text-center mb-16 max-w-3xl mx-auto text-gray-300 animate-fade-in animation-delay-200">
          Our commitment to excellence sets us apart. Here’s why clients trust us for their security needs.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Card 1 */}
          <div className="group bg-primary-dark border border-gray-700 rounded-xl p-8 text-center shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary-yellow hover:shadow-yellow-500/20 hover:bg-opacity-90">
            <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary-yellow transition-colors">
              Expertise
            </h3>
            <p className="text-gray-400 group-hover:text-white transition-colors">
              Our team consists of highly trained professionals with years of experience in security.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-primary-dark border border-gray-700 rounded-xl p-8 text-center shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary-yellow hover:shadow-yellow-500/20 hover:bg-opacity-90">
            <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary-yellow transition-colors">
              Reliability
            </h3>
            <p className="text-gray-400 group-hover:text-white transition-colors">
              We provide consistent, dependable services to ensure your peace of mind.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-primary-dark border border-gray-700 rounded-xl p-8 text-center shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary-yellow hover:shadow-yellow-500/20 hover:bg-opacity-90">
            <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary-yellow transition-colors">
              Tailored Solutions
            </h3>
            <p className="text-gray-400 group-hover:text-white transition-colors">
              Customized security plans designed to meet your specific requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
