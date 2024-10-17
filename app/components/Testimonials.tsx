"use client";

import React from "react";
import Image from "next/image";

const testimonialsData = [
  {
    name: "Raj Kachu",
    feedback:
      "Hernando built our company website from the ground up. His expertise in full-stack development and attention to detail made the entire process seamless. Our website now runs faster and looks more professional than ever.",
    image: "/raj.jfif", // Replace with actual image path
    website: "thevplan.com",
  },

  {
    name: "Nelson Daza",
    feedback:
      "I trusted Hernando with redesigning our  website, and I couldn't be happier with the results. The site is visually appealing, user-friendly, and mobile-optimized. His expertise in web technologies is top-notch.",
    image: "/nelson.jfif", // Replace with actual image path
    website: "aluna-publishing-house.com",
  },
  {
    name: "Gabriel Martínez",
    feedback:
      "Working with Hernando on our e-commerce platform was an excellent experience. He not only delivered high-quality code but also implemented features that boosted our user engagement.",
    image: "/gabriel.jpg", // Replace with actual image path
    website: "la-gir.com",
  },
];

const Testimonials = () => {
  return (
    <section className="py-10 dark:bg-[#131313]">
      <div className="container mb-60">
        <h2 className="text-3xl font-bold mb-6">What my clients say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-lg text-center transition-transform transform hover:scale-105"
            >
              {/* Rounded Image */}
              <div className="mb-4 flex justify-center items-center">
                <Image
                  src={testimonial.image}
                  width={100}
                  height={100}
                  className="rounded-full object-fill"
                  alt={testimonial.name}
                />
              </div>

              {/* Feedback */}
              <p className="text-lg italic mb-4">"{testimonial.feedback}"</p>

              {/* Name */}
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>

              {/* Website */}
              <a
                href={testimonial.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:underline"
              >
                {testimonial.website}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
