import { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { CompetitiveProgramming } from './components/CompetitiveProgramming';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Certifications } from './components/Certifications';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#eceef1]"
          >
            {/* Decorative circle */}
            <div className="absolute top-16 left-16 w-40 h-40 rounded-full border-2 border-rose-300/40 hidden md:block" />
            <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full border-2 border-[#1b2a4a]/10 hidden md:block" />

            <div className="relative flex items-center justify-center">
              {/* Outer spinning ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="w-28 h-28 border-[3px] border-transparent border-t-rose-500 border-b-[#1b2a4a] rounded-full absolute"
              />
              {/* Inner pulse ring */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-20 h-20 border border-rose-300/60 rounded-full absolute"
              />
              {/* Logo */}
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="text-3xl font-serif font-bold flex items-center gap-0.5 z-10"
              >
                <span className="text-rose-500">&lt;</span>
                <span className="text-[#1b2a4a]">Dev</span>
                <span className="text-rose-500">/&gt;</span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-10 text-gray-500 font-medium tracking-[0.25em] uppercase text-xs"
            >
              Loading Experience...
            </motion.p>

            {/* Progress bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 160 }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
              className="mt-6 h-[2px] bg-gradient-to-r from-[#1b2a4a] to-rose-500 rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-[#eceef1] min-h-screen overflow-hidden"
        >
          <CustomCursor />
          <ScrollProgress />
          <Navbar />

          <main>
            <Hero />
            <About />
            <Skills />
            <CompetitiveProgramming />
            <Projects />
            <Timeline />
            <Certifications />
            <Services />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;