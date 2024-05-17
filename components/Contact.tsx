import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="mb-8 text-3xl font-semibold text-center text-gray-800">
        Contact Us
      </h2>

      <div className="flex items-center mb-6">
        <FaEnvelope className="text-indigo-600 text-3xl mr-4" />
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Email</h3>
          <p className="text-gray-600">contact@example.com</p>
        </div>
      </div>

      <div className="flex items-center mb-6">
        <FaPhone className="text-indigo-600 text-3xl mr-4" />
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
          <p className="text-gray-600">(123) 456-7890</p>
        </div>
      </div>

      <div className="flex items-center mb-6">
        <FaMapMarkerAlt className="text-indigo-600 text-3xl mr-4" />
        <div>
          <h3 className="text-xl font-semibold text-gray-800">Address</h3>
          <p className="text-gray-600">123 Example Street, City, Country</p>
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="px-8 py-3 text-white bg-indigo-600 rounded-full shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Contact;
