'use client';

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LabelList } from 'recharts';
import { CashflowData, TimePeriod } from '../../types/dashboard';
import { DashboardCard } from '../ui/DashboardCard';

interface CashflowChartProps {
  data: Record<TimePeriod, CashflowData[]>;
}

type FormatterValueParamType = number | string | boolean | null | undefined;

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: { value: number }[]; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-lg rounded-lg">
        <p className="text-sm font-semibold text-gray-700 mb-1">{label}</p>
        <p className="text-sm text-red-500">
          Principal: {payload[0].value}L
        </p>
        <p className="text-sm text-emerald-500">
          Interest: {payload[1].value}L
        </p>
      </div>
    );
  }
  return null;
};

// Custom tick formatter for Y-axis
const yAxisFormatter = (value: number) => {
  return `${value}L`;
};

export function CashflowBarChart({ data }: CashflowChartProps) {
  const [period, setPeriod] = useState<TimePeriod>('1yr');
  const currentData = data[period];

  const handlePeriodChange = (newPeriod: TimePeriod) => {
    setPeriod(newPeriod);
  };

  const ActionSlot = (
    <div className="flex items-center text-sm border border-gray-200 rounded-md overflow-hidden shadow-sm">
      {(['1yr', '2yrs', '5yrs'] as TimePeriod[]).map((p) => (
        <button
          key={p}
          onClick={() => handlePeriodChange(p)}
          className={`px-4 py-1.5 font-medium transition-colors ${
            period === p
              ? 'bg-gray-600 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          } ${p !== '5yrs' ? 'border-r border-gray-200' : ''}`}
        >
          {p.replace('yrs', ' yrs').replace('yr', ' yr')}
        </button>
      ))}
    </div>
  );

  return (
    <DashboardCard title="Cashflow to Maturity / Call" action={ActionSlot}>
      <div className="h-[300px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={currentData}
            margin={{
              top: 25,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barGap={8}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: '#6B7280' }} 
              interval={0}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: '#6B7280' }} 
              tickFormatter={yAxisFormatter}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#F3F4F6' }} />
             <Legend 
              verticalAlign="bottom" 
              height={36} 
              iconType="circle"
              wrapperStyle={{ paddingTop: '20px' }}
            />
            {/* Principal Bar - Red/Pink */}
            <Bar 
              dataKey="principal" 
              name="Principal" 
              fill="#FF5252" 
              radius={[4, 4, 0, 0]} 
              barSize={12}
            >
              <LabelList dataKey="principal" position="top" fontSize={9} formatter={(val: FormatterValueParamType) => val} />
            </Bar>
            {/* Interest Bar - Green/Teal */}
            <Bar 
              dataKey="interest" 
              name="Interest" 
              fill="#00E396" 
              radius={[4, 4, 0, 0]} 
              barSize={12}
            >
              <LabelList dataKey="interest" position="top" fontSize={9} formatter={(val: FormatterValueParamType) => val} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </DashboardCard>
  );
}
