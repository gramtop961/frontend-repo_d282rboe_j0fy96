import React from 'react';

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-white/80">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-white font-semibold">Deep AI Tech Solution</div>
            <div className="text-sm">AI-first performance marketing agency</div>
          </div>
          <a href="#contact" className="cursor-target inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-semibold shadow-[0_0_35px_rgba(236,72,153,0.45)] hover:brightness-110 transition">
            Get Free Audit
          </a>
        </div>
        <div className="text-xs text-white/60 mt-6">© {new Date().getFullYear()} Deep AI Tech Solution. All rights reserved.</div>
      </div>
    </footer>
  );
}
