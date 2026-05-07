import { FaArrowUp } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

export const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

  return (
    <footer className="py-12 relative bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div
          className="text-2xl font-display font-bold text-white flex items-center gap-1 cursor-pointer"
          onClick={scrollToTop}
        >
          <span className="text-primary-500">&lt;</span>
          <span className="text-gradient">Dev</span>
          <span className="text-primary-500">/&gt;</span>
        </div>

        <p className="text-gray-400 text-sm font-medium text-center md:text-left">
          &copy; {new Date().getFullYear()} Designed & Developed by{' '}
          <a
            href="https://www.facebook.com/youralamin"
            target="_blank"
            rel="noreferrer"
            className="text-white font-bold hover:text-primary-400 transition-colors"
          >
            AL AMIN
          </a>
          . All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-white transition-all duration-300 group"
          aria-label="Back to top"
        >
          <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </footer>
  );
};