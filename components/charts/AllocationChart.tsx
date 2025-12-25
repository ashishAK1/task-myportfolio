/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { InvestmentAllocation } from '../../types/dashboard';
import { DashboardCard } from '../ui/DashboardCard';

interface AllocationChartProps {
  data: InvestmentAllocation[];
  title: string;
}

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = (props: any) => {
  const { cx, cy, midAngle, outerRadius, fill, percent } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 5) * cos;
  const sy = cy + (outerRadius + 5) * sin;
  const mx = cx + (outerRadius + 20) * cos;
  const my = cy + (outerRadius + 20) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333" fontSize={10} fontWeight="bold" dy={4}>{`${(percent * 100).toFixed(0)}%`}</text>
    </g>
  );
};


export function AllocationChart({ data, title }: AllocationChartProps) {
  return (
    <DashboardCard title={title}>
      <div className="flex flex-col md:flex-row items-center justify-between h-[350px]">
        {/* Chart Side */}
        <div className="flex-1 h-full relative min-w-[60%]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ top: 20, left: 20, right: 20, bottom: 20 }}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={0}
                dataKey="percentage"
                label={renderCustomizedLabel}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={2} stroke="#fff" />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend Side */}
        <div className="w-auto max-w-[35%] h-full pl-4 py-4 overflow-y-auto overflow-x-hidden flex-shrink-0">
          <div className="space-y-4 pr-2">
            {data.map((item, index) => (
              <div key={index} className="flex items-start justify-between text-xs border-b border-gray-50 pb-2 last:border-0 gap-4 w-full">
                <div className="flex items-start gap-2 w-full min-w-0">
                   <div 
                    className="w-2.5 h-2.5 rounded-full mt-1" 
                    style={{ backgroundColor: item.color }} 
                   />
                   <div className="flex-1 min-w-0">
                     <p 
                       className="font-semibold text-gray-800 truncate" 
                       title={item.name}
                     >
                       {item.name}
                     </p>
                     {item.isin && <p className="text-gray-400 text-[10px]">ISIN: {item.isin}</p>}
                     <div className="flex gap-1 text-gray-500 mt-0.5">
                        <span className="font-medium text-gray-700 flex-shrink-[0] -ml-[2px]">{item.percentage}%</span>
                        <span className="whitespace-nowrap">(₹ {item.value?.toLocaleString()})</span>
                     </div>
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
