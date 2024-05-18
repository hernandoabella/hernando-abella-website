import React from "react";
import { motion } from "framer-motion";

const Videos: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-8"
    >
      <h2 className="mb-5 text-3xl font-semibold text-center">Videos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div whileHover={{ scale: 1.05 }} className="video-container">
          <iframe
            src="https://www.youtube.com/embed/s_wbNHG8HNg?si=sZhPTo8wsuWw_LBQ"
            width="100%"
            height="315"
            frameBorder="0"
            allowFullScreen
            title="Video Player"
          ></iframe>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="video-container">
          <iframe
            src="https://www.youtube.com/embed/Mb9-xJaYMJI?si=LFEXQF5UC32gGeRM"
            width="100%"
            height="315"
            frameBorder="0"
            allowFullScreen
            title="Video Player"
          ></iframe>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="video-container">
          <iframe
            src="https://www.youtube.com/embed/Sh_-Duq0lbw?si=0obE6eocUNdsnvyI"
            width="100%"
            height="315"
            frameBorder="0"
            allowFullScreen
            title="Video Player"
          ></iframe>
        </motion.div>
      </div>

      <div className="text-center mt-8">
        <a
          href="https://www.youtube.com/c/hernandoabella"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-green-500 hover:before:[box-shadow:_20px_20px_20px_30px_#2ecc71] duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-green-500 relative bg-indigo-800 h-16 w-64 border text-left p-3 text-indigo-200 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-orange-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-pink-500 after:right-8 after:top-3 after:rounded-full after:blur-lg">
            More videos
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default Videos;
