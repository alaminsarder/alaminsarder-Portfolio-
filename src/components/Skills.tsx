import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'C', level: 85 },
      { name: 'C++', level: 90 },
      { name: 'JavaScript', level: 95 },
      { name: 'Python', level: 80 },
    ],
  },
  {
    category: 'Frontend Development',
    items: [
      { name: 'React.js', level: 92 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'HTML5 / CSS3', level: 98 },
      { name: 'Framer Motion', level: 85 },
    ],
  },
  {
    category: 'Backend & Database',
    items: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 88 },
      { name: 'MongoDB', level: 90 },
      { name: 'MySQL', level: 80 },
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Git & GitHub', level: 95 },
      { name: 'VS Code', level: 98 },
      { name: 'Figma', level: 75 },
      { name: 'Postman', level: 90 },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-dark-900 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise, programming languages, and tools I use to build modern applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-semibold text-white mb-6 border-b border-white/10 pb-4">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.items.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary-500 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-dark-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        className="h-full bg-gradient-primary rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
