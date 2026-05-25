import { motion } from 'framer-motion';
import { Linkedin, Mail, ShieldCheck } from 'lucide-react';

const attorneys = [
  {
    name: 'Lawrence Sterling, Esq.',
    role: 'Senior Managing Partner',
    specialty: 'Mergers & Acquisitions & Finance',
    photo: '/attorney_sterling.png',
    linkedin: '#',
    mail: 'l.sterling@lexpartners.com',
  },
  {
    name: 'Elena Vance, Esq.',
    role: 'Senior Partner',
    specialty: 'Intellectual Property & Patents',
    photo: '/attorney_vance.png',
    linkedin: '#',
    mail: 'e.vance@lexpartners.com',
  },
  {
    name: 'Marcus Thorne',
    role: 'Senior Associate',
    specialty: 'Commercial Litigation & Disputes',
    photo: '/attorney_thorne.png',
    linkedin: '#',
    mail: 'm.thorne@lexpartners.com',
  },
];

export default function Attorneys() {
  return (
    <section id="attorneys" className="py-24 md:py-32 relative bg-navy-950">
      {/* Decorative vertical lines */}
      <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-white/2 pointer-events-none" />
      <div className="absolute right-1/3 top-0 bottom-0 w-[1px] bg-white/2 pointer-events-none" />

      {/* Decorative glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gold-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-gold-400 mb-4">
            Legal Leaders
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Meet Our Senior Counsel & Partners
          </h2>
          <div className="w-12 h-[1px] bg-gold-500 my-6" />
          <p className="text-gray-400 font-sans tracking-wide leading-relaxed font-light">
            Our attorneys are recognized leaders, corporate consultants, and experienced trial lawyers. They combine deep legal theory with commercial experience to represent clients in pivotal moments.
          </p>
        </div>

        {/* Attorneys Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attorneys.map((attorney, idx) => (
            <motion.div
              key={attorney.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col justify-between overflow-hidden rounded border border-white/5 bg-navy-900/30 hover:border-gold-500/25 hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-all duration-500"
            >
              {/* Image Container with crop */}
              <div className="relative aspect-[4/5] w-full overflow-hidden border-b border-white/5 bg-navy-900">
                <motion.img
                  src={attorney.photo}
                  alt={attorney.name}
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.03] group-hover:brightness-[0.95] transition-all duration-500"
                />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded bg-black/70 backdrop-blur-md border border-white/10 text-[9px] font-sans font-semibold tracking-wider uppercase text-gold-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold-500" />
                  Bar Certified
                </div>
              </div>

              {/* Text Info Container */}
              <div className="p-8 relative bg-gradient-to-t from-navy-950 to-navy-900/90">
                <div className="mb-6">
                  <p className="text-[10px] font-sans font-semibold uppercase tracking-widest text-gold-400 mb-1">
                    {attorney.role}
                  </p>
                  <h3 className="text-2xl text-white group-hover:text-gold-200 transition-colors duration-300">
                    {attorney.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-sans tracking-wide mt-2 min-h-[32px] line-clamp-2">
                    {attorney.specialty}
                  </p>
                </div>

                {/* Footer and contact links */}
                <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-2">
                  <span className="text-[10px] font-sans tracking-widest uppercase text-gray-500 group-hover:text-gold-400 transition-colors duration-300">
                    Lex & Partners
                  </span>
                  
                  {/* Action Icons */}
                  <div className="flex items-center gap-4">
                    <a
                      href={`mailto:${attorney.mail}`}
                      className="text-gray-400 hover:text-gold-400 transition-colors"
                      title={attorney.mail}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href={attorney.linkedin}
                      className="text-gray-400 hover:text-gold-400 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
