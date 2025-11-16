import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { PlayCircle } from 'lucide-react';

const rotating = ['AI SEO', 'Performance Marketing', 'Meta Ads', 'AI Automation', 'Video Editing', 'Creative Strategy'];

export default function Hero() {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % rotating.length), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-500/25 via-pink-500/20 to-purple-600/20" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white drop-shadow">
            AI-Powered Digital Marketing That Actually Converts.
          </motion.h1>
          <p className="mt-4 text-lg text-white/80 max-w-xl">
            Deep AI Tech Solution uses AI SEO, Meta Ads, automation, and high-performance strategies to help brands scale smarter.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#contact" className="cursor-target inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-semibold shadow-[0_0_35px_rgba(236,72,153,0.45)] hover:brightness-110 transition">
              Get Free AI Website Audit
            </a>
            <a href="#services" className="cursor-target inline-flex items-center px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition">
              Explore Services
            </a>
          </div>

          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-white/80">
            <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 animate-pulse" />
            <span>Currently highlighting: </span>
            <span className="font-semibold text-white">{rotating[index]}</span>
          </div>

          <div className="mt-8 flex items-center gap-4 text-white/80">
            <PlayCircle className="w-10 h-10 text-pink-400 drop-shadow-[0_0_20px_rgba(236,72,153,0.6)]" />
            <span>See how our AI dashboard predicts conversions in real-time</span>
          </div>
        </div>
        <div className="relative h-[420px] sm:h-[520px]">
          <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(59,130,246,0.25)]">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -z-0 inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-500/10" />
    </section>
  );
}
