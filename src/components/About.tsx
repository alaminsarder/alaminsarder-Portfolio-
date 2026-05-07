import { motion } from 'framer-motion';
import { FaLaptopCode, FaBrain, FaServer } from 'react-icons/fa';

export const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dark-800">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">About</span> Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm a passionate Computer Science student and Full-Stack Developer with a knack for creating intuitive, dynamic user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">
              My <span className="text-primary-500">Journey</span>
            </h3>

            <p className="text-gray-400 leading-relaxed">
              My coding journey started back in high school with basic HTML & CSS. Since then, I've dived deep into JavaScript, exploring the modern React ecosystem and building scalable backends with Node.js and MongoDB.
            </p>

            <p className="text-gray-400 leading-relaxed">
              As a competitive programmer, I thrive on solving complex algorithmic challenges. This analytical approach heavily influences my web development process, ensuring robust and optimized code.
            </p>

            {/* UPDATED EDUCATION SECTION */}
            <div className="mt-8">
              <h4 className="text-xl font-medium text-white mb-4">Education</h4>

              <div className="glass-card p-6 border-l-4 border-l-primary-500">
                <h5 className="text-lg font-bold text-white">
                  B.Sc in Computer Science & Engineering (CSE)
                </h5>

                <p className="text-primary-400 text-sm mb-2">
                  Pundra University of Science & Technology (Running)
                </p>

                <p className="text-gray-400 text-sm">
         Pursuing B.Sc in CSE, focusing on DSA, Software Engineering, Databases, and Web Development.
          Passionate about competitive programming and full-stack development.
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
            {[
              {
                icon: FaLaptopCode,
                title: 'Frontend Developer',
                desc: 'Crafting responsive, interactive, and beautiful user interfaces with React, Vite, and Tailwind.'
              },
              {
                icon: FaServer,
                title: 'Backend Architecture',
                desc: 'Building secure and scalable APIs with Node.js, Express, and modern databases.'
              },
              {
                icon: FaBrain,
                title: 'Problem Solving',
                desc: 'Active competitive programmer on Codeforces & LeetCode, tackling complex algorithmic challenges.'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 flex gap-6 items-start group"
              >
                <div className="p-4 bg-primary-500/10 rounded-xl text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                  <item.icon className="text-2xl" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h4>

                  <p className="text-gray-400 text-sm leading-relaxed">
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