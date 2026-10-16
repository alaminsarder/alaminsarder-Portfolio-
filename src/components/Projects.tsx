import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaAndroid } from 'react-icons/fa';

const projects = [
  {
    title: 'StreetFix',
    description:
      'A platform where people can report local issues — potholes, broken streetlights, damaged roads — and actually track what happens to the report, instead of it disappearing into a void.',
    image:
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1000',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind', 'Google Maps API'],
    github: 'https://github.com/alaminsarder/StreetFix',
    live: 'https://streetfix-qhie.onrender.com/',
    type: 'web',
  },
  {
    title: 'Smart Farm Sheba',
    description:
      'A mobile app for farmers to monitor crops, manage resources, and track farming activity in real time, without needing to dig through a complicated interface.',
    image:
      'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1000',
    tech: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Material 3'],
    github: 'https://github.com/alaminsarder/Smart-Farm-Sheba',
    live: 'https://github.com/alaminsarder/Smart-Farm-Sheba',
    type: 'android',
  },
  {
    title: 'AgriMonitor',
    description:
      'A desktop tool built in Java for farmers to keep track of crop activity, irrigation, and pesticide usage, and to calculate costs, sales, and profit in one place.',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1000',
    tech: ['Core Java', 'Java Swing', 'OOP', 'MongoDB'],
    github: 'https://github.com/alaminsarder/AgriMonitor',
    live: 'https://github.com/alaminsarder/AgriMonitor',
    type: 'desktop',
  },
  {
    title: 'BMI Calculator (WinAPI C++)',
    description:
      'A small project built with native Windows API and C++ to calculate Body Mass Index through a lightweight, no-frills desktop GUI.',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1000',
    tech: ['C++', 'WinAPI', 'Windows GUI', 'OOP'],
    github: 'https://github.com/alaminsarder/BMI-Calculator--WinAPI-C-',
    live: 'https://github.com/alaminsarder/BMI-Calculator--WinAPI-C-',
    type: 'desktop',
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 relative bg-white border-t border-gray-100 overflow-hidden"
    >
      {/* Decorative dots */}
      <div className="absolute top-16 right-10 grid grid-cols-5 gap-2 opacity-30 hidden lg:grid">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#1b2a4a]" />
        ))}
      </div>

      <div className="absolute bottom-20 left-10 w-20 h-20 rounded-full border-2 border-rose-300/50 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-rose-500 font-semibold tracking-widest text-sm uppercase mb-3">
            My Work
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1b2a4a]">
            Featured Projects
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            A few projects I've built across web, mobile, and desktop — each
            one taught me something different.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-[#f5f6f8] rounded-2xl overflow-hidden group border border-gray-200 hover:border-rose-300 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-[#1b2a4a]/20 group-hover:bg-transparent transition-all z-10" />

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {project.type === 'android' && (
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-green-500/90 backdrop-blur-md rounded-full text-white text-xs font-semibold shadow-md">
                    <FaAndroid className="text-sm" />
                    Android App
                  </div>
                )}
                {project.type === 'desktop' && (
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-indigo-500/90 backdrop-blur-md rounded-full text-white text-xs font-semibold shadow-md">
                    Desktop App
                  </div>
                )}

                <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                  <a
                    href={project.github}
                    className="p-3 bg-white/90 hover:bg-[#1b2a4a] backdrop-blur-md rounded-full text-[#1b2a4a] hover:text-white transition-colors shadow-md"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <FaGithub className="text-xl" />
                  </a>

                  {project.type === 'web' && (
                    <a
                      href={project.live}
                      className="p-3 bg-white/90 hover:bg-rose-500 backdrop-blur-md rounded-full text-[#1b2a4a] hover:text-white transition-colors shadow-md"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} live demo`}
                    >
                      <FaExternalLinkAlt className="text-xl" />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-serif text-[#1b2a4a] mb-3 group-hover:text-rose-500 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-500 mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-rose-600 bg-rose-50 border border-rose-200 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/alaminsarder"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-md border-2 border-gray-300 text-[#1b2a4a] hover:border-[#1b2a4a] hover:bg-[#1b2a4a] hover:text-white transition-colors font-semibold"
          >
            View All Projects on GitHub
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
};