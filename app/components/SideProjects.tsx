"use client";

import React from "react";
import Image from "next/image";

const projects = [
  {
    img: "/1.png", 
    link: "#", 
  },
  {
    img: "/2.png", 
    link: "#", 
  },
  {
    img: "/3.png", 
    link: "#", 
  },
];

const SideProjects = () => {
  return (
    <section className="text-center dark:bg-[#131313] pb-60" id="projects">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
          Side Projects
        </h2>
        <p className="mb-12 text-lg">
          Here are some of my side projects that demonstrate my skills and
          creativity.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
            >
             
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.img}
                  alt={`Project ${index + 1}`}
                  width={100}
                  height={100}
                  className="mx-auto text-center flex justify-center items-center"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SideProjects;
