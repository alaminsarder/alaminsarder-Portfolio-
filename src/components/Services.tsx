import { motion } from 'framer-motion';
import {
  FaLaptopCode,
  FaServer,
  FaMobileAlt,
  FaPaintBrush,
  FaBrain,
  FaArrowRight,
} from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';

const services = [
  {
    number: '01',
    icon: FaLaptopCode,
    title: 'Frontend Development',
    description:
      'Pixel-perfect, fast, and responsive user interfaces built with modern frameworks and best practices in component architecture.',
    tags: ['React', 'Vite', 'Tailwind CSS'],
    featured: true,
  },
  {
    number: '02',
    icon: FaServer,
    title: 'Full Stack Development',
    description:
      'End-to-end web applications featuring scalable backends, RESTful APIs, and robust database integrations using the MERN stack.',
    tags: ['MERN Stack', 'Node.js', 'MongoDB'],
    featured: false,
  },
  {
    number: '03',
    icon: SiFlutter,
    title: 'Mobile App Development',
    description:
      'Cross-platform mobile applications with smooth performance, native-like UI, and real-time backend integration.',
    tags: ['Flutter', 'Dart', 'Firebase'],
    featured: false,
  },
  {
    number: '04',
    icon: FaMobileAlt,
    title: 'Responsive Design',
    description:
      'Websites that look and function flawlessly across all devices, from desktop monitors to mobile phones.',
    tags: ['Mobile-First', 'Cross-Browser'],
    featured: false,
  },
  {
    number: '05',
    icon: FaPaintBrush,
    title: 'UI/UX Design',
    description:
      'Intuitive user experiences with modern aesthetics, smooth animations, and thoughtful micro-interactions.',
    tags: ['Figma', 'Prototyping'],
    featured: false,
  },
  {
    number: '06',
    icon: FaBrain,
    title: 'Problem Solving',
    description:
      'Tackling complex algorithmic challenges and optimizing application performance through efficient data structures.',
    tags: ['DSA', 'Optimization'],
    featured: false,
  },
];

const process = [
  { step: 'Discover', desc: 'Understand goals & requirements' },
  { step: 'Design', desc: 'Wireframe & prototype the solution' },
  { step: 'Develop', desc: 'Build with clean, scalable code' },
  { step: 'Deliver', desc: 'Test, deploy & support' },
];

export const Services = () => {
  return (
    <section
      id="services"
      className="py-24 relative bg-[#eceef1] border-t border-gray-200 overflow-hidden"
    >
      {/* Decorative blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-rose-200/20 blur-[150px] -left-64 top-1/2 -translate-y-1/2 rounded-full" />
      </div>

      {/* Decorative Circle */}
      <div className="absolute top-16 right-16 w-16 h-16 rounded-full border-2 border-rose-300/50 hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-rose-500 font-semibold tracking-widest text-sm uppercase mb-3">
            What I Offer
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1b2a4a]">
            My Services
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            Leveraging my skills in web and mobile development to deliver
            comprehensive digital solutions from concept to launch.
          </p>
        </motion.div>

        {/* Services Bento Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl group overflow-hidden transition-all duration-300 ${
                service.featured
                  ? 'md:col-span-2 lg:col-span-1 lg:row-span-2 bg-[#1b2a4a] p-8 md:p-10 flex flex-col justify-between shadow-xl'
                  : 'bg-white p-8 border border-gray-200 hover:border-rose-300 hover:shadow-xl'
              }`}
            >
              {/* Non-featured hover glow */}
              {!service.featured && (
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}

              {/* Featured decorative glow */}
              {service.featured && (
                <div className="absolute top-0 right-0 w-40 h-40 bg-rose-500/20 rounded-full blur-[70px]" />
              )}

              <div className="relative z-10">
                {/* Top row: number + icon */}
                <div className="flex items-start justify-between mb-6">
                  <span
                    className={`text-sm font-mono font-bold ${
                      service.featured ? 'text-rose-400' : 'text-gray-300'
                    }`}
                  >
                    {service.number}
                  </span>

                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      service.featured
                        ? 'bg-white/10 text-rose-400'
                        : 'bg-[#f5f6f8] border border-gray-200 text-rose-500 group-hover:bg-rose-500 group-hover:text-white'
                    }`}
                  >
                    <service.icon className="text-2xl" />
                  </div>
                </div>

                <h3
                  className={`text-xl md:text-2xl font-serif mb-3 transition-colors ${
                    service.featured
                      ? 'text-white'
                      : 'text-[#1b2a4a] group-hover:text-rose-500'
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`leading-relaxed mb-6 ${
                    service.featured ? 'text-gray-300' : 'text-gray-500'
                  }`}
                >
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="relative z-10 flex flex-wrap gap-2">
                {service.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`text-xs font-medium px-3 py-1.5 rounded-full border ${
                      service.featured
                        ? 'bg-white/5 text-gray-300 border-white/10'
                        : 'bg-rose-50 text-rose-600 border-rose-200'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow indicator (non-featured) */}
              {!service.featured && (
                <div className="absolute bottom-8 right-8 w-9 h-9 rounded-full bg-[#f5f6f8] border border-gray-200 flex items-center justify-center text-gray-400 opacity-0 group-hover:opacity-100 group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500 transition-all duration-300">
                  <FaArrowRight className="text-xs" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Process Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10"
        >
          <h3 className="font-serif text-2xl text-[#1b2a4a] text-center mb-10">
            How I Work
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {process.map((item, idx) => (
              <div key={idx} className="relative text-center group">
                {idx < process.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-full h-[1px] bg-gray-200" />
                )}

                <div className="relative z-10 w-12 h-12 mx-auto rounded-full bg-[#1b2a4a] text-white font-serif font-bold flex items-center justify-center mb-4 group-hover:bg-rose-500 transition-colors duration-300">
                  {idx + 1}
                </div>

                <h4 className="font-semibold text-[#1b2a4a] mb-1">
                  {item.step}
                </h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};