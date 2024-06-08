import Link from "next/link";
import React from "react";
import {
  RiTwitterXFill,
  RiInstagramFill,
  RiYoutubeFill,
  RiPinterestFill,
  RiGithubFill,
  RiLinkedinFill
} from "react-icons/ri";


const Footer = () => {
  return (
    <div>
      <footer className="pt-10 flex gap-5 text-center justify-center">
        <Link href="https://www.x.com/hernandoabella">
          <RiTwitterXFill className="text-3xl" />
        </Link>
        <Link href="https://www.instagram.com/hernandoabella">
          <RiInstagramFill className="text-3xl" />
        </Link>
        <Link href="https://www.youtube.com/c/hernandoabella">
          <RiYoutubeFill className="text-3xl" />
        </Link>
        <Link href="https://www.pinterest.com/hernandoabella">
          <RiPinterestFill className="text-3xl" />
        </Link>
        <Link href="https://www.github.com/hernandoabella">
          <RiGithubFill className="text-3xl" />
        </Link>
        <Link href="https://www.linkedin.com/in/hernandoabella">
          <RiLinkedinFill className="text-3xl" />
        </Link>
      </footer>
    </div>
  );
};

export default Footer;
