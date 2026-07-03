import { Award, CheckCircle, Shield, AlertTriangle } from "lucide-react";

export default function AboutUs() {
  const compliancePoints = [
    {
      title: "Statutory Status",
      desc: "PlanB Solutions is a SEBI-registered Research Analyst (Reg. No. INH0000210932) and BASL member, operating strictly within the SEBI (Research Analysts) Regulations, 2014.",
    },
    {
      title: "Onboarding Discipline",
      desc: "In alignment with SEBI suitability norms, every client relationship begins with standard KYC documentation and a customized risk-profile assessment to ensure appropriate portfolio alignment.",
    },
    {
      title: "Research Accountability",
      desc: "We do not offer 'tips' or accept secret commissions. Every recommendation carries documented fundamental or quantitative logic, an entry zone, profit target, and stop-loss level.",
    },
  ];

  return (
    <div className="bg-ink min-h-screen">
      {/* Hero Header */}
      <header className="hero border-b border-hair relative overflow-hidden py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="eyebrow inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs font-semibold px-4 py-2 rounded-full mb-8">
            <span className="pulse w-2 h-2 rounded-full bg-brand-green inline-block animate-pulse"></span>
            SEBI COMPLIANT · TRANSPARENT
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-paper leading-tight tracking-tight mb-8">
            Institutional-grade wealth advisory,<br />
            <span className="text-brand-green">backed by unwavering SEBI compliance.</span>
          </h1>
          <p className="hero-sub text-base sm:text-lg text-paper-dim max-w-4xl leading-relaxed mx-auto">
            PlanB Solutions was founded to solve a critical market gap: separating high-quality research from speculative noise. We are a registered Investment Analyst firm managing ₹15Cr+ AUM for over 300 active clients across India.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            <div className="bg-panel border border-hair rounded-xl p-6 text-center">
              <div className="text-2xl font-black text-brand-green">₹15Cr+</div>
              <div className="text-xs text-paper-dim mt-2">Assets Advised</div>
            </div>
            <div className="bg-panel border border-hair rounded-xl p-6 text-center">
              <div className="text-2xl font-black text-brand-green">300+</div>
              <div className="text-xs text-paper-dim mt-2">Active Clients</div>
            </div>
            <div className="bg-panel border border-hair rounded-xl p-6 text-center">
              <div className="text-2xl font-black text-brand-green">SEBI-RA</div>
              <div className="text-xs text-paper-dim mt-2">INH0000210932</div>
            </div>
            <div className="bg-panel border border-hair rounded-xl p-6 text-center">
              <div className="text-2xl font-black text-brand-green">100%</div>
              <div className="text-xs text-paper-dim mt-2">Transparent SLA</div>
            </div>
          </div>
        </div>
      </header>

      {/* Analytical Framework */}
      <section className="py-20 border-b border-hair">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head flex items-baseline gap-4 mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded">
              01
            </span>
            <div>
              <h2 className="font-display text-3xl font-extrabold text-paper">The PlanB Core Story</h2>
              <p className="lede text-paper-dim text-sm sm:text-base mt-2">
                Built to replace emotional guesses with a verified, disciplined research process.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 text-base text-paper-dim leading-relaxed">
              <p>
                PlanB Solutions was established with a singular mission: to protect and compound retail and HNI capital by providing institutional-grade analytical depth. In an environment flooded with unregulated, anonymous tips, PlanB stands as an island of regulatory accountability.
              </p>
              <p>
                Our team is led by qualified research analysts and market specialists. We operate across a diverse set of asset classes including equities, derivatives, and hard commodities, deploying integrated models combining deep macro-fundamental filters with quantitative tech timing.
              </p>
            </div>
            <div className="bg-panel border border-hair rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="font-display text-lg font-bold text-paper mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-brand-green" /> Regulatory Baseline
              </h3>
              <div className="space-y-3.5">
                {compliancePoints.map((pt, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-paper mb-1">{pt.title}</h4>
                      <p className="text-xs text-paper-dim leading-relaxed">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statutory Grievance Mechanism */}
      <section className="py-20 border-b border-hair bg-panel/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-head flex items-baseline gap-4 mb-16">
            <span className="section-num font-mono text-sm border border-brand-green/30 text-brand-green px-3 py-1 rounded">
              02
            </span>
            <div>
              <h2 className="font-display text-3xl font-extrabold text-paper">
                Statutory Grievance &amp; Redressal Mechanism
              </h2>
              <p className="lede text-paper-dim text-sm sm:text-base mt-2">
                How complaints are formally logged, reviewed, and resolved in compliance with SEBI guidelines.
              </p>
            </div>
          </div>

          <div className="tbl-wrap border border-hair rounded-2xl overflow-hidden bg-panel mb-8">
            <table className="w-full">
              <thead>
                <tr className="border-b border-hair">
                  <th className="p-5 text-left text-xs font-mono font-bold text-paper-dim uppercase bg-panel-two">Level</th>
                  <th className="p-5 text-left text-xs font-mono font-bold text-paper-dim uppercase bg-panel-two">Filing Desk</th>
                  <th className="p-5 text-left text-xs font-mono font-bold text-paper-dim uppercase bg-panel-two">Expected SLA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-hair">
                <tr className="hover:bg-panel-two/30">
                  <td className="p-5 font-semibold text-sm text-paper">Level 1: Internal Desk</td>
                  <td className="p-5 text-sm text-paper-dim">Email: <span className="font-mono text-brand-green font-semibold">grievance@planbsolutions.in</span></td>
                  <td className="p-5 text-sm text-paper-dim">Within 48 Business Hours</td>
                </tr>
                <tr className="hover:bg-panel-two/30">
                  <td className="p-5 font-semibold text-sm text-paper">Level 2: Compliance Officer</td>
                  <td className="p-5 text-sm text-paper-dim">Email: <span className="font-mono text-brand-green font-semibold">compliance@planbsolutions.in</span></td>
                  <td className="p-5 text-sm text-paper-dim">Within 7 Business Days</td>
                </tr>
                <tr className="hover:bg-panel-two/30">
                  <td className="p-5 font-semibold text-sm text-paper">Level 3: SEBI SCORES</td>
                  <td className="p-5 text-sm text-paper-dim">Filing online portal: <a href="https://scores.sebi.gov.in" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline font-mono">scores.sebi.gov.in</a></td>
                  <td className="p-5 text-sm text-paper-dim">As per regulatory pipeline</td>
                </tr>
                <tr className="hover:bg-panel-two/30">
                  <td className="p-5 font-semibold text-sm text-paper">Level 4: Online Dispute Resolution</td>
                  <td className="p-5 text-sm text-paper-dim">Arbitration / Smart ODR Portal: <a href="https://smartodr.in" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline font-mono">smartodr.in</a></td>
                  <td className="p-5 text-sm text-paper-dim">As per standard timeline</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-brand-red/10 border border-brand-red/30 rounded-2xl flex gap-4">
            <AlertTriangle className="w-6 h-6 text-brand-red shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-paper mb-1">Standard Market Disclaimer:</h4>
              <p className="text-xs text-paper-dim leading-relaxed">
                Investments in the securities market are subject to market risks. Read all the related documents carefully before investing. SEBI registration, BASL membership, and NISM certifications do not guarantee performance of the intermediary or assure any minimum returns to investors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
