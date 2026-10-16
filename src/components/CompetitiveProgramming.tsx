import { motion } from 'framer-motion';
import { SiCodeforces, SiLeetcode, SiHackerrank } from 'react-icons/si';
import { FaTrophy, FaStar, FaExternalLinkAlt } from 'react-icons/fa';

const cpStats = [
  {
    platform: 'Codeforces',
    icon: SiCodeforces,
    rating: '1850',
    title: 'Expert',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    stats: '800+ Problems Solved',
    link: '#',
  },
  {
    platform: 'LeetCode',
    icon: SiLeetcode,
    rating: 'Top 5%',
    title: 'Knight',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    stats: '1200+ Problems Solved',
    link: '#',
  },
  {
    platform: 'AtCoder',
    icon: FaStar,
    rating: '1200',
    title: 'Cyan',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-200',
    stats: '300+ Problems Solved',
    link: '#',
  },
  {
    platform: 'HackerRank',
    icon: SiHackerrank,
    rating: '6 Stars',
    title: 'Problem Solving',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
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
    <section
      id="cp"
      className="py-24 relative bg-[#eceef1] border-t border-gray-200 overflow-hidden"
    >
      {/* Decorative blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-20 h-20 rounded-full border-2 border-indigo-200 hidden md:block" />

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
            Problem Solving
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1b2a4a]">
            Competitive Programming
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            Problem-solving is my passion. Here are my statistics and
            achievements across various coding platforms.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cpStats.map((stat, idx) => (
              <motion.a
                href={stat.link}
                target="_blank"
                rel="noreferrer"
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-rose-300 hover:shadow-xl transition-all flex flex-col items-center text-center group relative"
              >
                {/* External link icon */}
                <FaExternalLinkAlt className="absolute top-4 right-4 text-xs text-gray-300 group-hover:text-rose-400 transition-colors" />

                <div
                  className={`p-4 rounded-2xl ${stat.bg} ${stat.color} border ${stat.border} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="text-3xl" />
                </div>
                <h3 className="text-lg font-serif text-[#1b2a4a] mb-1">
                  {stat.platform}
                </h3>
                <p className={`text-lg font-bold mb-2 ${stat.color}`}>
                  {stat.rating} <span className="text-gray-400 font-normal">·</span> {stat.title}
                </p>
                <p className="text-sm text-gray-500 font-medium">{stat.stats}</p>
              </motion.a>
            ))}
          </div>

          {/* Achievements Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm h-full flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200">
                <FaTrophy className="text-2xl text-amber-500" />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif text-[#1b2a4a]">
                Top Achievements
              </h3>
            </div>

            <ul className="space-y-5">
              {achievements.map((ach, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-rose-500 shrink-0" />
                  <p className="text-gray-600 font-medium leading-relaxed flex-1">
                    {ach}
                  </p>
                </motion.li>
              ))}
            </ul>

            {/* Total Solved Highlight */}
            <div className="mt-10 p-6 rounded-xl bg-[#1b2a4a] text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/20 rounded-full blur-[60px]" />
              <h4 className="text-lg font-medium text-gray-300 mb-2 relative z-10">
                Total Problems Solved
              </h4>
              <p className="text-4xl font-serif font-bold text-white relative z-10">
                2,500<span className="text-rose-400">+</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};