import Hero from "@/app/components/Hero";
import Footer from "@/app/components/Footer";
import DarkMode from "@/app/components/DarkMode";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-5 md:p-10 flex flex-col md:flex-row items-center justify-center md:h-screen">
      <div className="absolute top-10 right-10">
        <DarkMode />
      </div>
      <div className="w-full max-w-screen-md mt-5 md:ml-5 md:w-1/2">
        <Hero />
        <div className="flex flex-wrap gap-5">
          <Link href="https://github.com/hernandoabella/"><Button>About Me</Button></Link>
          <Link href="https://github.com/hernandoabella/"><Button>Portfolio</Button></Link>
          <Link href="https://github.com/hernandoabella/books"><Button>Books</Button></Link>
          <Link href="https://github.com/hernandoabella/side-projects"><Button>Side Projects</Button></Link>
          <Link href="https://github.com/hernandoabella/"><Button>Contact Me</Button></Link>

        </div>
        <Footer />
      </div>
    </main>
  );
}
