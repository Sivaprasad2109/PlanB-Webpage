import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Award, CheckCircle2, ChevronDown } from "lucide-react";

export default function OptionsStrategies() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", capital: "", playbook: "" });
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
        setFormData({ name: "", email: "", phone: "", capital: "", playbook: "" });
      }, 4000);
    }
  };

  const playbooks = [
    {
      pkg: "PLAYBOOK 01",
      name: "Income Generation",
      desc: "Designed to harvest premium time decay (Theta) systematically, favoring spreads and covered writing.",
      features: [
        "Covered Call overlays on long portfolios",
        "Spread credits (Bull Put / Bear Call Spreads)",
        "IV Percentile filters ensuring premium margin cushion",
      ],
      tagClass: "text-brand-green bg-brand-green/10",
    },
    {
      pkg: "PLAYBOOK 02",
      name: "Volatility & Intraday",
      desc: "Built to trade structural volatility and intraday swings, especially surrounding same-day index contracts.",
      features: [
        "0DTE Iron Condors with rules-based exits",
        "Catalyst Straddles for earnings & interest updates",
        "Intraday capital risk limit throttling",
      ],
      tagClass: "text-brand-blue bg-brand-blue/10",
    },
    {
      pkg: "PLAYBOOK 03",
      name: "Tail-Risk Hedging",
      desc: "For capital protection against sharp systemic correlations and tail shocks.",
      features: [
        "Protective index put mapping",
        "Dynamic hedge ratios weighted against standard beta",
        "Integrated drawdown hedging trigger limits",
      ],
      tagClass: "text-brand-gold bg-brand-gold/10",
    },
  ];

  const faqs = [
    { q: "What makes these strategies 'systematic'?", a: "Unlike manual or emotional entries, our playbooks are engineered with rule-based criteria for entry, target, and stop-loss. This mitigates bias and ensures risk is capped before execution." },
    { q: "Do you recommend naked option writing?", a: "No. PlanB's playbooks do not recommend naked, uncapped option selling. All writing setups are backed by defined-risk spreads or long asset collars." },
    { q: "What minimum capital is recommended?", a: "While multi-leg buying can require lower capital, standard multi-leg option writing spreads are optimized for accounts starting at ₹5 Lakhs." },
  ];

  return (
    <div className="bg-ink min-h-screen">
      {/* Hero Header */}
      <header className="hero border-b border-hair relative overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="eyebrow inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs font-semibold px-4 py-2 rounded-full mb-8">
            <span className="pulse w-2 h-2 rounded-full bg-brand-green inline-block animate-pulse"></span>
            OPTIONS PLAYBOOKS · 2026 REGIME
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-paper leading-tight tracking-tight mb-8">
            When markets shift without warning,<br />
            <span className="text-brand-green">you need a definitive Plan B.</span>
          </h1>
          <p className="hero-sub text-base sm:text-lg text-paper-dim max-w-4xl leading-relaxed mx-auto mb-10">
            0DTE index volumes, volatility, and macro shocks demand structured math, not guesswork. We design options playbooks engineered on the Greeks to protect capital, harvest premium, and manage risk.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#form"
              className="bg-brand-green text-ink hover:bg-brand-green-dim font-display font-bold px-6 py-4 rounded-xl transition-all shadow-lg"
            >
              Deploy Your Playbook Strategy →
            </a>
            <a
              href="#playbooks"
              className="bg-transparent border border-hair text-paper hover:border-brand-green hover:text-brand-green font-display font-bold px-6 py-4 rounded-xl transition-all"
            >
              See All Playbooks
            </a>
          </div>
        </div>
      </header>

      {/* Playbooks */}
      <section id="playbooks" className="py-20 sm:py-28 border-b border-hair bg-panel/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head flex items-baseline gap-4 mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded">
              01
            </span>
            <div>
              <h2 className="font-display text-3xl font-extrabold text-paper">
                Our Core Option Playbooks
              </h2>
              <p className="lede text-paper-dim text-sm sm:text-base mt-2">
                Three specialized playbooks designed around distinct portfolio outcomes.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {playbooks.map((pb) => (
              <div
                key={pb.name}
                className="bg-panel border border-hair hover:border-brand-green/30 rounded-2xl p-8 flex flex-col justify-between"
              >
                <div>
                  <span className={`font-mono text-[10px] tracking-wider uppercase font-semibold px-3 py-1 rounded-full mb-6 inline-block ${pb.tagClass}`}>
                    {pb.pkg}
                  </span>
                  <h3 className="font-display text-xl font-bold text-paper mb-4">{pb.name}</h3>
                  <p className="text-sm text-paper-dim leading-relaxed mb-6 min-h-[52px]">{pb.desc}</p>
                  <ul className="space-y-3.5 mb-8">
                    {pb.features.map((feat) => (
                      <li key={feat} className="text-sm text-paper-dim pl-6 relative">
                        <CheckCircle2 className="w-4 h-4 text-brand-green absolute left-0 top-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Playbook form */}
      <section id="form" className="py-20 sm:py-28 border-b border-hair">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-panel border border-hair rounded-2xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="eyebrow inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs font-semibold px-4 py-2 rounded-full mb-6">
                  PLAYBOOK MATCHING
                </span>
                <h2 className="font-display text-3xl font-black text-paper mb-4 leading-tight">
                  Deploy Your Portfolio Strategy.
                </h2>
                <p className="text-paper-dim leading-relaxed mb-6">
                  Submit your details, and our options specialist will reach out to analyze your portfolio and align the appropriate systematic playbook to your capital scale and timeline.
                </p>
                <div className="bg-panel-two rounded-xl p-5 border border-hair">
                  <h3 className="text-sm font-bold text-paper mb-3 uppercase tracking-wider font-mono">
                    Greeks Inspected
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-xs text-paper-dim font-mono">
                    <span>• Delta Neutralized</span>
                    <span>• Gamma Risk Managed</span>
                    <span>• Theta Optimization</span>
                    <span>• Implied Volatility Percentile</span>
                  </div>
                </div>
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
                    <label className="text-xs font-mono text-paper-dim font-bold">Trading Capital *</label>
                    <select
                      required
                      value={formData.capital}
                      onChange={(e) => setFormData({ ...formData, capital: e.target.value })}
                      className="w-full bg-ink border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green transition-colors appearance-none"
                    >
                      <option value="" disabled>Select capital scale</option>
                      <option value="under5">Under ₹5 Lakh</option>
                      <option value="5to25">₹5–25 Lakh</option>
                      <option value="25to1cr">₹25 Lakh–1 Crore</option>
                      <option value="above1cr">₹1 Crore+</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-paper-dim font-bold">Preferred Playbook</label>
                    <select
                      value={formData.playbook}
                      onChange={(e) => setFormData({ ...formData, playbook: e.target.value })}
                      className="w-full bg-ink border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green transition-colors appearance-none"
                    >
                      <option value="" disabled>Select a playbook (optional)</option>
                      <option value="income">Income Generation</option>
                      <option value="vol">Volatility &amp; Intraday</option>
                      <option value="hedge">Tail-Risk Hedging</option>
                      <option value="notsure">Not sure yet</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-green text-ink hover:bg-brand-green-dim font-display font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-brand-green/20 cursor-pointer mt-4"
                  >
                    Deploy Your Strategy
                  </button>
                </form>

                {submitted && (
                  <div className="absolute inset-0 bg-panel-two rounded-2xl flex flex-col items-center justify-center text-center p-6 sm:p-8 animate-in fade-in duration-200">
                    <CheckCircle2 className="w-16 h-16 text-brand-green mb-4" />
                    <h3 className="font-display font-bold text-xl text-paper mb-2">Strategy Filed!</h3>
                    <p className="text-sm text-paper-dim max-w-xs">
                      We have logged your preferred options playbook target. Our desk manager will reach out with risk profilers to begin.
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
              02
            </span>
            <h2 className="font-display text-3xl font-extrabold text-paper">Strategies FAQs</h2>
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
