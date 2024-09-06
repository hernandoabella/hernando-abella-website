import React from "react";
import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";

interface ContactFormProps {
  onClose: () => void; // Define the type for the onClose prop
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="form p-8 rounded-md shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={onClose}
        >
          Close
        </button>
        <h2 className="text-2xl mb-4">Contact Me</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium">Name</label>
            <input aria-label="name" name="name"
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <input aria-label="email" name="email"
              type="email"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Message</label>
            <textarea aria-label="message" name="message"
              className="w-full p-2 border border-gray-300 rounded"
              
            ></textarea>
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
