import React from "react";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { FaLaptopCode, FaPenNib, FaServer, FaSearch } from "react-icons/fa";

interface ServicesProps {
  onClose: () => void;
}

const Services: React.FC<ServicesProps> = ({ onClose }) => {
  return (
    <motion.div
      className="relative top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg-white p-8 rounded-md shadow-lg md:w-1/2">
        {/* Botón de cierre en la parte superior derecha */}
        <button
          className="absolute top-2 right-2 text-black hover:text-red-600 transition duration-200"
          onClick={onClose}
        >
          <AiOutlineClose size={24} /> 
        </button>

        <h2 className="text-2xl mb-4 text-center font-bold text-black">Services</h2>

        <ul className="space-y-4 text-black flex flex-col gap-10">
          {/* Web Development */}
          <li className="flex items-center">
            <div>
              <div>
                <FaLaptopCode className="text-5xl mx-auto mb-5" />{" "}
              </div>
              <h3 className="text-lg font-semibold text-center">
                Web Development
              </h3>
              <p className="text-center">
                I offer modern web development services using technologies like
                React, Next.js, and more.
              </p>
            </div>
          </li>

          {/* Landing Page Design */}
          <li className="flex items-center">
            <div>
              <FaPenNib className="text-5xl mx-auto mb-5" />
              <h3 className="text-lg font-semibold text-center">Landing Page Design</h3>
              <p className="text-center">
                I design and develop responsive landing pages that help convert
                visitors into customers.
              </p>
            </div>
          </li>

          {/* Backend Development */}
          <li className="flex items-center">
            <div>
              <FaServer className="text-5xl mx-auto mb-5" />
              <h3 className="text-lg font-semibold text-center">Backend Development</h3>
              <p className="text-center">
                I provide backend solutions using Node.js, Python, and PHP for
                building scalable applications.
              </p>
            </div>
          </li>

          {/* SEO Optimization */}
          <li className="flex items-center">
            <div>
              <FaSearch className="text-5xl mx-auto mb-5" />
              <h3 className="text-lg font-semibold text-center">SEO Optimization</h3>
              <p className="text-center">
                Optimize your website for better search engine rankings and
                improved visibility.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Services;
