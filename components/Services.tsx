"use client";

import Link from "next/link";
const Services = () => {
  return (
    <section id= "services" className="min-h-screen bg-[#f5f7ff] text-primary-dark flex flex-col justify-center items-center px-4 py-12">
      <div className="w-full max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#0c1e5b]">Our Services</h2>
        <p className="text-md md:text-lg text-[#2d3b8b] mb-10 max-w-2xl mx-auto">
          Comprehensive security solutions tailored to meet your specific needs with expert personnel and advanced technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div className="flex flex-col items-center">
              <img src="https://img.icons8.com/?size=100&id=85778&format=png&color=000000" alt="Guarding" className="h-10 mb-3" />
              <h3 className="font-semibold text-lg text-[#0c1e5b]">Security Guarding</h3>
              <p className="text-sm text-gray-700 mt-2">
                Professionals trained to protect residences, commercial sites, and more.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div className="flex flex-col items-center">
              <img src="https://img.icons8.com/?size=100&id=Ml64YiVmNgZh&format=png&color=000000" alt="Manpower" className="h-10 mb-3" />
              <h3 className="font-semibold text-lg text-[#0c1e5b]">Man Power Supply</h3>
              <p className="text-sm text-gray-700 mt-2">
                Reliable manpower solutions to address any staffing issues.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all">
            <div className="flex flex-col items-center">
              <img src="https://img.icons8.com/?size=100&id=34578&format=png&color=000000" alt="Event Security" className="h-10 mb-3" />
              <h3 className="font-semibold text-lg text-[#0c1e5b]">Event Security</h3>
              <p className="text-sm text-gray-700 mt-2">
                Ensuring seamless on-screen protection across your event premises.
              </p>
            </div>
          </div>
        </div>

       <Link
            href="/get-a-quote"
            className="inline-block bg-primary-yellow text-primary-dark px-6 py-3 rounded-md font-semibold hover:animate-scale-hover active:scale-95"
          >
            Request a Quote Today
          </Link>
      </div>
    </section>
  );
};

export default Services;
