import { motion } from 'framer-motion';
import { ShieldAlert, Cpu, Globe, Target } from 'lucide-react';

const advantages = [
  {
    icon: ShieldAlert,
    num: '01',
    title: 'Absolute Integrity & Discretion',
    description: 'We adhere to the highest standards of professional ethics, safeguarding client confidence, intellectual capital, and transactional details with maximum discretion.',
  },
  {
    icon: Cpu,
    num: '02',
    title: 'Corporate & Tech Specialization',
    description: 'Our team comprises legal counsel who are experts in technology, corporate finance, venture capital, and digital regulations, speaking the language of modern innovators.',
  },
  {
    icon: Globe,
    num: '03',
    title: 'Global Footprint & Networks',
    description: 'With strategic partnerships in global financial hubs, we seamlessly navigate complex international regulations, tax frameworks, and cross-border M&A deals.',
  },
  {
    icon: Target,
    num: '04',
    title: 'Result-Driven Resolution strategies',
    description: 'We focus on commercial realities, prioritizing efficiency, value preservation, and rapid dispute resolution to keep your business moving forward.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 relative bg-navy-900/10 overflow-hidden">
      {/* Background grids */}
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-navy-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-gold-400 mb-4">
            Distinguishing Value
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Why Modern Enterprises Choose Lex & Partners
          </h2>
          <div className="w-16 h-[1px] bg-gold-500 mx-auto my-6" />
          <p className="text-gray-400 font-sans tracking-wide leading-relaxed font-light">
            We transcend traditional legal advice, serving as strategic partners who safeguard operations and catalyze success in a volatile global economy.
          </p>
        </div>

        {/* Timeline Visual Layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Timeline Central Line */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 pointer-events-none -translate-x-[0.5px]">
            {/* Ambient gold line fade */}
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-gold-500/20 via-gold-500/5 to-transparent" />
          </div>

          <div className="space-y-16 md:space-y-24">
            {advantages.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;
              
              return (
                <div key={item.num} className="relative flex flex-col md:flex-row items-start">
                  
                  {/* Timeline Center Node */}
                  <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.5 }}
                      className="w-5 h-5 rounded-full bg-navy-950 border border-gold-500/40 flex items-center justify-center group-hover:border-gold-400 transition-colors shadow-lg shadow-black/50"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                    </motion.div>
                  </div>

                  {/* Staggered Cards */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="relative p-8 rounded border border-white/5 bg-navy-900/20 backdrop-blur-sm hover:border-gold-500/20 hover:bg-navy-900/40 transition-all duration-500"
                    >
                      {/* Step Number Badge */}
                      <span className={`absolute top-6 font-serif italic text-4xl text-gold-500/10 font-bold ${isEven ? 'right-6' : 'left-6'}`}>
                        {item.num}
                      </span>

                      {/* Header Block with Icon */}
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-10 h-10 rounded border border-white/10 flex items-center justify-center text-gold-400 bg-white/3">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl text-white font-serif">{item.title}</h3>
                      </div>

                      {/* Paragraph */}
                      <p className="text-sm font-sans tracking-wide leading-relaxed text-gray-400 font-light">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
