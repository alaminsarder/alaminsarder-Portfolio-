import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechFlow',
    rating: 5,
    content:
      'AL Amin Sarder is an exceptional developer. His ability to understand complex requirements and translate them into elegant, scalable solutions is truly impressive. He delivered our project ahead of schedule.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    company: 'StartupX',
    rating: 5,
    content:
      'Working with AL Amin Sarder was a great experience. His knowledge of the MERN stack and competitive programming background allowed him to write incredibly optimized code. Highly recommended!',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Emily Davis',
    role: 'Founder',
    company: 'DesignStudio',
    rating: 5,
    content:
      'AL Amin Sarder not only writes great code but also has an amazing eye for design. The animations and UI details he implemented brought our website to life. A true full-stack talent.',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
  },
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="testimonials"
      className="py-24 relative bg-white border-t border-gray-100 overflow-hidden"
    >
      {/* Decorative blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rose-100/40 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/4 right-10 w-16 h-16 rounded-full border-2 border-rose-200 hidden md:block" />

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
            Testimonials
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1b2a4a]">
            Client Feedback
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4">
            What people say about my work, dedication, and problem-solving
            abilities.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Nav Arrows - Desktop */}
          <div className="absolute top-1/2 -left-4 md:-left-14 -translate-y-1/2 z-20 hidden md:block">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#1b2a4a] hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-colors duration-300"
            >
              <FaChevronLeft />
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 md:-right-14 -translate-y-1/2 z-20 hidden md:block">
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-[#1b2a4a] hover:bg-rose-500 hover:text-white hover:border-rose-500 transition-colors duration-300"
            >
              <FaChevronRight />
            </button>
          </div>

          <div className="overflow-hidden relative min-h-[440px] md:min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-[#f5f6f8] p-8 md:p-12 text-center max-w-2xl mx-auto border border-gray-200 rounded-2xl relative shadow-sm">
                  <FaQuoteLeft className="text-4xl md:text-6xl text-rose-100 absolute top-6 left-6" />

                  {/* Avatar */}
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-2 border-rose-400 p-1"
                  />

                  {/* Stars */}
                  <div className="flex items-center justify-center gap-1 mb-5">
                    {Array.from({ length: testimonials[current].rating }).map(
                      (_, i) => (
                        <FaStar key={i} className="text-amber-400 text-sm" />
                      )
                    )}
                  </div>

                  <p className="text-lg md:text-xl text-gray-600 italic mb-8 relative z-10 leading-relaxed">
                    "{testimonials[current].content}"
                  </p>

                  <h4 className="text-xl font-serif text-[#1b2a4a] mb-1">
                    {testimonials[current].name}
                  </h4>

                  <p className="text-rose-500 font-medium text-sm">
                    {testimonials[current].role} at{' '}
                    {testimonials[current].company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav Arrows - Mobile */}
          <div className="flex justify-center gap-3 mt-8 md:hidden">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#1b2a4a] hover:bg-rose-500 hover:text-white transition-colors duration-300"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#1b2a4a] hover:bg-rose-500 hover:text-white transition-colors duration-300"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-3 rounded-full transition-all duration-300 ${
                  idx === current ? 'w-8 bg-rose-500' : 'w-3 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};