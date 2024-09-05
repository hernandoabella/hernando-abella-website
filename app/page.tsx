"use client";

import React from "react";
import { motion } from "framer-motion";
import Hero from "@/app/components/Hero";
import Footer from "@/app/components/Footer";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import ParticlesComponent from "./components/particles";
import {
  FaBook,
  FaYoutube,
  FaEnvelope,
  FaUser,
  FaFolder,
  FaRocket,
  FaCalendar,
} from "react-icons/fa";
import { FaServicestack } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="main p-5 md:p-10 flex flex-col md:flex-row items-center justify-center md:h-screen">
      <ParticlesComponent id="particles" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        
        <Hero />
        <motion.div
          className="flex flex-wrap gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link href="https://github.com/hernandoabella/" target="_blank">
            <Button>
              <FaUser className="mr-2" /> About Me
            </Button>
          </Link>
          <Link href="#">
            <Button>
              <FaServicestack className="mr-2" /> Services
            </Button>
          </Link>
          <Link
            href="https://portfolio-hernandoabella.vercel.app/"
            target="_blank"
          >
            <Button>
              <FaFolder className="mr-2" /> Portfolio
            </Button>
          </Link>
          <Link href="https://books-alpha-black.vercel.app/" target="_blank">
            <Button>
              <FaBook className="mr-2" /> Books
            </Button>
          </Link>
          <Link
            href="https://github.com/hernandoabella/side-projects"
            target="_blank"
          >
            <Button>
              <FaRocket className="mr-2" /> Side Projects
            </Button>
          </Link>
          <Link href="https://youtube.com/c/hernandoabella" target="_blank">
            <Button>
              <FaYoutube className="mr-2" /> Videos
            </Button>
          </Link>
          <Link href="https://calendly.com/hernandoabella" target="_blank">
            <Button>
              <FaCalendar className="mr-2" /> Schedule Meet
            </Button>
          </Link>
          <Link href="#">
            <Button>
              <FaEnvelope className="mr-2" /> Contact Me
            </Button>
          </Link>
        </motion.div>
        <Footer />
      </motion.div>
    </main>
  );
}
