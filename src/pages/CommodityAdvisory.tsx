import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, TrendingUp, Cpu, Award, ChevronDown, CheckCircle2 } from "lucide-react";

export default function CommodityAdvisory() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", interest: "" });
  const [submitted, setSubmitted] = useState(false);
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});

  const toggleFaq = (index: number) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone && formData.interest) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", phone: "", interest: "" });
      }, 4000);
    }
  };

  const advisoryDesks = [
    {
      name: "Bullion & Precious Metals",
      desc: "Capital preservation and inflation-hedging mandates.",
      points: [
        "Gold advisory across spot, futures, and currency shifts",
        "Silver industrial & safe-haven trend mapping",
        "Strategic portfolio allocation weights",
      ],
      icon: Award,
    },
    {
      name: "Energy & Power Derivatives",
      desc: "For active volatility traders and energy-exposed entities.",
      points: [
        "Crude Oil trading based on OPEC+ and macro inventory metrics",
        "Natural Gas storage and weather pattern analytics",
        "Structured energy futures and options spreads",
      ],
      icon: TrendingUp,
    },
    {
      name: "Industrial & Base Metals",
      desc: "Capturing electrification, infrastructure, and green transition themes.",
      points: [
        "Copper supply-demand constraints and industrial cycles",
        "Aluminum and Nickel battery/manufacturing inputs",
        "Integrated base metal index analytics",
      ],
      icon: Cpu,
    },
  ];

  const faqs = [
    { q: "Why add commodities to an equity-heavy portfolio?", a: "Commodities typically exhibit low or negative correlation with equities, particularly during inflationary periods or geopolitical shocks. Adding exposure to assets like Gold, Crude Oil, or Copper can improve portfolio diversification and reduce overall volatility." },
    { q: "Do you offer corporate hedging?", a: "Yes. PlanB provides customized input cost hedging and forward contracts optimization for enterprises exposed to direct commodity raw material fluctuations." },
    { q: "How are recommendations delivered?", a: "Recommendations are sent in real time through our secure member dashboard with precise entry zones, risk parameters, and rollover guidance." },
  ];

  return (
    <div className="bg-ink min-h-screen">
      {/* Hero Header */}
      <header className="hero border-b border-hair relative overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="eyebrow inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs font-semibold px-4 py-2 rounded-full mb-8">
                <span className="pulse w-2 h-2 rounded-full bg-brand-green inline-block animate-pulse"></span>
                COMMODITY ADVISORY DESK
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-black text-paper leading-tight tracking-tight mb-8">
                Commodity trading &amp; advisory: <br />
                <span className="text-brand-green">your Plan B for volatile equity markets.</span>
              </h1>
              <p className="hero-sub text-base sm:text-lg text-paper-dim max-w-xl leading-relaxed mb-10">
                Diversify beyond equities. Hedge against inflation. Capture absolute returns with institutional-grade bullion, energy, and base metals advisory.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#consult"
                  className="bg-brand-green text-ink hover:bg-brand-green-dim font-display font-bold px-6 py-4 rounded-xl transition-all shadow-lg"
                >
                  Book a Consultation →
                </a>
              </div>
            </div>

            {/* Sparkline Strategy Board */}
            <div className="bg-panel border border-hair rounded-2xl p-6 shadow-2xl space-y-4">
              <div className="flex justify-between items-baseline mb-2">
                <span className="font-mono text-[10px] text-paper-dim uppercase tracking-wider">
                  COMMODITY DESK STRATEGY BOARD
                </span>
                <span className="font-mono text-xs text-brand-green">LIVE INDICATORS</span>
              </div>
              <div className="divide-y divide-hair">
                <div className="flex justify-between py-3 items-center">
                  <div>
                    <div className="text-sm font-bold text-paper font-display">GOLD</div>
                    <div className="text-xs text-paper-dim mt-0.5">Inflation safe-haven</div>
                  </div>
                  <div className="flex gap-1 h-6 items-end">
                    <div className="w-1.5 h-3 bg-brand-gold rounded-t"></div>
                    <div className="w-1.5 h-5 bg-brand-gold rounded-t"></div>
                    <div className="w-1.5 h-4 bg-brand-gold rounded-t"></div>
                    <div className="w-1.5 h-6 bg-brand-gold rounded-t"></div>
                  </div>
                  <span className="text-xs font-mono font-bold text-brand-gold">HEDGE</span>
                </div>
                <div className="flex justify-between py-3 items-center">
                  <div>
                    <div className="text-sm font-bold text-paper font-display">CRUDE</div>
                    <div className="text-xs text-paper-dim mt-0.5">Energy macro flow</div>
                  </div>
                  <div className="flex gap-1 h-6 items-end">
                    <div className="w-1.5 h-5 bg-brand-blue rounded-t"></div>
                    <div className="w-1.5 h-3 bg-brand-blue rounded-t"></div>
                    <div className="w-1.5 h-6 bg-brand-blue rounded-t"></div>
                    <div className="w-1.5 h-4 bg-brand-blue rounded-t"></div>
                  </div>
                  <span className="text-xs font-mono font-bold text-brand-blue">VOL</span>
                </div>
                <div className="flex justify-between py-3 items-center">
                  <div>
                    <div className="text-sm font-bold text-paper font-display">COPPER</div>
                    <div className="text-xs text-paper-dim mt-0.5">Transition transition</div>
                  </div>
                  <div className="flex gap-1 h-6 items-end">
                    <div className="w-1.5 h-2 bg-brand-green rounded-t"></div>
                    <div className="w-1.5 h-4 bg-brand-green rounded-t"></div>
                    <div className="w-1.5 h-5 bg-brand-green rounded-t"></div>
                    <div className="w-1.5 h-6 bg-brand-green rounded-t"></div>
                  </div>
                  <span className="text-xs font-mono font-bold text-brand-green">DEMAND</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Offerings Desks */}
      <section id="offerings" className="py-20 sm:py-28 border-b border-hair bg-panel/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head flex items-baseline gap-4 mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded">
              01
            </span>
            <div>
              <h2 className="font-display text-3xl font-extrabold text-paper">
                Our Commodity Service Desks
              </h2>
              <p className="lede text-paper-dim text-sm sm:text-base mt-2">
                Three specialized commodity channels mapped to your risk-hedging priorities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {advisoryDesks.map((desk) => {
              const Icon = desk.icon;
              return (
                <div key={desk.name} className="bg-panel border border-hair rounded-2xl p-8 flex flex-col justify-between">
                  <div>
                    <div className="p-3 rounded-xl bg-panel-two text-brand-green w-fit mb-6">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-paper mb-3">{desk.name}</h3>
                    <p className="text-sm text-paper-dim leading-relaxed mb-6">{desk.desc}</p>
                    <ul className="space-y-3.5 mb-8">
                      {desk.points.map((pt) => (
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

      {/* Advantage Matrix */}
      <section id="matrix" className="py-20 sm:py-28 border-b border-hair">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head flex items-baseline gap-4 mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded">
              02
            </span>
            <div>
              <h2 className="font-display text-3xl font-extrabold text-paper">
                The PlanB Advantage Matrix
              </h2>
              <p className="lede text-paper-dim text-sm sm:text-base mt-2">
                Quality of research insight sets us apart from default broker platforms.
              </p>
            </div>
          </div>

          <div className="tbl-wrap border border-hair rounded-2xl overflow-hidden bg-panel">
            <table className="w-full">
              <thead>
                <tr className="border-b border-hair">
                  <th className="p-5 text-left text-xs font-mono font-bold text-paper-dim uppercase bg-panel-two">Feature</th>
                  <th className="p-5 text-left text-xs font-mono font-bold text-paper-dim uppercase bg-panel-two">DIY Broker Platforms</th>
                  <th className="p-5 text-left text-xs font-mono font-bold text-brand-green uppercase tracking-widest bg-panel-two">PlanB Solutions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hair">
                <tr className="hover:bg-panel-two/30">
                  <td className="p-5 font-semibold text-sm text-paper">Research &amp; Sentiment</td>
                  <td className="p-5 text-sm text-paper-dim">Raw news feeds or charts with zero context</td>
                  <td className="p-5 text-sm text-brand-green font-semibold">Macro analytics, supply-demand balance sheet reports</td>
                </tr>
                <tr className="hover:bg-panel-two/30">
                  <td className="p-5 font-semibold text-sm text-paper">Risk Controls</td>
                  <td className="p-5 text-sm text-paper-dim">Self-set limits only, high margin-call triggers</td>
                  <td className="p-5 text-sm text-brand-green font-semibold">Predefined entry boundaries and ATR-volatility stops</td>
                </tr>
                <tr className="hover:bg-panel-two/30">
                  <td className="p-5 font-semibold text-sm text-paper">Corporate Hedging</td>
                  <td className="p-5 text-sm text-paper-dim">Unavailable</td>
                  <td className="p-5 text-sm text-brand-green font-semibold">Bespoke raw material and pricing hedgers support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Consultation form */}
      <section id="consult" className="py-20 sm:py-28 border-b border-hair bg-panel/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-panel border border-hair rounded-2xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="eyebrow inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs font-semibold px-4 py-2 rounded-full mb-6">
                  ADVISORY CONSULTATION
                </span>
                <h2 className="font-display text-3xl font-black text-paper mb-4 leading-tight">
                  Design Your Hard Asset Hedge.
                </h2>
                <p className="text-paper-dim leading-relaxed mb-6">
                  HNWIs and corporate allocators rely on PlanB Solutions to structure portfolio-hedging positions outside volatile equity cycles. Submit your parameters to get started.
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
                    <label className="text-xs font-mono text-paper-dim font-bold">Primary Desk *</label>
                    <select
                      required
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-ink border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green transition-colors appearance-none"
                    >
                      <option value="" disabled>Select target desk</option>
                      <option value="bullion">Bullion &amp; Precious Metals</option>
                      <option value="energy">Energy &amp; Power Derivatives</option>
                      <option value="industrial">Industrial &amp; Base Metals</option>
                      <option value="corporate">Corporate Hedging</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-green text-ink hover:bg-brand-green-dim font-display font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-brand-green/20 cursor-pointer mt-4"
                  >
                    Request Consultation
                  </button>
                </form>

                {submitted && (
                  <div className="absolute inset-0 bg-panel-two rounded-2xl flex flex-col items-center justify-center text-center p-6 sm:p-8 animate-in fade-in duration-200">
                    <ShieldCheck className="w-16 h-16 text-brand-green mb-4" />
                    <h3 className="font-display font-bold text-xl text-paper mb-2">Scoping Filed!</h3>
                    <p className="text-sm text-paper-dim max-w-xs">
                      We have logged your commodity allocation preferences. Our analyst will contact you with market indicators shortly.
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
            <h2 className="font-display text-3xl font-extrabold text-paper">Commodity FAQs</h2>
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
