import { motion } from 'framer-motion';
import { FaArrowUp, FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaHeart } from 'react-icons/fa';
import { animateScroll as scroll, Link as ScrollLink } from 'react-scroll';

const quickLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/alaminsarder', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/alaminsarder04/', label: 'LinkedIn' },
  { icon: FaFacebook, href: 'https://www.facebook.com/youralamin', label: 'Facebook' },
  { icon: FaEnvelope, href: 'mailto:alamin.pub.24th@gmail.com', label: 'Email' },
];

export const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 500, smooth: true });
  };

  return (
    <footer className="relative bg-[#1b2a4a] overflow-hidden">
      {/* Decorative Wave Top */}
      <svg
        className="absolute top-0 left-0 w-full opacity-10 pointer-events-none"
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 50 C 240 90, 480 10, 720 50 C 960 90, 1200 10, 1440 50"
          stroke="#ffffff"
          strokeWidth="1.5"
        />
      </svg>

      {/* Decorative Circle */}
      <div className="absolute top-10 right-16 w-20 h-20 rounded-full border-2 border-rose-400/30 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Section */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            <div
              className="text-3xl font-serif font-bold text-white flex items-center gap-1 cursor-pointer w-max"
              onClick={scrollToTop}
            >
              <span className="text-rose-400">&lt;</span>
              <span>Dev</span>
              <span className="text-rose-400">/&gt;</span>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Passionate CSE student and full-stack web developer crafting
              modern, responsive, and user-friendly digital experiences with
              clean code and thoughtful design.
            </p>

            <div className="flex items-center gap-4 mt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-rose-500 hover:border-rose-500 transition-all duration-300"
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <h4 className="text-white font-serif text-lg mb-1">
              Quick Links
            </h4>

            <ul className="flex flex-col gap-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="text-gray-300 hover:text-rose-400 transition-colors cursor-pointer text-sm flex items-center gap-2 group w-max"
                  >
                    <span className="w-0 group-hover:w-3 h-[1.5px] bg-rose-400 transition-all duration-300" />
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h4 className="text-white font-serif text-lg mb-1">
              Get In Touch
            </h4>

            <div className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:alamin.pub.24th@gmail.com"
                className="text-gray-300 hover:text-rose-400 transition-colors"
              >
                alamin.pub.24th@gmail.com
              </a>
              <span className="text-gray-300">Bogura, Bangladesh</span>
            </div>

            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="mt-2 px-5 py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-md text-sm font-semibold w-max cursor-pointer transition-colors"
            >
              Let's Talk →
            </ScrollLink>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10" />

        {/* Bottom Bar */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-400 text-sm font-medium text-center md:text-left flex items-center gap-1.5 flex-wrap justify-center">
            &copy; {new Date().getFullYear()} Designed & Developed with
            <FaHeart className="text-rose-400 text-xs animate-pulse" />
            by{' '}
            <a
              href="https://www.facebook.com/youralamin"
              target="_blank"
              rel="noreferrer"
              className="text-white font-bold hover:text-rose-400 transition-colors"
            >
              AL AMIN
            </a>
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-11 h-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white hover:bg-rose-500 hover:border-rose-500 transition-all duration-300 group"
          >
            <FaArrowUp className="group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </footer>
  );
};