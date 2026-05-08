import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaDownload,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { ParticlesBackground } from './ParticlesBackground';

const socialLinks = [
  {
    icon: FaGithub,
    href: 'https://github.com/alaminsarder',
    color: 'hover:text-gray-400',
  },
  {
    icon: FaLinkedin,
    href: 'https://linkedin.com',
    color: 'hover:text-blue-500',
  },
  {
    icon: FaFacebook,
    href: 'https://facebook.com/youralamin',
    color: 'hover:text-blue-600',
  },
  {
    icon: FaEnvelope,
    href: 'mailto:alamin.pub.24th@gmail.com',
    color: 'hover:text-red-500',
  },
];

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
    >
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          {/* Status */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 w-max backdrop-blur-lg">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary-500"></span>
            </span>

            <span className="text-sm text-gray-300 font-medium">
              Available for work
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">AL Amin Sarder</span>
          </h1>

          {/* Typewriter */}
          <div className="text-xl md:text-3xl font-semibold text-gray-300 h-16">
            <Typewriter
              words={[
                'CSE Student',
                'Competitive Programmer',
                'Full-Stack Web Developer',
                'React Developer',
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>

          {/* Description */}
          <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
            Passionate CSE student and full-stack web developer focused on
            creating modern, responsive, and user-friendly applications with
            clean UI, smooth animations, and scalable architecture.
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-400">
            <FaMapMarkerAlt className="text-primary-400" />
            <span>Bogura, Bangladesh</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="#contact"
              className="group relative px-8 py-3 bg-gradient-primary text-white rounded-full font-medium overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Me
                <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a
              href="/resume.pdf"
              download
              className="group px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition-all flex items-center gap-2"
            >
              <FaDownload className="group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                className={`text-2xl text-gray-400 transition-colors ${social.color}`}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Side Image (✅ Mobile এও দেখাবে) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative block"
        >
          <div className="relative w-64 sm:w-80 md:w-full aspect-square max-w-md mx-auto">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-[100px] opacity-30 animate-pulse" />

            {/* Image */}
            <div className="relative z-10 w-full h-full rounded-full border-2 border-white/10 overflow-hidden glass p-2">
              <img
                src="https://i.ibb.co.com/Dd8b2BN/IMG-1629.jpg"
                alt="MD AL Amin Sarder"
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};