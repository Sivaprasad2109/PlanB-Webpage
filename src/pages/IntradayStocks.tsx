import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Compass, CheckCircle2, ChevronDown, Award } from "lucide-react";

export default function IntradayStocks() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", experience: "" });
  const [submitted, setSubmitted] = useState(false);
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});

  const toggleFaq = (index: number) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.experience) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", phone: "", experience: "" });
      }, 4000);
    }
  };

  const selectionLayers = [
    { title: "Liquidity Threshold Filter", desc: "Only highly traded stocks with deep order book bids and tight ask spreads make our shortlist, minimizing execution slippage." },
    { title: "Opening Range & VWAP Bias", desc: "We track the stock's first 15–30 minute range relative to the Volume-Weighted Average Price to verify intraday momentum flow." },
    { title: "Relative Volume (RVOL)", desc: "A key multiplier. We flag stocks trading significantly above their multi-day average volume, signaling active institutional focus." },
  ];

  const faqs = [
    { q: "What is the key tool used in intraday stock selection?", a: "We place heavy reliance on the Volume-Weighted Average Price (VWAP) as a dynamic intraday reference line, layered with Relative Volume spikes to confirm momentum setups." },
    { q: "Do you recommend carrying intraday positions overnight?", a: "No. Our intraday stock track strictly enforces square-offs before market close. Holding overnight introduces gap risk and violates our same-day risk parameter." },
    { q: "Is intraday trading suitable for beginners?", a: "Intraday trading is higher risk and demands fast execution. For beginners, we generally recommend starting with our positional swing research track first to build discipline." },
  ];

  return (
    <div className="bg-ink min-h-screen">
      {/* Hero Header */}
      <header className="hero border-b border-hair relative overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="eyebrow inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs font-semibold px-4 py-2 rounded-full mb-8">
            <span className="pulse w-2 h-2 rounded-full bg-brand-green inline-block animate-pulse"></span>
            LIVE SESSION EQUITY SELECTIONS
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-paper leading-tight tracking-tight mb-8">
            Intraday stocks: <br />
            <span className="text-brand-green">live trading research &amp; strategy.</span>
          </h1>
          <p className="hero-sub text-base sm:text-lg text-paper-dim max-w-4xl leading-relaxed mx-auto mb-10">
            We deliver real-time intraday stock research — built on VWAP, volume spikes, and momentum — so you trade the session with defined boundaries, not guesses.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#form"
              className="bg-brand-green text-ink hover:bg-brand-green-dim font-display font-bold px-6 py-4 rounded-xl transition-all shadow-lg"
            >
              Get Intraday Watchlists →
            </a>
          </div>
        </div>
      </header>

      {/* Selection Funnel */}
      <section id="selection" className="py-20 sm:py-28 border-b border-hair">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head flex items-baseline gap-4 mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded">
              01
            </span>
            <div>
              <h2 className="font-display text-3xl font-extrabold text-paper">
                How PlanB Screens Intraday Stocks
              </h2>
              <p className="lede text-paper-dim text-sm sm:text-base mt-2">
                Five layers of filtering applied in the same sequence every session.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {selectionLayers.map((layer, idx) => (
              <div key={idx} className="bg-panel border border-hair rounded-2xl p-8 space-y-4">
                <span className="font-mono text-xs text-brand-green font-bold">LAYER 0{idx + 1}</span>
                <h3 className="font-display text-lg font-bold text-paper">{layer.title}</h3>
                <p className="text-sm text-paper-dim leading-relaxed">{layer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience Fit Section */}
      <section className="py-20 sm:py-28 border-b border-hair bg-panel/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head flex items-baseline gap-4 mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded">
              02
            </span>
            <div>
              <h2 className="font-display text-3xl font-extrabold text-paper">
                Is Intraday Trading Your Fit?
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-hair rounded-2xl p-8 bg-panel">
              <h3 className="font-display font-bold text-lg text-brand-green mb-4">A Good Fit If:</h3>
              <ul className="space-y-3.5 text-sm text-paper-dim">
                <li className="pl-6 relative">
                  <span className="absolute left-0 text-brand-green">✓</span>
                  <span>You can actively monitor the markets live during session hours.</span>
                </li>
                <li className="pl-6 relative">
                  <span className="absolute left-0 text-brand-green">✓</span>
                  <span>You are highly disciplined about taking stop-losses instantly.</span>
                </li>
                <li className="pl-6 relative">
                  <span className="absolute left-0 text-brand-green">✓</span>
                  <span>You prioritize quick same-day capital cycles and turnover.</span>
                </li>
              </ul>
            </div>
            <div className="border border-hair rounded-2xl p-8 bg-panel">
              <h3 className="font-display font-bold text-lg text-brand-red mb-4">A Bad Fit If:</h3>
              <ul className="space-y-3.5 text-sm text-paper-dim">
                <li className="pl-6 relative">
                  <span className="absolute left-0 text-brand-red">✕</span>
                  <span>You have an active desk job and cannot look at charts during the day.</span>
                </li>
                <li className="pl-6 relative">
                  <span className="absolute left-0 text-brand-red">✕</span>
                  <span>You struggle to accept stop-losses and average down into losing trades.</span>
                </li>
                <li className="pl-6 relative">
                  <span className="absolute left-0 text-brand-red">✕</span>
                  <span>You are looking for passive investing or long-term wealth assets.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Form */}
      <section id="form" className="py-20 sm:py-28 border-b border-hair">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-panel border border-hair rounded-2xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="eyebrow inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs font-semibold px-4 py-2 rounded-full mb-6">
                  INTRADAY ONBOARDING
                </span>
                <h2 className="font-display text-3xl font-black text-paper mb-4 leading-tight">
                  Join the Live Research Desk.
                </h2>
                <p className="text-paper-dim leading-relaxed mb-6">
                  Join active day traders receiving curated session shortlists, with precise stop-losses and profit targets determined pre-session.
                </p>
              </div>

              <div className="bg-panel-two border border-hair p-6 sm:p-8 rounded-2xl relative">
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-paper-dim font-bold">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-ink border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green transition-colors"
                      placeholder="Your name"
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
                      placeholder="you@example.com"
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
                    <label className="text-xs font-mono text-paper-dim font-bold">Experience Level *</label>
                    <select
                      required
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full bg-ink border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green transition-colors appearance-none"
                    >
                      <option value="" disabled>Select your experience</option>
                      <option value="new">New to Intraday</option>
                      <option value="mid">Less than 1 Year</option>
                      <option value="pro">1+ Years</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-green text-ink hover:bg-brand-green-dim font-display font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-brand-green/20 cursor-pointer mt-4"
                  >
                    Submit Advisory Request
                  </button>
                </form>

                {submitted && (
                  <div className="absolute inset-0 bg-panel-two rounded-2xl flex flex-col items-center justify-center text-center p-6 sm:p-8 animate-in fade-in duration-200">
                    <CheckCircle2 className="w-16 h-16 text-brand-green mb-4" />
                    <h3 className="font-display font-bold text-xl text-paper mb-2">Request Filed!</h3>
                    <p className="text-sm text-paper-dim max-w-xs">
                      We have logged your intraday research scoping. Our desk lead will contact you to walked through segment activations shortly.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="py-20 sm:py-28 border-b border-hair">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head text-center flex flex-col items-center mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded mb-4">
              03
            </span>
            <h2 className="font-display text-3xl font-extrabold text-paper">Intraday FAQs</h2>
          </div>

          <div className="accordion space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="acc-item border border-hair rounded-xl overflow-hidden bg-panel">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 font-display font-bold text-sm sm:text-base text-paper hover:text-brand-green flex justify-between items-center transition-colors focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-brand-green transition-transform duration-200 ${
                      faqOpen[idx] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {faqOpen[idx] && (
                  <div className="p-6 pt-0 border-t border-hair bg-panel/50 text-sm sm:text-base text-paper-dim leading-relaxed animate-in slide-in-from-top-2 duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
