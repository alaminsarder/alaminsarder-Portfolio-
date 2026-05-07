import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

const timelineData = [
  {
    year: '2027 (Expected)',
    title: 'B.Sc in Computer Science Engineering',
    company: 'Pundra University of Science &Technology',
    description: 'Specializing in Web Development and algorithms. Maintained top grades and active in the coding community.',
    icon: FaGraduationCap,
    type: 'education',
  },
  {
    year: '2024 - Present',
    title: 'Full Stack Freelancer',
    company: 'Self Employed',
    description: 'Building custom web solutions for clients using the MERN stack. Designed scalable architectures and improved load times by 40%.',
    icon: FaBriefcase,
    type: 'work',
  },
  {
    year: '2023',
    title: 'CP Milestone',
    company: 'Codeforces & LeetCode',
    description: 'Achieved Expert on Codeforces and Knight badge on LeetCode. Participated in multiple regional coding competitions.',
    icon: FaCode,
    type: 'achievement',
  },
  {
    year: '2022',
    title: 'Web Dev Mastery',
    company: 'Self Learning',
    description: 'Mastered React and Node.js. Built first major full-stack project (StreetFix) and learned modern deployment strategies.',
    icon: FaCode,
    type: 'achievement',
  },
];

export const Timeline = () => {
  return (
    <section id="timeline" className="py-24 relative bg-dark-800 border-t border-white/5 overflow-hidden">
      <div className="absolute left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-primary-500/50 to-transparent hidden md:block" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From writing my first line of C++ code to building complex web applications, a timeline of my education and achievements.
          </p>
        </motion.div>

        <div className="space-y-12">
          {timelineData.map((item, idx) => (
            <div key={idx} className={`flex flex-col md:flex-row items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="hidden md:block w-5/12" />
              
              <div className="relative flex items-center justify-center w-10 h-10 md:w-16 md:h-16 z-10 my-4 md:my-0">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-dark-900 border-4 border-primary-500 flex items-center justify-center neon-glow">
                  <item.icon className="text-primary-500 text-lg md:text-2xl" />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full md:w-5/12"
              >
                <div className="glass-card p-6 md:p-8 relative group hover:-translate-y-2 transition-transform duration-300">
                  <span className="text-sm font-bold text-accent-400 mb-2 inline-block">{item.year}</span>
                  <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                  <h4 className="text-primary-500 font-medium mb-4">{item.company}</h4>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  
                  {/* Decorative pointer for desktop */}
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent ${
                    idx % 2 === 0 
                      ? 'left-0 -translate-x-full border-r-8 border-r-white/10 group-hover:border-r-white/20' 
                      : 'right-0 translate-x-full border-l-8 border-l-white/10 group-hover:border-l-white/20'
                  }`} />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
