import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'AI SEO',
    bullets: ['Programmatic SEO', 'Content clusters with AI', 'Technical health automation'],
  },
  {
    title: 'Performance Marketing',
    bullets: ['Google & Meta Ads', 'Full-funnel strategy', 'Creative testing frameworks'],
  },
  {
    title: 'Facebook & Meta Ads',
    bullets: ['Dynamic creatives', 'Pixel + CAPI setup', 'Conversion lift focus'],
  },
  {
    title: 'AI Automation & Workflows',
    bullets: ['CRM triggers', 'Lead scoring', 'Zapier/Make integrations'],
  },
  {
    title: 'Graphic Designing',
    bullets: ['Brand systems', 'Ad creatives', 'Marketing assets'],
  },
  {
    title: 'Video Editing',
    bullets: ['Short-form reels', 'UGC edits', 'Motion graphic titles'],
  },
  {
    title: 'Full Digital Marketing Services',
    bullets: ['Strategy + execution', 'Analytics & dashboards', 'Continuous optimization'],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow">Services</h2>
          <p className="text-white/70 mt-2">AI-first solutions engineered for measurable growth</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-md shadow-[0_0_30px_rgba(168,85,247,0.25)] hover:shadow-[0_0_50px_rgba(236,72,153,0.35)] transition">
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-tr from-orange-500 via-pink-500 to-purple-600 opacity-20 group-hover:opacity-30 blur-2xl transition" />
              <h3 className="text-xl font-bold text-white">{s.title}</h3>
              <ul className="mt-3 space-y-2 text-white/80">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-pink-400 shadow-[0_0_10px_rgba(236,72,153,0.6)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="cursor-target mt-4 inline-block text-pink-300 hover:text-pink-200">Learn More →</a>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact" className="cursor-target inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-semibold shadow-[0_0_35px_rgba(236,72,153,0.45)] hover:brightness-110 transition">
            Get Free Audit
          </a>
        </div>
      </div>
    </section>
  );
}
