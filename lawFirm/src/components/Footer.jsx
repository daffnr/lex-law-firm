import { Scale, Linkedin, Twitter, Facebook, Instagram, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle lines */}
      <div className="absolute inset-0 grid-bg opacity-[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Logo and brief brand story */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded flex items-center justify-center border border-gold-500/20 bg-gold-950/10">
                <Scale className="w-4 h-4 text-gold-500" />
              </div>
              <span className="font-serif tracking-widest text-base font-bold text-white">
                LEX <span className="text-gold-500 font-light">&</span> PARTNERS
              </span>
            </a>
            <p className="text-sm font-sans tracking-wide leading-relaxed text-gray-400 font-light max-w-sm">
              An elite international corporate law firm specializing in high-stakes litigation, tech patents, intellectual property protection, and transactional advice.
            </p>
          </div>

          {/* Practice Areas column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-gold-400">Practice Areas</h4>
            <ul className="space-y-2.5 text-sm text-gray-400 font-sans font-light">
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Corporate M&A</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">High-Stakes Litigation</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Intellectual Property</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Labor & Employment</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Real Estate Transactions</a></li>
            </ul>
          </div>

          {/* Quick links column */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-gold-400">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-gray-400 font-sans font-light">
              <li><a href="#home" className="hover:text-gold-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-gold-400 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-gold-400 transition-colors">About Us</a></li>
              <li><a href="#attorneys" className="hover:text-gold-400 transition-colors">Attorneys</a></li>
              <li><a href="#cases" className="hover:text-gold-400 transition-colors">Case Highlights</a></li>
              <li><a href="#contact" className="hover:text-gold-400 transition-colors">Book Consult</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-gold-400 font-medium">Newsletter</h4>
            <p className="text-xs text-gray-400 font-sans font-light leading-relaxed">
              Subscribe to our executive legal reports and market briefs.
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully.'); }} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full px-3 py-2 text-xs bg-navy-900 border border-white/10 rounded focus:border-gold-500/50 focus:outline-none text-white"
              />
              <button
                type="submit"
                className="px-4 py-2 text-[10px] uppercase font-bold tracking-wider text-black bg-gold-400 hover:bg-gold-300 rounded transition-colors"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright text */}
          <p className="text-xs text-gray-500 font-sans font-light order-2 md:order-1">
            © {new Date().getFullYear()} Lex & Partners. All Rights Reserved. Private & Confidential.
          </p>

          {/* Social Icons + Scroll Top */}
          <div className="flex items-center gap-6 order-1 md:order-2">
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 rounded-full border border-white/5 bg-white/2 hover:border-gold-500/40 hover:text-gold-400 flex items-center justify-center text-gray-400 transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/5 bg-white/2 hover:border-gold-500/40 hover:text-gold-400 flex items-center justify-center text-gray-400 transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/5 bg-white/2 hover:border-gold-500/40 hover:text-gold-400 flex items-center justify-center text-gray-400 transition-all duration-300">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/5 bg-white/2 hover:border-gold-500/40 hover:text-gold-400 flex items-center justify-center text-gray-400 transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={handleScrollToTop}
              className="p-2.5 rounded border border-white/10 text-gray-400 hover:border-gold-400 hover:text-gold-400 hover:bg-white/5 transition-all duration-300"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
