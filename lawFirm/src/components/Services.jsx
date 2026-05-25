import { motion } from 'framer-motion';
import { Briefcase, Gavel, Fingerprint, Users, Landmark, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Briefcase,
    title: 'Corporate Law',
    description: 'Bespoke counsel on corporate formation, mergers & acquisitions, venture finance, risk management, and governance for modern global entities.',
  },
  {
    icon: Gavel,
    title: 'Litigation & Dispute Resolution',
    description: 'Relentless and strategic advocacy in high-stakes corporate disputes, arbitration, commercial litigation, and regulatory hearings.',
  },
  {
    icon: Fingerprint,
    title: 'Intellectual Property',
    description: 'Defending proprietary tech, patents, trademarks, and copyright assets in an increasingly digital and competitive market.',
  },
  {
    icon: Users,
    title: 'Employment & Labor',
    description: 'Drafting robust executive covenants, workplace regulations, and handling critical employer audits and disputes.',
  },
  {
    icon: Landmark,
    title: 'Real Estate & Infrastructure',
    description: 'Guiding major commercial real estate transactions, zoning compliance, lease acquisitions, and cross-border developments.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative bg-navy-950/20">
      {/* Decorative vertical lines */}
      <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-white/2 pointer-events-none" />
      <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-white/2 pointer-events-none" />
      
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-navy-800/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-[300px] h-[300px] bg-gold-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-gold-400 mb-4">
            Practice Areas
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Specialized Legal Expertise for High-Stakes Demands
          </h2>
          <p className="text-gray-400 font-sans tracking-wide leading-relaxed font-light">
            We provide structured, cutting-edge representation across vital legal sectors, assisting modern conglomerates, funds, and high-growth ventures to protect assets and drive growth safely.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group relative p-8 lg:p-10 rounded border border-white/5 bg-navy-900/40 backdrop-blur-md hover:border-gold-500/35 hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-all duration-500 flex flex-col justify-between min-h-[320px] overflow-hidden"
              >
                {/* Background Gold Hover Glow Effect */}
                <div className="absolute -inset-px bg-gradient-to-br from-gold-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded pointer-events-none" />

                <div>
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded border border-white/10 flex items-center justify-center bg-white/3 text-gray-300 group-hover:border-gold-500/30 group-hover:bg-gold-950/20 group-hover:text-gold-400 transition-all duration-300 mb-8">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-2xl text-white mb-4 group-hover:text-gold-300 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-sm font-sans tracking-wide leading-relaxed text-gray-400 font-light group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Arrow Accent in Bottom Right */}
                <div className="flex justify-end mt-8">
                  <span className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-gray-400 group-hover:border-gold-500/40 group-hover:text-gold-400 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
