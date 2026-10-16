import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiFigma,
  SiPostman,
  SiPython,
  SiCplusplus,
} from 'react-icons/si';
import { FaCode, FaMobileAlt, FaFire } from 'react-icons/fa';

const colorMap = {
  indigo: { bar: 'bg-indigo-500', text: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
  rose: { bar: 'bg-rose-500', text: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-200' },
  sky: { bar: 'bg-sky-500', text: 'text-sky-600', bg: 'bg-sky-50', border: 'border-sky-200' },
  emerald: { bar: 'bg-emerald-500', text: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  amber: { bar: 'bg-amber-500', text: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
};

const skillCategories = [
  {
    title: 'Programming Languages',
    color: 'indigo',
    skills: [
      { name: 'JavaScript', level: 90, icon: SiJavascript },
      { name: 'Python', level: 75, icon: SiPython },
      { name: 'C++', level: 85, icon: SiCplusplus },
      { name: 'Dart', level: 70, icon: FaCode },
    ],
  },
  {
    title: 'Frontend Development',
    color: 'rose',
    skills: [
      { name: 'React', level: 92, icon: SiReact },
      { name: 'Tailwind CSS', level: 90, icon: SiTailwindcss },
      { name: 'HTML5 / CSS3', level: 95, icon: SiHtml5 },
    ],
  },
  {
    title: 'Mobile Development',
    color: 'sky',
    skills: [
      { name: 'Flutter', level: 75, icon: FaMobileAlt },
      { name: 'Dart', level: 70, icon: FaCode },
      { name: 'Firebase', level: 78, icon: FaFire },
    ],
  },
  {
    title: 'Backend & Database',
    color: 'emerald',
    skills: [
      { name: 'Node.js', level: 85, icon: SiNodedotjs },
      { name: 'Express.js', level: 83, icon: SiExpress },
      { name: 'MongoDB', level: 80, icon: SiMongodb },
      { name: 'MySQL', level: 72, icon: SiMysql },
    ],
  },
  {
    title: 'Tools & Platforms',
    color: 'amber',
    skills: [
      { name: 'Git & GitHub', level: 88, icon: SiGit },
      { name: 'Figma', level: 70, icon: SiFigma },
      { name: 'Postman', level: 80, icon: SiPostman },
    ],
  },
];

const stats = [
  { value: '19+', label: 'Technologies' },
  { value: '3+', label: 'Years Coding' },
  { value: '87%', label: 'Avg. Proficiency' },
];

const mernStack = [
  { name: 'MongoDB', icon: SiMongodb, color: '#00ED64' },
  { name: 'Express.js', icon: SiExpress, color: '#1b2a4a' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#3C873A' },
];

const SkillBar = ({ skill, color, index }: any) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const Icon = skill.icon || FaCode;
  const c = colorMap[color as keyof typeof colorMap];

  return (
    <div ref={ref} className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <span className={`w-8 h-8 rounded-lg ${c.bg} ${c.text} flex items-center justify-center text-sm`}>
            <Icon />
          </span>
          <span className="text-sm font-medium text-[#1b2a4a]">{skill.name}</span>
        </div>
        <span className="text-xs font-semibold text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
          className={`h-full rounded-full ${c.bar}`}
        />
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-white overflow-hidden">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-rose-500 font-semibold tracking-widest text-sm uppercase">
            What I Know
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1b2a4a] mt-3 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            A diverse, full-stack skill set spanning web and mobile development —
            built through real projects, competitive programming, and continuous learning.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#f5f6f8] border border-gray-200 rounded-xl py-5 text-center hover:border-rose-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="font-serif text-2xl md:text-3xl text-[#1b2a4a]">{stat.value}</div>
              <div className="text-gray-500 text-xs md:text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#1b2a4a] rounded-2xl p-6 md:p-8 mb-16 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="absolute -top-10 -right-10 w-56 h-56 bg-rose-500/20 rounded-full blur-3xl" />
          <div className="relative z-10">
            <span className="text-rose-400 text-xs font-bold tracking-widest uppercase">
              Core Specialization
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-white mt-2">
              MERN Stack Development
            </h3>
            <p className="text-gray-300 text-sm mt-2 max-w-md">
              End-to-end web applications using MongoDB, Express.js, React, and Node.js —
              from database design to pixel-perfect UI.
            </p>
          </div>

          <div className="relative z-10 flex gap-4">
            {mernStack.map((tech, i) => (
              <div
                key={i}
                className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white/10 flex items-center justify-center text-2xl md:text-3xl hover:bg-white/20 transition-colors duration-300"
                style={{ color: tech.color }}
                title={tech.name}
              >
                <tech.icon />
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const c = colorMap[cat.color as keyof typeof colorMap];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-white border ${c.border} rounded-2xl p-6 md:p-8 hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className={`w-2.5 h-2.5 rounded-full ${c.bar}`} />
                  <h3 className="text-lg font-semibold text-[#1b2a4a]">{cat.title}</h3>
                </div>

                {cat.skills.map((skill, i) => (
                  <SkillBar key={i} skill={skill} color={cat.color} index={i} />
                ))}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};