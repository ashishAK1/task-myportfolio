import React from 'react';
import { DashboardCard } from './DashboardCard';
import { Metric } from '../../types/dashboard';

interface MetricCardProps {
  metric: Metric;
}

export function MetricCard({ metric }: MetricCardProps) {
  return (
    <DashboardCard className="min-h-[120px] justify-center">
      <div className="flex flex-col h-full justify-between gap-[15px]">
        <h4 className="text-[16px] font-normal text-black">
          {metric.label}
        </h4>
        <div className="mt-auto">
          <span className="block text-[24px] font-medium text-[#002C59]">
            {metric.value}
          </span>
        </div>
      </div>
    </DashboardCard>
  );
}
