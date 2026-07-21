import { useEffect, useState } from 'react';
import { BackToTopButton } from '@/components/layout/BackToTopButton';
import { Footer } from '@/components/layout/Footer';
import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { Navbar } from '@/components/layout/Navbar';
import { ScrollProgressBar } from '@/components/layout/ScrollProgressBar';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Education } from '@/components/sections/Education';
import { Experience } from '@/components/sections/Experience';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { FuturisticCursor } from '@/components/ui/FuturisticCursor';

const LOADING_DURATION = 1800;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), LOADING_DURATION);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <FuturisticCursor />
      <LoadingScreen isLoading={isLoading} />
      <ScrollProgressBar />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default App;
