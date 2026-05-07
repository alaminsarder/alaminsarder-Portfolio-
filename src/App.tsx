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
import { Testimonials } from './components/Testimonials';
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
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-dark-900"
          >
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="w-24 h-24 border-4 border-transparent border-t-primary-500 border-b-accent-500 rounded-full absolute"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="text-3xl font-display font-bold text-white flex items-center gap-1 z-10"
              >
                <span className="text-primary-500">&lt;</span>
                <span className="text-gradient">Dev</span>
                <span className="text-primary-500">/&gt;</span>
              </motion.div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-gray-400 font-medium tracking-widest uppercase text-sm"
            >
              Loading Experience...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative bg-dark-900 text-white min-h-screen overflow-hidden"
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
            <Testimonials />
            <Contact />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;
