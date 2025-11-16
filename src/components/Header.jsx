import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      const header = document.getElementById('site-header');
      if (!header) return;
      if (window.scrollY > 10) header.classList.add('backdrop-blur-md', 'bg-white/10');
      else header.classList.remove('backdrop-blur-md', 'bg-white/10');
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header id="site-header" className="fixed top-0 left-0 right-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 cursor-target">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-600 shadow-[0_0_20px_rgba(168,85,247,0.6)]" />
            <span className="font-semibold tracking-tight text-white drop-shadow">Deep AI Tech Solution</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} className="text-white/90 hover:text-white transition cursor-target">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="cursor-target inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-medium shadow-[0_0_25px_rgba(236,72,153,0.5)] hover:brightness-110 transition">
              Get Free Audit
            </a>
          </nav>

          <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden text-white cursor-target">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="md:hidden bg-black/40 backdrop-blur-md">
          <div className="px-4 pb-4 flex flex-col gap-3">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="text-white/90 hover:text-white transition cursor-target">
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="cursor-target inline-flex w-max items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-medium shadow-[0_0_25px_rgba(236,72,153,0.5)]">
              Get Free Audit
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
