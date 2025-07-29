import { HeroSection } from "@/components/sections/HeroSection";
import { Chapter17 } from "@/components/sections/Chapter17";
import { Chapter18 } from "@/components/sections/Chapter18";
import { Chapter19 } from "@/components/sections/Chapter19";
import { Chapter20 } from "@/components/sections/Chapter20";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <div id="capitulos">
        <Chapter17 />
        <Chapter18 />
        <Chapter19 />
        <Chapter20 />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
