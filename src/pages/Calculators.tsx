import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calculator, Award, Info, ChevronDown } from "lucide-react";

export default function Calculators() {
  const [activeTab, setActiveTab] = useState("sip");

  // SIP Calculator State
  const [sipMonthly, setSipMonthly] = useState(10000);
  const [sipReturn, setSipReturn] = useState(12);
  const [sipYears, setSipYears] = useState(15);
  const [sipStepup, setSipStepup] = useState(10);
  const [sipInflation, setSipInflation] = useState(6);
  const [sipResults, setSipResults] = useState({ invested: 0, gains: 0, total: 0, real: 0 });

  // Retirement Calculator State
  const [retAge, setRetAge] = useState(30);
  const [retRetAge, setRetRetAge] = useState(60);
  const [retLifeExp, setRetLifeExp] = useState(85);
  const [retExpense, setRetExpense] = useState(50000);
  const [retInflation, setRetInflation] = useState(6);
  const [retPreReturn, setRetPreReturn] = useState(12);
  const [retPostReturn, setRetPostReturn] = useState(7);
  const [retResults, setRetResults] = useState({ futureExpense: 0, corpus: 0, monthlySIP: 0 });

  // Lump Sum Calculator State
  const [lsAmount, setLsAmount] = useState(500000);
  const [lsReturn, setLsReturn] = useState(12);
  const [lsYears, setLsYears] = useState(10);
  const [lsInflation, setLsInflation] = useState(6);
  const [lsResults, setLsResults] = useState({ fv: 0, gain: 0, realFV: 0 });

  // F&O Payoff State
  const [fnoType, setFnoType] = useState("call");
  const [fnoPos, setFnoPos] = useState("buy");
  const [fnoStrike, setFnoStrike] = useState(24800);
  const [fnoPremium, setFnoPremium] = useState(180);
  const [fnoLot, setFnoLot] = useState(25);
  const [fnoResults, setFnoResults] = useState({ breakeven: 0, maxProfit: "", maxLoss: "", points: [] as [number, number][] });

  // Goal Planner State
  const [goalAmount, setGoalAmount] = useState(2000000);
  const [goalYears, setGoalYears] = useState(8);
  const [goalInflation, setGoalInflation] = useState(6);
  const [goalReturn, setGoalReturn] = useState(12);
  const [goalResults, setGoalResults] = useState({ futureGoal: 0, monthlySIP: 0, lumpToday: 0 });

  // Tax Calculator State
  const [taxIncome, setTaxIncome] = useState(1500000);
  const [taxRegime, setTaxRegime] = useState("new");
  const [taxDeductions, setTaxDeductions] = useState(150000);
  const [taxResults, setTaxResults] = useState({ taxable: 0, before: 0, cess: 0, total: 0, effective: 0 });

  const fmtINR = (n: number) => {
    if (!isFinite(n)) return "—";
    const sign = n < 0 ? "-" : "";
    n = Math.abs(Math.round(n));
    return sign + "₹" + n.toLocaleString("en-IN");
  };

  const fmtPct = (n: number) => (isFinite(n) ? n.toFixed(2) + "%" : "—");

  // SIP Calculation
  useEffect(() => {
    const P0 = sipMonthly;
    const r = sipReturn;
    const years = sipYears;
    const stepUp = sipStepup;
    const inflation = sipInflation;

    const months = Math.round(years * 12);
    const i = r / 100 / 12;
    let corpus = 0;
    let invested = 0;
    let monthlyAmt = P0;

    for (let m = 1; m <= months; m++) {
      corpus = corpus * (1 + i) + monthlyAmt;
      invested += monthlyAmt;
      if (m % 12 === 0) {
        monthlyAmt = monthlyAmt * (1 + stepUp / 100);
      }
    }

    const gains = corpus - invested;
    const realValue = corpus / Math.pow(1 + inflation / 100, years);

    setSipResults({ invested, gains, total: corpus, real: realValue });
  }, [sipMonthly, sipReturn, sipYears, sipStepup, sipInflation]);

  // Retirement Calculation
  useEffect(() => {
    const age = retAge;
    const retAgeVal = retRetAge;
    const lifeExp = retLifeExp;
    const expense = retExpense;
    const inflation = retInflation;
    const preReturn = retPreReturn;
    const postReturn = retPostReturn;

    const yearsToRetire = Math.max(retAgeVal - age, 0);
    const yearsInRetirement = Math.max(lifeExp - retAgeVal, 1);
    const futureExpense = expense * Math.pow(1 + inflation / 100, yearsToRetire);
    const annualExpense = futureExpense * 12;
    const realReturn = (1 + postReturn / 100) / (1 + inflation / 100) - 1;

    let corpus = 0;
    if (Math.abs(realReturn) < 0.0001) {
      corpus = annualExpense * yearsInRetirement;
    } else {
      corpus = annualExpense * (1 - Math.pow(1 + realReturn, -yearsInRetirement)) / realReturn;
    }

    const i = preReturn / 100 / 12;
    const n = yearsToRetire * 12;
    let monthlySIP = 0;

    if (n > 0) {
      if (i === 0) {
        monthlySIP = corpus / n;
      } else {
        monthlySIP = corpus / (((Math.pow(1 + i, n) - 1) / i) * (1 + i));
      }
    }

    setRetResults({ futureExpense, corpus, monthlySIP });
  }, [retAge, retRetAge, retLifeExp, retExpense, retInflation, retPreReturn, retPostReturn]);

  // Lump Sum Calculation
  useEffect(() => {
    const P = lsAmount;
    const r = lsReturn;
    const years = lsYears;
    const inflation = lsInflation;

    const fv = P * Math.pow(1 + r / 100, years);
    const gain = fv - P;
    const realFV = fv / Math.pow(1 + inflation / 100, years);

    setLsResults({ fv, gain, realFV });
  }, [lsAmount, lsReturn, lsYears, lsInflation]);

  // F&O Payoff Calculation
  useEffect(() => {
    const type = fnoType;
    const pos = fnoPos;
    const K = fnoStrike;
    const premium = fnoPremium;
    const lot = fnoLot;

    const breakeven = type === "call" ? K + premium : K - premium;
    let maxProfitText = "";
    let maxLossText = "";

    if (type === "call" && pos === "buy") {
      maxProfitText = "Unlimited";
      maxLossText = fmtINR(premium * lot);
    } else if (type === "call" && pos === "sell") {
      maxProfitText = fmtINR(premium * lot);
      maxLossText = "Unlimited";
    } else if (type === "put" && pos === "buy") {
      maxProfitText = fmtINR(Math.max(K - premium, 0) * lot);
      maxLossText = fmtINR(premium * lot);
    } else if (type === "put" && pos === "sell") {
      maxProfitText = fmtINR(premium * lot);
      maxLossText = fmtINR(Math.max(K - premium, 0) * lot);
    }

    const low = K * 0.7;
    const high = K * 1.3;
    const steps = 60;
    const points: [number, number][] = [];

    for (let s = 0; s <= steps; s++) {
      const S = low + ((high - low) * s) / steps;
      const intrinsic = type === "call" ? Math.max(S - K, 0) : Math.max(K - S, 0);
      const payoff = pos === "buy" ? intrinsic - premium : premium - intrinsic;
      points.push([S, payoff * lot]);
    }

    setFnoResults({ breakeven, maxProfit: maxProfitText, maxLoss: maxLossText, points });
  }, [fnoType, fnoPos, fnoStrike, fnoPremium, fnoLot]);

  // Goal Planner Calculation
  useEffect(() => {
    const goal = goalAmount;
    const years = goalYears;
    const inflation = goalInflation;
    const r = goalReturn;

    const futureGoal = goal * Math.pow(1 + inflation / 100, years);
    const i = r / 100 / 12;
    const n = years * 12;
    let monthlySIP = 0;

    if (i === 0) {
      monthlySIP = futureGoal / n;
    } else {
      monthlySIP = futureGoal / (((Math.pow(1 + i, n) - 1) / i) * (1 + i));
    }

    const lumpToday = futureGoal / Math.pow(1 + r / 100, years);

    setGoalResults({ futureGoal, monthlySIP, lumpToday });
  }, [goalAmount, goalYears, goalInflation, goalReturn]);

  // Tax Calculation
  useEffect(() => {
    const income = taxIncome;
    const regime = taxRegime;
    const deductions = taxDeductions;

    const slabTax = (inc: number, slabs: [number, number][]) => {
      let tax = 0;
      let last = 0;
      for (const [limit, rate] of slabs) {
        if (inc > last) {
          const taxable = Math.min(inc, limit) - last;
          tax += taxable * rate;
          last = limit;
        }
      }
      return tax;
    };

    let taxable = 0;
    let taxBefore = 0;
    let rebateLimit = 0;
    let stdDeduction = 0;

    if (regime === "new") {
      stdDeduction = 75000;
      taxable = Math.max(income - stdDeduction, 0);
      const slabs: [number, number][] = [
        [400000, 0],
        [800000, 0.05],
        [1200000, 0.1],
        [1600000, 0.15],
        [2000000, 0.2],
        [2400000, 0.25],
        [Infinity, 0.3],
      ];
      taxBefore = slabTax(taxable, slabs);
      rebateLimit = 1200000;
      if (taxable <= rebateLimit) taxBefore = 0;
    } else {
      stdDeduction = 50000;
      taxable = Math.max(income - stdDeduction - deductions, 0);
      const slabs: [number, number][] = [
        [250000, 0],
        [500000, 0.05],
        [1000000, 0.2],
        [Infinity, 0.3],
      ];
      taxBefore = slabTax(taxable, slabs);
      rebateLimit = 500000;
      if (taxable <= rebateLimit) taxBefore = 0;
    }

    const cess = taxBefore * 0.04;
    const total = taxBefore + cess;
    const effective = income > 0 ? (total / income) * 100 : 0;

    setTaxResults({ taxable, before: taxBefore, cess, total, effective });
  }, [taxIncome, taxRegime, taxDeductions]);

  // F&O SVG Rendering Coordinates
  const getFnoSvgPath = () => {
    if (fnoResults.points.length === 0) return "";
    const low = fnoStrike * 0.7;
    const high = fnoStrike * 1.3;
    const padX = 46;
    const padY = 20;
    const W = 560;
    const H = 220;
    const plotW = W - padX * 2;
    const plotH = H - padY * 2;

    const payoffs = fnoResults.points.map(([_, p]) => p);
    const minP = Math.min(...payoffs, 0);
    const maxP = Math.max(...payoffs, 1);
    const range = maxP - minP;

    const xAt = (S: number) => padX + ((S - low) / (high - low)) * plotW;
    const yAt = (p: number) => padY + plotH - ((p - minP) / range) * plotH;

    return fnoResults.points
      .map(([S, p], idx) => `${idx === 0 ? "M" : "L"}${xAt(S).toFixed(1)},${yAt(p).toFixed(1)}`)
      .join(" ");
  };

  const renderFnoSvgZeroLine = () => {
    if (fnoResults.points.length === 0) return 0;
    const padY = 20;
    const H = 220;
    const plotH = H - padY * 2;
    const payoffs = fnoResults.points.map(([_, p]) => p);
    const minP = Math.min(...payoffs, 0);
    const maxP = Math.max(...payoffs, 1);
    const range = maxP - minP;

    return padY + plotH - ((0 - minP) / range) * plotH;
  };

  const renderFnoSvgStrikeX = () => {
    const low = fnoStrike * 0.7;
    const high = fnoStrike * 1.3;
    const padX = 46;
    const W = 560;
    const plotW = W - padX * 2;
    return padX + ((fnoStrike - low) / (high - low)) * plotW;
  };

  return (
    <div className="bg-ink min-h-screen">
      {/* Hero Header */}
      <header className="hero border-b border-hair relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="eyebrow inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/30 text-brand-green font-mono text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <span className="pulse w-2 h-2 rounded-full bg-brand-green inline-block animate-pulse"></span>
            NO SIGN-UP REQUIRED · INSTANT ANALYSIS
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-black text-paper leading-tight tracking-tight mb-6 max-w-4xl mx-auto">
            Free financial calculators.<br />
            <span className="text-brand-green">Where mathematics meets money.</span>
          </h1>
          <p className="hero-sub text-sm sm:text-base text-paper-dim max-w-2xl leading-relaxed mx-auto">
            Institutional-grade financial intelligence, built by a SEBI-registered team. Model your{" "}
            <strong>SIPs, retirement corpus, lump-sum returns, F&amp;O payoffs, goals, and tax outflow</strong> instantly.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {["sip", "retirement", "lumpsum", "fno", "goal", "tax"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-mono text-xs font-semibold px-4 py-2 rounded-full border transition-all ${
                  activeTab === tab
                    ? "bg-brand-green border-brand-green text-ink"
                    : "border-hair text-paper-dim hover:border-brand-green hover:text-brand-green"
                }`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Calculators Section */}
      <section className="py-16 border-b border-hair">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === "sip" && (
            <div className="calc-card bg-panel border border-hair rounded-2xl p-8 max-w-4xl mx-auto">
              <span className="calc-tag font-mono text-xs font-bold text-brand-green mb-2 block">
                COMPONDING CALCULATOR
              </span>
              <h3 className="font-display text-2xl font-black text-paper mb-6">SIP Calculator</h3>
              <div className="calc-body grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="field">
                    <label className="text-xs font-mono text-paper-dim">Monthly Investment (₹)</label>
                    <input
                      type="number"
                      value={sipMonthly}
                      onChange={(e) => setSipMonthly(Number(e.target.value))}
                      className="bg-panel-two border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green"
                    />
                  </div>
                  <div className="field">
                    <label className="text-xs font-mono text-paper-dim">Expected Annual Return (%)</label>
                    <input
                      type="number"
                      value={sipReturn}
                      onChange={(e) => setSipReturn(Number(e.target.value))}
                      className="bg-panel-two border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green"
                    />
                  </div>
                  <div className="field">
                    <label className="text-xs font-mono text-paper-dim">Horizon (Years)</label>
                    <input
                      type="number"
                      value={sipYears}
                      onChange={(e) => setSipYears(Number(e.target.value))}
                      className="bg-panel-two border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green"
                    />
                  </div>
                  <div className="field">
                    <label className="text-xs font-mono text-paper-dim">Annual Step-Up (%)</label>
                    <input
                      type="number"
                      value={sipStepup}
                      onChange={(e) => setSipStepup(Number(e.target.value))}
                      className="bg-panel-two border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green"
                    />
                  </div>
                </div>
                <div className="result-panel bg-panel-two border border-hair rounded-xl p-6 flex flex-col justify-between gap-4">
                  <div className="result-row flex justify-between border-b border-hair pb-3">
                    <span className="result-label text-sm text-paper-dim">Total Invested</span>
                    <span className="result-value text-sm font-bold font-mono">{fmtINR(sipResults.invested)}</span>
                  </div>
                  <div className="result-row flex justify-between border-b border-hair pb-3">
                    <span className="result-label text-sm text-paper-dim">Estimated Returns</span>
                    <span className="result-value text-sm font-bold font-mono text-brand-gold">{fmtINR(sipResults.gains)}</span>
                  </div>
                  <div className="result-row flex justify-between border-b border-hair pb-3">
                    <span className="result-label text-sm text-paper-dim">Maturity Corpus</span>
                    <span className="result-value text-2xl font-black text-brand-green font-display">{fmtINR(sipResults.total)}</span>
                  </div>
                  <div className="result-row flex justify-between">
                    <span className="result-label text-sm text-paper-dim">Inflation-Adjusted (Real)</span>
                    <span className="result-value text-sm font-bold font-mono">{fmtINR(sipResults.real)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "retirement" && (
            <div className="calc-card bg-panel border border-hair rounded-2xl p-8 max-w-4xl mx-auto">
              <span className="calc-tag font-mono text-xs font-bold text-brand-green mb-2 block">
                LIFE CYCLE PLANNING
              </span>
              <h3 className="font-display text-2xl font-black text-paper mb-6">Retirement Planner</h3>
              <div className="calc-body grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="field">
                      <label className="text-xs font-mono text-paper-dim">Current Age</label>
                      <input
                        type="number"
                        value={retAge}
                        onChange={(e) => setRetAge(Number(e.target.value))}
                        className="bg-panel-two border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green"
                      />
                    </div>
                    <div className="field">
                      <label className="text-xs font-mono text-paper-dim">Retirement Age</label>
                      <input
                        type="number"
                        value={retRetAge}
                        onChange={(e) => setRetRetAge(Number(e.target.value))}
                        className="bg-panel-two border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="text-xs font-mono text-paper-dim">Current Monthly Expense (₹)</label>
                    <input
                      type="number"
                      value={retExpense}
                      onChange={(e) => setRetExpense(Number(e.target.value))}
                      className="bg-panel-two border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="field">
                      <label className="text-xs font-mono text-paper-dim">Inflation (%)</label>
                      <input
                        type="number"
                        value={retInflation}
                        onChange={(e) => setRetInflation(Number(e.target.value))}
                        className="bg-panel-two border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green"
                      />
                    </div>
                    <div className="field">
                      <label className="text-xs font-mono text-paper-dim">Life Expectancy</label>
                      <input
                        type="number"
                        value={retLifeExp}
                        onChange={(e) => setRetLifeExp(Number(e.target.value))}
                        className="bg-panel-two border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="field">
                      <label className="text-xs font-mono text-paper-dim">Pre-Ret. Return (%)</label>
                      <input
                        type="number"
                        value={retPreReturn}
                        onChange={(e) => setRetPreReturn(Number(e.target.value))}
                        className="bg-panel-two border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green"
                      />
                    </div>
                    <div className="field">
                      <label className="text-xs font-mono text-paper-dim">Post-Ret. Return (%)</label>
                      <input
                        type="number"
                        value={retPostReturn}
                        onChange={(e) => setRetPostReturn(Number(e.target.value))}
                        className="bg-panel-two border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green"
                      />
                    </div>
                  </div>
                </div>
                <div className="result-panel bg-panel-two border border-hair rounded-xl p-6 flex flex-col justify-between gap-4">
                  <div className="result-row flex justify-between border-b border-hair pb-3">
                    <span className="result-label text-sm text-paper-dim">Monthly Exp. at Retirement</span>
                    <span className="result-value text-sm font-bold font-mono">{fmtINR(retResults.futureExpense)}</span>
                  </div>
                  <div className="result-row flex justify-between border-b border-hair pb-3">
                    <span className="result-label text-sm text-paper-dim">Target Corpus Required</span>
                    <span className="result-value text-2xl font-black text-brand-green font-display">{fmtINR(retResults.corpus)}</span>
                  </div>
                  <div className="result-row flex justify-between">
                    <span className="result-label text-sm text-paper-dim">Required Monthly SIP (Starting Now)</span>
                    <span className="result-value text-base font-bold font-mono text-brand-gold">{fmtINR(retResults.monthlySIP)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "lumpsum" && (
            <div className="calc-card bg-panel border border-hair rounded-2xl p-8 max-w-4xl mx-auto">
              <span className="calc-tag font-mono text-xs font-bold text-brand-green mb-2 block">
                ONE-TIME compounding
              </span>
              <h3 className="font-display text-2xl font-black text-paper mb-6">Lump Sum Calculator</h3>
              <div className="calc-body grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="field">
                    <label className="text-xs font-mono text-paper-dim">Investment Amount (₹)</label>
                    <input
                      type="number"
                      value={lsAmount}
                      onChange={(e) => setLsAmount(Number(e.target.value))}
                      className="bg-panel-two border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green"
                    />
                  </div>
                  <div className="field">
                    <label className="text-xs font-mono text-paper-dim">Expected Annual Return (%)</label>
                    <input
                      type="number"
                      value={lsReturn}
                      onChange={(e) => setLsReturn(Number(e.target.value))}
                      className="bg-panel-two border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green"
                    />
                  </div>
                  <div className="field">
                    <label className="text-xs font-mono text-paper-dim">Horizon (Years)</label>
                    <input
                      type="number"
                      value={lsYears}
                      onChange={(e) => setLsYears(Number(e.target.value))}
                      className="bg-panel-two border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green"
                    />
                  </div>
                  <div className="field">
                    <label className="text-xs font-mono text-paper-dim">Inflation (%)</label>
                    <input
                      type="number"
                      value={lsInflation}
                      onChange={(e) => setLsInflation(Number(e.target.value))}
                      className="bg-panel-two border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green"
                    />
                  </div>
                </div>
                <div className="result-panel bg-panel-two border border-hair rounded-xl p-6 flex flex-col justify-between gap-4">
                  <div className="result-row flex justify-between border-b border-hair pb-3">
                    <span className="result-label text-sm text-paper-dim">Future Value</span>
                    <span className="result-value text-2xl font-black text-brand-green font-display">{fmtINR(lsResults.fv)}</span>
                  </div>
                  <div className="result-row flex justify-between border-b border-hair pb-3">
                    <span className="result-label text-sm text-paper-dim">Estimated Gain</span>
                    <span className="result-value text-sm font-bold font-mono text-brand-gold">{fmtINR(lsResults.gain)}</span>
                  </div>
                  <div className="result-row flex justify-between">
                    <span className="result-label text-sm text-paper-dim">Inflation-Adjusted Real Value</span>
                    <span className="result-value text-sm font-bold font-mono">{fmtINR(lsResults.realFV)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "fno" && (
            <div className="calc-card bg-panel border border-hair rounded-2xl p-8 max-w-4xl mx-auto">
              <span className="calc-tag font-mono text-xs font-bold text-brand-green mb-2 block">
                DERIVATIVES ANALYSIS
              </span>
              <h3 className="font-display text-2xl font-black text-paper mb-6">F&amp;O Options Payoff</h3>
              <div className="calc-body grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="field">
                      <label className="text-xs font-mono text-paper-dim">Option Type</label>
                      <select
                        value={fnoType}
                        onChange={(e) => setFnoType(e.target.value)}
                        className="bg-panel-two border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green"
                      >
                        <option value="call">Call</option>
                        <option value="put">Put</option>
                      </select>
                    </div>
                    <div className="field">
                      <label className="text-xs font-mono text-paper-dim">Position</label>
                      <select
                        value={fnoPos}
                        onChange={(e) => setFnoPos(e.target.value)}
                        className="bg-panel-two border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green"
                      >
                        <option value="buy">Buy (Long)</option>
                        <option value="sell">Sell (Short)</option>
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label className="text-xs font-mono text-paper-dim">Strike Price (₹)</label>
                    <input
                      type="number"
                      value={fnoStrike}
                      onChange={(e) => setFnoStrike(Number(e.target.value))}
                      className="bg-panel-two border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green"
                    />
                  </div>
                  <div className="field">
                    <label className="text-xs font-mono text-paper-dim">Premium (₹ per share)</label>
                    <input
                      type="number"
                      value={fnoPremium}
                      onChange={(e) => setFnoPremium(Number(e.target.value))}
                      className="bg-panel-two border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green"
                    />
                  </div>
                  <div className="field">
                    <label className="text-xs font-mono text-paper-dim">Lot Size</label>
                    <input
                      type="number"
                      value={fnoLot}
                      onChange={(e) => setFnoLot(Number(e.target.value))}
                      className="bg-panel-two border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green"
                    />
                  </div>
                </div>
                <div className="result-panel bg-panel-two border border-hair rounded-xl p-6 flex flex-col gap-4">
                  <div className="result-row flex justify-between border-b border-hair pb-3">
                    <span className="result-label text-sm text-paper-dim">Breakeven Price</span>
                    <span className="result-value text-sm font-bold font-mono text-brand-green">{fmtINR(fnoResults.breakeven)}</span>
                  </div>
                  <div className="result-row flex justify-between border-b border-hair pb-3">
                    <span className="result-label text-sm text-paper-dim">Max Profit (Per Lot)</span>
                    <span className="result-value text-sm font-bold font-mono">{fnoResults.maxProfit}</span>
                  </div>
                  <div className="result-row flex justify-between border-b border-hair pb-3">
                    <span className="result-label text-sm text-paper-dim">Max Risk (Per Lot)</span>
                    <span className="result-value text-sm font-bold font-mono text-brand-red">{fnoResults.maxLoss}</span>
                  </div>
                  <div className="chart-wrap mt-2">
                    <svg className="w-full h-40" viewBox="0 0 560 220">
                      <line
                        x1="46"
                        y1={renderFnoSvgZeroLine()}
                        x2="514"
                        y2={renderFnoSvgZeroLine()}
                        stroke="#1f2c45"
                        strokeWidth="1"
                      />
                      <line
                        x1={renderFnoSvgStrikeX()}
                        y1="20"
                        x2={renderFnoSvgStrikeX()}
                        y2="200"
                        stroke="#F5C842"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />
                      <path d={getFnoSvgPath()} fill="none" stroke="#12CC43" strokeWidth="2.2" />
                      <text
                        x={renderFnoSvgStrikeX()}
                        y="215"
                        fill="#c7cfe0"
                        fontSize="10"
                        fontFamily="Roboto Mono"
                        textAnchor="middle"
                      >
                        Strike {fnoStrike}
                      </text>
                      <text x="50" y={renderFnoSvgZeroLine() - 6} fill="#c7cfe0" fontSize="10" fontFamily="Roboto Mono">
                        0
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "goal" && (
            <div className="calc-card bg-panel border border-hair rounded-2xl p-8 max-w-4xl mx-auto">
              <span className="calc-tag font-mono text-xs font-bold text-brand-green mb-2 block">
                GOAL ORIENTED compounding
              </span>
              <h3 className="font-display text-2xl font-black text-paper mb-6">Goal Planner</h3>
              <div className="calc-body grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="field">
                    <label className="text-xs font-mono text-paper-dim">Goal Amount (Today's Value) (₹)</label>
                    <input
                      type="number"
                      value={goalAmount}
                      onChange={(e) => setGoalAmount(Number(e.target.value))}
                      className="bg-panel-two border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green"
                    />
                  </div>
                  <div className="field">
                    <label className="text-xs font-mono text-paper-dim">Years to Goal</label>
                    <input
                      type="number"
                      value={goalYears}
                      onChange={(e) => setGoalYears(Number(e.target.value))}
                      className="bg-panel-two border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green"
                    />
                  </div>
                  <div className="field">
                    <label className="text-xs font-mono text-paper-dim">Expected Inflation (%)</label>
                    <input
                      type="number"
                      value={goalInflation}
                      onChange={(e) => setGoalInflation(Number(e.target.value))}
                      className="bg-panel-two border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green"
                    />
                  </div>
                  <div className="field">
                    <label className="text-xs font-mono text-paper-dim">Expected Annual Return (%)</label>
                    <input
                      type="number"
                      value={goalReturn}
                      onChange={(e) => setGoalReturn(Number(e.target.value))}
                      className="bg-panel-two border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green"
                    />
                  </div>
                </div>
                <div className="result-panel bg-panel-two border border-hair rounded-xl p-6 flex flex-col justify-between gap-4">
                  <div className="result-row flex justify-between border-b border-hair pb-3">
                    <span className="result-label text-sm text-paper-dim">Goal Value at Target Date</span>
                    <span className="result-value text-2xl font-black text-brand-green font-display">{fmtINR(goalResults.futureGoal)}</span>
                  </div>
                  <div className="result-row flex justify-between border-b border-hair pb-3">
                    <span className="result-label text-sm text-paper-dim">Required Monthly SIP</span>
                    <span className="result-value text-sm font-bold font-mono text-brand-gold">{fmtINR(goalResults.monthlySIP)}</span>
                  </div>
                  <div className="result-row flex justify-between">
                    <span className="result-label text-sm text-paper-dim">... Or Lump Sum Today</span>
                    <span className="result-value text-sm font-bold font-mono">{fmtINR(goalResults.lumpToday)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "tax" && (
            <div className="calc-card bg-panel border border-hair rounded-2xl p-8 max-w-4xl mx-auto">
              <span className="calc-tag font-mono text-xs font-bold text-brand-green mb-2 block">
                TAXATION MODEL
              </span>
              <h3 className="font-display text-2xl font-black text-paper mb-6">Income Tax Estimator</h3>
              <div className="calc-body grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="field">
                    <label className="text-xs font-mono text-paper-dim">Gross Annual Income (₹)</label>
                    <input
                      type="number"
                      value={taxIncome}
                      onChange={(e) => setTaxIncome(Number(e.target.value))}
                      className="bg-panel-two border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green"
                    />
                  </div>
                  <div className="field">
                    <label className="text-xs font-mono text-paper-dim">Tax Regime</label>
                    <select
                      value={taxRegime}
                      onChange={(e) => setTaxRegime(e.target.value)}
                      className="bg-panel-two border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green"
                    >
                      <option value="new">New Regime (FY 2025-26)</option>
                      <option value="old">Old Regime</option>
                    </select>
                  </div>
                  {taxRegime === "old" && (
                    <div className="field animate-in fade-in duration-200">
                      <label className="text-xs font-mono text-paper-dim">Section 80C &amp; Other Deductions (₹)</label>
                      <input
                        type="number"
                        value={taxDeductions}
                        onChange={(e) => setTaxDeductions(Number(e.target.value))}
                        className="bg-panel-two border border-hair rounded-lg px-4 py-3 text-sm text-paper outline-none focus:border-brand-green"
                      />
                    </div>
                  )}
                  <p className="text-xs text-paper-dim leading-relaxed italic">
                    {taxRegime === "new"
                      ? "New regime: flat standard deduction of ₹75,000; other deductions generally do not apply. Zero tax on net taxable income up to ₹12 Lakhs due to rebate."
                      : "Old regime: ₹50,000 standard deduction plus 80C/80D/HRA options."}
                  </p>
                </div>
                <div className="result-panel bg-panel-two border border-hair rounded-xl p-6 flex flex-col justify-between gap-4">
                  <div className="result-row flex justify-between border-b border-hair pb-3">
                    <span className="result-label text-sm text-paper-dim">Taxable Income</span>
                    <span className="result-value text-sm font-bold font-mono">{fmtINR(taxResults.taxable)}</span>
                  </div>
                  <div className="result-row flex justify-between border-b border-hair pb-3">
                    <span className="result-label text-sm text-paper-dim">Tax Before Cess</span>
                    <span className="result-value text-sm font-bold font-mono">{fmtINR(taxResults.before)}</span>
                  </div>
                  <div className="result-row flex justify-between border-b border-hair pb-3">
                    <span className="result-label text-sm text-paper-dim">Cess (4%)</span>
                    <span className="result-value text-sm font-bold font-mono">{fmtINR(taxResults.cess)}</span>
                  </div>
                  <div className="result-row flex justify-between border-b border-hair pb-3">
                    <span className="result-label text-sm text-paper-dim">Total Tax Payable</span>
                    <span className="result-value text-2xl font-black text-brand-red font-display">{fmtINR(taxResults.total)}</span>
                  </div>
                  <div className="result-row flex justify-between">
                    <span className="result-label text-sm text-paper-dim">Effective Tax Rate</span>
                    <span className="result-value text-sm font-bold font-mono text-brand-gold">{fmtPct(taxResults.effective)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Disclaimers & Info */}
      <section className="py-12 bg-panel-two/20 border-b border-hair">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-paper-dim leading-relaxed">
          <Info className="w-5 h-5 text-brand-green mx-auto mb-3" />
          <p>
            Every calculator on this page runs on transparent, industry-standard formulas. All calculations are executed locally in your browser — your inputs never leave your device. These projections are illustrative only and do not guarantee actual returns.
          </p>
        </div>
      </section>
    </div>
  );
}
