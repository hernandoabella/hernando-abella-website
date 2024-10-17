"use client";

import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center  bg-gray-50 text-gray-900 dark:text-gray-100 dark:bg-[#131313] min-h-screen"
    >
      <div className="container flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
            About Me
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 leading-relaxed">
            Hi, I&apos;m Hernando, a passionate Full-Stack Developer with experience
            in designing and building dynamic web applications. My journey in
            development has allowed me to work with a wide variety of
            technologies, solving complex problems and creating innovative
            solutions.
          </p>

          <p className="text-lg sm:text-xl md:text-2xl mb-6 leading-relaxed">
            I&apos;m always exploring new technologies and improving my skills to
            deliver scalable and efficient code. When I&apos;m not coding, you can
            find me learning about the latest tech trends or enjoying some time
            outdoors!
          </p>
        </div>

        {/* Skills Section */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
          {/* Circle Container */}
          <div className="relative w-[500px] h-[500px]  flex items-center justify-center ">
            {/* Using Font Icons inside the circle */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* List of icons with positioning classes */}
              <i className="devicon-html5-plain text-5xl text-green-500 absolute top-10 left-20 animate-pulse" />
              <i className="devicon-css3-plain text-5xl text-green-500 absolute top-20 right-10 animate-pulse" />
              <i className="devicon-sass-plain text-5xl text-green-500 absolute top-32 left-1/2 transform -translate-x-1/2 animate-pulse" />
              <i className="devicon-javascript-plain text-5xl text-green-500 absolute bottom-10 left-1/4 animate-pulse" />
              <i className="devicon-typescript-plain text-5xl text-green-500 absolute bottom-20 right-20 animate-pulse" />
              <i className="devicon-react-original text-5xl text-green-500 absolute top-5 right-1/4 animate-pulse" />
              <i className="devicon-nodejs-plain text-5xl text-green-500 absolute top-40 left-40 animate-pulse" />
              <i className="devicon-php-plain text-5xl text-green-500 absolute bottom-5 right-10 animate-pulse" />
              <i className="devicon-java-plain text-5xl text-green-500 absolute top-1/2 left-1/4 animate-pulse" />
              <i className="devicon-csharp-plain text-5xl text-green-500 absolute bottom-1/4 left-1/4 animate-pulse" />
              <i className="devicon-mongodb-plain text-5xl text-green-500 absolute top-1/4 right-20 animate-pulse" />
              <i className="devicon-mysql-plain text-5xl text-green-500 absolute bottom-10 right-1/4 animate-pulse" />
              <i className="devicon-git-plain text-5xl text-green-500 absolute top-1/4 left-1/4 animate-pulse" />
              <i className="devicon-github-original text-5xl text-green-500 absolute top-1/2 right-10 animate-pulse" />
              <i className="devicon-docker-plain text-5xl text-green-500 absolute bottom-10 left-10 animate-pulse" />
              <i className="devicon-figma-plain text-5xl text-green-500 absolute top-3 left-3 animate-pulse" />
              <i className="devicon-tailwindcss-plain text-5xl text-green-500 absolute top-40 right-1/4 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
