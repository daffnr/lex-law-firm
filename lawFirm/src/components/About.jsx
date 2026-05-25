import { motion } from 'framer-motion';

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Cases Won' },
  { value: '98%', label: 'Client Satisfaction' },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-navy-950">
      {/* Mesh glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-gold-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Narrative & Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-gold-400 mb-4">
              Our Legacy
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Elite Counsel for Dynamic Legal Challenges
            </h2>
            <div className="w-12 h-[1px] bg-gold-500 mb-8" />
            
            <p className="text-gray-300 font-sans tracking-wide leading-relaxed font-light mb-6">
              Founded on the principles of unyielding integrity, precision, and strategic foresight, Lex & Partners has established itself as an elite advocate for corporations, investors, and innovators globally.
            </p>
            <p className="text-gray-400 font-sans tracking-wide leading-relaxed font-light mb-12">
              Our multidisciplinary approach ensures that clients receive tailored guidance aligned with their commercial realities. Whether representing startups in initial financing or defending global conglomerates in high-stakes disputes, we deliver outcomes that redefine client confidence.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="text-left"
                >
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-1">
                    <span className="italic font-light text-gold-400 mr-0.5 font-serif">{stat.value[0]}</span>
                    {stat.value.slice(1) || stat.value[0]}
                  </h3>
                  <p className="text-[10px] font-sans font-medium uppercase tracking-widest text-gray-500 leading-snug">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Tim Photo in Premium Frame */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/3] w-full group"
            >
              {/* Outer Golden Accents */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-gold-500/60 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-gold-500/60 pointer-events-none" />
              
              {/* Underlay Glass Border */}
              <div className="absolute inset-0 border border-white/10 group-hover:border-gold-500/30 transition-colors duration-500 rounded" />
              
              {/* Image Container with Inner border and zoom */}
              <div className="absolute inset-2 overflow-hidden border border-white/5 bg-navy-900/80 rounded shadow-2xl">
                <motion.img
                  src="/about_team.png"
                  alt="Lex & Partners Legal Team"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.05] group-hover:brightness-100 transition-all duration-700"
                />
              </div>

              {/* Decorative tag overlay */}
              <div className="absolute bottom-6 left-6 right-6 py-4 px-6 glassmorphism border border-white/10 rounded flex items-center justify-between pointer-events-none translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div>
                  <p className="text-xs text-white font-serif tracking-wider font-semibold">Lex & Partners Partners</p>
                  <p className="text-[10px] text-gold-400 font-sans tracking-widest uppercase">Senior Leadership Team</p>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
