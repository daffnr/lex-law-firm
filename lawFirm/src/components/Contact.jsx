import { Phone, Mail, MapPin, Send, Globe } from 'lucide-react';
import { motion as motionDiv } from 'framer-motion';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const company = e.target[1].value;
    const email = e.target[2].value;
    const practice = e.target[3].value;
    const message = e.target[4].value;

    const subject = encodeURIComponent(`Consultation Inquiry - ${name} (${company})`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Company: ${company}\n` +
      `Email: ${email}\n` +
      `Practice Area: ${practice}\n\n` +
      `Message:\n${message}`
    );

    window.location.href = `mailto:dnr202000@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative bg-navy-900/10">
      {/* Decorative background grids */}
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-gold-400 mb-4">
            Consultation
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Secure Your Counsel Today
          </h2>
          <div className="w-12 h-[1px] bg-gold-500 my-6" />
          <p className="text-gray-400 font-sans tracking-wide leading-relaxed font-light">
            Lex & Partners represents select corporate entities and private clients. Fill out the consultation request below, or contact our New York partners office directly.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <motionDivDiv
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 md:p-10 rounded border border-white/5 bg-navy-900/40 backdrop-blur-md"
            >
              <h3 className="text-2xl text-white mb-6 font-serif">Consultation Request</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-sans font-semibold uppercase tracking-widest text-gray-400">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lawrence Vance"
                      className="px-4 py-3 bg-navy-950/60 border border-white/10 rounded focus:border-gold-500/60 focus:outline-none text-sm text-white placeholder-gray-600 transition-colors"
                    />
                  </div>
                  {/* Company */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-sans font-semibold uppercase tracking-widest text-gray-400">Company Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Apex Ventures"
                      className="px-4 py-3 bg-navy-950/60 border border-white/10 rounded focus:border-gold-500/60 focus:outline-none text-sm text-white placeholder-gray-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-sans font-semibold uppercase tracking-widest text-gray-400">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. client@company.com"
                      className="px-4 py-3 bg-navy-950/60 border border-white/10 rounded focus:border-gold-500/60 focus:outline-none text-sm text-white placeholder-gray-600 transition-colors"
                    />
                  </div>
                  {/* Subject Areas */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-sans font-semibold uppercase tracking-widest text-gray-400">Practice Area</label>
                    <select
                      className="px-4 py-3 bg-navy-950/60 border border-white/10 rounded focus:border-gold-500/60 focus:outline-none text-sm text-gray-300 transition-colors"
                    >
                      <option>Corporate Law / M&A</option>
                      <option>High-Stakes Litigation</option>
                      <option>Intellectual Property Protection</option>
                      <option>Employment & Covenants</option>
                      <option>Commercial Real Estate</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-sans font-semibold uppercase tracking-widest text-gray-400">Message / Brief Context</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your legal matter in brief details..."
                    className="px-4 py-3 bg-navy-950/60 border border-white/10 rounded focus:border-gold-500/60 focus:outline-none text-sm text-white placeholder-gray-600 transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 px-8 rounded text-sm font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 hover:from-gold-200 hover:to-gold-400 transition-all duration-300 cursor-pointer shadow-md shadow-gold-500/10"
                >
                  Submit Inquiry
                  <Send className="w-4 h-4 text-black" />
                </button>
              </form>
            </motionDivDiv>
          </div>

          {/* Right Column: Address, Phone, Map */}
          <div className="lg:col-span-5 space-y-8">
            <motionDivDiv
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded border border-white/5 bg-navy-900/40 backdrop-blur-md space-y-6"
            >
              <h3 className="text-xl text-white font-serif">Partners Headquarters</h3>
              
              {/* Contact list */}
              <div className="space-y-4 font-sans text-sm">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Address</p>
                    <p className="text-gray-400 mt-1">72 Pine Street, 36th Floor<br />Financial District, New York, NY 10005</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">WhatsApp Partner</p>
                    <a 
                      href="https://wa.me/6287785349292" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-400 mt-1 block hover:text-gold-400 transition-colors"
                    >
                      087785349292
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Email Partner</p>
                    <a 
                      href="mailto:dnr202000@gmail.com" 
                      className="text-gray-400 mt-1 block hover:text-gold-400 transition-colors"
                    >
                      dnr202000@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motionDivDiv>

            {/* Map Placeholder Graphic */}
            <motionDivDiv
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-video w-full rounded border border-white/5 bg-navy-900 overflow-hidden group shadow-lg"
            >
              {/* Minimal Dark Map SVG representation */}
              <div className="absolute inset-0 bg-[#070b13] flex items-center justify-center">
                {/* SVG decorative roads/grid */}
                <svg className="w-full h-full opacity-20 stroke-white/20" viewBox="0 0 400 200">
                  <line x1="0" y1="50" x2="400" y2="50" strokeWidth="2" />
                  <line x1="0" y1="120" x2="400" y2="120" strokeWidth="1" />
                  <line x1="150" y1="0" x2="150" y2="200" strokeWidth="2" />
                  <line x1="280" y1="0" x2="280" y2="200" strokeWidth="1" />
                  <circle cx="150" cy="120" r="40" fill="none" strokeWidth="0.5" strokeDasharray="3,3" />
                  <circle cx="150" cy="120" r="80" fill="none" strokeWidth="0.5" strokeDasharray="3,3" />
                </svg>

                {/* Location Marker dot and pulse */}
                <div className="absolute top-[120px] left-[150px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gold-500 relative z-10 border border-black shadow" />
                  <div className="w-8 h-8 rounded-full bg-gold-500/25 absolute animate-ping" />
                  <div className="w-16 h-16 rounded-full bg-gold-500/10 absolute animate-pulse" />
                </div>

                {/* Map Floating Box */}
                <div className="absolute bottom-4 left-4 py-2 px-3 glassmorphism rounded text-[10px] font-sans font-semibold tracking-wider text-white border border-white/10 uppercase">
                  Lex & Partners Headquarters
                </div>
              </div>
            </motionDivDiv>
          </div>

        </div>

      </div>
    </section>
  );
}

// Quick helper to avoid referencing the wrong motion export
const motionDivDiv = motionDiv;
