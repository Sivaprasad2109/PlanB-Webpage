import { useState, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";
import { ShieldAlert, Award, Compass, ChevronDown, CheckCircle2 } from "lucide-react";

export default function EquityHedge() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", size: "" });
  const [submitted, setSubmitted] = useState(false);
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});

  // Beta Calculator State
  const [portfolioVal, setPortfolioVal] = useState(10000000);
  const [portfolioBeta, setPortfolioBeta] = useState(1.2);
  const [adjustedExposure, setAdjustedExposure] = useState(0);
  const [underProtectedGap, setUnderProtectedGap] = useState(0);

  const toggleFaq = (index: number) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.size) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", phone: "", size: "" });
      }, 4000);
    }
  };

  // Recalculate Beta Sizing
  useEffect(() => {
    const val = portfolioVal || 0;
    const beta = portfolioBeta || 0;
    const exposure = val * beta;
    const gap = Math.max(exposure - val, 0);
    setAdjustedExposure(exposure);
    setUnderProtectedGap(gap);
  }, [portfolioVal, portfolioBeta]);

  const fmtINR = (n: number) => {
    if (!isFinite(n) || n === 0) return "—";
    return "₹" + Math.round(n).toLocaleString("en-IN");
  };

  const hedgeStrategies = [
    { name: "Index Put Options", desc: "Buy put options on a benchmark index; they gain value as the index falls, offsetting portfolio losses.", best: "Diversified, broad-market equity portfolios" },
    { name: "Short Index Futures", desc: "Short a notional value of index futures equal to your beta-adjusted exposure.", best: "Capital-efficient, precisely scalable hedging" },
    { name: "Protective Collar", desc: "Combine a long put with a short call on the same holding to reduce net premium cost.", best: "Concentrated single-stock positions" },
    { name: "Sector-Specific Hedges", desc: "Hedge a concentrated holding using that stock's own options when liquid contracts are available.", best: "Idiosyncratic, single-name risk" },
  ];

  const faqs = [
    { q: "What is equity hedging?", a: "Equity hedging is the practice of taking an offsetting position — such as index put options or short index futures — that gains value when your equity portfolio falls, reducing drawdown during a correction without requiring you to sell your existing holdings." },
    { q: "What is portfolio beta and why does it matter for hedging?", a: "Beta measures how sensitive a portfolio is to a 1% move in the benchmark index. A portfolio with a beta of 1.2 is structurally more volatile than the index itself, so hedging only its raw capital value leaves it under-protected." },
    { q: "What is hedging drag?", a: "Hedging drag refers to the recurring costs of maintaining a hedge — option premium decay, ETF tracking error, and futures rollover costs — that reduce net portfolio returns even when the hedge isn't actively needed." },
  ];

  return (
    <div className="bg-ink min-h-screen">
      {/* Hero Header */}
      <header className="hero border-b border-hair relative overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="eyebrow inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs font-semibold px-4 py-2 rounded-full mb-8">
            <span className="pulse w-2 h-2 rounded-full bg-brand-green inline-block animate-pulse"></span>
            PORTFOLIO PROTECTION RESEARCH
          </div>
          <span className="font-mono text-xs text-brand-gold tracking-widest block uppercase mb-3">
            Equity Hedge &amp; Protection
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-paper leading-tight tracking-tight mb-8">
            Protect what <br />
            <span className="text-brand-green">you've already built.</span>
          </h1>
          <p className="hero-sub text-base sm:text-lg text-paper-dim max-w-4xl leading-relaxed mx-auto mb-10">
            Markets don't fall on a schedule. PlanB Solutions helps you hedge your equity portfolio against corrections — using index puts, futures, and protective structures sized to your actual exposure — without forcing you to liquidate positions you still believe in.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#form"
              className="bg-brand-green text-ink hover:bg-brand-green-dim font-display font-bold px-6 py-4 rounded-xl transition-all shadow-lg"
            >
              Get a Free Portfolio Hedge Assessment →
            </a>
          </div>
        </div>
      </header>

      {/* Sizing Section & Calculator */}
      <section id="sizing" className="py-20 sm:py-28 border-b border-hair bg-panel/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head flex items-baseline gap-4 mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded">
              01
            </span>
            <div>
              <h2 className="font-display text-3xl font-extrabold text-paper">
                Hedge Sizing &amp; Beta Weighting
              </h2>
              <p className="lede text-paper-dim text-sm sm:text-base mt-2">
                A hedge is only as good as its sizing. We scale protection according to volatility metrics.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-sm sm:text-base text-paper-dim leading-relaxed">
                We calculate portfolio protection using your portfolio's weighted Beta — how sensitive it is relative to index swings.
              </p>
              <div className="border border-hair rounded-2xl p-6 bg-panel space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded bg-brand-green/10 text-brand-green font-mono text-xs font-bold flex items-center justify-center shrink-0">1</div>
                  <p className="text-xs text-paper-dim">Analyze weighted Beta of individual stock holdings relative to Nifty/Index benchmarks.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded bg-brand-green/10 text-brand-green font-mono text-xs font-bold flex items-center justify-center shrink-0">2</div>
                  <p className="text-xs text-paper-dim">Establish beta-adjusted exposure: total capital multiplied by average portfolio beta.</p>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded bg-brand-green/10 text-brand-green font-mono text-xs font-bold flex items-center justify-center shrink-0">3</div>
                  <p className="text-xs text-paper-dim">Recommend exact put strike configurations or futures sizes matching this weighted metric.</p>
                </div>
              </div>
            </div>

            {/* Interactive Calculator */}
            <div className="bg-panel border border-hair rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="font-display font-bold text-lg text-paper flex items-center gap-2">
                Beta-Adjusted Exposure Calculator
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="field">
                  <label className="text-xs font-mono text-paper-dim">Portfolio Value (₹)</label>
                  <input
                    type="number"
                    value={portfolioVal}
                    onChange={(e) => setPortfolioVal(Number(e.target.value))}
                    className="bg-panel-two border border-hair rounded-lg px-4 py-2.5 text-sm text-paper outline-none focus:border-brand-green"
                  />
                </div>
                <div className="field">
                  <label className="text-xs font-mono text-paper-dim">Weighted Portfolio Beta</label>
                  <input
                    type="number"
                    step="0.01"
                    value={portfolioBeta}
                    onChange={(e) => setPortfolioBeta(Number(e.target.value))}
                    className="bg-panel-two border border-hair rounded-lg px-4 py-2.5 text-sm text-paper outline-none focus:border-brand-green"
                  />
                </div>
              </div>
              <div className="bg-panel-two border border-hair rounded-xl p-5 space-y-3.5">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-paper-dim">Beta-Adjusted Exposure:</span>
                  <span className="text-sm font-bold font-mono text-brand-green">{fmtINR(adjustedExposure)}</span>
                </div>
                <div className="flex justify-between items-center border-t border-hair pt-3">
                  <span className="text-xs text-paper-dim font-bold">Unhedged Gap (if only hedging face value):</span>
                  <span className="text-sm font-bold font-mono text-brand-red">{fmtINR(underProtectedGap)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Grid */}
      <section className="py-20 sm:py-28 border-b border-hair">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head flex items-baseline gap-4 mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded">
              02
            </span>
            <div>
              <h2 className="font-display text-3xl font-extrabold text-paper">
                Hedging Playbooks
              </h2>
              <p className="lede text-paper-dim text-sm sm:text-base mt-2">
                Four models matching varying concentrations and index trends.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hedgeStrategies.map((strat) => (
              <div key={strat.name} className="bg-panel border border-hair rounded-2xl p-6 space-y-3">
                <h3 className="font-display font-bold text-lg text-paper">{strat.name}</h3>
                <p className="text-sm text-paper-dim leading-relaxed">{strat.desc}</p>
                <div className="text-xs font-mono text-brand-gold pt-2 border-t border-hair">
                  BEST FOR: <span className="text-paper">{strat.best}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sizing & Form */}
      <section id="form" className="py-20 sm:py-28 border-b border-hair bg-panel/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-panel border border-hair rounded-2xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="eyebrow inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs font-semibold px-4 py-2 rounded-full mb-6">
                  PROTECTION SCOPING
                </span>
                <h2 className="font-display text-3xl font-black text-paper mb-4 leading-tight">
                  Design Your Protective Collar.
                </h2>
                <p className="text-paper-dim leading-relaxed mb-6">
                  Receive a portfolio beta stress assessment and dynamic hedge ratios sent directly to your inbox, backed by professional research overlays.
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
                    <label className="text-xs font-mono text-paper-dim font-bold">Approx. Portfolio Size *</label>
                    <select
                      required
                      value={formData.size}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                      className="w-full bg-ink border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green transition-colors appearance-none"
                    >
                      <option value="" disabled>Select portfolio range</option>
                      <option value="under10">Under ₹10 Lakh</option>
                      <option value="10to50">₹10 Lakh – ₹50 Lakh</option>
                      <option value="50to1cr">₹50 Lakh – ₹1 Crore</option>
                      <option value="above1cr">Above ₹1 Crore</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-green text-ink hover:bg-brand-green-dim font-display font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-brand-green/20 cursor-pointer mt-4"
                  >
                    Request Free Hedge Assessment
                  </button>
                </form>

                {submitted && (
                  <div className="absolute inset-0 bg-panel-two rounded-2xl flex flex-col items-center justify-center text-center p-6 sm:p-8 animate-in fade-in duration-200">
                    <CheckCircle2 className="w-16 h-16 text-brand-green mb-4" />
                    <h3 className="font-display font-bold text-xl text-paper mb-2">Hedge Target Logged!</h3>
                    <p className="text-sm text-paper-dim max-w-xs">
                      We have logged your portfolio range. Our risk manager will contact you with a beta-weighting assessment questionnaire shortly.
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
            <h2 className="font-display text-3xl font-extrabold text-paper">Hedging FAQs</h2>
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
