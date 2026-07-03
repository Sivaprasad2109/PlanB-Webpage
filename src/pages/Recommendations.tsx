import { Link } from "react-router-dom";
import { TrendingUp, Award, Compass, ShieldAlert, ChevronDown, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Recommendations() {
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});

  const toggleFaq = (index: number) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const tickerItems = [
    { symbol: "NIFTY 50", value: "24,812", change: "+0.62%", up: true },
    { symbol: "SENSEX", value: "81,540", change: "+0.58%", up: true },
    { symbol: "BANK NIFTY", value: "52,110", change: "-0.21%", up: false },
    { symbol: "INDIA VIX", value: "13.4", change: "-1.10%", up: false },
    { symbol: "USD/INR", value: "85.92", change: "+0.09%", up: true },
  ];

  const faqs = [
    {
      q: "What makes PlanB Solutions different from other stock advisory services?",
      a: "PlanB Solutions is a SEBI-registered Research Analyst focused on research-driven insights combining fundamental and technical analysis. We emphasise risk management, capital preservation, and clear execution frameworks rather than speculative ideas.",
    },
    {
      q: "Are your stock recommendations suitable for all investor types?",
      a: "Yes. Our Short-Term Picks suit active traders, while Long-Term Picks and Sector Picks support long-horizon investors. All recommendations include risk parameters tailored to different risk appetites and portfolio goals.",
    },
    {
      q: "Do you provide personalized investment advice?",
      a: "As a SEBI-registered Research Analyst, we offer general research reports and stock recommendations. Investors should assess suitability based on their own financial situation and consult qualified advisors where needed for personalised strategies.",
    },
    {
      q: "How do you manage risk in your recommendations?",
      a: "Every pick and call incorporates defined stop-loss levels, target prices, and risk-reward assessments. We stress disciplined execution and portfolio diversification to support capital preservation amid market volatility.",
    },
    {
      q: "What is the process to access your services?",
      a: "Sign up on our platform, select a suitable subscription, and gain access to our equity research, Short-Term Picks, Long-Term Picks, Sector Picks, and Buy / Sell / Hold Calls. Recommendations are delivered through secure member dashboards and updates.",
    },
    {
      q: "Is past performance indicative of future results?",
      a: "No. All market investments carry risk. Our recommendations are for educational and informational purposes based on thorough analysis. Past performance is not a guarantee of future returns. Investors should conduct their own due diligence.",
    },
  ];

  return (
    <div className="bg-ink min-h-screen">
      {/* Ticker Band */}
      <div className="bg-panel-two border-b border-hair overflow-hidden py-3 whitespace-nowrap">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-12 overflow-x-auto pb-1 scrollbar-none">
            {tickerItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 shrink-0">
                <span className="text-xs font-semibold text-paper-dim font-mono">{item.symbol}</span>
                <span className="text-sm font-bold text-paper font-mono">{item.value}</span>
                <span className={`text-xs font-semibold font-mono ${item.up ? "text-brand-green" : "text-brand-red"}`}>
                  {item.change}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero */}
      <header className="hero border-b border-hair relative overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <div className="eyebrow inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs font-semibold px-4 py-2 rounded-full mb-6">
                <span className="pulse w-2 h-2 rounded-full bg-brand-green inline-block animate-pulse"></span>
                INSTITUTIONAL-GRADE EQUITY RESEARCH
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-paper leading-tight tracking-tight mb-6">
                Research-backed conviction.<br />
                <span className="text-brand-green font-black">Not guesswork.</span>
              </h1>
              <p className="hero-sub text-base sm:text-lg text-paper-dim leading-relaxed mb-8">
                Structured, data-backed stock advisory from a SEBI-registered Research Analyst — combining{" "}
                <strong className="text-paper">fundamental analysis, technical analysis, and rigorous risk management</strong> to help you navigate volatility while prioritising capital preservation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/subscribe"
                  className="bg-brand-green text-ink hover:bg-brand-green-dim font-display font-bold px-6 py-4 rounded-xl transition-all shadow-lg"
                >
                  Compare Plans &amp; Get Started →
                </Link>
              </div>
            </div>

            {/* Custom SVG Line Chart */}
            <div className="bg-panel border border-hair rounded-2xl p-6 shadow-2xl">
              <div className="flex justify-between items-baseline mb-4">
                <span className="font-mono text-[10px] text-paper-dim uppercase tracking-wider">
                  Illustrative Research Signal Track
                </span>
                <span className="font-mono text-sm text-brand-green font-bold">+18.4%</span>
              </div>
              <svg className="w-full h-40" viewBox="0 0 320 140" preserveAspectRatio="none">
                <g className="opacity-10">
                  <line x1="0" y1="20" x2="320" y2="20" stroke="currentColor" />
                  <line x1="0" y1="55" x2="320" y2="55" stroke="currentColor" />
                  <line x1="0" y1="90" x2="320" y2="90" stroke="currentColor" />
                  <line x1="0" y1="125" x2="320" y2="125" stroke="currentColor" />
                </g>
                <path
                  d="M0,110 L30,98 L60,102 L90,80 L120,86 L150,60 L180,68 L210,42 L240,48 L270,26 L320,20 L320,140 L0,140 Z"
                  fill="url(#g1)"
                />
                <path
                  d="M0,110 L30,98 L60,102 L90,80 L120,86 L150,60 L180,68 L210,42 L240,48 L270,26 L320,20"
                  fill="none"
                  stroke="#12CC43"
                  strokeWidth="2.2"
                />
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#12CC43" stopOpacity="0.25"></stop>
                    <stop offset="100%" stopColor="#12CC43" stopOpacity="0"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex justify-between mt-4 border-t border-hair pt-4 font-mono text-[10px] text-paper-dim">
                <span>Entry Zone Flagged</span>
                <span>Stop-Loss Enforced</span>
                <span>Target Realized</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Picks */}
      <section id="picks" className="py-20 sm:py-28 border-b border-hair">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head flex items-baseline gap-4 mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded">
              01
            </span>
            <div>
              <h2 className="font-display text-3xl font-extrabold text-paper">
                Two Horizons, One Disciplined Process
              </h2>
              <p className="lede text-paper-dim text-sm sm:text-base mt-2">
                Successful investing calls for distinct strategies: tactical opportunities for short-term momentum, and structural investments for long-term compounding.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Short Term */}
            <div className="bg-panel border border-hair hover:border-brand-gold/50 rounded-2xl p-8 transition-all duration-300">
              <span className="font-mono text-xs font-semibold text-brand-gold tracking-widest block mb-4">
                TACTICAL · SWING
              </span>
              <h3 className="font-display text-2xl font-bold text-paper mb-4">Short-Term Picks</h3>
              <p className="text-sm text-paper-dim leading-relaxed mb-6">
                High-conviction opportunities driven by technical setups and near-term catalysts — moving averages, RSI, volume patterns, and support-resistance levels.
              </p>
              <div className="h-px bg-hair my-6"></div>
              <ul className="space-y-3.5 mb-8">
                <li className="text-sm text-paper-dim pl-6 relative">
                  <CheckCircle2 className="w-4 h-4 text-brand-green absolute left-0 top-0.5" />
                  <span>Defined <strong>entry zone, profit target, and stop-loss</strong> on every call</span>
                </li>
                <li className="text-sm text-paper-dim pl-6 relative">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 absolute left-0 top-0.5" />
                  <span>Risk-reward ratios maintained at <strong>1:2 to 1:3</strong></span>
                </li>
                <li className="text-sm text-paper-dim pl-20 relative">
                  <span className="font-semibold text-paper">Best for:</span> Active traders and momentum buyers
                </li>
              </ul>
              <Link
                to="/subscribe"
                className="inline-block px-5 py-3 rounded-xl border border-hair text-paper hover:border-brand-green hover:text-brand-green text-sm font-display font-bold transition-colors"
              >
                Access short-term picks →
              </Link>
            </div>

            {/* Long Term */}
            <div className="bg-panel border border-hair hover:border-brand-green/50 rounded-2xl p-8 relative transition-all duration-300">
              <span className="font-mono text-xs tracking-widest font-semibold text-brand-green block mb-4">
                STRUCTURAL · COMPOUNDING
              </span>
              <h3 className="font-display text-xl font-bold text-paper mb-6">
                Long-Term Picks
              </h3>
              <p className="text-sm text-paper-dim leading-relaxed mb-6">
                Businesses with durable competitive moats, strong ROE, consistent earnings growth, and favourable macro tailwinds — evaluated for intrinsic value.
              </p>
              <div className="pick-divider h-px bg-hair my-6"></div>
              <ul className="pick-features space-y-3 text-sm text-paper-dim mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>Focus on <strong>quality over speculation</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>Assessed for <strong>balance sheet strength</strong> and management</span>
                </li>
                <li className="pl-6 relative">
                  <span className="font-semibold text-paper">Best for:</span> Passive, long-term wealth compounders
                </li>
              </ul>
              <Link
                to="/subscribe"
                className="inline-block px-5 py-3 rounded-xl border border-hair text-paper hover:border-brand-green hover:text-brand-green text-sm font-display font-bold transition-colors"
              >
                Explore long-term picks →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Overlays */}
      <section id="overlays" className="py-20 sm:py-28 border-b border-hair bg-panel/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head flex items-baseline gap-4 mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded">
              02
            </span>
            <div>
              <h2 className="font-display text-3xl font-extrabold text-paper">Strategic Overlays</h2>
              <p className="lede text-paper-dim text-sm sm:text-base mt-2">
                Beyond single stocks — thematic positioning and execution-oriented guidance investors can act on directly.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-panel border border-hair rounded-2xl p-8">
              <div className="flex gap-1.5 h-8 items-end mb-6 opacity-80" aria-hidden="true">
                <div className="w-2.5 h-1/2 bg-hair rounded"></div>
                <div className="w-2.5 h-3/4 bg-brand-green rounded"></div>
                <div className="w-2.5 h-full bg-brand-green rounded"></div>
                <div className="w-2.5 h-2/3 bg-hair rounded"></div>
                <div className="w-2.5 h-5/6 bg-brand-green rounded"></div>
              </div>
              <h3 className="font-display font-bold text-xl text-paper mb-3">Sector Picks</h3>
              <p className="text-sm text-paper-dim leading-relaxed mb-6">
                We track industrial rotations, policy shifts, and emerging structural themes — infrastructure, technology, renewable energy — combining top-down macro analysis with bottom-up fundamentals.
              </p>
              <Link to="/subscribe" className="text-sm font-display font-bold text-brand-green hover:underline inline-flex items-center gap-1.5">
                See sector coverage <ChevronDown className="-rotate-90 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-panel border border-hair rounded-2xl p-8">
              <div className="flex gap-2 mb-6">
                <span className="text-[10px] font-mono bg-brand-green/10 border border-brand-green/30 text-brand-green px-2.5 py-1 rounded-md font-bold">BUY</span>
                <span className="text-[10px] font-mono bg-brand-gold/10 border border-brand-gold/30 text-brand-gold px-2.5 py-1 rounded-md font-bold">HOLD</span>
                <span className="text-[10px] font-mono bg-brand-red/10 border border-brand-red/30 text-brand-red px-2.5 py-1 rounded-md font-bold">SELL</span>
              </div>
              <h3 className="font-display font-bold text-xl text-paper mb-3">Buy / Sell / Hold Calls</h3>
              <p className="text-sm text-paper-dim leading-relaxed mb-6">
                Definite calls backed by detailed rationale, target prices, and stop-loss levels — integrating technical timing with fundamental conviction so decisions are execution-ready, not emotional.
              </p>
              <Link to="/subscribe" className="text-sm font-display font-bold text-brand-green hover:underline inline-flex items-center gap-1.5">
                Get actionable calls <ChevronDown className="-rotate-90 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Framework */}
      <section id="framework" className="py-20 sm:py-28 border-b border-hair">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head flex items-baseline gap-4 mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded">
              03
            </span>
            <div>
              <h2 className="font-display text-3xl font-extrabold text-paper">The PlanB Analytical Framework</h2>
              <p className="lede text-paper-dim text-sm sm:text-base mt-2">
                A multi-layered research process that moves beyond speculation — every pick runs through the same four disciplines before it reaches you.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Fundamental Analysis", desc: "Deep evaluation of financial statements, competitive advantages, and earnings growth." },
              { title: "Technical Analysis", desc: "Quantitative indicators and price action patterns used to map entry and exit zones." },
              { title: "Risk Management", desc: "Strict position sizing rules, stop-loss triggers, and systemic volatility stress tests." },
              { title: "Portfolio Allocation", desc: "Guidance on appropriate capital diversification across market caps and sectors." },
            ].map((item, idx) => (
              <div key={idx} className="bg-panel border border-hair rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs font-black flex items-center justify-center mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display font-bold text-base text-paper mb-3">{item.title}</h3>
                  <p className="text-xs text-paper-dim leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="py-20 sm:py-28 border-b border-hair bg-panel/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head text-center flex flex-col items-center mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded mb-4">
              04
            </span>
            <h2 className="font-display text-3xl font-extrabold text-paper">Recommendations FAQs</h2>
            <p className="lede text-paper-dim text-sm sm:text-base mt-2 text-center">
              Clear information on our recommendations pipeline, risk metrics, and compliance framework.
            </p>
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
