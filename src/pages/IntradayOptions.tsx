import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Compass, CheckCircle2, ChevronDown } from "lucide-react";

export default function IntradayOptions() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", capital: "", setup: "" });
  const [submitted, setSubmitted] = useState(false);
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});

  const toggleFaq = (index: number) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.capital) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", phone: "", capital: "", setup: "" });
      }, 4000);
    }
  };

  const steps = [
    { title: "Implied Volatility Analysis", desc: "We evaluate whether index options premiums are richly priced or undervalued relative to historical standards, choosing the optimal side of trade buy/sell." },
    { title: "Open Interest Mapping", desc: "Track live strike-by-strike OI buildup to identify support levels, resistance levels, short-covering and unwinding clusters." },
    { title: "Option Chain PCR Filtering", desc: "Real-time tracking of Put-Call Ratio and volume distributions across strikes to confirm directional bias on Nifty & Bank Nifty." },
  ];

  const faqs = [
    { q: "Is PlanB Solutions SEBI-registered?", a: "Yes. PlanB Solutions operates as a SEBI-registered research analyst, and all recommendations conform strictly to regulatory guidelines." },
    { q: "Do you guarantee profits on intraday setups?", a: "No. All market investments carry risks. We provide rule-based recommendations with defined entry, target, and stop-loss; profits are never guaranteed." },
    { q: "What instruments do you focus on?", a: "Our intraday option setups primarily focus on highly liquid Nifty, Bank Nifty, and select blue-chip stock options." },
  ];

  return (
    <div className="bg-ink min-h-screen">
      {/* Hero Header */}
      <header className="hero border-b border-hair relative overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="eyebrow inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs font-semibold px-4 py-2 rounded-full mb-8">
            <span className="pulse w-2 h-2 rounded-full bg-brand-green inline-block animate-pulse"></span>
            INTRADAY OPTIONS ADVISORY · INDEX EXCLUSIVES
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-paper leading-tight tracking-tight mb-8">
            Trade with a <span className="text-brand-green">system</span>, <br />
            not with sentiment.
          </h1>
          <p className="hero-sub text-base sm:text-lg text-paper-dim max-w-4xl leading-relaxed mx-auto mb-10">
            F&amp;O traders don't lose money because the market is unpredictable. They lose because they trade without structure. PlanB Solutions is a SEBI-registered advisory delivering Nifty &amp; Bank Nifty options setups.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#form"
              className="bg-brand-green text-ink hover:bg-brand-green-dim font-display font-bold px-6 py-4 rounded-xl transition-all shadow-lg"
            >
              Get Intraday Option Setups →
            </a>
            <a
              href="#framework"
              className="bg-transparent border border-hair text-paper hover:border-brand-green hover:text-brand-green font-display font-bold px-6 py-4 rounded-xl transition-all"
            >
              See Our Framework
            </a>
          </div>
        </div>
      </header>

      {/* Analytical Framework */}
      <section id="framework" className="py-20 sm:py-28 border-b border-hair">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head flex items-baseline gap-4 mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded">
              01
            </span>
            <div>
              <h2 className="font-display text-3xl font-extrabold text-paper">
                The PlanB Options Framework
              </h2>
              <p className="lede text-paper-dim text-sm sm:text-base mt-2">
                Our research desk doesn't issue blind tips. Every setup runs through our core analytical layers.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-panel border border-hair rounded-2xl p-8 space-y-4">
                <span className="font-mono text-xs text-brand-green font-bold">LAYER 0{idx + 1}</span>
                <h3 className="font-display text-lg font-bold text-paper">{step.title}</h3>
                <p className="text-sm text-paper-dim leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Setup & Form */}
      <section id="form" className="py-20 sm:py-28 border-b border-hair bg-panel/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-panel border border-hair rounded-2xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="eyebrow inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs font-semibold px-4 py-2 rounded-full mb-6">
                  INTRADAY ONBOARDING
                </span>
                <h2 className="font-display text-3xl font-black text-paper mb-4 leading-tight">
                  Deploy Intraday Discipline.
                </h2>
                <p className="text-paper-dim leading-relaxed mb-6">
                  If overtrading and emotional entries have cost you capital, the solution isn't a louder group — it's a better system. We enforce strict risk mitigation:
                </p>
                <ul className="space-y-4 text-sm text-paper-dim mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-green" />
                    <span>Exact entry zone, stop-loss, and targets defined</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-green" />
                    <span>Minimum 1:2 Risk-to-Reward parameters</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-green" />
                    <span>Maximum 2-3 high-conviction calls per session</span>
                  </li>
                </ul>
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
                    <label className="text-xs font-mono text-paper-dim font-bold">Approximate Capital *</label>
                    <select
                      required
                      value={formData.capital}
                      onChange={(e) => setFormData({ ...formData, capital: e.target.value })}
                      className="w-full bg-ink border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green transition-colors appearance-none"
                    >
                      <option value="" disabled>Select capital size</option>
                      <option value="under1">Under ₹1 Lakh</option>
                      <option value="1to5">₹1–5 Lakh</option>
                      <option value="5to15">₹5–15 Lakh</option>
                      <option value="above15">₹15 Lakh+</option>
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
                      We have received your options advisory request. Our desk representative will contact you with agreement documents shortly.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 sm:py-28 border-b border-hair">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head text-center flex flex-col items-center mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded mb-4">
              02
            </span>
            <h2 className="font-display text-3xl font-extrabold text-paper">FAQs</h2>
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
