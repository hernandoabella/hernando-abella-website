import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/app/components/ui/button";

interface ServicesProps {
  onClose: () => void;
}

const Services: React.FC<ServicesProps> = ({ onClose }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="bg-white p-8 rounded-md shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={onClose}
        >
          Close
        </button>
        <h2 className="text-2xl mb-4">My Services</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="text-lg font-semibold">Web Development</h3>
            <p>
              I offer modern web development services using technologies like
              React, Next.js, and more.
            </p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">Landing Page Design</h3>
            <p>
              I design and develop responsive landing pages that help convert
              visitors into customers.
            </p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">Backend Development</h3>
            <p>
              I provide backend solutions using Node.js, Python, and PHP for
              building scalable applications.
            </p>
          </li>
          <li>
            <h3 className="text-lg font-semibold">SEO Optimization</h3>
            <p>
              Optimize your website for better search engine rankings and
              improved visibility.
            </p>
          </li>
        </ul>
        <Button className="mt-6" onClick={onClose}>
          Close
        </Button>
      </div>
    </motion.div>
  );
};

export default Services;