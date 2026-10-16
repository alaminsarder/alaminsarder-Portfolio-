import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'CP', to: 'cp' },
  { name: 'Projects', to: 'projects' },
  { name: 'Timeline', to: 'timeline' },
  { name: 'Contact', to: 'contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md py-4 border-b border-gray-200 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="home" spy={true} smooth={true} duration={500} className="cursor-pointer">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-serif font-bold text-[#1b2a4a] flex items-center gap-1"
          >
            <span className="text-indigo-500">&lt;</span>
            <span>Dev</span>
            <span className="text-indigo-500">/&gt;</span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              duration={500}
              activeClass="text-indigo-500 font-semibold"
              className="text-gray-500 hover:text-[#1b2a4a] cursor-pointer transition-colors text-sm uppercase tracking-wider font-medium"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full border border-indigo-400 text-indigo-500 hover:bg-indigo-500 hover:text-white transition-colors text-sm font-medium"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-[#1b2a4a]">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-200 overflow-hidden shadow-sm"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 hover:text-[#1b2a4a] cursor-pointer transition-colors text-lg"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="px-5 py-2.5 rounded-full border border-indigo-400 text-indigo-500 hover:bg-indigo-500 hover:text-white transition-colors text-sm font-medium text-center w-max"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};