import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Landmark, Shield, Landmark as Building, ArrowUpRight } from 'lucide-react';

const categories = ['All', 'Corporate', 'IP Defense', 'Real Estate'];

const caseStudies = [
  {
    title: 'Cross-Border M&A: Acquisition of TechCorp Inc.',
    category: 'Corporate',
    desc: 'Represented Vanguard Capital in its $240M cross-border acquisition, resolving antitrust hurdles across 3 European jurisdictions.',
    outcome: '$240M Deal Finalized',
    icon: Building,
  },
  {
    title: 'Patent Infringement Defense for Helix Bio',
    category: 'IP Defense',
    desc: 'Successfully defended Helix Bio in a major federal patent claim, protecting proprietary genetic sequence technologies and saving millions.',
    outcome: 'Claim Dismissed, IP Secured',
    icon: Shield,
  },
  {
    title: 'Securing Development Rights for Metropolis Tower',
    category: 'Real Estate',
    desc: 'Acquired zoning permits, tax abatements, and financing rights for a 60-story commercial tower in the metropolitan business district.',
    outcome: 'Permits Obtained & Funded',
    icon: Landmark,
  },
  {
    title: 'Series C Financing Round for Aether Robotics',
    category: 'Corporate',
    desc: 'Counseled Aether Robotics in structuring its $85M Series C funding round, involving international institutional investors.',
    outcome: '$85M Capital Raised',
    icon: Building,
  },
];

export default function Cases() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCases = activeCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(item => item.category === activeCategory);

  return (
    <section id="cases" className="py-24 md:py-32 relative bg-navy-900/10">
      {/* Decorative grids */}
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-gold-400 mb-4">
              Proven Results
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Selected Case Highlights & Transactions
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs font-sans font-semibold uppercase tracking-wider rounded border transition-all duration-300 ${
                  activeCategory === cat
                    ? 'border-gold-500 bg-gold-950/20 text-gold-400'
                    : 'border-white/5 bg-white/2 text-gray-400 hover:text-white hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCases.map((study) => {
              const Icon = study.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  key={study.title}
                  className="group relative p-8 md:p-10 rounded border border-white/5 bg-navy-900/35 hover:border-gold-500/20 transition-all duration-500 flex flex-col justify-between min-h-[280px]"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-[10px] font-sans font-semibold uppercase tracking-widest text-gold-400 bg-gold-950/20 border border-gold-500/20 px-2.5 py-1 rounded">
                        {study.category}
                      </span>
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-500 group-hover:border-gold-500/30 group-hover:text-gold-400 transition-all duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl text-white mb-4 group-hover:text-gold-300 transition-colors duration-300 leading-snug">
                      {study.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm font-sans tracking-wide leading-relaxed text-gray-400 font-light mb-8">
                      {study.desc}
                    </p>
                  </div>

                  {/* Outcome footer */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-2">
                    <div>
                      <p className="text-[9px] font-sans tracking-widest text-gray-500 uppercase">Outcome</p>
                      <p className="text-sm font-sans font-semibold text-white tracking-wide mt-0.5">{study.outcome}</p>
                    </div>
                    
                    <span className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-gold-400 group-hover:text-gold-300 transition-colors cursor-pointer">
                      Read Details
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
