'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { ChartDataPoint } from '../../types/dashboard';
import { DashboardCard } from '../ui/DashboardCard';

interface RatingBarChartProps {
  data: ChartDataPoint[];
}

const getRatingColor = (index: number, total: number) => {
  // Simple gradient logic simulation
  // Green -> Yellow -> Red
  // Start (0) = Green, Middle = Yellow, End = Red
  if (index < total / 3) return '#10B981'; // Green
  if (index < (2 * total) / 3) return '#F59E0B'; // Amber/Yellow
  return '#EF4444'; // Red
};

export function RatingBarChart({ data }: RatingBarChartProps) {
  return (
    <DashboardCard title="Investment by Bond Rating">
      <div className="flex flex-col md:flex-row items-center justify-between h-[300px] mt-4">
        {/* Chart Side */}
        <div className="flex-1 h-full min-w-[60%]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: -20,
                bottom: 5,
              }}
              barCategoryGap={4}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fill: '#6B7280' }} 
                interval={0}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fill: '#6B7280' }} 
                label={{ value: 'NOS OF BONDS', angle: -90, position: 'insideLeft', style: { textAnchor: 'middle', fill: '#9CA3AF', fontSize: 10 } }}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={16}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getRatingColor(index, data.length)} />
                ))}
                <LabelList dataKey="value" position="top" style={{ fontSize: '10px', fill: '#374151', fontWeight: 500 }} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Legend Side */}
        <div className="w-auto max-w-[40%] h-full pl-4 py-2 overflow-y-auto overflow-x-hidden flex-shrink-0 border-l border-dashed border-gray-200 ml-4">
            <div className="space-y-4 pr-2">
               {data.map((item, idx) => (
                 <div key={idx} className="flex items-start justify-between gap-4 text-xs w-full">
                     <div className="flex items-start gap-2 w-full min-w-0">
                        <div className="w-2 h-2 rounded-full mt-1.5" style={{ backgroundColor: getRatingColor(idx, data.length) }}></div>
                        <div>
                            <p className="font-semibold text-gray-700 whitespace-nowrap">{item.name}</p>
                            <p className="text-gray-500">₹ 50,000.00</p> 
                        </div>
                     </div>
                 </div>
               ))}
            </div>
        </div>
      </div>
    </DashboardCard>
  );
}
