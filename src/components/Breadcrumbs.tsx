import { Link, useLocation } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  if (location.pathname === "/" || location.pathname === "/home") return null;

  const getLabel = (path: string) => {
    const labels: Record<string, string> = {
      "why-planb": "Why PlanB",
      pricing: "Pricing",
      recommendations: "Recommendations",
      subscribe: "Subscribe",
      calculators: "Calculators",
      about: "About Us",
      "equity-research": "Equity Research",
      "derivatives-trading": "Derivatives Trading",
      "intraday-options": "Intraday Options",
      "options-strategies": "Options Strategies",
      "commodity-advisory": "Commodity Advisory",
      "equity-hedge": "Equity Hedge & Protection",
      "intraday-stocks": "Intraday Stocks",
      "positional-trading": "Positional Trading",
    };
    return labels[path] || path.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  };

  return (
    <div className="bg-panel border-b border-hair py-3.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-paper-dim">
          <Link to="/" className="hover:text-brand-green transition-colors">
            Home
          </Link>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;

            return (
              <span key={name} className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-hair" />
                {isLast ? (
                  <span className="text-brand-green font-semibold" aria-current="page">
                    {getLabel(name)}
                  </span>
                ) : (
                  <Link to={routeTo} className="hover:text-brand-green transition-colors">
                    {getLabel(name)}
                  </Link>
                )}
              </span>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
