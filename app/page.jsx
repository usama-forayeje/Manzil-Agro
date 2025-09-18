import { AboutSection } from "@/components/about";
import { Footer } from "@/components/footer";
import Header from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import ManzilAgroRoadmap from "@/components/roadmap";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ManzilAgroRoadmap />
      <Footer />
    </div>
  );
}
