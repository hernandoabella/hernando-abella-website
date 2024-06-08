import React from "react";
import Image from "next/image";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center gap-10 mb-10">
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
          <h1 className="text-5xl font-extrabold dark:text-white">
            👋{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-600 from-orange-400">
              Hey there!
            </span>{" "}
            I&apos;m Hernando.
          </h1>
          <h3 className="py-5 text-4xl font-bold dark:text-white">
            👨‍💻{" "}
            <span className="underline underline-offset-3 decoration-8 decoration-orange-400 dark:decoration-orange-600">
              <ReactTyped
                strings={[
                  "Creative Full-Stack Developer",
                  "Front-end Developer",
                  "Back-end Developer",
                  "UI/UX Designer",
                  "Tech Enthusiast"
                ]}
                typeSpeed={60}
                backSpeed={70}
                startDelay={1000}
                loop
              />
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
