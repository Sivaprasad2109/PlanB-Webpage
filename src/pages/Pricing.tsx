import { Link } from "react-router-dom";
import { Check, ShieldAlert, Award, Compass, TrendingUp, Info } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      pkg: "PACKAGE 01",
      name: "Equity Research",
      price: "₹9,999",
      desc: "Long-term wealth creation through high-conviction, fundamentally screened stocks. Alpha-generating ideas backed by balance sheet analysis — not momentum chasing.",
      tagClass: "text-brand-green bg-brand-green/10 border-brand-green/20",
      suited: "Long-term investors & wealth builders",
      features: [
        "High-conviction stock picks from fundamental + technical filters",
        "Long-term and medium-term wealth-building ideas",
        "Sector rotation and thematic investment insights",
        "Entry zones, target prices, and portfolio allocation guidance",
        "Recommendation frequency: Weekly / as opportunities arise",
        "Research desk support included",
      ],
      isFeatured: false,
    },
    {
      pkg: "PACKAGE 02",
      name: "Derivatives (F&O)",
      price: "₹9,999",
      desc: "Risk-defined Nifty & Bank Nifty options strategies, hedging, and momentum setups. Structured, rule-based F&O execution for active traders.",
      tagClass: "text-brand-blue bg-brand-blue/10 border-brand-blue/20",
      suited: "Active F&O traders",
      features: [
        "Nifty & Bank Nifty options strategies — buying and writing",
        "Risk-defined hedging structures: spreads, Iron Condors, etc.",
        "Intraday and swing momentum setups with strict stop-losses",
        "Position sizing and risk-to-reward guidance on every call",
        "Recommendation frequency: Daily intraday + swing setups",
        "Research desk support included",
      ],
      isFeatured: true,
    },
    {
      pkg: "PACKAGE 03",
      name: "Commodities",
      price: "₹9,999",
      desc: "MCX Crude Oil, Gold, and Silver setups driven by global macro trends — capturing moves from inflation cycles, energy markets, and geopolitical shifts.",
      tagClass: "text-brand-gold bg-brand-gold/10 border-brand-gold/20",
      suited: "Diversification-focused traders & HNWIs",
      features: [
        "MCX Crude Oil setups tied to global supply-demand fundamentals",
        "Gold & Silver advisory for inflation hedging and safe-haven plays",
        "Macro-driven trend calls: OPEC+ policy, currency moves",
        "Defined entry, target, and stop-loss on every recommendation",
        "Recommendation frequency: As macro/technical setups develop",
        "Research desk support included",
      ],
      isFeatured: false,
    },
  ];

  const comparisonRows = [
    { feature: "Starting Price", eq: "₹9,999", fo: "₹9,999", cm: "₹9,999" },
    { feature: "Focus Area", eq: "Long-term wealth, high-conviction", fo: "Index options, hedging, momentum", cm: "Crude, Gold, Silver, macro trends" },
    { feature: "Recommendation Frequency", eq: "Weekly / as setups arise", fo: "Daily (intraday) + swing setups", cm: "As macro/technical trends develop" },
    { feature: "Entry Zone Provided", eq: "Yes", fo: "Yes", cm: "Yes" },
    { feature: "Target Price Provided", eq: "Yes", fo: "Yes", cm: "Yes" },
    { feature: "Stop-Loss Defined", eq: "Portfolio allocation metrics", fo: "Strict stop-loss on every call", cm: "Yes" },
    { feature: "Position Sizing Guidance", eq: "Portfolio allocation %", fo: "Risk-to-reward per setup", cm: "Defined per setup" },
    { feature: "Strategy Type", eq: "Fundamental + technical", fo: "Rule-based, risk-defined", cm: "Macro + technical fundamentals" },
    { feature: "Hedging Coverage", eq: "—", fo: "Spreads, Iron Condors, credit", cm: "Inflation hedge via precious metals" },
    { feature: "Research Desk Support", eq: "Yes", fo: "Yes", cm: "Yes" },
  ];

  return (
    <div className="bg-ink min-h-screen">
      {/* Hero */}
      <header className="hero border-b border-hair relative overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="eyebrow inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs font-semibold px-4 py-2 rounded-full mb-8">
            <span className="pulse w-2 h-2 rounded-full bg-brand-green inline-block animate-pulse"></span>
            ACCOUNTABLE, TRANSPARENT PRICING
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-paper leading-tight tracking-tight mb-8 mx-auto">
            Research-backed conviction.<br />
            <span className="text-brand-green">Not guesswork.</span>
          </h1>
          <p className="hero-sub text-base sm:text-lg text-paper-dim max-w-3xl leading-relaxed mb-10 mx-auto">
            Advisory shouldn't be reserved for the ultra-wealthy. PlanB Solutions makes{" "}
            <strong className="text-paper">institutional-grade research, risk-defined strategies, and disciplined execution</strong>{" "}
            accessible across Equity, Derivatives, and Commodities — starting at just:
          </p>
          <div className="price-flag inline-flex items-baseline gap-2 bg-panel border border-hair rounded-2xl px-6 py-4 mx-auto mb-10">
            <span className="font-mono text-xs text-paper-dim">Starting at</span>
            <span className="font-display text-4xl font-black text-brand-green">₹9,999</span>
            <span className="text-xs text-paper-dim">/ package</span>
          </div>
        </div>
      </header>

      {/* Why Pay - The "Free Tip" Myth, Debunked */}
      <section id="why-pay" className="py-20 sm:py-24 border-b border-hair">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head flex items-baseline gap-4 mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded">
              01
            </span>
            <div>
              <h2 className="font-display text-3xl font-extrabold text-paper">
                Why Pay for Advisory? The "Free Tip" Myth, Debunked.
              </h2>
              <p className="lede text-paper-dim text-sm sm:text-base mt-2">
                Free tip channels have one model: engagement. More calls, more urgency, more noise — because your P&amp;L isn't the product.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { title: "Research, Not Reaction", icon: TrendingUp, desc: "Recommendations backed by fundamental and technical analysis, not chart screenshots forwarded six times on Telegram." },
              { title: "Defined Risk on Every Call", icon: ShieldAlert, desc: "Entry, target, and stop-loss specified upfront — not left to your judgment under real-time market pressure." },
              { title: "A Framework, Not a Flood", icon: Award, desc: "Curated, high-conviction setups instead of fifty messages a day diluting your decision-making and focus." },
              { title: "Skin in the Credibility Game", icon: Compass, desc: "Our research desk's track record is the product. That's a fundamentally different incentive structure than a free channel chasing forwards." },
            ].map((myth) => {
              const Icon = myth.icon;
              return (
                <div key={myth.title} className="bg-panel border border-hair rounded-2xl p-6 flex gap-4">
                  <div className="p-3 rounded-xl bg-brand-green/10 text-brand-green shrink-0 mt-1">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base text-paper mb-2">{myth.title}</h3>
                    <p className="text-sm text-paper-dim leading-relaxed">{myth.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-5 bg-brand-green/5 border border-brand-green/20 rounded-2xl flex items-start gap-4">
            <Info className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
            <p className="text-sm text-paper-dim leading-relaxed">
              <strong className="text-paper">The bottom line:</strong> Disciplined capital allocation beats lucky guesses — every single market cycle.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-20 sm:py-28 border-b border-hair">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head flex items-baseline gap-4 mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded">
              02
            </span>
            <div>
              <h2 className="font-display text-3xl font-extrabold text-paper">
                Our Core Packages
              </h2>
              <p className="lede text-paper-dim text-sm sm:text-base mt-2">
                Three advisory tracks — each with defined risk parameters, dedicated research coverage, and starting at ₹9,999.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-panel border border-hair rounded-2xl p-8 relative flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                  plan.isFeatured ? "border-brand-green shadow-xl shadow-brand-green/5" : ""
                }`}
              >
                {plan.isFeatured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-green text-ink font-mono text-[9px] font-bold tracking-widest px-4 py-1.5 rounded-full">
                    MOST POPULAR
                  </span>
                )}
                <div>
                  <span className={`font-mono text-[10px] tracking-wider uppercase font-semibold border px-3 py-1 rounded-full mb-4 inline-block ${plan.tagClass}`}>
                    {plan.pkg}
                  </span>
                  <h3 className="font-display text-xl font-bold text-paper mb-6">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="font-mono text-xs text-paper-dim">Starting at</span>
                    <span className="font-display text-3xl font-black text-brand-green">{plan.price}</span>
                    <span className="text-xs text-paper-dim">/ period</span>
                  </div>
                  <p className="text-sm text-paper-dim leading-relaxed mb-6 min-h-[52px]">
                    {plan.desc}
                  </p>

                  <div className="h-px bg-hair my-6"></div>

                  <p className="font-mono text-xs text-paper-dim mb-4 tracking-wide uppercase">
                    Best for: <span className="text-paper">{plan.suited}</span>
                  </p>

                  <ul className="space-y-3.5 mb-8">
                    {plan.features.map((feat) => (
                      <li key={feat} className="text-sm text-paper-dim pl-6 relative">
                        <Check className="w-4 h-4 text-brand-green absolute left-0 top-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/subscribe"
                  className={`w-full py-4 rounded-xl font-display font-bold text-sm text-center block transition-all ${
                    plan.isFeatured
                      ? "bg-brand-green text-ink hover:bg-brand-green-dim"
                      : "border border-hair text-paper hover:border-brand-green hover:text-brand-green"
                  }`}
                >
                  Get Started →
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-brand-green/5 border border-brand-green/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mt-12">
            <p className="text-sm text-paper-dim leading-relaxed max-w-xl">
              <strong>Need exposure across more than one domain?</strong> Multi-package and bundled pricing is available — speak with our advisory team to structure a plan around your full portfolio.
            </p>
            <Link
              to="/subscribe"
              className="bg-brand-green text-ink hover:bg-brand-green-dim font-display font-bold text-sm px-5 py-3.5 rounded-xl shrink-0 transition-all shadow-lg"
            >
              Talk to Advisory Team
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section id="compare" className="py-20 sm:py-28 border-b border-hair bg-panel/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head flex items-baseline gap-4 mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded">
              03
            </span>
            <div>
              <h2 className="font-display text-3xl font-extrabold text-paper">
                Advisory Packages Side-By-Side
              </h2>
              <p className="lede text-paper-dim text-sm sm:text-base mt-2">
                Every feature, every package — side by side, with nothing buried in fine print.
              </p>
            </div>
          </div>

          <div className="tbl-wrap border border-hair rounded-2xl overflow-hidden bg-panel shadow-2xl">
            <table className="w-full">
              <thead>
                <tr className="border-b border-hair">
                  <th className="p-5 text-left text-xs font-mono font-bold text-paper-dim uppercase tracking-widest bg-panel-two">Feature</th>
                  <th className="p-5 text-left text-xs font-mono font-bold text-brand-green uppercase tracking-widest bg-panel-two">Equity Research</th>
                  <th className="p-5 text-left text-xs font-mono font-bold text-brand-blue uppercase tracking-widest bg-panel-two">Derivatives (F&amp;O)</th>
                  <th className="p-5 text-left text-xs font-mono font-bold text-brand-gold uppercase tracking-widest bg-panel-two">Commodities</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hair">
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-panel-two/30 transition-colors">
                    <td className="p-5 font-semibold text-sm text-paper">{row.feature}</td>
                    <td className="p-5 text-sm text-paper-dim">{row.eq}</td>
                    <td className="p-5 text-sm text-paper-dim">{row.fo}</td>
                    <td className="p-5 text-sm text-paper-dim">{row.cm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="risk-banner bg-brand-red/10 border border-brand-red/30 rounded-2xl p-6 flex gap-4 mt-12">
            <span className="text-brand-red font-mono font-black text-lg select-none">!</span>
            <p className="text-sm text-paper-dim leading-relaxed">
              <strong className="text-paper font-semibold">Risk &amp; Compliance Disclosure:</strong> Investments and trading in equity, derivatives, and commodity markets are subject to market risk. Stop-loss adherence and disciplined position sizing are essential — recommendations from PlanB Solutions are issued with defined risk parameters, but <strong className="text-paper">final execution and risk management remain the responsibility of the subscriber</strong>. PlanB Solutions does not guarantee returns, profits, or accuracy of recommendations. Past performance, where referenced, is not indicative of future results. Please read all subscription terms and risk disclosure documents carefully before subscribing.
            </p>
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="cta-block bg-panel border border-hair rounded-2xl p-12 text-center relative overflow-hidden">
            <h2 className="font-display text-3xl font-extrabold text-paper mb-6">
              Stop reacting. Start trading with conviction.
            </h2>
            <p className="text-base text-paper-dim max-w-xl mx-auto mb-10 leading-relaxed">
              Institutional-grade research, defined risk, disciplined execution — <strong className="text-paper">starting at ₹9,999.</strong> Pick your track, or speak to our advisory team to build a bundled plan across all three.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                to="/subscribe"
                className="bg-brand-green text-ink hover:bg-brand-green-dim font-display font-bold px-6 py-4 rounded-xl transition-all shadow-lg hover:shadow-brand-green/20"
              >
                Compare Plans &amp; Get Started →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
