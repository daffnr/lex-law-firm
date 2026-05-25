import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Arthur Pendelton',
    title: 'CEO, Vanguard Industries',
    quote: 'Lex & Partners resolved our multi-jurisdiction antitrust case with absolute precision. Their focus on the operational and corporate implications of litigation was outstanding.',
    stars: 5,
  },
  {
    name: 'Sarah Chen',
    title: 'Founder, Aether Robotics',
    quote: 'Structuring our Series C funding across global venture firms could have been a regulatory nightmare. Lex & Partners coordinated the entire deal with incredible speed and tact.',
    stars: 5,
  },
  {
    name: 'Marcus Sterling',
    title: 'Director, Metropolis Developments',
    quote: 'Their understanding of local zoning laws, international tax structures, and large-scale real estate transactions is unmatched. A boutique experience with global capability.',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 relative bg-navy-950">
      {/* Decorative vertical lines */}
      <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-white/2 pointer-events-none" />
      <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-white/2 pointer-events-none" />

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-gold-400 mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Trusted by Elite Founders & Executives
          </h2>
          <div className="w-16 h-[1px] bg-gold-500 mx-auto my-6" />
          <p className="text-gray-400 font-sans tracking-wide leading-relaxed font-light">
            Read how we have helped clients protect assets, win high-profile cases, and finalize complex international corporate deals.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={test.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative p-8 md:p-10 rounded border border-white/5 bg-navy-900/40 backdrop-blur-md hover:border-gold-500/20 hover:bg-navy-900/60 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Quote Icon Overlay */}
              <div className="absolute top-6 right-8 text-white/5 pointer-events-none">
                <Quote className="w-12 h-12 stroke-[1]" />
              </div>

              <div>
                {/* Gold Stars */}
                <div className="flex gap-1.5 mb-6">
                  {[...Array(test.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-lg md:text-xl font-serif italic text-gray-200 tracking-wide leading-relaxed font-light mb-8">
                  "{test.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t border-white/5 pt-6 mt-2 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-semibold text-white tracking-wide">{test.name}</h4>
                  <p className="text-[10px] font-sans font-medium uppercase tracking-widest text-gold-400 mt-0.5">{test.title}</p>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
