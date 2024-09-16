import React from "react";
import Image from "next/image";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="flex flex-col md:flex-row items-center gap-10 mb-10 mt-10">
        <div className="rounded-full p-2 bg-gradient-to-r from-orange-400 to-orange-600">
          <Image
            className="rounded-full"
            src="/profile.jpg"
            width={180}
            height={180}
            alt="profile"
            priority
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-6xl font-extrabold dark:text-white">
            👋 Hey there! 
          </h1>
          <h2 className="text-2xl md:text-4xl font-extrabold mt-5">
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-600 from-orange-400">
            <span className="decoration-8 decoration-orange-400 dark:decoration-orange-600">
              <ReactTyped
                strings={[
                  "My name is Hernando!",
                  "Full-Stack Developer",
                  "I do Front-end",
                  "ノಠ益ಠ)ノ",
                  "And Back-end",
                  "(*´▽｀*)",
                  "Also UI/UX...",
                  "(*￣m￣)",
                  "It works on my machine",
                  "¯\\_(ツ)_/¯"
                ]}
                typeSpeed={60}
                backSpeed={70}
                startDelay={1000}
                loop
              />
            </span>
            </span>{" "}
          </h2>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
