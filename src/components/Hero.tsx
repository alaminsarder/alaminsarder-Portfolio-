import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
} from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/alaminsarder' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/alaminsarder04/' },
  { icon: FaFacebook, href: 'https://facebook.com/youralamin' },
  { icon: FaEnvelope, href: 'mailto:alamin.pub.24th@gmail.com' },
];

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-[#eceef1] flex items-center pt-20"
    >
      {/* Decorative Circle - Top Left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-24 left-10 w-20 h-20 rounded-full border-2 border-rose-300/60 hidden md:block"
      />

      {/* Decorative Dots */}
      <div className="absolute top-40 right-20 grid grid-cols-5 gap-2 hidden lg:grid opacity-40">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#1b2a4a]" />
        ))}
      </div>

      {/* Decorative Wave Lines - Bottom */}
      <svg
        className="absolute bottom-0 left-0 w-full opacity-70 pointer-events-none"
        viewBox="0 0 1440 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 120 C 240 180, 480 60, 720 120 C 960 180, 1200 60, 1440 120"
          stroke="#c9ced6"
          strokeWidth="1.5"
        />
        <path
          d="M0 150 C 240 210, 480 90, 720 150 C 960 210, 1200 90, 1440 150"
          stroke="#d7dce3"
          strokeWidth="1.5"
        />
        <path
          d="M0 180 C 240 240, 480 120, 720 180 C 960 240, 1200 120, 1440 180"
          stroke="#e2e6ec"
          strokeWidth="1.5"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center relative z-10 w-full">
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1b2a4a] leading-[1.15]">
            Hi, I'm <br />
            AL Amin Sarder
          </h1>

          <div className="text-xl md:text-2xl font-semibold text-gray-500 h-10">
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
              cursorColor="#d9534f"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>

          <p className="text-gray-500 text-lg max-w-lg leading-relaxed">
            I'm a Computer Science student who builds full-stack web apps
            with the MERN stack and is currently picking up Flutter for
            mobile development. Outside of coding, you'll usually find me
            solving problems on Codeforces or LeetCode.
          </p>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            <span>Bogura, Bangladesh</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-[#d9534f] hover:bg-[#c7453f] text-white rounded-md font-semibold transition-colors shadow-lg shadow-rose-500/20"
            >
              Hire Me
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 bg-transparent border-2 border-gray-300 hover:border-[#1b2a4a] text-[#1b2a4a] rounded-md font-semibold transition-colors"
            >
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-4 mt-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:text-white hover:bg-[#1b2a4a] hover:border-[#1b2a4a] transition-all duration-300"
              >
                <social.icon className="text-lg" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute -top-5 -right-5 w-full h-full rounded-full border-2 border-rose-300/50 -z-10" />

            <div className="relative w-full h-full rounded-full bg-[#2a2a2a] p-3 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="https://i.ibb.co.com/Dd8b2BN/IMG-1629.jpg"
                  alt="MD AL Amin Sarder"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-rose-500 shadow-lg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};