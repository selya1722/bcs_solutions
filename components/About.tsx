"use client";
import Image from "next/image";
import { useState } from "react";

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");

  return (
    <section id= "about" className="py-20 bg-gradient-to-b from-light-gray to-white text-primary-dark">
      <div className="container mx-auto px-6">
        {/* About Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-20">
          <div className="md:w-1/2">
            <Image
              src="/images/about.png"
              alt="About BC Security Solutions"
              width={560}
              height={360}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
          
            <h2 className="text-4xl font-bold mb-8 text-primary-dark mb-14">
              About BC Security Solutions
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              At Best Challengers Security Solutions, we take pride in being a top challenger in the security industry, delivering unmatched expertise in event security, property guarding, and manpower supply. With a firm commitment to professionalism, we tailor our services to meet the unique needs of every client—ensuring peace of mind, safety, and operational excellence at every level.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Our strength stems from leadership. Our Managing Director brings over 20 years of hands-on experience in the security sector, known for leading with integrity, discipline, and strategic foresight. His decades of proven service have shaped our team into one that is highly trained, responsive, and dedicated to securing what matters most.
            </p>
            <p className="text-gray-700 text-lg">
              From safeguarding large-scale public events to providing trusted property guards and dependable manpower for ongoing operations, BC Security Solutions is built on a foundation of trust, reliability, and excellence. We do not just offer security—we provide confidence.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center mb-8  text-grey py-3">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
              <h4 className="text-xl font-bold text-primary-dark mb-2">Professionalism</h4>
              <p className="text-gray-700">Highly trained staff that conducts themselves with utmost professionalism</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
              <h4 className="text-xl font-bold text-primary-dark mb-2">Integrity</h4>
              <p className="text-gray-700">We operate with honesty and transparency in all our dealings</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
              <h4 className="text-xl font-bold text-primary-dark mb-2">Vigilance</h4>
              <p className="text-gray-700">Constant watchfulness to prevent security breaches before they occur</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
              <h4 className="text-xl font-bold text-primary-dark mb-2">Client Satisfaction</h4>
              <p className="text-gray-700">Your peace of mind is our ultimate goal</p>
            </div>
          </div>
        </div>

        {/* Vision & Mission with Tabs */}
        <div>
          <h3 className="text-3xl font-semibold text-center mb-4 bg-gradient-to-r from-primary-dark to-blue-900 text-white py-3 rounded-lg shadow-md">
            Our Vision & Mission
          </h3>
          <p className="text-xl text-center mb-6 max-w-3xl mx-auto text-gray-800">
            Guiding principles that drive our commitment to excellence in security services.
          </p>

          {/* Tabs */}
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setActiveTab("vision")}
              className={`px-6 py-2 rounded-l-full border-t border-l border-b ${
                activeTab === "vision"
                  ? "bg-primary-dark text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Vision
            </button>
            <button
              onClick={() => setActiveTab("mission")}
              className={`px-6 py-2 rounded-r-full border-t border-r border-b ${
                activeTab === "mission"
                  ? "bg-primary-dark text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              Mission
            </button>
          </div>

          {/* Sliding Content */}
          <div className="relative overflow-hidden h-auto min-h-[180px]">
            <div
              className={`transition-transform duration-500 ease-in-out transform flex w-[200%] ${
                activeTab === "vision" ? "translate-x-0" : "-translate-x-1/2"
              }`}
            >
              <div className="w-1/2 px-4">
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <h4 className="text-xl font-bold mb-3 text-primary-dark text-center">
      👁️ Our Vision
    </h4>
    <p className="text-gray-700 text-center">
      To be the most trusted and respected security service provider in Sri Lanka, setting industry standards for excellence, innovation, and integrity in protecting people, property, and assets.
    </p>
    <p className="mt-2 text-gray-700 text-center">
      We envision a society where every individual feels secure and protected, enabling businesses to thrive and communities to prosper in a safe environment.
    </p>
     
  </div>
</div>


              {/* Mission Content */}
              <div className="w-1/2 px-4">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                 <h4 className="text-xl font-bold mb-3 text-primary-dark text-center">
                    🎯 Our Mission
                  </h4>
                  <p className="text-gray-700 text-center">
                    To deliver unmatched security services by empowering our personnel with training, tools, and leadership to serve clients with dedication and purpose. We aim to uphold safety and peace through professionalism, transparency, and client-focused operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
