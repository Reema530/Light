import { HeroSection } from '@/components/sections/HeroSection';
import { TransitionSection } from '@/components/sections/TransitionSection';
import { DarkSection } from '@/components/sections/DarkSection';

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <TransitionSection />
      <DarkSection />
    </main>
  );
};

export default Index;
