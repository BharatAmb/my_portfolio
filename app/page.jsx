import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductionStrip from "@/components/ProductionStrip";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import Credentials from "@/components/Credentials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductionStrip />
        <About />
        <TechStack />
        <Experience />
        <FeaturedProjects />
        <Credentials />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
