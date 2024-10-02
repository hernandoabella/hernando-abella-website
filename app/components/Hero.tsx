import React from "react";
import Image from "next/image";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-center">
      <div>
        <div className="rounded p-2 bg-gradient-to-b from-cyan-600 to-cyan-400">
          <Image
            className="rounded"
            src="/profile.jpg"
            width={150}
            height={150}
            alt="profile"
            priority
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold my-10">
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-cyan-600 from-cyan-400">
              <span className="text-gray-200">
                <ReactTyped
                  strings={[
                    "Hey there!",
                    "I'm Hernando.",
                    "Full-Stack Dev",
                    "ノಠ益ಠ)ノ",
                    "(*´▽｀*)",
                    "(*￣m￣)",
                    "¯\\_(ツ)_/¯",
                  ]}
                  typeSpeed={30}
                  backSpeed={30}
                  startDelay={1000}
                  loop
                />
              </span>
            </span>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
