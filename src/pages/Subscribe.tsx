import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Shield, Info, AlertTriangle } from "lucide-react";

export default function Subscribe() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", track: "", portfolio: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.track) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", phone: "", track: "", portfolio: "" });
      }, 4000);
    }
  };

  return (
    <div className="bg-ink min-h-screen">
      {/* Hero */}
      <header className="hero border-b border-hair relative overflow-hidden py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="eyebrow inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <span className="pulse w-2 h-2 rounded-full bg-brand-green inline-block animate-pulse"></span>
            SECURE ADVISORY ONBOARDING
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-paper leading-tight tracking-tight mb-6 max-w-4xl mx-auto">
            Subscribe to SEBI-registered <br />
            <span className="text-brand-green">research you can hold accountable.</span>
          </h1>
          <p className="hero-sub text-sm sm:text-base text-paper-dim max-w-2xl leading-relaxed mx-auto">
            Confirm your advisory track, size your trading capital, and receive professional onboarding frameworks within 24 hours.
          </p>
        </div>
      </header>

      {/* Subscription Content & Form */}
      <section id="form" className="py-16 border-b border-hair">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div>
              <h2 className="font-display text-2xl font-black text-paper mb-4 leading-tight">
                Advisory Standards
              </h2>
              <p className="text-sm text-paper-dim leading-relaxed mb-6">
                All client relationships are backed by formal SEBI research analyst mandates, ensuring full compliance and conflict disclosures.
              </p>
              <ul className="space-y-4 text-sm text-paper-dim">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-paper font-semibold mb-1">Defined Risk Limits</h3>
                    <p className="text-xs">Every recommendation features clear entry ranges, stop-losses, and profit targets.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-paper font-semibold mb-1">Conflict of Interest Mitigation</h3>
                    <p className="text-xs">We do not accept broker commission overrides, protecting research integrity.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-paper font-semibold mb-1">Verified Delivery Cadence</h3>
                    <p className="text-xs">All watchlists and setups are delivered via our secure dashboards and encrypted handles.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Interactive Form */}
            <div className="bg-panel border border-hair rounded-2xl p-6 sm:p-8 relative shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-paper-dim font-bold">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-ink border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-paper-dim font-bold">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-ink border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green transition-colors"
                    placeholder="you@email.com"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-paper-dim font-bold">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-ink border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green transition-colors"
                    placeholder="+91"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-paper-dim font-bold">Preferred Track *</label>
                  <select
                    required
                    value={formData.track}
                    onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                    className="w-full bg-ink border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green transition-colors appearance-none"
                  >
                    <option value="" disabled>Select target track</option>
                    <option value="equity">Equity Research</option>
                    <option value="fo">Derivatives (F&amp;O)</option>
                    <option value="commodities">Commodities Desk</option>
                    <option value="bundle">Bundle / All Tracks</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-paper-dim font-bold">Approximate Investment Size</label>
                  <input
                    type="text"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    className="w-full bg-ink border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green transition-colors"
                    placeholder="e.g. ₹5 Lakhs + (optional)"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-green text-ink hover:bg-brand-green-dim font-display font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-brand-green/20 cursor-pointer mt-4"
                >
                  Onboard to Advisory →
                </button>
              </form>

              {submitted && (
                <div className="absolute inset-0 bg-panel rounded-2xl flex flex-col items-center justify-center text-center p-6 sm:p-8 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-16 h-16 text-brand-green mb-4" />
                  <h3 className="font-display font-bold text-xl text-paper mb-2">Registration Filed!</h3>
                  <p className="text-sm text-paper-dim max-w-xs">
                    Thank you! Our compliance and onboarding officer will contact you within 24 hours to organize your scoping roadmap.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Warning */}
      <section className="py-12 bg-panel/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-red/10 border border-brand-red/30 rounded-2xl p-6 flex gap-4">
            <AlertTriangle className="w-6 h-6 text-brand-red shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-paper mb-1">Standard Market Disclaimer:</h4>
              <p className="text-xs text-paper-dim leading-relaxed">
                Investments in securities markets are subject to market risks. Read all the related documents carefully before investing. PlanB Solutions is a SEBI Registered Research Analyst (INH0000210932). Past performance is not indicative of future returns.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
