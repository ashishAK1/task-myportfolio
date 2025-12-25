import React from 'react';
import { MetricCard } from '@/components/ui/MetricCard';
import { CashflowBarChart } from '@/components/charts/CashflowBarChart';
import { InvestmentPieChart } from '@/components/charts/InvestmentPieChart';
import { RatingBarChart } from '@/components/charts/RatingBarChart';
import { AllocationChart } from '@/components/charts/AllocationChart';
import { MaturityChart } from '@/components/charts/MaturityChart';
import { mockDashboardData } from '@/data/dashboard-data';

export default function DashboardPage() {
  const { metrics, cashflow, byType, byRating, allocation, byMaturity } = mockDashboardData;

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-8 py-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Top Row: Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <MetricCard key={index} metric={metric} />
          ))}
        </div>

        {/* Second Row: Cashflow Chart */}
        <div className="w-full">
           <CashflowBarChart data={cashflow} />
        </div>

        {/* Third Row: Bond Type & Rating */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <InvestmentPieChart data={byType} title="Investment by Bond Type" />
          <RatingBarChart data={byRating} />
        </div>

        {/* Fourth Row: Allocation & Maturity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AllocationChart data={allocation} title="Investment Allocation (%)" />
          <MaturityChart data={byMaturity} />
        </div>

      </div>
    </div>
  );
}