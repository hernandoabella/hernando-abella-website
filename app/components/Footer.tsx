import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import {
  RiTwitterXFill,
  RiInstagramFill,
  RiYoutubeFill,
  RiPinterestFill,
  RiGithubFill,
  RiLinkedinFill,
  RiWhatsappFill,
} from "react-icons/ri";

const icons = [
  { Component: RiTwitterXFill, href: "https://www.x.com/hernandoabella" },
  {
    Component: RiInstagramFill,
    href: "https://www.instagram.com/hernandoabella",
  },
  {
    Component: RiYoutubeFill,
    href: "https://www.youtube.com/c/hernandoabella",
  },
  {
    Component: RiPinterestFill,
    href: "https://www.pinterest.com/hernandoabella",
  },
  { Component: RiGithubFill, href: "https://www.github.com/hernandoabella" },
  {
    Component: RiLinkedinFill,
    href: "https://www.linkedin.com/in/hernandoabella",
  },
  { Component: RiWhatsappFill, href: "https://wa.me/573043932597" },
];

const Footer = () => {
  return (
    <div>
      <footer className="pb-10 flex gap-5 text-center justify-center">
        {icons.map(({ Component, href }, index) => (
          <Link key={index} href={href} passHref>
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
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
