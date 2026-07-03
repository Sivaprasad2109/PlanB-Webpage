export interface StockRecommendation {
  symbol: string;
  price: string;
  change: string;
  isPositive: boolean;
}

export interface CalculatorState {
  sipMonthly: number;
  sipReturn: number;
  sipYears: number;
  sipStepup: number;
  sipInflation: number;
}
