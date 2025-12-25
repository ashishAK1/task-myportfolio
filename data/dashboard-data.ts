import { DashboardData } from '../types/dashboard';

export const mockDashboardData: DashboardData = {
  metrics: [
    { label: 'Invested Amount', value: '₹ 30,41,000' },
    { label: 'Average Portfolio Maturity', value: '2 years & 4 months' },
    { label: 'Number of Bonds', value: '100' },
    { label: 'Average Portfolio Yield', value: '7.12% per annum' },
  ],
  cashflow: {
    '1yr': [
      { month: 'Nov 2024', principal: 48.03, interest: 52.67 },
      { month: 'Dec 2024', principal: 70.25, interest: 76.46 },
      { month: 'Jan 2025', principal: 63.39, interest: 75.77 },
      { month: 'Feb 2025', principal: 74.25, interest: 80.36 },
      { month: 'Mar 2025', principal: 53.41, interest: 67.85 },
      { month: 'Apr 2025', principal: 70.11, interest: 88.29 },
      { month: 'May 2025', principal: 63.58, interest: 81.73 },
      { month: 'Jun 2025', principal: 73.54, interest: 80.37 },
      { month: 'Jul 2025', principal: 54.13, interest: 61.96 },
      { month: 'Aug 2025', principal: 58.25, interest: 77.86 },
      { month: 'Sep 2025', principal: 33.22, interest: 45.73 },
      { month: 'Oct 2025', principal: 52.91, interest: 61.48 },
    ],
    '2yrs': [
       { month: 'Q4 2024', principal: 150.50, interest: 160.20 },
       { month: 'Q1 2025', principal: 191.05, interest: 224.00 },
       { month: 'Q2 2025', principal: 207.23, interest: 250.39 },
       { month: 'Q3 2025', principal: 145.60, interest: 185.55 },
       { month: 'Q4 2025', principal: 160.00, interest: 190.00 },
       { month: 'Q1 2026', principal: 180.00, interest: 210.00 },
       { month: 'Q2 2026', principal: 195.00, interest: 230.00 },
       { month: 'Q3 2026', principal: 170.00, interest: 200.00 },
    ],
    '5yrs': [
      { month: '2024', principal: 250, interest: 300 },
      { month: '2025', principal: 700, interest: 850 },
      { month: '2026', principal: 650, interest: 800 },
      { month: '2027', principal: 720, interest: 890 },
      { month: '2028', principal: 680, interest: 820 },
    ]
  },
  byType: [
    { name: 'Government', value: 50000, color: '#34D399', count: 4 },
    { name: 'Sovereign', value: 25000, color: '#FBBF24', count: 2 },
    { name: 'PSU', value: 60000, color: '#F87171', count: 5 },
    { name: 'Corporate', value: 45000, color: '#818CF8', count: 2 },
    { name: 'Tax Free', value: 30000, color: '#60A5FA', count: 3 },
    { name: 'Perpetual', value: 0, color: '#9CA3AF', count: 0 },
  ],
  byRating: [
    { name: 'AAA', value: 12 },
    { name: 'AA+', value: 10 },
    { name: 'AA', value: 5 },
    { name: 'AA-', value: 4 },
    { name: 'A+', value: 15 },
    { name: 'A', value: 8 },
    { name: 'A-', value: 6 },
    { name: 'BBB+', value: 10 },
    { name: 'BBB', value: 4 },
    { name: 'BBB-', value: 6 },
    { name: 'BB+', value: 5 },
    { name: 'BB', value: 2 },
    { name: 'BB-', value: 3 },
    { name: 'B+', value: 2 },
    { name: 'B', value: 0 },

  ],
  allocation: [
    { 
      name: 'ICICI Home Finance', 
      isin: 'INE01YL07342', 
      percentage: 20, 
      value: 50000, 
      color: '#34D399' 
    },
    { 
      name: 'Navi Finserv', 
      isin: 'INE032L07342', 
      percentage: 12, 
      value: 25000, 
      color: '#FBBF24' 
    },
    { 
      name: 'Piramal Finance', 
      isin: 'INE032L07342', 
      percentage: 25, 
      value: 60000, 
      color: '#F87171' 
    },
    { 
      name: 'Akme Fintech', 
      isin: 'INE032L07342', 
      percentage: 18, 
      value: 45000, 
      color: '#818CF8' 
    },
    { 
      name: 'HDFC Bank Limited Company', 
      isin: 'INE032L07342', 
      percentage: 25, 
      value: 30000, 
      color: '#60A5FA' // Assuming color for rest
    },
      { 
      name: 'L&T Finance', 
      isin: 'INE032L07342', 
      percentage: 9, 
      value: 30000, 
      color: '#555555' 
    },
  ],
  byMaturity: [
    { name: 'Below 1 year', value: 405000, color: '#FBBF24' },
    { name: '1 - 3 years', value: 1215000, color: '#F87171' },
    { name: '3 - 5 years', value: 612000, color: '#34D399' },
    { name: '5 - 8 years', value: 325000, color: '#3B82F6' },
    { name: '8 - 15 years', value: 484000, color: '#818CF8' },
  ]
};
