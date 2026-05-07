import { motion } from 'framer-motion';
import { FaLaptopCode, FaServer, FaMobileAlt, FaPaintBrush, FaBrain } from 'react-icons/fa';

const services = [
  {
    icon: FaLaptopCode,
    title: 'Frontend Development',
    description: 'Pixel-perfect, fast, and responsive user interfaces built with React, Vite, and modern CSS frameworks like Tailwind.',
  },
  {
    icon: FaServer,
    title: 'Full Stack Development',
    description: 'End-to-end web applications featuring scalable Node.js/Express backends and robust database integrations.',
  },
  {
    icon: FaMobileAlt,
    title: 'Responsive Design',
    description: 'Websites that look and function flawlessly across all devices, from massive desktop monitors to mobile phones.',
  },
  {
    icon: FaPaintBrush,
    title: 'UI/UX Design',
    description: 'Intuitive user experiences with modern aesthetics, smooth animations, and thoughtful interactions.',
  },
  {
    icon: FaBrain,
    title: 'Problem Solving',
    description: 'Tackling complex algorithmic challenges and optimizing application performance through efficient data structures.',
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 relative bg-dark-900 border-t border-white/5">
      <div className="absolute inset-0 bg-dark-900 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-primary-500/5 blur-[150px] -left-64 top-1/2 -translate-y-1/2 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Leveraging my skills in both design and development to deliver comprehensive digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 group border border-white/10 hover:border-primary-500/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="w-16 h-16 rounded-2xl bg-dark-800 border border-white/10 flex items-center justify-center text-primary-500 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary-500/20">
                <service.icon className="text-3xl" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
