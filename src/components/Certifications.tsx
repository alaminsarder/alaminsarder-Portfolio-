import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const certificates = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Aug 2024',
    icon: FaCertificate,
    link: '#',
  },
  {
    title: 'Meta Front-End Developer',
    issuer: 'Coursera',
    date: 'Jan 2024',
    icon: FaCertificate,
    link: '#',
  },
  {
    title: 'MongoDB Node.js Developer',
    issuer: 'MongoDB University',
    date: 'Nov 2023',
    icon: FaCertificate,
    link: '#',
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative bg-dark-800 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications and courses I've completed to advance my skills and validate my knowledge.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 border border-white/5 hover:border-primary-500/30 transition-all flex flex-col h-full group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 bg-primary-500/10 text-primary-500 rounded-lg group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                  <cert.icon className="text-2xl" />
                </div>
                <a href={cert.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <FaExternalLinkAlt />
                </a>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-gray-400 font-medium mb-1">{cert.issuer}</p>
              <p className="text-sm text-gray-500 mt-auto">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
