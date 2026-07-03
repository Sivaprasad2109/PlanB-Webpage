import { Link } from "react-router-dom";
import { CheckCircle2, TrendingUp, Compass, ShieldAlert, Award } from "lucide-react";

export default function EquityResearch() {
  const offerings = [
    {
      name: "Short-Term Picks",
      desc: "High-conviction swing opportunities designed to capture short-duration price waves (2 days to 3 weeks).",
      points: [
        "Predefined entry zones, targets, and stop-loss levels",
        "Risk-reward ratios optimized at 1:2 or higher",
        "Momentum catalysts paired with clean chart patterns",
      ],
      icon: TrendingUp,
    },
    {
      name: "Long-Term Picks",
      desc: "Structural compounders selected for their durable moats, stellar ROE, and industry-leading pricing power (6 months to multi-year).",
      points: [
        "In-depth balance sheet stress testing",
        "Calibrated with top-down macro sector cycles",
        "Focus on consistent earnings expansion",
      ],
      icon: Award,
    },
    {
      name: "Sector Overlays",
      desc: "Tactical and thematic rotations across sectors (e.g., infrastructure, financial transition, public capital expenditure).",
      points: [
        "Identification of macro sector tailwinds",
        "Early warning indicators for sector exhaustion",
        "Concentrated sector leader selection",
      ],
      icon: Compass,
    },
  ];

  return (
    <div className="bg-ink min-h-screen">
      {/* Hero Header */}
      <header className="hero border-b border-hair relative overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="eyebrow inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs font-semibold px-4 py-2 rounded-full mb-8">
            <span className="pulse w-2 h-2 rounded-full bg-brand-green inline-block animate-pulse"></span>
            EQUITY RESEARCH DESK
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-paper leading-tight tracking-tight mb-8">
            Equity research for <br />
            <span className="text-brand-green">intraday, swing &amp; hedged portfolios.</span>
          </h1>
          <p className="hero-sub text-base sm:text-lg text-paper-dim max-w-4xl leading-relaxed mx-auto mb-10">
            We deliver data-backed equity research across three distinct trading horizons — intraday stocks, positional/swing trades, and portfolio hedging — so you act with a clear mathematical plan, never a guess.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/subscribe"
              className="bg-brand-green text-ink hover:bg-brand-green-dim font-display font-bold px-6 py-4 rounded-xl transition-all shadow-lg"
            >
              Get Started with Equity Research →
            </Link>
            <a
              href="#offerings"
              className="bg-transparent border border-hair text-paper hover:border-brand-green hover:text-brand-green font-display font-bold px-6 py-4 rounded-xl transition-all"
            >
              View Research Offerings
            </a>
          </div>
        </div>
      </header>

      {/* Offerings Grid */}
      <section id="offerings" className="py-20 sm:py-28 border-b border-hair bg-panel/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head flex items-baseline gap-4 mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded">
              01
            </span>
            <div>
              <h2 className="font-display text-3xl font-extrabold text-paper">
                Our Equity Offerings
              </h2>
              <p className="lede text-paper-dim text-sm sm:text-base mt-2">
                Three specialized research desks to support separate wealth and trading mandates.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {offerings.map((offering) => {
              const Icon = offering.icon;
              return (
                <div
                  key={offering.name}
                  className="bg-panel border border-hair rounded-2xl p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="p-3 rounded-xl bg-panel-two text-brand-green w-fit mb-6">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-paper mb-3">{offering.name}</h3>
                    <p className="text-sm text-paper-dim leading-relaxed mb-6">{offering.desc}</p>
                    <ul className="space-y-3">
                      {offering.points.map((pt) => (
                        <li key={pt} className="text-sm text-paper-dim pl-6 relative">
                          <CheckCircle2 className="w-4 h-4 text-brand-green absolute left-0 top-0.5 shrink-0" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Analytical Process */}
      <section className="py-20 sm:py-28 border-b border-hair">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head flex items-baseline gap-4 mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded">
              02
            </span>
            <div>
              <h2 className="font-display text-3xl font-extrabold text-paper">
                The Selection Funnel
              </h2>
              <p className="lede text-paper-dim text-sm sm:text-base mt-2">
                We screen 2,000+ listed names to deliver a highly concentrated weekly shortlist.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-paper-dim leading-relaxed">
              <p>
                Our screening process blends rigid fundamental filters (Debt-to-Equity, Operating Margin expansion, ROE) with short-term quantitative and technical overlays. We monitor sector momentum, institutional FII/DII flow changes, and relative volume surges.
              </p>
              <p>
                Every recommendation includes a documented entry range, stop-loss trigger, and primary target. By defining risk before order placement, we help clients build consistent, non-correlated trading books.
              </p>
            </div>

            <div className="bg-panel border border-hair rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="font-display font-bold text-lg text-paper mb-4">Underlying Pillars</h3>
              <div className="divide-y divide-hair">
                <div className="pb-4">
                  <span className="font-mono text-xs text-brand-green">PILLAR 01</span>
                  <h4 className="text-sm font-bold text-paper mt-1">Earnings Growth &amp; Pricing Power</h4>
                </div>
                <div className="py-4">
                  <span className="font-mono text-xs text-brand-green">PILLAR 02</span>
                  <h4 className="text-sm font-bold text-paper mt-1">Greeks-Level Position Sizing</h4>
                </div>
                <div className="pt-4">
                  <span className="font-mono text-xs text-brand-green">PILLAR 03</span>
                  <h4 className="text-sm font-bold text-paper mt-1">Strict Risk Defensibility</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
