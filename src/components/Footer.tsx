import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-panel border-t border-hair pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="disclaimer bg-ink border-l-4 border-brand-red p-6 rounded-xl text-sm leading-relaxed text-paper-dim mb-12">
          <strong className="text-paper block mb-2 font-semibold">Regulatory Disclaimer:</strong>
          PlanB Solutions is a SEBI-Registered Research Analyst (Reg. No. INH0000210932). Registration with SEBI and certification from NISM does not guarantee performance of the intermediary or assure any minimum returns to investors. Investments in the securities markets, including equity, derivatives (F&amp;O), and commodity markets are subject to market risks — please read all scheme/subscription and risk disclosure documents carefully before subscribing to any package. Past performance referenced in any of our research is not indicative or a guarantee of future outcomes. Final execution and position-level risk management remain the sole responsibility of the subscriber.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Col */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 border border-brand-green rounded-lg flex items-center justify-center font-mono text-xs font-bold text-brand-green">
                PB
              </div>
              <span className="font-display font-bold text-lg text-paper tracking-tight">
                PlanB Solutions
              </span>
            </div>
            <p className="text-sm text-paper-dim mb-6 leading-relaxed">
              SEBI-registered, research-backed advisory across Equity, Derivatives &amp; Commodities. Separating market noise from decision-grade signal.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61590553144159"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-hair rounded-full bg-ink flex items-center justify-center text-paper-dim hover:bg-brand-green hover:text-ink hover:border-brand-green transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/planb_solutions_official/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-hair rounded-full bg-ink flex items-center justify-center text-paper-dim hover:bg-brand-green hover:text-ink hover:border-brand-green transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@PlanBsolutions-z9x"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-hair rounded-full bg-ink flex items-center justify-center text-paper-dim hover:bg-brand-green hover:text-ink hover:border-brand-green transition-all duration-200"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs font-bold text-paper-dim uppercase tracking-widest mb-4">
              Advisory Tracks
            </h4>
            <div className="grid gap-2 text-sm">
              <Link to="/equity-research" className="text-paper-dim hover:text-brand-green transition-colors">
                Equity Research
              </Link>
              <Link to="/derivatives-trading" className="text-paper-dim hover:text-brand-green transition-colors">
                Derivatives (F&amp;O)
              </Link>
              <Link to="/commodity-advisory" className="text-paper-dim hover:text-brand-green transition-colors">
                Commodities Desk
              </Link>
              <Link to="/intraday-options" className="text-paper-dim hover:text-brand-green transition-colors">
                Intraday Options
              </Link>
            </div>
          </div>

          {/* Additional Tracks */}
          <div>
            <h4 className="font-mono text-xs font-bold text-paper-dim uppercase tracking-widest mb-4">
              Active Trading
            </h4>
            <div className="grid gap-2 text-sm">
              <Link to="/options-strategies" className="text-paper-dim hover:text-brand-green transition-colors">
                Options Strategies
              </Link>
              <Link to="/equity-hedge" className="text-paper-dim hover:text-brand-green transition-colors">
                Portfolio Protection
              </Link>
              <Link to="/intraday-stocks" className="text-paper-dim hover:text-brand-green transition-colors">
                Intraday Stocks
              </Link>
              <Link to="/positional-trading" className="text-paper-dim hover:text-brand-green transition-colors">
                Positional Swing
              </Link>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-mono text-xs font-bold text-paper-dim uppercase tracking-widest mb-4">
              Contact Desk
            </h4>
            <div className="grid gap-3 text-sm text-paper-dim">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                <span>
                  Qhub, 1st Floor, Madhapur Metro Station, Road No 36 &amp; 37, Jubilee Hills, Hyderabad, Telangana 500033
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-green shrink-0" />
                <span>+91 99669 92134</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-green shrink-0" />
                <span>support@planbsolutions.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-hair pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-paper-dim text-center md:text-left">
          <span>&copy; {new Date().getFullYear()} PlanB Solutions. All rights reserved.</span>
          <span className="font-mono text-brand-green tracking-wide">
            SEBI-RA • Reg. No. INH0000210932
          </span>
        </div>
      </div>
    </footer>
  );
}
