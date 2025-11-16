import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const badges = ['AI Automation Expert', 'Meta Ads Specialist', 'Performance Marketer', 'Creative Strategist'];
  return (
    <section id="about" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-pink-500/10 to-transparent" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow">About</h2>
            <p className="text-white/80 mt-4">
              Deepak Kumar is a performance marketer and AI workflow strategist helping businesses scale smarter. With experience in ads, automation, and creative production, he builds high-ROI systems using AI-powered methods that deliver measurable results.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {badges.map((b) => (
                <span key={b} className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white/10 text-white border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.08)]">{b}</span>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="order-1 md:order-2">
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(236,72,153,0.25)]">
              <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,121,63,0.2),rgba(255,0,128,0.2),rgba(155,81,224,0.2),rgba(88,101,242,0.2))]" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <div className="text-white/90 font-semibold">Founder: Deepak Kumar</div>
                  <div className="text-white/60 text-sm">Deep AI Tech Solution</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
