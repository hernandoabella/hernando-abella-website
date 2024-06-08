import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  RiTwitterXFill,
  RiInstagramFill,
  RiYoutubeFill,
  RiPinterestFill,
  RiGithubFill,
  RiLinkedinFill
} from "react-icons/ri";

const icons = [
  { Component: RiTwitterXFill, href: "https://www.x.com/hernandoabella", delay: 0 },
  { Component: RiInstagramFill, href: "https://www.instagram.com/hernandoabella", delay: 0.2 },
  { Component: RiYoutubeFill, href: "https://www.youtube.com/c/hernandoabella", delay: 0.4 },
  { Component: RiPinterestFill, href: "https://www.pinterest.com/hernandoabella", delay: 0.6 },
  { Component: RiGithubFill, href: "https://www.github.com/hernandoabella", delay: 0.8 },
  { Component: RiLinkedinFill, href: "https://www.linkedin.com/in/hernandoabella", delay: 1 },
];

const Footer = () => {
  return (
    <div>
      <footer className="pt-10 flex gap-5 text-center justify-center">
        {icons.map(({ Component, href, delay }, index) => (
          <Link key={index} href={href} passHref>
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.2 }}
            
              className="text-3xl cursor-pointer hover:text-orange-500"
            >
              <Component />
            </motion.div>
          </Link>
        ))}
      </footer>
    </div>
  );
};

export default Footer;
