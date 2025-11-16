import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import ChatWidget from './components/ChatWidget'
import Footer from './components/Footer'

function App() {
  React.useEffect(() => {
    const cursor = document.createElement('div');
    cursor.id = 'custom-cursor';
    cursor.className = 'pointer-events-none fixed top-0 left-0 z-[9999] w-5 h-5 rounded-full bg-white/80 mix-blend-difference opacity-70 scale-100 transition-transform duration-200';
    document.body.appendChild(cursor);

    const move = (e) => {
      const el = document.getElementById('custom-cursor');
      if (!el) return;
      el.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
    };
    const hover = (e) => {
      const el = document.getElementById('custom-cursor');
      if (!el) return;
      const target = e.target && (e.target.closest ? e.target.closest('.cursor-target') : null);
      if (target) {
        el.style.width = '48px';
        el.style.height = '48px';
        el.style.opacity = '0.9';
      } else {
        el.style.width = '20px';
        el.style.height = '20px';
        el.style.opacity = '0.7';
      }
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', hover);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', hover);
      document.getElementById('custom-cursor')?.remove();
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0b12]">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_10%,rgba(255,121,63,0.18),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(255,0,128,0.18),transparent_45%),radial-gradient(circle_at_10%_80%,rgba(155,81,224,0.18),transparent_40%),radial-gradient(circle_at_85%_85%,rgba(88,101,242,0.18),transparent_40%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,121,63,0.06),rgba(255,0,128,0.06),rgba(155,81,224,0.06),rgba(88,101,242,0.06))]" />
      </div>

      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>

      <ChatWidget />
      <Footer />

      <a href="#contact" className="cursor-target fixed bottom-6 left-6 z-40 inline-flex items-center px-5 py-3 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 text-white font-semibold shadow-[0_0_35px_rgba(168,85,247,0.6)] hover:brightness-110 transition">
        Get Free Audit
      </a>
    </div>
  )
}

export default App
