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

        setFormData({
          name: '',
          email: '',
          message: '',
        });

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
      className="py-24 relative bg-dark-800 border-t border-white/5"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-dark-800 pointer-events-none overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-accent-500/10 blur-[200px] right-0 bottom-0 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
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
            <h3 className="text-3xl font-bold text-white mb-6">
              Let's talk about everything!
            </h3>

            <p className="text-gray-400 mb-8 leading-relaxed">
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
                  detail: 'linkedin.com/in/md-al-amin-sarder',
                  link: 'https://linkedin.com',
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
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                    <item.icon className="text-xl" />
                  </div>

                  <div>
                    <h4 className="text-gray-400 text-sm font-medium">
                      {item.title}
                    </h4>

                    <p className="text-white font-medium group-hover:text-primary-400 transition-colors">
                      {item.detail}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Name Card */}
            <div className="mt-10 glass-card p-6 border border-white/10 rounded-2xl">
              <h4 className="text-2xl font-bold text-gradient mb-2">
                MD AL Amin Sarder
              </h4>

              <p className="text-gray-400 leading-relaxed">
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
            className="glass-card p-8 md:p-10 border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-400 block"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  required
                  className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-gray-600"
                  placeholder="MD Al Amin Sarder"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-400 block"
                >
                  Your Email
                </label>

                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  required
                  className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-gray-600"
                  placeholder="alamin.pub.24th@gmail.com"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-400 block"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  required
                  rows={5}
                  className="w-full bg-dark-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all placeholder:text-gray-600 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'Sending...'}
                className="w-full py-4 bg-gradient-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {status === 'Sending...' ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message <BsSend className="text-lg" />
                  </>
                )}
              </button>

              {/* Status */}
              {status && status !== 'Sending...' && (
                <p className="text-green-500 text-center text-sm font-medium mt-4">
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