import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ShieldAlert, Cpu, RefreshCw, BarChart, ChevronDown, CheckCircle2 } from "lucide-react";

export default function WhyPlanB() {
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

  const painPoints = [
    {
      title: "Broken Workflows & Lost ROI",
      desc: "Siloed systems, manual workarounds, and integration failures eat 15–30% of operational throughput. Every quarter that goes unresolved is compounding capital erosion.",
    },
    {
      title: "Failed Implementations",
      desc: "Enterprise software rollouts that went over budget, under-delivered on scope, or never reached full adoption — leaving your team carrying both the old system and the new one simultaneously.",
    },
    {
      title: "Rigid Architecture Ceiling",
      desc: "Scaling decisions made three years ago are now blocking the next phase of growth. Monolithic infrastructure wasn't built to bend — and patching it indefinitely isn't a strategy.",
    },
    {
      title: "The Talent-Technology Gap",
      desc: "Your team inherited complex systems they weren't trained on. Operational knowledge is fragmented, undocumented, and sitting in the heads of two people who might resign next quarter.",
    },
  ];

  const capabilities = [
    {
      tag: "CAPABILITY 01",
      title: "Deep Technical & Operational Audits",
      desc: "We don't guess. Before a single recommendation is issued, our audit methodology maps every failure point — system dependencies, process debt, integration gaps, and team capability misalignments.",
      points: [
        "Root-cause diagnosis, not symptom treatment",
        "Written findings report with prioritised remediation roadmap",
        "Delivered in 5–10 business days, before you commit budget",
      ],
      icon: ShieldAlert,
    },
    {
      tag: "CAPABILITY 02",
      title: "Custom Resilient Architecture",
      desc: "Generic solutions create generic results. We design bespoke, modular infrastructure that absorbs operational shocks — built on current architectural standards, not the frameworks your vendor sold you in 2021.",
      points: [
        "Modular, fault-tolerant system design",
        "Replaces technical debt with documented, maintainable architecture",
        "Compatible with your existing team's operational capacity",
      ],
      icon: Cpu,
    },
    {
      tag: "CAPABILITY 03",
      title: "Agile Scaling & 2026 Standards",
      desc: "Future-proofing isn't a buzzword — it's an engineering decision made at the architecture stage. We build for the operational demands of 2026 and beyond: higher throughput, leaner overhead, and compliance-ready from day one.",
      points: [
        "Scalable infrastructure that grows with revenue, not headcount",
        "Compliance and regulatory standards embedded at the framework level",
        "Reduced time-to-scale on new product and market initiatives",
      ],
      icon: RefreshCw,
    },
    {
      tag: "CAPABILITY 04",
      title: "Team Empowerment & Upskilling",
      desc: "Technology without adoption is shelf-ware. We bridge the gap between your team and the systems they operate — through structured knowledge transfer, documentation, and role-specific upskilling embedded in every engagement.",
      points: [
        "Role-specific training for CEOs, CTOs, CFOs, and Operations Managers",
        "Full documentation handover: no black boxes left behind",
        "Reduced dependency on external support post-engagement",
      ],
      icon: BarChart,
    },
  ];

  const metrics = [
    { num: "84%", label: "Average reduction in operational throughput loss post-audit" },
    { num: "9x", label: "Faster time-to-scale on new initiatives after architecture remediation" },
    { num: "75+", label: "Enterprises rescued from failed implementation cycles" },
    { num: "98%", label: "Client retention rate — because outcomes speak louder than proposals" },
  ];

  const faqs = [
    {
      q: "How quickly can PlanB Solutions diagnose our core problem?",
      a: "Most diagnostic audits are completed within 5–10 business days. You receive a written findings report with prioritised actions before any engagement begins — no commitments required to see the diagnosis.",
    },
    {
      q: "Do you work with businesses that already have an in-house tech team?",
      a: "Yes. We operate as a co-pilot alongside your existing team, not as a replacement. Our upskilling and knowledge-transfer protocols are specifically designed for this scenario — your team leaves more capable than when we arrived.",
    },
    {
      q: "What industries does PlanB Solutions serve?",
      a: "We work across financial services, fintech, operations-heavy enterprises, and regulated industries. Our audit methodology adapts to sector-specific compliance and architecture requirements rather than applying a one-size-fits-all framework.",
    },
    {
      q: "What does the first engagement look like?",
      a: "It starts with a free consultation — no pitch deck, no sales script. We map your current architecture, identify the highest-priority failure points, and propose a structured remediation roadmap. You decide whether to proceed based on what we find, not what we promised upfront.",
    },
    {
      q: "Are results guaranteed?",
      a: "We do not guarantee specific business outcomes — no credible adviser should. What we guarantee is a documented, audit-grounded remediation plan with measurable milestones, full transparency at every stage, and a deliverables scope agreed in writing before work begins.",
    },
  ];

  return (
    <div className="bg-ink min-h-screen">
      {/* Hero Section */}
      <header className="hero border-b border-hair relative overflow-hidden py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="eyebrow inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs font-semibold px-4 py-2 rounded-full mb-8">
            <span className="pulse w-2 h-2 rounded-full bg-brand-green inline-block animate-pulse"></span>
            STRATEGIC CO-PILOT · BUSINESS ARCHITECTURE &amp; AUDITS
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-paper leading-tight tracking-tight mb-8">
            Your systems <span className="text-brand-red">broke.</span><br />
            Your growth <span className="text-brand-green">doesn't have to.</span>
          </h1>
          <p className="hero-sub text-base sm:text-lg lg:text-xl text-paper-dim max-w-3xl leading-relaxed mb-10">
            PlanB Solutions is the <strong className="text-paper">industry's Emergency Room</strong> for business ecosystems — stepping in when standard implementations fail, technical debt compounds, and operational bottlenecks choke scalable growth. We audit, architect, and execute. Fast.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#consult"
              className="bg-brand-green text-ink hover:bg-brand-green-dim font-display font-bold px-6 py-4 rounded-xl transition-all shadow-lg hover:shadow-brand-green/20"
            >
              Book a Free Consultation →
            </a>
            <a
              href="#problem"
              className="bg-transparent border border-hair text-paper hover:border-brand-green hover:text-brand-green font-display font-bold px-6 py-4 rounded-xl transition-all"
            >
              See How We Work
            </a>
          </div>
        </div>
      </header>

      {/* Strategic Pain Points */}
      <section id="problem" className="py-20 sm:py-28 border-b border-hair">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head flex items-baseline gap-4 mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded">
              01
            </span>
            <div>
              <h2 className="font-display text-3xl font-extrabold text-paper">
                The Cost of Unresolved System Failures
              </h2>
              <p className="lede text-paper-dim text-sm sm:text-base mt-2">
                Most businesses don't fail from a single catastrophic event. They bleed out through accumulated technical debt, misaligned implementations, and rigid corporate architectures.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((point) => (
              <div
                key={point.title}
                className="bg-panel border border-hair border-l-4 border-l-brand-red rounded-xl p-6 flex flex-col justify-between"
              >
                <h3 className="font-display font-bold text-base text-paper mb-3">{point.title}</h3>
                <p className="text-sm text-paper-dim leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why PlanB Solutions (Capabilities) */}
      <section id="capabilities" className="py-20 sm:py-28 border-b border-hair">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head flex items-baseline gap-4 mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded">
              02
            </span>
            <div>
              <h2 className="font-display text-3xl font-extrabold text-paper">
                PlanB Strategic Capabilities
              </h2>
              <p className="lede text-paper-dim text-sm sm:text-base mt-2">
                Four core disciplines, one single goal: convert your technical liability into a resilient growth engine.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="bg-panel border border-hair hover:border-brand-green/30 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs text-brand-green tracking-widest font-bold">
                      {cap.tag}
                    </span>
                    <div className="p-3 rounded-xl bg-panel-two text-brand-green">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold text-paper mb-4">{cap.title}</h3>
                  <p className="text-sm text-paper-dim leading-relaxed mb-6">{cap.desc}</p>
                  <ul className="space-y-3">
                    {cap.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-sm text-paper-dim">
                        <span className="text-brand-green text-xs font-bold mt-1 shrink-0">→</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 sm:py-28 border-b border-hair bg-panel/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 bg-hair border border-hair rounded-2xl overflow-hidden mb-16">
            {metrics.map((metric) => (
              <div key={metric.label} className="bg-panel p-8 text-center sm:text-left">
                <div className="font-display text-4xl font-black text-brand-green mb-3">
                  {metric.num}
                </div>
                <div className="text-sm text-paper-dim leading-normal">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Consultation Section */}
      <section id="consult" className="py-20 sm:py-28 border-b border-hair">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-panel border border-hair rounded-2xl p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-green/5 rounded-full mix-blend-multiply filter blur-3xl -z-10"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="eyebrow inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs font-semibold px-4 py-2 rounded-full mb-6">
                  Remediation &amp; Consultation
                </span>
                <h2 className="font-display text-3xl font-black text-paper mb-4 leading-tight">
                  Build Your Plan B Today.
                </h2>
                <p className="text-paper-dim leading-relaxed mb-6">
                  Volatile markets, legacy technical debt, and implementation issues continue to bottleneck growth. PlanB Solutions provides HNWIs, corporate hedgers, and business leaders with a structured pathway to scale.
                </p>
                <ul className="space-y-4 text-sm text-paper-dim mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-green" />
                    <span>Free architectural overview audit included</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-green" />
                    <span>Tailored scaling and transition roadmaps</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-green" />
                    <span>No locked-in retainers or vague scopes</span>
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
                      placeholder="Your full name"
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
                      placeholder="you@email.com"
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
                    <label className="text-xs font-mono text-paper-dim font-bold">Primary Interest *</label>
                    <select
                      required
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-ink border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green transition-colors appearance-none"
                    >
                      <option value="" disabled>Choose one</option>
                      <option value="audit">Technical &amp; Operational Audit</option>
                      <option value="architecture">Custom Resilient Architecture</option>
                      <option value="scaling">Agile Scaling &amp; Compliance</option>
                      <option value="upskilling">Team Upskilling &amp; Onboarding</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-green text-ink hover:bg-brand-green-dim font-display font-bold py-3.5 rounded-xl transition-all shadow-lg hover:shadow-brand-green/20 cursor-pointer mt-4"
                  >
                    Request Free Consultation
                  </button>
                </form>

                {submitted && (
                  <div className="absolute inset-0 bg-panel-two rounded-2xl flex flex-col items-center justify-center text-center p-6 sm:p-8 animate-in fade-in duration-200">
                    <CheckCircle2 className="w-16 h-16 text-brand-green mb-4" />
                    <h3 className="font-display font-bold text-xl text-paper mb-2">Audit Requested!</h3>
                    <p className="text-sm text-paper-dim max-w-xs">
                      Thank you for booking. Our lead systems auditor will contact you within 24 hours to organize your scoping roadmap.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Sales FAQs */}
      <section id="faq" className="py-20 sm:py-28 border-b border-hair">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head text-center flex flex-col items-center mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded mb-4">
              04
            </span>
            <h2 className="font-display text-3xl font-extrabold text-paper">Why PlanB Solutions FAQs</h2>
            <p className="lede text-paper-dim text-sm sm:text-base mt-2">
              The questions decision-makers ask before they book an architectural audit.
            </p>
          </div>

          <div className="accordion space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="acc-item border border-hair rounded-xl overflow-hidden bg-panel">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 font-display font-bold text-sm sm:text-base text-paper hover:text-brand-green flex justify-between items-center transition-colors"
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
