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
      <footer className="py-5 flex gap-5">
        <Link href="https://www.x.com/hernandoabella">
          <FaTwitter className="text-3xl" />{" "}
        </Link>
        <Link href="">
          <FaInstagram className="text-3xl" />
        </Link>
        <Link href="">
          <FaYoutube className="text-3xl" />
        </Link>
        <Link href="">
          <FaPinterest className="text-3xl" />
        </Link>
        <Link href="">
          <FaGithub className="text-3xl" />
        </Link>
        <Link href="">
          <FaLinkedin className="text-3xl" />
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
