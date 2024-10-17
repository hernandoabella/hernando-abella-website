"use client";

import React from "react";
import { FaCode, FaMobileAlt, FaDatabase } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Building modern, responsive websites with the latest web technologies, focusing on performance and user experience.",
      icon: <FaCode className="text-4xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Creating user-friendly mobile applications with a focus on performance and cross-platform compatibility.",
      icon: (
        <FaMobileAlt className="text-4xl text-green-600 dark:text-green-400" />
      ),
    },
    {
      title: "Backend Development",
      description:
        "Designing and implementing scalable and secure backends, APIs, and databases for seamless integration.",
      icon: (
        <FaDatabase className="text-4xl text-purple-600 dark:text-purple-400" />
      ),
    },
  ];

  return (
    <section
      id="services"
      className="flex flex-col justify-center items-center dark:bg-[#131313]"
    >
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
        Services
      </h2>

      {/* Services List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 container">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6  transition-shadow duration-300"
          >
            {/* Icon */}
            <div className="mb-4">{service.icon}</div>

            {/* Service Title */}
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>

            {/* Service Description */}
            <p className="text-gray-700 dark:text-gray-300 text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
