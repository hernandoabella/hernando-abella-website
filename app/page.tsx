import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Books from "./components/Books";
import BonusBook from "./components/BonusBook";
import CTA from "./components/CTA";
import SideProjects from "./components/SideProjects";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <Hero />
        <About />
        <SideProjects />
        <Services />
        <Testimonials />
        <CTA />
        <Books />
        <BonusBook />
        <Contact />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}
