import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Skyscraper background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/hero_background.png')` }}
      >
        {/* Dark Navy and Black Gradients to blend background perfectly */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-navy-950/95" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/40 via-transparent to-navy-950" />
        <div className="absolute inset-0 bg-navy-950/20 mix-blend-overlay" />
      </div>

      {/* Grid line overlay to give custom modern SaaS aesthetic */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Glowing mesh gradient */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold-600/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-navy-500/10 blur-3xl" />

      {/* Fine lines accents for luxury feel */}
      <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-white/5 hidden xl:block" />
      <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-white/5 hidden xl:block" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 z-10 w-full text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          {/* Accent Mini Tag */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-500/20 bg-gold-950/10 backdrop-blur-sm text-[10px] font-sans font-semibold uppercase tracking-widest text-gold-400 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            Corporate Legal Advisors & Advocates
          </motion.div>

          {/* Big Premium Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-white mb-6"
          >
            Trusted Legal Solutions for{' '}
            <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-500 font-light">
              Modern Businesses
            </span>
          </motion.h1>

          {/* Elegant divider */}
          <motion.div 
            variants={itemVariants}
            className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent my-4"
          />

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-gray-300 font-sans tracking-wide leading-relaxed max-w-2xl mb-12 font-light"
          >
            Lex & Partners provides elite, bespoke counsel to navigate complex corporate legal,
            employment, intellectual property, and transactional landscapes across international jurisdictions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
          >
            <a
              href="#contact"
              className="group flex items-center justify-center gap-2 w-full sm:w-56 py-4 px-8 rounded text-sm font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:from-gold-200 hover:to-gold-400 transition-all duration-300 shadow-xl shadow-gold-500/10"
            >
              Book Consultation
              <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="flex items-center justify-center w-full sm:w-48 py-4 px-8 rounded text-sm font-semibold uppercase tracking-wider text-white border border-white/20 hover:border-gold-400 hover:bg-white/5 transition-all duration-300"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Down arrow indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-10"
      >
        <a href="#services" className="p-2 rounded-full border border-white/5 hover:border-gold-500/30 bg-white/5 transition-colors">
          <ChevronDown className="w-5 h-5 text-gray-400 hover:text-gold-400" />
        </a>
      </motion.div>
    </section>
  );
}
