import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="flex items-center gap-10 mb-10">
        <div>
          <Image
            className="rounded-full"
            src="/profile.jpg"
            width={180}
            height={180}
            alt="flag of colombia"
          />
        </div>
        <div>
          <h1 className="text-5xl font-extrabold dark:text-white">
            👋 Hey there! <br /> I&apos;m, Hernando.
          </h1>
          <h3 className="py-5 text-4xl font-bold dark:text-white">
            👨‍💻 Creative Full-Stack Developer
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
