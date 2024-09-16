import React from "react";
import { Button } from "@/app/components/ui/button";
import { motion } from "framer-motion";
import { FaPaperPlane, FaTimes } from "react-icons/fa"; // Importamos los íconos

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="p-8 rounded-md shadow-lg relative bg-white text-black md:w-1/3">
        {/* Botón de cierre con ícono */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
          onClick={onClose}
        >
          <FaTimes className="text-xl" /> {/* Ícono de cierre */}
        </button>

        <h2 className="text-2xl mb-4 text-center font-bold">Contact Me</h2>

        <form>
          <div className="mb-4">
            <input
              placeholder="Name"
              aria-label="name"
              name="name"
              type="text"
              className="w-full p-2 border border-gray-300 rounded bg-white text-black"
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="Email"
              aria-label="email"
              name="email"
              type="email"
              className="w-full p-2 border border-gray-300 rounded bg-white text-black"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Message"
              aria-label="message"
              name="message"
              className="w-full p-2 border border-gray-300 rounded bg-white text-black"
            ></textarea>
          </div>

          {/* Botón de envío con ícono */}
          <Button className="md:w-1/3 mx-auto flex items-center justify-center gap-2" type="submit">
            <FaPaperPlane className="text-sm" /> {/* Ícono de envío */}
            Send Message
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
