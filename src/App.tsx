import { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import TopStrip from "./components/TopStrip";
import Header from "./components/Header";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import WhyPlanB from "./pages/WhyPlanB";
import Pricing from "./pages/Pricing";
import Recommendations from "./pages/Recommendations";
import Subscribe from "./pages/Subscribe";
import Calculators from "./pages/Calculators";
import AboutUs from "./pages/AboutUs";
import EquityResearch from "./pages/EquityResearch";
import DerivativesTrading from "./pages/DerivativesTrading";
import IntradayOptions from "./pages/IntradayOptions";
import OptionsStrategies from "./pages/OptionsStrategies";
import CommodityAdvisory from "./pages/CommodityAdvisory";
import EquityHedge from "./pages/EquityHedge";
import IntradayStocks from "./pages/IntradayStocks";
import PositionalTrading from "./pages/PositionalTrading";

// Scroll to top helper
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-ink text-paper antialiased font-sans">
        {/* Regulatory Header Strip */}
        <TopStrip />

        {/* Global Navigation Header */}
        <Header />

        {/* Dynamic Breadcrumbs Tracker */}
        <Breadcrumbs />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/why-planb" element={<WhyPlanB />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/subscribe" element={<Subscribe />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/equity-research" element={<EquityResearch />} />
            <Route path="/derivatives-trading" element={<DerivativesTrading />} />
            <Route path="/intraday-options" element={<IntradayOptions />} />
            <Route path="/options-strategies" element={<OptionsStrategies />} />
            <Route path="/commodity-advisory" element={<CommodityAdvisory />} />
            <Route path="/equity-hedge" element={<EquityHedge />} />
            <Route path="/intraday-stocks" element={<IntradayStocks />} />
            <Route path="/positional-trading" element={<PositionalTrading />} />
          </Routes>
        </main>

        {/* Global Informative Footer */}
        <Footer />
      </div>
    </Router>
  );
}
