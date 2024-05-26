import Link from "next/link";
import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer className="pt-10 flex gap-5 text-center justify-center">
        <Link href="https://www.x.com/hernandoabella">
          <FaTwitter className="text-3xl" />{" "}
        </Link>
        <Link href="https://www.instagram.com/hernandoabella">
          <FaInstagram className="text-3xl" />
        </Link>
        <Link href="https://www.youtube.com/c/hernandoabella">
          <FaYoutube className="text-3xl" />
        </Link>
        <Link href="https://www.pinterest.com/hernandoabella">
          <FaPinterest className="text-3xl" />
        </Link>
        <Link href="https://www.github.com/hernandoabella">
          <FaGithub className="text-3xl" />
        </Link>
        <Link href="https://www.linkedin.com/in/hernandoabella">
          <FaLinkedin className="text-3xl" />
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
