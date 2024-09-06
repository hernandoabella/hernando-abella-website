"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Hero from "@/app/components/Hero";
import Footer from "@/app/components/Footer";
import ParticlesComponent from "./components/particles";
import NavigationButtons from "./components/NavigationButtons";

export default function Home() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showServices, setShowServices] = useState(false);

  const toggleContactForm = () => {
    setShowContactForm((prev) => !prev);
  };

  const toggleServices = () => {
    setShowServices((prev) => !prev);
  };

  return (
    <main className="main p-5 md:p-10 flex flex-col md:flex-row items-center justify-center md:h-screen">
      {/* <ParticlesComponent id="particles" /> */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="rounded-xl bg-gradient-to-b from-violet-500 p-10">
          <Hero />
          <NavigationButtons
            showContactForm={showContactForm}
            showServices={showServices}
            toggleContactForm={toggleContactForm}
            toggleServices={toggleServices}
          />
          <Footer />
        </div>
      </motion.div>
    </main>
  );
}
