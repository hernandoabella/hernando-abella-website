"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
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
        return <div>Books content</div>;
      case "resources":
        return <div>Resources</div>;
      case "sideProjects":
        return <div>Side Projects content</div>;
      case "videos":
        return <div>Videos content</div>;
      case "contact":
        return <div>Contact content</div>;
      default:
        return null;
    }
  };

  return (
    <main className="p-5 md:p-10 flex items-center justify-center h-screen">
      <div className="absolute top-10 right-10">
        <DarkMode />
      </div>
      <div className="flex items-center justify-center gap-10 w-full">
        <div className="w-1/2 gap-10">
          <Hero />
          <div className="flex gap-5">
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
        <div className="w-1/2">{renderContent()}</div>
      </div>
    </main>
  );
}
