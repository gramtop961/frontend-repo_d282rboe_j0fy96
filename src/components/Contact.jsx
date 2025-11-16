import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name') || '';
    const business = form.get('business') || '';
    const email = form.get('email') || '';
    const phone = form.get('phone') || '';
    const website = form.get('website') || '';
    const budget = form.get('budget') || '';
    const services = form.get('services') || '';
    const message = form.get('message') || '';

    const subject = encodeURIComponent('Free AI Marketing Audit Request');
    const body = encodeURIComponent(
      `Full Name: ${name}\nBusiness: ${business}\nEmail: ${email}\nPhone/WhatsApp: ${phone}\nWebsite: ${website}\nBudget: ${budget}\nInterested Services: ${services}\n\nMessage:\n${message}`
    );

    const mailto = `mailto:DeepakMalviya9636@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow">Request Your Free AI Marketing Audit</h2>
          <p className="text-white/70 mt-2">We’ll review your site, ads, tracking, and automation opportunities</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {submitted ? (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
                <div className="text-xl font-semibold">Thanks! Your email draft opened in your mail app.</div>
                <div className="text-white/70 mt-1">Send it to complete your request. We will also follow up at the contact details you provided.</div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
                <div>
                  <label className="text-sm text-white/80">Full Name *</label>
                  <input name="name" required className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-pink-400" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-sm text-white/80">Business Name</label>
                  <input name="business" className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-pink-400" placeholder="Company" />
                </div>
                <div>
                  <label className="text-sm text-white/80">Email *</label>
                  <input name="email" type="email" required className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-pink-400" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="text-sm text-white/80">Phone/WhatsApp *</label>
                  <input name="phone" required className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-pink-400" placeholder="+91" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm text-white/80">Website URL *</label>
                  <input name="website" required className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-pink-400" placeholder="https://" />
                </div>
                <div>
                  <label className="text-sm text-white/80">Budget</label>
                  <select name="budget" className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-pink-400">
                    <option value="">Select</option>
                    <option>Under $1k</option>
                    <option>$1k - $3k</option>
                    <option>$3k - $10k</option>
                    <option>$10k+</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-white/80">Interested Services</label>
                  <input name="services" className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-pink-400" placeholder="e.g., AI SEO, Ads, Automation" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm text-white/80">Message</label>
                  <textarea name="message" rows={4} className="mt-1 w-full rounded-lg bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-pink-400" placeholder="Tell us about your goals" />
                </div>
                <div className="sm:col-span-2 flex items-center gap-2">
                  <input type="checkbox" required className="accent-pink-500" />
                  <span className="text-white/80 text-sm">I agree to be contacted.</span>
                </div>
                <div className="sm:col-span-2">
                  <button className="cursor-target inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white font-semibold shadow-[0_0_35px_rgba(236,72,153,0.45)] hover:brightness-110 transition w-full sm:w-auto">
                    Submit Audit Request
                  </button>
                </div>
                <p className="sm:col-span-2 text-white/70 text-sm">
                  On submit, an email will open to: DeepakMalviya9636@gmail.com. You can also reach us at +91 9636226711.
                </p>
              </form>
            )}
          </div>

          <div className="md:col-span-1">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white h-full">
              <div className="text-lg font-semibold">Contact</div>
              <div className="mt-3 text-white/80">
                <div>📧 DeepakMalviya9636@gmail.com</div>
                <div className="mt-2">📞 +91 9636226711</div>
              </div>
              <div className="mt-6 text-white/70 text-sm">
                We typically reply within 24 hours. For urgent projects, mention your timelines and budget for faster scheduling.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
