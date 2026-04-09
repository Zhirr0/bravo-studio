import { connection } from "next/server";
import PageReadySignal from "@/components/PageReadySignal";
import Catalyst from "@/components/sections/CatalystSection";
import FolioSection from "@/components/sections/FolioSection";
import HeroSection from "@/components/sections/HeroSection";
import OliviaSection from "@/components/sections/OliviaSection";
import OurVoice from "@/components/sections/OurVoiceSection";
import ParallelSection from "@/components/sections/ParallelSection";
import SharedShader from "@/components/sections/SharedShaderSection";

export default async function Home() {
  await connection(); // tells the website to not cache data, we are gonna keep this for now to see how long loading look like 
  await new Promise(r => setTimeout(r, 3000));
  
  return (
    <div className="home page flex flex-row gap-10">
      <PageReadySignal />
      <HeroSection />
      <Catalyst />
      <OurVoice />
      <SharedShader />
      <ParallelSection />
      <FolioSection />
      <OliviaSection />
    </div>
  );
}