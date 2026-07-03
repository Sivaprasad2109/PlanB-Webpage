import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { TrendingUp, ShieldAlert, Award, Compass, Calculator, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    track: "",
    portfolio: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const tracks = [
    {
      tag: "Equity",
      name: "Equity Research",
      desc: "High-conviction fundamentally screened stocks for intraday, swing, and long-term compounding.",
      path: "/equity-research",
      color: "border-brand-green text-brand-green",
    },
    {
      tag: "Derivatives",
      name: "Derivatives (F&O) Trading",
      desc: "Risk-defined Nifty & Bank Nifty options strategies, hedging, and momentum setups.",
      path: "/derivatives-trading",
      color: "border-brand-blue text-brand-blue",
    },
    {
      tag: "Commodities",
      name: "Commodity Trading Advisory",
      desc: "MCX Crude Oil, Gold & Silver setups driven by global macro trends and fundamentals.",
      path: "/commodity-advisory",
      color: "border-brand-gold text-brand-gold",
    },
    {
      tag: "Options",
      name: "Intraday Options Advisory",
      desc: "Rule-based, same-day options setups on Nifty & Bank Nifty with strict stop-loss discipline.",
      path: "/intraday-options",
      color: "border-brand-blue text-brand-blue",
    },
    {
      tag: "Options",
      name: "Options Strategies 2026",
      desc: "Systematic, risk-defined options execution built for the current volatility regime.",
      path: "/options-strategies",
      color: "border-brand-blue text-brand-blue",
    },
    {
      tag: "Equity",
      name: "Equity Hedge & Protection",
      desc: "Hedging overlays designed to protect existing equity portfolios from drawdown risk.",
      path: "/equity-hedge",
      color: "border-brand-green text-brand-green",
    },
    {
      tag: "Equity",
      name: "Intraday Stocks",
      desc: "Live, same-day trading research and strategy for active intraday equity traders.",
      path: "/intraday-stocks",
      color: "border-brand-green text-brand-green",
    },
    {
      tag: "Equity",
      name: "Positional Trading",
      desc: "Multi-day to multi-week setups for traders who don't want to watch every tick.",
      path: "/positional-trading",
      color: "border-brand-green text-brand-green",
    },
    {
      tag: "All Tracks",
      name: "Stock Recommendations",
      desc: "See the format and quality of live Buy/Sell/Hold calls before you commit to a plan.",
      path: "/recommendations",
      color: "border-paper text-paper",
    },
  ];

  const plans = [
    {
      pkg: "PACKAGE 01",
      name: "Equity Research",
      price: "₹9,999",
      desc: "Long-term wealth creation through high-conviction, fundamentally screened stocks.",
      tagClass: "text-brand-green",
      isFeatured: false,
    },
    {
      pkg: "PACKAGE 02",
      name: "Derivatives (F&O)",
      price: "₹9,999",
      desc: "Risk-defined Nifty & Bank Nifty options strategies, hedging, and momentum setups.",
      tagClass: "text-brand-blue",
      isFeatured: true,
    },
    {
      pkg: "PACKAGE 03",
      name: "Commodities",
      price: "₹9,999",
      desc: "MCX Crude Oil, Gold, and Silver setups driven by global macro trends.",
      tagClass: "text-brand-gold",
      isFeatured: false,
    },
  ];

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
      {/* Hero Section */}
      <header className="hero border-b border-hair relative overflow-hidden py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="eyebrow inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs font-semibold px-4 py-2 rounded-full mb-8">
            <span className="pulse w-2 h-2 rounded-full bg-brand-green inline-block animate-pulse"></span>
            SUBSCRIPTIONS OPEN — ONBOARDING WITHIN 24 HRS
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-paper leading-tight tracking-tight mb-8">
            Subscribe to Research You Can<br />
            <span className="text-brand-green">Actually Hold Accountable.</span>
          </h1>
          <p className="hero-sub text-base sm:text-lg lg:text-xl text-paper-dim max-w-3xl leading-relaxed mb-10">
            Pick a track, complete one short form, and get onboarded to{" "}
            <strong className="text-paper">SEBI-registered, research-backed advisory</strong> across
            Equity, Derivatives (F&amp;O), and Commodities — with defined entry, target, and stop-loss on every call. Plans start at ₹9,999.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <div className="flex items-center gap-3 text-sm text-paper-dim">
              <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
              <span>SEBI-Registered Research Analyst</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-paper-dim">
              <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
              <span>Defined risk on every recommendation</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-paper-dim">
              <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
              <span>Onboarding within 24 hours</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#plans"
              className="bg-brand-green text-ink hover:bg-brand-green-dim font-display font-bold px-6 py-4 rounded-xl transition-all shadow-lg hover:shadow-brand-green/20"
            >
              Choose Your Plan &amp; Subscribe →
            </a>
            <a
              href="#form"
              className="bg-transparent border border-hair text-paper hover:border-brand-green hover:text-brand-green font-display font-bold px-6 py-4 rounded-xl transition-all"
            >
              Talk to an Advisor First
            </a>
          </div>
        </div>
      </header>

      {/* Advisory Tracks Section */}
      <section id="tracks" className="py-20 sm:py-28 border-b border-hair">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head flex items-baseline gap-4 mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded">
              01
            </span>
            <div>
              <h2 className="font-display text-3xl font-extrabold text-paper">
                Choose the Advisory Track That Fits Your Goal
              </h2>
              <p className="lede text-paper-dim text-sm sm:text-base mt-2">
                Every subscription plugs into a dedicated research vertical. Explore a track below to see sample setups, methodology, and coverage before you subscribe.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track, i) => (
              <motion.div
                key={track.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-panel border border-hair hover:border-brand-green/50 p-6 rounded-2xl flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <span className="font-mono text-[10px] tracking-wider uppercase text-brand-green mb-4 block">
                    {track.tag}
                  </span>
                  <h3 className="font-display font-bold text-lg text-paper group-hover:text-brand-green transition-colors mb-3">
                    {track.name}
                  </h3>
                  <p className="text-sm text-paper-dim leading-relaxed mb-6">
                    {track.desc}
                  </p>
                </div>
                <Link
                  to={track.path}
                  className="font-display font-bold text-xs tracking-wider text-brand-green inline-flex items-center gap-1 group-hover:gap-2 transition-all mt-auto"
                >
                  Explore Track <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 sm:py-28 border-b border-hair">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head flex items-baseline gap-4 mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded">
              02
            </span>
            <div>
              <h2 className="font-display text-3xl font-extrabold text-paper">
                Subscription Plans — Starting at ₹9,999
              </h2>
              <p className="lede text-paper-dim text-sm sm:text-base mt-2">
                A snapshot of our three core packages. See the full feature-by-feature comparison and bundle pricing on the Pricing page.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div
                key={plan.name}
                className={`bg-panel border border-hair rounded-2xl p-8 relative flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                  plan.isFeatured ? "border-brand-green" : ""
                }`}
              >
                {plan.isFeatured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-green text-ink font-mono text-[9px] font-bold tracking-widest px-4 py-1.5 rounded-full">
                    MOST POPULAR
                  </span>
                )}
                <div>
                  <span className={`font-mono text-xs tracking-widest font-semibold block mb-4 ${plan.tagClass}`}>
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
                  <p className="text-sm text-paper-dim leading-relaxed mb-8">
                    {plan.desc}
                  </p>
                </div>
                <Link
                  to="/pricing"
                  className={`w-full py-3.5 rounded-xl font-display font-bold text-sm text-center block transition-all ${
                    plan.isFeatured
                      ? "bg-brand-green text-ink hover:bg-brand-green-dim"
                      : "border border-hair text-paper hover:border-brand-green hover:text-brand-green"
                  }`}
                >
                  See Full Details →
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-paper-dim mt-12">
            Want a side-by-side feature comparison first?{" "}
            <Link to="/pricing" className="text-brand-green font-semibold hover:underline">
              View the full pricing &amp; comparison table →
            </Link>
          </p>
        </div>
      </section>

      {/* Free Calculators Cross-Sell */}
      <section className="py-12 border-b border-hair">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-green/5 border border-brand-green/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-brand-green/10 text-brand-green shrink-0 mt-1">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-paper mb-1">
                  Not sure how much you'll need to invest?
                </h3>
                <p className="text-sm text-paper-dim leading-relaxed max-w-xl">
                  Use our free SIP, retirement, and returns calculators to plan your allocation perfectly before you commit to a subscription.
                </p>
              </div>
            </div>
            <Link
              to="/calculators"
              className="bg-transparent border border-hair hover:border-brand-green hover:text-brand-green text-paper text-sm font-display font-bold px-5 py-3.5 rounded-xl shrink-0 transition-all"
            >
              Try Free Calculators →
            </Link>
          </div>
        </div>
      </section>

      {/* Subscription Form */}
      <section id="form" className="py-20 sm:py-28 border-b border-hair bg-panel/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-head flex items-baseline gap-4 mb-8">
                <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded">
                  03
                </span>
                <h2 className="font-display text-3xl font-extrabold text-paper">
                  Start Your Subscription
                </h2>
              </div>
              <p className="text-paper-dim leading-relaxed mb-8">
                Tell us your track and investment size — an advisor from PlanB Solutions will confirm your plan, and send payment &amp; onboarding details within 24 hours.
              </p>
              <ul className="space-y-4 text-sm text-paper-dim">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
                  <span>No spam, no forwarded "free tip" noise</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
                  <span>Defined entry, target &amp; stop-loss on every call</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
                  <span>Direct line to the research desk</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
                  <span>Cancel or switch tracks anytime</span>
                </li>
              </ul>
            </div>

            <div className="bg-panel border border-hair rounded-2xl p-6 sm:p-8 relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-paper-dim">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-ink border border-hair rounded-xl px-4 py-3 text-sm text-paper outline-none focus:border-brand-green transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-paper-dim">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-ink border border-hair rounded-xl px-4 py-3 text-sm text-paper outline-none focus:border-brand-green transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-paper-dim">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-ink border border-hair rounded-xl px-4 py-3 text-sm text-paper outline-none focus:border-brand-green transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-paper-dim">Track You Want *</label>
                    <select
                      required
                      value={formData.track}
                      onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                      className="w-full bg-ink border border-hair rounded-xl px-4 py-3 text-sm text-paper outline-none focus:border-brand-green transition-colors appearance-none"
                    >
                      <option value="" disabled>Select a track</option>
                      <option value="equity">Equity Research</option>
                      <option value="fo">Derivatives (F&amp;O)</option>
                      <option value="commodities">Commodities Desk</option>
                      <option value="bundle">Bundle / All Tracks</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-paper-dim">Approx. Investment Size (optional)</label>
                  <input
                    type="text"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    className="w-full bg-ink border border-hair rounded-xl px-4 py-3 text-sm text-paper outline-none focus:border-brand-green transition-colors"
                    placeholder="e.g. ₹5 Lakhs +"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-green text-ink hover:bg-brand-green-dim font-display font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-brand-green/20 cursor-pointer"
                >
                  Subscribe Now →
                </button>

                <p className="text-[10px] text-paper-dim text-center leading-relaxed">
                  By submitting, you confirm you have read and understood our SEBI disclaimer. No speculative strategies or guaranteed-return schemes are promised or implied.
                </p>
              </form>

              {submitted && (
                <div className="absolute inset-0 bg-panel/95 rounded-2xl flex flex-col items-center justify-center text-center p-6 sm:p-8 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-16 h-16 text-brand-green mb-4" />
                  <h3 className="font-display font-bold text-xl text-paper mb-2">Request Received!</h3>
                  <p className="text-sm text-paper-dim max-w-sm">
                    Thank you! Our advisory team will reach out to you within 24 hours with custom recommendations and onboarding documents.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="risk-banner bg-brand-red/10 border border-brand-red/30 rounded-2xl p-6 flex gap-4 mt-16">
            <span className="text-brand-red font-mono font-black text-lg select-none">!</span>
            <p className="text-sm text-paper-dim leading-relaxed">
              <strong className="text-paper font-semibold">Risk &amp; Compliance Disclosure:</strong> Investments and trading in equity, derivatives, and commodity markets are subject to market risk. PlanB Solutions does not guarantee returns, profits, or accuracy of recommendations. Final execution and risk management remain the responsibility of the subscriber. Please read all subscription terms and risk disclosure documents carefully before subscribing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
