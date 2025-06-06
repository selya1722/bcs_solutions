"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Why Us", id: "why-us" },
  { label: "Get a Quote", id: "get-a-quote" },
  { label: "Contact", id: "contact-us" },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-primary-dark z-50 shadow-lg transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("home")}>
  <div className="h-12 w-12 overflow-hidden flex items-center justify-center">
   <Image
  src="/images/bclogo.png"
  alt="BC Security Solutions"
  fill={false}
  width={64}
  height={64}
  className="object-contain"
/>
  </div>
 <div className="ml-2 flex flex-col leading-tight font-[Poppins]">
  <span className="text-lg font-semibold text-gray-200 tracking-wide">
    BC Security Solutions
  </span>
  <span className="text-xs font-medium text-gray-400 tracking-wide">
    We Guard Your Happiness
  </span>
</div>

</div>


        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-white hover:text-primary-yellow transition-colors font-medium"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Quote Button Desktop */}
        <a
          href="/get-a-quote"
          className="hidden md:inline-block bg-primary-yellow text-primary-dark px-4 py-2 rounded-md font-semibold transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          Get a Quote
        </a>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu with transition */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <nav
        className={`md:hidden fixed top-16 left-0 w-full bg-primary-dark transition-transform duration-300 ease-in-out z-50 transform ${
          mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
        } px-4 pb-6 pt-2 space-y-4`}
      >
        {navItems.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="block w-full text-left text-white hover:text-primary-yellow font-medium transition-colors"
          >
            {label}
          </button>
        ))}
        <a
          href="/get-a-quote"
          className="block bg-primary-yellow text-primary-dark px-4 py-2 rounded-md font-semibold transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          Get a Quote
        </a>
      </nav>
    </header>
  );
};

export default Header;
