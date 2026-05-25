import { motion } from 'framer-motion';

const clients = [
  { name: 'Apex Ventures', logo: 'APEX' },
  { name: 'Vanguard Corp', logo: 'VANGUARD' },
  { name: 'Helix Biotech', logo: 'HELIX' },
  { name: 'Zephyr Global', logo: 'ZEPHYR' },
  { name: 'Aether Capital', logo: 'AETHER' },
];

export default function Clients() {
  return (
    <section className="py-16 border-y border-white/5 bg-navy-950/40 relative overflow-hidden">
      {/* Light glow behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[50px] bg-gold-600/5 blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <p className="text-center text-[10px] font-sans font-semibold uppercase tracking-widest text-gray-500 mb-10">
          Trusted by Industry Leaders & High-Growth Enterprises
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          {clients.map((client, idx) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex flex-col items-center justify-center cursor-pointer"
            >
              {/* Grayscale Styled Corporate Wordmarks */}
              <span className="font-serif tracking-[0.25em] text-sm md:text-base font-bold text-gray-500 group-hover:text-gold-400 transition-all duration-300 transform group-hover:scale-105">
                {client.logo}
              </span>
              <span className="text-[9px] font-sans tracking-wider text-gray-600 uppercase group-hover:text-gray-400 mt-1 transition-colors">
                {client.name.split(' ')[1] || 'Group'}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
