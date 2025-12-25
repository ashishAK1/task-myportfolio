export interface Metric {
  label: string;
  value: string | number;
  subValue?: string; // For "per annum" or similar
}

export interface CashflowData {
  month: string;
  principal: number;
  interest: number;
  [key: string]: unknown;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  color?: string;
  count?: number; 
  secondaryValue?: number;
  meta?: Record<string, string | number>;
  [key: string]: unknown;
}

export interface InvestmentAllocation extends ChartDataPoint {
  isin?: string;
  percentage?: number;
}


export type TimePeriod = '1yr' | '2yrs' | '5yrs';

export interface DashboardData {
  metrics: Metric[];
  cashflow: Record<TimePeriod, CashflowData[]>;
  byType: ChartDataPoint[];
  byRating: ChartDataPoint[];
  allocation: InvestmentAllocation[];
  byMaturity: ChartDataPoint[];
}
