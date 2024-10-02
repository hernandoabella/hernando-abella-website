"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Hero from "@/app/components/Hero";
import Footer from "@/app/components/Footer";
// import ParticlesComponent from "./components/particles";
import NavigationButtons from "./components/NavigationButtons";
import BonusBtn from "./components/BonusBtn";

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
    <main className="flex flex-col md:flex-row items-center justify-center">
      {/* <ParticlesComponent id="particles" /> */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="rounded p-10 bg-gradient-to-t from-cyan-500 lg:w-1/2 mx-auto w-screen">
          <BonusBtn />
          <Hero />
          <Footer />
          <NavigationButtons
            showContactForm={showContactForm}
            showServices={showServices}
            toggleContactForm={toggleContactForm}
            toggleServices={toggleServices}
          />
        </div>
      </motion.div>
    </main>
  );
}
