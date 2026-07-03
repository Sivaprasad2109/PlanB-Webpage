import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, TrendingUp, Compass, ShieldAlert, Award } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const advisoryTracks = [
    { name: "Equity Research", path: "/equity-research", desc: "Long-term compounding picks", icon: TrendingUp },
    { name: "Derivatives (F&O)", path: "/derivatives-trading", desc: "Institutional-grade trading", icon: Award },
    { name: "Intraday Options", path: "/intraday-options", desc: "Nifty & Bank Nifty setups", icon: Compass },
    { name: "Options Strategies", path: "/options-strategies", desc: "Risk-defined volatility books", icon: ShieldAlert },
    { name: "Commodities Advisory", path: "/commodity-advisory", desc: "Gold, Silver, & Crude Oil", icon: TrendingUp },
    { name: "Equity Hedge", path: "/equity-hedge", desc: "Portfolio downside protection", icon: ShieldAlert },
    { name: "Intraday Stocks", path: "/intraday-stocks", desc: "Same-session momentum trading", icon: TrendingUp },
    { name: "Positional Trading", path: "/positional-trading", desc: "Multi-week swing setups", icon: Compass },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-hair bg-ink/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border-2 border-brand-green rounded-xl flex items-center justify-center font-mono text-base font-bold text-brand-green group-hover:bg-brand-green group-hover:text-ink transition-all duration-300">
              P<span className="text-paper group-hover:text-ink">B</span>
            </div>
            <div>
              <span className="font-display font-extrabold text-xl text-paper tracking-tight">
                Plan<span className="text-brand-green">B</span> Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-brand-green ${
                  isActive ? "text-brand-green" : "text-paper-dim"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/why-planb"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-brand-green ${
                  isActive ? "text-brand-green" : "text-paper-dim"
                }`
              }
            >
              Why PlanB
            </NavLink>

            {/* Advisory Tracks Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                className="flex items-center gap-1.5 text-sm font-medium text-paper-dim hover:text-brand-green transition-colors focus:outline-none"
              >
                Advisory Tracks
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {dropdownOpen && (
                <div
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="absolute left-1/2 -translate-x-1/2 mt-3 w-80 bg-panel border border-hair rounded-2xl p-2 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200"
                >
                  <div className="grid gap-1">
                    {advisoryTracks.map((track) => {
                      const Icon = track.icon;
                      return (
                        <Link
                          key={track.path}
                          to={track.path}
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-panel-two transition-all duration-200 group"
                        >
                          <div className="p-2 rounded-lg bg-panel-two group-hover:bg-brand-green-dim/20 text-brand-green mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-paper group-hover:text-brand-green transition-colors">
                              {track.name}
                            </div>
                            <div className="text-xs text-paper-dim mt-0.5">
                              {track.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-brand-green ${
                  isActive ? "text-brand-green" : "text-paper-dim"
                }`
              }
            >
              Pricing
            </NavLink>
            <NavLink
              to="/recommendations"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-brand-green ${
                  isActive ? "text-brand-green" : "text-paper-dim"
                }`
              }
            >
              Recommendations
            </NavLink>
            <NavLink
              to="/calculators"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-brand-green ${
                  isActive ? "text-brand-green" : "text-paper-dim"
                }`
              }
            >
              Calculators
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-brand-green ${
                  isActive ? "text-brand-green" : "text-paper-dim"
                }`
              }
            >
              About Us
            </NavLink>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/subscribe"
              className="font-display font-bold text-xs tracking-wider uppercase bg-brand-green text-ink hover:bg-brand-green-dim transition-all duration-200 px-5 py-3 rounded-lg shadow-lg hover:shadow-brand-green/20"
            >
              Get Started →
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-paper-dim hover:text-brand-green hover:bg-panel-two transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-hair bg-panel/98 backdrop-blur-lg animate-in fade-in duration-200">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl hover:bg-panel-two text-base font-semibold text-paper"
            >
              Home
            </Link>
            <Link
              to="/why-planb"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl hover:bg-panel-two text-base font-semibold text-paper"
            >
              Why PlanB
            </Link>

            {/* Mobile Advisory Tracks Header */}
            <div className="px-4 py-1.5 text-xs font-bold text-brand-green uppercase tracking-wider">
              Advisory Tracks
            </div>
            <div className="pl-4 grid grid-cols-1 gap-1 border-l-2 border-hair">
              {advisoryTracks.map((track) => (
                <Link
                  key={track.path}
                  to={track.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 rounded-lg hover:bg-panel-two text-sm text-paper-dim hover:text-brand-green"
                >
                  {track.name}
                </Link>
              ))}
            </div>

            <Link
              to="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl hover:bg-panel-two text-base font-semibold text-paper"
            >
              Pricing
            </Link>
            <Link
              to="/recommendations"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl hover:bg-panel-two text-base font-semibold text-paper"
            >
              Recommendations
            </Link>
            <Link
              to="/calculators"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl hover:bg-panel-two text-base font-semibold text-paper"
            >
              Calculators
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-2.5 rounded-xl hover:bg-panel-two text-base font-semibold text-paper"
            >
              About Us
            </Link>

            <div className="pt-4 border-t border-hair">
              <Link
                to="/subscribe"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-brand-green text-ink font-display font-bold py-3.5 rounded-xl transition-all"
              >
                Get Started →
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
