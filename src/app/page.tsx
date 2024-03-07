import CaroselSection from "@/components/CaroselSection/CaroselSection";
import HeroSection from "@/components/HeroSection";
import SecontSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <SecontSection />
      <ThirdSection />
      <CaroselSection />
    </main>
  );
}
