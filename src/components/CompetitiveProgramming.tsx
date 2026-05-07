import { motion } from 'framer-motion';
import { SiCodeforces, SiLeetcode, SiHackerrank } from 'react-icons/si';
import { FaTrophy, FaStar } from 'react-icons/fa';

const cpStats = [
  {
    platform: 'Codeforces',
    icon: SiCodeforces,
    rating: '1850',
    title: 'Expert',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    stats: '800+ Problems Solved',
    link: '#',
  },
  {
    platform: 'LeetCode',
    icon: SiLeetcode,
    rating: 'Top 5%',
    title: 'Knight',
    color: 'text-yellow-500',
    bg: 'bg-yellow-500/10',
    stats: '1200+ Problems Solved',
    link: '#',
  },
  {
    platform: 'AtCoder',
    icon: FaStar,
    rating: '1200',
    title: 'Cyan',
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
    stats: '300+ Problems Solved',
    link: '#',
  },
  {
    platform: 'HackerRank',
    icon: SiHackerrank,
    rating: '6 Stars',
    title: 'Problem Solving',
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    stats: 'Gold Badge',
    link: '#',
  },
];

const achievements = [
  'Global Rank 420 in Codeforces Div 2 Round 850',
  'Knight Badge on LeetCode with 2000+ Rating',
  'Solved 2500+ Algorithmic Problems Across Platforms',
  'Qualified for ICPC Regionals 2024',
];

export const CompetitiveProgramming = () => {
  return (
    <section id="cp" className="py-24 relative bg-dark-800 border-t border-white/5">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Competitive <span className="text-gradient">Programming</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Problem-solving is my passion. Here are my statistics and achievements across various coding platforms.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cpStats.map((stat, idx) => (
              <motion.a
                href={stat.link}
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 border border-white/5 hover:border-white/20 transition-all flex flex-col items-center text-center group"
              >
                <div className={`p-4 rounded-full ${stat.bg} ${stat.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{stat.platform}</h3>
                <p className={`text-lg font-bold mb-2 ${stat.color}`}>{stat.rating} - {stat.title}</p>
                <p className="text-sm text-gray-400 font-medium">{stat.stats}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 h-full flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-8">
              <FaTrophy className="text-4xl text-yellow-500" />
              <h3 className="text-3xl font-bold text-white">Top Achievements</h3>
            </div>
            
            <ul className="space-y-6">
              {achievements.map((ach, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                  <p className="text-gray-300 font-medium leading-relaxed flex-1">{ach}</p>
                </motion.li>
              ))}
            </ul>
            
            <div className="mt-10 p-6 rounded-xl bg-gradient-to-r from-primary-900/40 to-accent-900/40 border border-primary-500/20 text-center">
              <h4 className="text-2xl font-bold text-white mb-2">Total Problems Solved</h4>
              <p className="text-4xl font-display font-bold text-gradient">2,500+</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
