import { ShieldCheck } from "lucide-react";

export default function TopStrip() {
  return (
    <div id="top-strip" className="bg-panel border-b border-hair text-xs font-mono text-paper-dim py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-green" />
          <span>
            SEBI Registered Research Analyst | Reg. No.{" "}
            <span className="text-paper font-semibold">INH0000210932</span>
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          <span>Grievance: grievance@planbsolutions.in</span>
          <span className="hidden sm:inline">|</span>
          <span>SCORES: scores.sebi.gov.in</span>
        </div>
      </div>
    </div>
  );
}
