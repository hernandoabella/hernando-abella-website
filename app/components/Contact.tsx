import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
    >
      <h2 className="mb-8 text-3xl font-semibold text-center text-gray-800 dark:text-gray-200">
        Contact Me
      </h2>

      <div className="flex items-center mb-6">
        <FaEnvelope className="text-orange-600 text-3xl mr-4" />
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Email
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            hernandoabella@gmail.com
          </p>
        </div>
      </div>

      <div className="flex items-center mb-6">
        <FaPhone className="text-orange-600 text-3xl mr-4" />
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Phone
          </h3>
          <p className="text-gray-600 dark:text-gray-400">(+57) 304-393-2597</p>
        </div>
      </div>

      <div className="flex items-center mb-6">
        <FaMapMarkerAlt className="text-orange-600 text-3xl mr-4" />
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            Address
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Santa Marta, Colombia
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
