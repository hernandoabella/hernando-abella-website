import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { FaUser, FaServicestack, FaFolder, FaBook, FaRocket, FaYoutube, FaCalendar, FaEnvelope } from "react-icons/fa";
import ContactForm from "./ContactForm";
import Services from "./Services";

interface NavigationButtonsProps {
  showContactForm: boolean;
  showServices: boolean;
  toggleContactForm: () => void;
  toggleServices: () => void;
}

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
  showContactForm,
  showServices,
  toggleContactForm,
  toggleServices,
}) => {
  return (
    <>
      <motion.div
        className="flex flex-wrap gap-5 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <Link href="https://github.com/hernandoabella/" target="_blank">
          <Button className="w-48">
            <FaUser className="mr-2" /> About Me
          </Button>
        </Link>
        <Button className="w-48" onClick={toggleServices}>
          <FaServicestack className="mr-2" /> Services
        </Button>
        <Link href="https://portfolio-hernandoabella.vercel.app/" target="_blank">
          <Button className="w-48">
            <FaFolder className="mr-2" /> Portfolio
          </Button>
        </Link>
        <Link href="https://books-alpha-black.vercel.app/" target="_blank">
          <Button className="w-48">
            <FaBook className="mr-2" /> Books
          </Button>
        </Link>
        <Link href="https://github.com/hernandoabella/side-projects" target="_blank">
          <Button className="w-48">
            <FaRocket className="mr-2" /> Side Projects
          </Button>
        </Link>
        <Link href="https://youtube.com/c/hernandoabella" target="_blank">
          <Button className="w-48">
            <FaYoutube className="mr-2" /> Videos
          </Button>
        </Link>
        <Link href="https://calendly.com/hernandoabella" target="_blank">
          <Button className="w-48">
            <FaCalendar className="mr-2" /> Schedule Meet
          </Button>
        </Link>
        <Button className="w-48" onClick={toggleContactForm}>
          <FaEnvelope className="mr-2" /> Contact Me
        </Button>
      </motion.div>

      {showContactForm && <ContactForm onClose={toggleContactForm} />}
      {showServices && <Services onClose={toggleServices} />}
    </>
  );
};

export default NavigationButtons;
