import Header from "../components/ui/Header";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
import Footer from "../components/ui/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden pt-24 ">
      <Header />
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <HeroSection />
      </div>
      <div className="section-container py-20">
        <AboutSection />
      </div>
      <div className="section-container py-20">
        <ProjectsSection />
      </div>
      <div className="section-container py-20">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
