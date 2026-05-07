import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'StreetFix',
    description:
      'A community-driven issue reporting system for urban maintenance. Users can report potholes, broken lights, and track the resolution process in real-time.',
    image:
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1000',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind', 'Google Maps API'],
    github: 'https://github.com/alaminsarder',
    live: 'https://streetfix-qhie.onrender.com/',
  },

  {
    title: 'Premium Book Reader',
    description:
      'Membership-based digital book platform featuring custom e-reader, offline access, progress tracking, and personalized recommendations based on reading history.',
    image:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=1000',
    tech: ['Next.js', 'PostgreSQL', 'Stripe', 'Redux', 'AWS S3'],
    github: 'https://github.com/alaminsarder',
    live: 'https://premium-book-reader.vercel.app/',
  },

  {
    title: 'E-Commerce Platform',
    description:
      'Fully responsive e-commerce application with seamless cart management, secure checkout, admin dashboard, and dynamic product filtering.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000',
    tech: ['React', 'Express', 'MongoDB', 'JWT', 'Tailwind'],
    github: 'https://github.com/alaminsarder',
    live: 'https://github.com/alaminsarder',
  },

  {
    title: 'Refer And Earn App',
    description:
      'Viral marketing platform enabling users to generate unique referral codes, track invites, and earn rewards securely through an automated system.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    tech: ['Vue.js', 'Firebase', 'Node.js', 'Tailwind'],
    github: 'https://github.com/alaminsarder',
    live: 'https://github.com/alaminsarder',
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 relative bg-dark-900 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of my best work in full-stack development, showcasing
            complex problem solving, intuitive UI, and scalable architecture.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card overflow-hidden group border border-white/10 hover:border-primary-500/50 transition-all flex flex-col"
            >
              
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-dark-900/40 group-hover:bg-transparent transition-all z-10" />

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Buttons */}
                <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                  
                  {/* GitHub */}
                  <a
                    href={project.github}
                    className="p-3 bg-dark-900/80 hover:bg-primary-500 backdrop-blur-md rounded-full text-white transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub className="text-xl" />
                  </a>

                  {/* Live */}
                  <a
                    href={project.live}
                    className="p-3 bg-dark-900/80 hover:bg-accent-500 backdrop-blur-md rounded-full text-white transition-colors"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaExternalLinkAlt className="text-xl" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium text-primary-400 bg-primary-900/30 border border-primary-500/20 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/alaminsarder"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition-colors font-medium"
          >
            View All Projects on GitHub
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
};