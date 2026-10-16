import { motion } from 'framer-motion';
import { FaLaptopCode, FaBrain, FaServer, FaGraduationCap, FaMobileAlt } from 'react-icons/fa';

const stats = [
  { value: '3+', label: 'Years Coding' },
  { value: '15+', label: 'Projects Built' },
  { value: '2500+', label: 'Problems Solved' },
  { value: '15+', label: 'Technologies' },
];

const expertise = [
  {
    icon: FaLaptopCode,
    title: 'Frontend Development',
    desc: 'Crafting responsive, interactive, and pixel-perfect user interfaces with React, Vite, and Tailwind CSS.',
  },
  {
    icon: FaServer,
    title: 'Backend Architecture (MERN)',
    desc: 'Designing secure, scalable REST APIs with Node.js, Express, and MongoDB — the backbone of the MERN stack.',
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile App Development',
    desc: 'Building cross-platform mobile apps with Flutter & Dart, integrated with Firebase and REST APIs.',
  },
  {
    icon: FaBrain,
    title: 'Problem Solving',
    desc: 'Active competitive programmer on Codeforces & LeetCode — solving complex algorithmic challenges daily.',
  },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-100/40 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
      <div className="absolute top-20 left-10 w-28 h-28 opacity-20 hidden lg:block">
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#1b2a4a]" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-rose-500 font-semibold tracking-widest text-sm uppercase">
            Get To Know Me
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1b2a4a] mt-3 mb-4">
            About Me
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A passionate Computer Science student and Full-Stack Developer with a knack
            for creating intuitive, dynamic, and scalable experiences — across web and mobile.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#f5f6f8] border border-gray-200 rounded-xl py-6 text-center hover:border-rose-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="font-serif text-3xl md:text-4xl text-[#1b2a4a]">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-serif text-2xl text-[#1b2a4a]">
              My <span className="text-rose-500">Journey</span>
            </h3>

            <p className="text-gray-500 leading-relaxed">
              My coding journey started back in high school with basic HTML & CSS.
              Since then, I've dived deep into JavaScript, exploring the modern React
              ecosystem and building scalable full-stack applications with the{' '}
              <span className="text-[#1b2a4a] font-semibold">MERN stack</span>{' '}
              (MongoDB, Express, React, Node.js).
            </p>

            <p className="text-gray-500 leading-relaxed">
              I've also expanded into mobile development, building cross-platform
              apps using <span className="text-[#1b2a4a] font-semibold">Flutter</span> and{' '}
              <span className="text-[#1b2a4a] font-semibold">Dart</span> — allowing me to
              deliver complete solutions across web and mobile from a single codebase mindset.
            </p>

            <p className="text-gray-500 leading-relaxed">
              As a competitive programmer, I thrive on solving complex algorithmic
              challenges. This analytical approach heavily influences my development
              process, ensuring robust, efficient, and optimized code in every project.
            </p>

            <div className="pt-4">
              <h4 className="text-lg font-semibold text-[#1b2a4a] mb-4 flex items-center gap-2">
                <FaGraduationCap className="text-rose-500" />
                Education
              </h4>

              <div className="bg-[#f5f6f8] border border-gray-200 border-l-4 border-l-rose-500 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <h5 className="font-serif text-lg text-[#1b2a4a]">
                  B.Sc in Computer Science & Engineering (CSE)
                </h5>

                <p className="text-rose-500 text-sm font-medium mb-2 mt-1">
                  Pundra University of Science & Technology — Expected 2027
                </p>

                <p className="text-gray-500 text-sm leading-relaxed">
                  Pursuing B.Sc in CSE, focusing on Data Structures & Algorithms,
                  Software Engineering, Databases, and Web/Mobile Development.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-6"
          >
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="group bg-white border border-gray-200 rounded-xl p-6 flex gap-6 items-start hover:border-rose-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="shrink-0 p-4 bg-[#f5f6f8] rounded-xl text-[#1b2a4a] group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
                  <item.icon className="text-2xl" />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#1b2a4a] mb-2">
                    {item.title}
                  </h4>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};