import { Link } from "react-router-dom";
import { CheckCircle2, ShieldAlert, Award, Compass, TrendingUp, Info } from "lucide-react";

export default function DerivativesTrading() {
  const tracks = [
    {
      title: "Intraday Options Trading",
      desc: "For day traders who prioritize speed and momentum, targeting quick intra-session premium expansions.",
      features: [
        "Nifty & Bank Nifty index options index mapping",
        "Open Interest and PCR real-time trackers",
        "Stop-loss parameters set at order entry",
      ],
      icon: Compass,
      path: "/intraday-options",
    },
    {
      title: "Advanced Options Strategies",
      desc: "For systematic swing positioning, including delta-neutral spreads, condors, and collar hedges.",
      features: [
        "Structured multi-leg strategy modeling",
        "Greeks-level risk dashboards (Delta, Gamma, Theta)",
        "Designed to harvest premium time decay",
      ],
      icon: Award,
      path: "/options-strategies",
    },
  ];

  const compliancePoints = [
    { name: "Pre-Trade Margin Verification", desc: "SPAN and exposure margin verified prior to order matching to prevent involuntary leveraged liquidation." },
    { name: "Shortfall Alerts", desc: "Proactive, multi-tier warning alerts sent when capital margins approach exchange maintenance limits." },
    { name: "Volatility Capping", desc: "Position limit throttles that automatically reduce risk sizing when index volatility spikes sharply." },
  ];

  return (
    <div className="bg-ink min-h-screen">
      {/* Hero Header */}
      <header className="hero border-b border-hair relative overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="eyebrow inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs font-semibold px-4 py-2 rounded-full mb-8">
            <span className="pulse w-2 h-2 rounded-full bg-brand-green inline-block animate-pulse"></span>
            DERIVATIVES • FUTURES &amp; OPTIONS
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-paper leading-tight tracking-tight mb-8">
            Master Futures &amp; Options <br />
            <span className="text-brand-green">with institutional-grade tools.</span>
          </h1>
          <p className="hero-sub text-base sm:text-lg text-paper-dim max-w-4xl leading-relaxed mx-auto mb-10">
            The markets reward precision, not guesswork. Our F&amp;O advisory desk is engineered for traders who demand leveraged exposure, robust hedging mechanisms, and execution speed.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/subscribe"
              className="bg-brand-green text-ink hover:bg-brand-green-dim font-display font-bold px-6 py-4 rounded-xl transition-all shadow-lg"
            >
              Open an F&amp;O Account →
            </Link>
            <a
              href="#tracks"
              className="bg-transparent border border-hair text-paper hover:border-brand-green hover:text-brand-green font-display font-bold px-6 py-4 rounded-xl transition-all"
            >
              Choose Your F&amp;O Track
            </a>
          </div>
        </div>
      </header>

      {/* F&O Tracks */}
      <section id="tracks" className="py-20 sm:py-28 border-b border-hair">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head flex items-baseline gap-4 mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded">
              01
            </span>
            <div>
              <h2 className="font-display text-3xl font-extrabold text-paper">
                Choose Your F&amp;O Track
              </h2>
              <p className="lede text-paper-dim text-sm sm:text-base mt-2">
                We support two specialized trading verticals — pick the one that matches your capital scale and timeline.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tracks.map((track) => {
              const Icon = track.icon;
              return (
                <div
                  key={track.title}
                  className="bg-panel border border-hair hover:border-brand-green/30 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
                >
                  <div>
                    <div className="p-3 rounded-xl bg-panel-two text-brand-green w-fit mb-6">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-paper mb-3">{track.title}</h3>
                    <p className="text-sm text-paper-dim leading-relaxed mb-6">{track.desc}</p>
                    <ul className="space-y-3.5 mb-8">
                      {track.features.map((feat) => (
                        <li key={feat} className="text-sm text-paper-dim pl-6 relative">
                          <CheckCircle2 className="w-4 h-4 text-brand-green absolute left-0 top-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to={track.path}
                    className="w-full py-3.5 rounded-xl border border-hair text-paper hover:bg-brand-green hover:text-ink hover:border-brand-green font-display font-bold text-sm text-center block transition-all"
                  >
                    Explore Track Detail →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Risk and Compliance Section */}
      <section className="py-20 sm:py-28 border-b border-hair bg-panel/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head flex items-baseline gap-4 mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded">
              02
            </span>
            <div>
              <h2 className="font-display text-3xl font-extrabold text-paper">
                Risk Management &amp; Margin Transparency
              </h2>
              <p className="lede text-paper-dim text-sm sm:text-base mt-2">
                Embedded exchange controls protecting your trading capital from non-linear drawdowns.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {compliancePoints.map((point) => (
              <div key={point.name} className="bg-panel border border-hair rounded-2xl p-6">
                <h3 className="font-display font-bold text-base text-paper mb-3 flex items-center gap-2">
                  <ShieldAlert className="w-5 h-5 text-brand-green shrink-0" /> {point.name}
                </h3>
                <p className="text-sm text-paper-dim leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>

          <div className="risk-banner bg-brand-red/10 border border-brand-red/30 rounded-2xl p-6 flex gap-4 mt-12">
            <span className="text-brand-red font-mono font-black text-lg select-none">!</span>
            <p className="text-sm text-paper-dim leading-relaxed">
              <strong className="text-paper font-semibold">Leveraged Risk Disclaimer:</strong> Derivatives trading involves substantial leverage, which can amplify both gains and losses. F&amp;O option buying and writing segments carry significant capital erosion risks. Please ensure you understand SPAN margin, premium erosion, and the Greeks before committing capital.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
