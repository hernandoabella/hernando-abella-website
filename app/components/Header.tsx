"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importando iconos para el menú móvil

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Para almacenar la sección activa

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Ajusta el umbral para cuando una sección es visible (0.6 = 60%)
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center p-5 border bg-gray-400  backdrop-filter backdrop-blur-sm bg-opacity-5 rounded-xl top-5 relative ">
        {/* Logo o Nombre */}
        <div className="flex items-center gap-1">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-slate-600 via-green-500 to-slate-400 inline-block text-transparent bg-clip-text">
            Hernando Abella
          </h1>
        </div>

        {/* Navegación en Desktop */}
        <nav className="hidden md:flex space-x-8 font-semibold">
          <a
            href="#about"
            className={`text-slate-500 hover:text-green-500 ${
              activeSection === "about" ? "text-blue-500 font-bold" : ""
            }`}
          >
            About
          </a>
          <a
            href="#projects"
            className={`text-slate-500 hover:text-green-500 ${
              activeSection === "projects" ? "text-blue-500 font-bold" : ""
            }`}
          >
            Projects
          </a>
          <a
            href="#services"
            className={`text-slate-500 hover:text-green-500 ${
              activeSection === "services" ? "text-blue-500 font-bold" : ""
            }`}
          >
            Services
          </a>
          <a
            href="#testimonials"
            className={`text-slate-500 hover:text-green-500 ${
              activeSection === "contact" ? "text-blue-500 font-bold" : ""
            }`}
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className={`text-slate-500 hover:text-green-500 ${
              activeSection === "contact" ? "text-blue-500 font-bold" : ""
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Botón del Menú Móvil */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Navegación en Móvil */}
      <div
        className={`md:hidden bg-gray-800 transition-all ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col items-center space-y-4 p-4">
          <a
            href="#home"
            className={`hover:text-blue-500 ${
              activeSection === "home" ? "text-blue-500 font-bold" : ""
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`hover:text-blue-500 ${
              activeSection === "about" ? "text-blue-500 font-bold" : ""
            }`}
          >
            About
          </a>
          <a
            href="#projects"
            className={`hover:text-blue-500 ${
              activeSection === "projects" ? "text-blue-500 font-bold" : ""
            }`}
          >
            Projects
          </a>
          <a
            href="#services"
            className={`hover:text-blue-500 ${
              activeSection === "services" ? "text-blue-500 font-bold" : ""
            }`}
          >
            Services
          </a>
          <a
            href="#contact"
            className={`hover:text-blue-500 ${
              activeSection === "contact" ? "text-blue-500 font-bold" : ""
            }`}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
