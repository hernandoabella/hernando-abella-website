"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Books from "@/components/Books";
import Resources from "@/components/Resources";
import SideProjects from "@/components/SideProjects";
import Videos from "@/components/Videos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import DarkMode from "@/components/DarkMode";

export default function Home() {
  const [activeContent, setActiveContent] = useState("about");

  const buttonData = [
    { key: "about", label: "About me" },
    { key: "books", label: "Books" },
    { key: "resources", label: "Resources" },
    { key: "sideProjects", label: "Side Projects" },
    { key: "videos", label: "Videos" },
    { key: "contact", label: "Contact" },
  ];

  const renderContent = () => {
    switch (activeContent) {
      case "about":
        return <About />;
      case "books":
        return <Books />;
      case "resources":
        return <Resources />;
      case "sideProjects":
        return <SideProjects />;
      case "videos":
        return <Videos />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <main className="p-5 md:p-10 flex flex-col md:flex-row items-center justify-center md:h-screen">
      <div className="absolute top-10 right-10">
        <DarkMode />
      </div>
      <div className="w-full max-w-screen-md mt-5 md:ml-5 md:w-1/2">
        <Hero />
        <div className="flex flex-wrap gap-5">
          {buttonData.map((button) => (
            <Button
              key={button.key}
              onClick={() => setActiveContent(button.key)}
              className={activeContent === button.key ? "active-btn" : ""}
            >
              {button.label}
            </Button>
          ))}
        </div>
        <Footer />
      </div>
      <div className="mt-5 md:w-1/2">{renderContent()}</div>
    </main>
  );
}
