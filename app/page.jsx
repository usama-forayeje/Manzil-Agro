import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import PremiumHeroSection from "@/components/hero-section";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <PremiumHeroSection />
      <Footer />
    </div>
  );
}
