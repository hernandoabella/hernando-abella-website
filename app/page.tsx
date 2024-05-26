import Hero from "@/app/components/Hero";
import Footer from "@/app/components/Footer";
import DarkMode from "@/app/components/DarkMode";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import {
  FaBook,
  FaYoutube,
  FaEnvelope,
  FaUser,
  FaFolder,
  FaRocket,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="p-5 md:p-10 flex flex-col md:flex-row items-center justify-center md:h-screen">
      <div className="absolute top-10 right-10">
        <DarkMode />
      </div>
      <div>
        <Hero />
        <div className="flex flex-wrap gap-5">
          <Link href="https://github.com/hernandoabella/">
            <Button>
              <FaUser className="mr-2" /> About Me
            </Button>
          </Link>
          <Link href="https://github.com/hernandoabella/">
            <Button>
              <FaFolder className="mr-2" /> Portfolio
            </Button>
          </Link>
          <Link href="https://github.com/hernandoabella/books">
            <Button>
              <FaBook className="mr-2" /> Books
            </Button>
          </Link>
          <Link href="https://github.com/hernandoabella/side-projects">
            <Button>
              <FaRocket className="mr-2" /> Side Projects
            </Button>
          </Link>
          <Link href="https://youtube.com/c/hernandoabella">
            <Button>
              <FaYoutube className="mr-2" /> Videos
            </Button>
          </Link>
          <Link href="mailto:hernandoabella@gmail.com">
            <Button>
              <FaEnvelope className="mr-2" /> Contact Me
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    </main>
  );
}
