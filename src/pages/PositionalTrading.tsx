import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Compass, CheckCircle2, ChevronDown, BookOpen } from "lucide-react";

export default function PositionalTrading() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", experience: "", capital: "" });
  const [submitted, setSubmitted] = useState(false);
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});

  // Interactive Checklist State
  const [swingChecks, setSwingChecks] = useState<boolean[]>(Array(5).fill(false));
  const [posChecks, setPosChecks] = useState<boolean[]>(Array(5).fill(false));

  const toggleFaq = (index: number) => {
    setFaqOpen((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", phone: "", experience: "", capital: "" });
      }, 4000);
    }
  };

  const handleSwingChange = (idx: number) => {
    setSwingChecks((prev) => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });
  };

  const handlePosChange = (idx: number) => {
    setPosChecks((prev) => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });
  };

  const swingQuestions = [
    "Can check charts at least once a day during market hours.",
    "Prefer faster feedback on whether a trade layout worked.",
    "Are comfortable acting on technical breakouts without waiting for earnings reports.",
    "Want more frequent, smaller trades over fewer long-term commitments.",
    "Have the discipline to exit on a technical stop-loss within days, not weeks.",
  ];

  const posQuestions = [
    "Have a full-time desk job or extremely limited daily screen availability.",
    "Are comfortable holding through short-term session pullbacks if the sector theme holds.",
    "Enjoy doing fundamental analysis (earnings trends, inventory margins, sector tailwinds).",
    "Prefer fewer, high-conviction structural entries over high trade frequency.",
    "Can commit trading capital for weeks to months without needing immediate liquidity.",
  ];

  const faqs = [
    { q: "What makes positional trading different from swing trading?", a: "Positional trading focuses on weeks to months using blended technical entry timing layered on a fundamental earnings or macro thesis. Swing trading is purely chart-centric, holding for days to weeks to catch index swings." },
    { q: "What parameters do you recommend for swing stops?", a: "Swing stops are typically set tightly below the most recent local swing low, as any breach invalidates the momentum setup immediately." },
    { q: "Can I blend both strategies?", a: "Yes. Many serious allocators split capital: a core positional book for structural sector runs, and a smaller, faster-turnover swing book to harvest shorter momentum waves." },
  ];

  return (
    <div className="bg-ink min-h-screen">
      {/* Hero Header */}
      <header className="hero border-b border-hair relative overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="eyebrow inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs font-semibold px-4 py-2 rounded-full mb-8">
            <span className="pulse w-2 h-2 rounded-full bg-brand-green inline-block animate-pulse"></span>
            EQUITY RESEARCH DESK · DEFINITIVE PLAYBOOKS
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-paper leading-tight tracking-tight mb-8">
            Positional vs. Swing trading: <br />
            <span className="text-brand-green">a definitive guide for retail investors.</span>
          </h1>
          <p className="hero-sub text-base sm:text-lg text-paper-dim max-w-4xl leading-relaxed mb-10">
            Hold for days or hold for months? Conflating swing and positional trading leads to wrong position sizing, premature stop-outs, and capital erosion. We outline both tracks to help you decide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 border border-hair rounded-2xl overflow-hidden">
            <div className="p-6 bg-panel">
              <span className="font-mono text-[10px] text-brand-green uppercase tracking-wider">
                The Wave
              </span>
              <h3 className="font-display font-bold text-base text-paper mt-1 mb-2">Swing Trading</h3>
              <p className="text-xs text-paper-dim leading-relaxed">
                2 days to 3 weeks hold. Technical-centric, fast feedback loops, tight stops near swing lows.
              </p>
            </div>
            <div className="p-6 bg-panel-two">
              <span className="font-mono text-[10px] text-brand-blue uppercase tracking-wider">
                The Tide
              </span>
              <h3 className="font-display font-bold text-base text-paper mt-1 mb-2">Positional Trading</h3>
              <p className="text-xs text-paper-dim leading-relaxed">
                3 weeks to 6 months hold. Fundamental thesis (earnings, macro trends) confirmed with chart crossovers.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Comparison Grid */}
      <section id="comparison" className="py-20 sm:py-28 border-b border-hair">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head flex items-baseline gap-4 mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded">
              01
            </span>
            <div>
              <h2 className="font-display text-3xl font-extrabold text-paper">
                Head-To-Head Parameters
              </h2>
            </div>
          </div>

          <div className="tbl-wrap border border-hair rounded-2xl overflow-hidden bg-panel shadow-2xl">
            <table className="w-full">
              <thead>
                <tr className="border-b border-hair">
                  <th className="p-5 text-left text-xs font-mono font-bold text-paper-dim uppercase bg-panel-two">Parameter</th>
                  <th className="p-5 text-left text-xs font-mono font-bold text-brand-green uppercase bg-panel-two">Swing Trading</th>
                  <th className="p-5 text-left text-xs font-mono font-bold text-brand-blue uppercase bg-panel-two">Positional Trading</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hair">
                <tr className="hover:bg-panel-two/30">
                  <td className="p-5 font-semibold text-sm text-paper">Time Horizon</td>
                  <td className="p-5 text-sm text-paper-dim">2 days to 3 weeks</td>
                  <td className="p-5 text-sm text-paper-dim">3 weeks to 6 months</td>
                </tr>
                <tr className="hover:bg-panel-two/30">
                  <td className="p-5 font-semibold text-sm text-paper">Primary Filters</td>
                  <td className="p-5 text-sm text-paper-dim">Chart patterns, momentum oscillators (RSI, MACD)</td>
                  <td className="p-5 text-sm text-paper-dim">Earnings compounding, sector margin triggers + Moving Averages</td>
                </tr>
                <tr className="hover:bg-panel-two/30">
                  <td className="p-5 font-semibold text-sm text-paper">Trade Frequency</td>
                  <td className="p-5 text-sm text-paper-dim">Higher turnover (multiple entries monthly)</td>
                  <td className="p-5 text-sm text-paper-dim">Concentrated (1-2 entries monthly)</td>
                </tr>
                <tr className="hover:bg-panel-two/30">
                  <td className="p-5 font-semibold text-sm text-paper">Stop Parameters</td>
                  <td className="p-5 text-sm text-paper-dim">Tight — set below swing pivot lows</td>
                  <td className="p-5 text-sm text-paper-dim">Wider — set below major structural zones (50/200 DMA)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Interactive Self-Assessment */}
      <section id="assess" className="py-20 sm:py-28 border-b border-hair bg-panel/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head flex items-baseline gap-4 mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded">
              02
            </span>
            <div>
              <h2 className="font-display text-3xl font-extrabold text-paper">
                Which Advisory Track Fits You?
              </h2>
              <p className="lede text-paper-dim text-sm sm:text-base mt-2">
                Check the parameters that match your timeline, capital, and monitoring capacity.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Swing Checklist */}
            <div className="bg-panel border border-hair rounded-2xl p-8 space-y-6">
              <h3 className="font-display text-xl font-bold text-brand-gold">Lean toward Swing Trading if you:</h3>
              <ul className="space-y-4">
                {swingQuestions.map((q, idx) => (
                  <label key={idx} className="flex items-start gap-3 cursor-pointer select-none group">
                    <input
                      type="checkbox"
                      checked={swingChecks[idx]}
                      onChange={() => handleSwingChange(idx)}
                      className="rounded border-hair text-brand-green bg-panel-two focus:ring-0 focus:ring-offset-0 focus:outline-none w-5 h-5 mt-0.5 shrink-0 accent-brand-green cursor-pointer"
                    />
                    <span className="text-sm text-paper-dim group-hover:text-paper transition-colors">
                      {q}
                    </span>
                  </label>
                ))}
              </ul>
              <div className="text-xs text-brand-green font-mono">
                You checked {swingChecks.filter(Boolean).length} of 5 swing-trading traits
              </div>
            </div>

            {/* Positional Checklist */}
            <div className="bg-panel border border-hair rounded-2xl p-8 space-y-6">
              <h3 className="font-display text-xl font-bold text-brand-blue">Lean toward Positional Trading if you:</h3>
              <ul className="space-y-4">
                {posQuestions.map((q, idx) => (
                  <label key={idx} className="flex items-start gap-3 cursor-pointer select-none group">
                    <input
                      type="checkbox"
                      checked={posChecks[idx]}
                      onChange={() => handlePosChange(idx)}
                      className="rounded border-hair text-brand-blue bg-panel-two focus:ring-0 focus:ring-offset-0 focus:outline-none w-5 h-5 mt-0.5 shrink-0 accent-brand-blue cursor-pointer"
                    />
                    <span className="text-sm text-paper-dim group-hover:text-paper transition-colors">
                      {q}
                    </span>
                  </label>
                ))}
              </ul>
              <div className="text-xs text-brand-blue font-mono">
                You checked {posChecks.filter(Boolean).length} of 5 positional-trading traits
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="form" className="py-20 sm:py-28 border-b border-hair">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-panel border border-hair rounded-2xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="eyebrow inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs font-semibold px-4 py-2 rounded-full mb-6">
                  DESK REGISTRATION
                </span>
                <h2 className="font-display text-3xl font-black text-paper mb-4 leading-tight">
                  Secure Your Advisory Setup.
                </h2>
                <p className="text-paper-dim leading-relaxed mb-6">
                  Submit your details and our team will walk you through risk-weighted onboarding, providing immediate access to our positional or swing watchlists.
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
                    <label className="text-xs font-mono text-paper-dim font-bold">Trading Experience *</label>
                    <select
                      required
                      value={formData.capital}
                      onChange={(e) => setFormData({ ...formData, capital: e.target.value })}
                      className="w-full bg-ink border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green transition-colors appearance-none"
                    >
                      <option value="" disabled>Select experience level</option>
                      <option value="under1">Under 1 Year</option>
                      <option value="1to3">1–3 Years</option>
                      <option value="above3">3+ Years</option>
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
                      We have received your details. Our swing Desk partner will contact you shortly to begin setup onboarding.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
