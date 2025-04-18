
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import EventTimeline from '@/components/EventTimeline';
import BriefAbout from '@/components/BriefAbout';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <BriefAbout />
        <EventTimeline />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
