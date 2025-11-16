import React from 'react';
import { motion } from 'framer-motion';

const results = [
  { title: '+180% Organic Traffic Growth', desc: '12 weeks of AI-assisted content + technical fixes' },
  { title: '3.2x ROAS Improvements', desc: 'Creative testing + audience modeling' },
  { title: '60% Lower Lead Costs', desc: 'Conversion-focused landing + tracking' },
  { title: 'Automation Time Savings: 30+ Hrs/Month', desc: 'CRM workflows + AI routing' },
  { title: 'Improved Brand Conversion Metrics', desc: 'Iterative CRO with heatmap insights' },
];

const videos = [
  { title: 'AI Analytics Dashboard' },
  { title: 'High Converting Ad Creatives Reel' },
  { title: 'Automation Workflow Demo' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow">Case Studies</h2>
          <p className="text-white/70 mt-2">Proof that performance and creativity can scale together</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((r, i) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(59,130,246,0.25)] hover:shadow-[0_0_50px_rgba(59,130,246,0.35)] transition">
              <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-2xl" />
              <h3 className="text-xl font-bold text-white">{r.title}</h3>
              <p className="text-white/70 mt-2">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md aspect-video flex items-center justify-center">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,121,63,0.2),rgba(255,0,128,0.2),rgba(155,81,224,0.2),rgba(88,101,242,0.2))]" />
              <div className="relative z-10 text-center p-6">
                <div className="text-white/90 font-semibold">{v.title}</div>
                <div className="text-white/60 text-sm mt-1">Placeholder video (autoplay/muted/loop when added)</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
