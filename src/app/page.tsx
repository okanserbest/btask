import Navbar from "@/components/navbar";
import HeroSection from "@/components/HeroSection";
import SecontSection from "@/components/SecondSection";
import CaroselSection from "@/components/CaroselSection/CaroselSection";
import ThirdSection from "@/components/ThirdSection";
import FourthSection from "@/components/FourthSection";
import FifthSection from "@/components/FifthSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col">
      <Navbar />
      <HeroSection />
      {/* <SecontSection /> */}
      {/* <ThirdSection /> */}
      {/* <CaroselSection /> */}
      {/* <FourthSection /> */}
      {/* <FifthSection /> */}
      {/* <FooterSection /> */}
    </main>
  );
}
