import { motion } from 'framer-motion';
import {
  FaAward,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaCertificate,
  FaCloud,
} from 'react-icons/fa';

const certificates = [
  {
    title: 'Cloud Computing Specialization',
    issuer: 'Coursera',
    date: 'Aug 2024',
    credentialId: 'CLD-SPEC-2024-8821',
    icon: FaCloud,
    iconColor: '#FF9900',
    skills: ['Cloud Architecture', 'EC2', 'S3', 'VPC'],
    link: '#',
    featured: true,
  },
  {
    title: 'Front-End Web Development',
    issuer: 'Coursera',
    date: 'Jan 2024',
    credentialId: 'FEWD-2024-4412',
    icon: FaCertificate,
    iconColor: '#0668E1',
    skills: ['React', 'JavaScript', 'UI/UX', 'HTML/CSS'],
    link: '#',
    featured: false,
  },
  {
    title: 'MongoDB Node.js Developer',
    issuer: 'MongoDB University',
    date: 'Nov 2023',
    credentialId: 'MDB-DEV-2023-9937',
    icon: FaCertificate,
    iconColor: '#10B981',
    skills: ['MongoDB', 'Node.js', 'Database Design'],
    link: '#',
    featured: false,
  },
  {
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'Jun 2023',
    credentialId: 'FCC-RWD-2023-2256',
    icon: FaCertificate,
    iconColor: '#14B8A6',
    skills: ['HTML5', 'CSS3', 'Flexbox', 'Grid'],
    link: '#',
    featured: false,
  },
];

const stats = [
  { label: 'Certifications', value: certificates.length },
  { label: 'Verified', value: certificates.length },
  { label: 'Skill Areas', value: '12+' },
];

export const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 relative bg-white border-t border-gray-200 overflow-hidden"
    >
      {/* Decorative blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-100/30 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-rose-100/30 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f5f6f8] border border-gray-200 mb-6">
            <FaAward className="text-rose-500" />
            <span className="text-sm text-gray-600 font-medium">
              Verified Credentials
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl text-[#1b2a4a] mb-4">
            Licenses & <span className="text-rose-500">Certifications</span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Professional certifications and courses I've completed to advance
            my skills, stay current with industry standards, and validate my
            technical expertise.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-6 py-4 bg-[#f5f6f8] border border-gray-200 rounded-2xl hover:border-rose-300 hover:shadow-lg transition-all duration-300"
            >
              <span className="font-serif text-3xl text-[#1b2a4a]">
                {stat.value}
              </span>
              <span className="text-sm text-gray-500 font-medium leading-tight max-w-[80px]">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative bg-white p-6 rounded-2xl border transition-all duration-300 flex flex-col h-full group ${
                cert.featured
                  ? 'border-rose-300 shadow-lg shadow-rose-100'
                  : 'border-gray-200 hover:border-rose-300 hover:shadow-xl'
              }`}
            >
              {/* Featured Badge */}
              {cert.featured && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-rose-500 rounded-full text-xs font-bold text-white flex items-center gap-1 shadow-lg">
                  <FaCertificate className="text-[10px]" />
                  Featured
                </div>
              )}

              {/* Top: Icon + Verify */}
              <div className="flex items-start justify-between mb-6">
                <div
                  className="p-3.5 rounded-xl group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${cert.iconColor}15`, color: cert.iconColor }}
                >
                  <cert.icon className="text-2xl" />
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Verify certificate"
                  className="w-9 h-9 rounded-lg bg-[#f5f6f8] border border-gray-200 flex items-center justify-center text-gray-500 hover:text-white hover:bg-rose-500 hover:border-rose-500 transition-all duration-300"
                >
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </div>

              {/* Title & Issuer */}
              <h3 className="text-lg font-semibold text-[#1b2a4a] mb-1.5 leading-snug group-hover:text-rose-500 transition-colors">
                {cert.title}
              </h3>
              <p className="text-gray-500 text-sm font-medium mb-4">
                {cert.issuer}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {cert.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-[#f5f6f8] text-gray-600 border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Footer: Date + Credential + Verified */}
              <div className="mt-auto pt-4 border-t border-gray-100 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-400">{cert.date}</span>
                  <span className="flex items-center gap-1 text-emerald-600 font-medium">
                    <FaCheckCircle className="text-[10px]" />
                    Verified
                  </span>
                </div>
                <p className="text-[11px] text-gray-400 font-mono truncate">
                  ID: {cert.credentialId}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};