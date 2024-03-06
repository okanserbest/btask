import HeroSection from "@/components/HeroSection";
import SecontSection from "@/components/SecondSection";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      <SecontSection />
    </main>
  );
}
