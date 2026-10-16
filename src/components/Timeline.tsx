import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCode, FaTrophy } from 'react-icons/fa';

const timelineData = [
  {
    year: '2027 (Expected)',
    title: 'B.Sc in Computer Science Engineering',
    company: 'Pundra University of Science & Technology',
    description:
      'Specializing in Web Development and algorithms. Maintained top grades and active in the coding community.',
    icon: FaGraduationCap,
    type: 'education',
  },
  {
    year: '2024 - Present',
    title: 'Full Stack Freelancer',
    company: 'Self Employed',
    description:
      'Building custom web solutions for clients using the MERN stack. Designed scalable architectures and improved load times by 40%.',
    icon: FaBriefcase,
    type: 'work',
  },
  {
    year: '2023',
    title: 'CP Milestone',
    company: 'Codeforces & LeetCode',
    description:
      'Achieved Expert on Codeforces and Knight badge on LeetCode. Participated in multiple regional coding competitions.',
    icon: FaTrophy,
    type: 'achievement',
  },
  {
    year: '2022',
    title: 'Web Dev Mastery',
    company: 'Self Learning',
    description:
      'Mastered React and Node.js. Built first major full-stack project (StreetFix) and learned modern deployment strategies.',
    icon: FaCode,
    type: 'achievement',
  },
];

const typeStyles: Record<string, any> = {
  education: {
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-500',
    border: 'border-indigo-200',
    ring: 'border-indigo-400',
    badge: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    label: 'Education',
  },
  work: {
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-500',
    border: 'border-rose-200',
    ring: 'border-rose-400',
    badge: 'bg-rose-50 text-rose-600 border-rose-200',
    label: 'Experience',
  },
  achievement: {
    iconBg: 'bg-amber-50',
    iconColor: 'text-amber-500',
    border: 'border-amber-200',
    ring: 'border-amber-400',
    badge: 'bg-amber-50 text-amber-600 border-amber-200',
    label: 'Achievement',
  },
};

export const Timeline = () => {
  return (
    <section
      id="timeline"
      className="py-24 relative bg-[#eceef1] border-t border-gray-200 overflow-hidden"
    >
      {/* Decorative blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-rose-200/20 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-200/20 blur-[150px] rounded-full pointer-events-none" />

      {/* Center line */}
      <div className="absolute left-1/2 top-48 bottom-24 w-[2px] bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden md:block" />

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
            My Path
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1b2a4a]">
            My Journey
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            From writing my first line of C++ code to building complex web
            applications, a timeline of my education and achievements.
          </p>
        </motion.div>

        {/* Timeline Items */}
        <div className="space-y-12 relative">
          {timelineData.map((item, idx) => {
            const style = typeStyles[item.type];
            return (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center justify-between w-full ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="hidden md:block w-5/12" />

                {/* Center Icon Node */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 z-10 my-4 md:my-0"
                >
                  <div
                    className={`absolute inset-0 rounded-full border-2 ${style.ring} opacity-40 animate-ping`}
                  />
                  <div
                    className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border-4 ${style.border} flex items-center justify-center shadow-lg`}
                  >
                    <item.icon className={`${style.iconColor} text-xl md:text-2xl`} />
                  </div>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-full md:w-5/12"
                >
                  <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-rose-300 hover:shadow-xl transition-all duration-300 relative group">
                    {/* Badge + Year */}
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full border ${style.badge}`}
                      >
                        {style.label}
                      </span>
                      <span className="text-sm font-semibold text-gray-400">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-serif text-[#1b2a4a] mb-1 group-hover:text-rose-500 transition-colors">
                      {item.title}
                    </h3>
                    <h4 className="text-gray-500 font-medium mb-4">
                      {item.company}
                    </h4>
                    <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                      {item.description}
                    </p>

                    {/* Pointer */}
                    <div
                      className={`hidden md:block absolute top-10 w-3 h-3 bg-white border-t border-l border-gray-200 rotate-45 group-hover:border-rose-300 transition-colors ${
                        idx % 2 === 0
                          ? 'left-0 -translate-x-1/2'
                          : 'right-0 translate-x-1/2 rotate-[225deg]'
                      }`}
                    />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};