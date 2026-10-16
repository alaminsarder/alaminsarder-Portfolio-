import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { BsSend } from 'react-icons/bs';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://formspree.io/f/mdablanb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('Something went wrong!');
      }
    } catch (error) {
      setStatus('Failed to send message!');
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative bg-white border-t border-gray-100 overflow-hidden"
    >
      {/* Decorative dots */}
      <div className="absolute top-20 left-10 grid grid-cols-5 gap-2 opacity-30 hidden lg:grid">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#1b2a4a]" />
        ))}
      </div>

      {/* Decorative Circle */}
      <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full border-2 border-rose-300/50 hidden md:block" />

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
            Let's Connect
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1b2a4a]">
            Get In Touch
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            Have a project in mind or just want to say hi? I'm always open to
            new opportunities and interesting conversations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-serif text-[#1b2a4a] mb-6">
              Let's talk about everything!
            </h3>

            <p className="text-gray-500 mb-8 leading-relaxed">
              Don't like forms? Send me an email. I usually respond within 24
              hours. Connect with me on social media to keep track of my
              journey.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: FaEnvelope,
                  title: 'Email',
                  detail: 'alamin.pub.24th@gmail.com',
                  link: 'mailto:alamin.pub.24th@gmail.com',
                },
                {
                  icon: FaLinkedin,
                  title: 'LinkedIn',
                  detail: 'linkedin.com/in/alaminsarder04',
                  link: 'https://www.linkedin.com/in/alaminsarder04/',
                },
                {
                  icon: FaGithub,
                  title: 'GitHub',
                  detail: 'github.com/alaminsarder',
                  link: 'https://github.com/alaminsarder',
                },
                {
                  icon: FaMapMarkerAlt,
                  title: 'Location',
                  detail: 'Bogura, Bangladesh',
                  link: '#',
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#f5f6f8] border border-gray-200 flex items-center justify-center text-[#1b2a4a] group-hover:bg-rose-500 group-hover:text-white group-hover:border-rose-500 transition-all duration-300">
                    <item.icon className="text-xl" />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm font-medium">
                      {item.title}
                    </h4>
                    <p className="text-[#1b2a4a] font-semibold group-hover:text-rose-500 transition-colors">
                      {item.detail}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Name Card */}
            <div className="mt-10 bg-[#f5f6f8] p-6 border border-gray-200 rounded-2xl">
              <h4 className="text-2xl font-serif text-[#1b2a4a] mb-2">
                MD AL Amin Sarder
              </h4>
              <p className="text-gray-500 leading-relaxed">
                CSE Student | Competitive Programmer | Full-Stack Web Developer
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#f5f6f8] p-8 md:p-10 border border-gray-200 rounded-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-500 block">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#1b2a4a] focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all placeholder:text-gray-400"
                  placeholder="MD Al Amin Sarder"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-500 block">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#1b2a4a] focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all placeholder:text-gray-400"
                  placeholder="alamin.pub.24th@gmail.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-500 block">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#1b2a4a] focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all placeholder:text-gray-400 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'Sending...'}
                className="w-full py-4 bg-[#d9534f] hover:bg-[#c7453f] text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-colors disabled:opacity-50 shadow-lg shadow-rose-500/20"
              >
                {status === 'Sending...' ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message <BsSend className="text-lg" />
                  </>
                )}
              </button>

              {status && status !== 'Sending...' && (
                <p className="text-green-600 text-center text-sm font-medium mt-4">
                  {status}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};