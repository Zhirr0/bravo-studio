import PageReadySignal from "@/components/PageReadySignal";
import Catalyst from "@/components/sections/CatalystSection";
import FolioSection from "@/components/sections/FolioSection";
import HeroSection from "@/components/sections/HeroSection";
import OliviaSection from "@/components/sections/OliviaSection";
import OurVoice from "@/components/sections/OurVoiceSection";
import ParallelSection from "@/components/sections/ParallelSection";
import SharedShader from "@/components/sections/SharedShaderSection";

export default async function Home() {
  await new Promise(r => setTimeout(r, 5000))
  return (
    <div className="home page flex flex-row gap-10 ">
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
