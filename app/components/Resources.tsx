import React from "react";
import { motion } from "framer-motion";

const Resources = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-8"
    >
      <h2 className="mb-5 text-2xl font-semibold">Resources</h2>

      <div className="mb-8">
        <p className="mb-2">
          🏆 Let&apos;s Grow Up Together! Whether you&apos;re a beginner or an
          experienced developer, here are some handpicked resources to enhance
          your programming journey.
        </p>
        <p className="mb-4">
          Below are guides, references, and programming languages to explore:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Guides and references */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="col-span-3 md:col-span-2"
          >
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Guides and References 📙
              </h3>
              <ul className="list-disc list-inside">
                <li>Programming Paradigms</li>
                <li>Clean Code</li>
                <li>Design Principles</li>
                {/* Add more items as needed */}
              </ul>
            </div>
          </motion.div>

          {/* Programming Languages */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="col-span-3 md:col-span-2"
          >
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Programming Languages 💻
              </h3>
              <ul className="list-disc list-inside">
                <li>JavaScript</li>
                <li>Java</li>
                <li>Python</li>
                {/* Add more items as needed */}
              </ul>
            </div>
          </motion.div>

          {/* Add more sections here */}
        </div>
      </div>

      {/* Button for more resources */}
      <div className="text-center">
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold"
        >
          <div className="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
          <div className="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
          <div className="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
          <div className="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
          <div className="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
          <p className="z-10">More Resources</p>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Resources;
