import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface DashboardCardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  action?: React.ReactNode; // For dropdowns or extra buttons in header
}

export function DashboardCard({ title, children, className, action }: DashboardCardProps) {
  return (
    <div className={cn("bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col h-full", className)}>
      {(title || action) && (
        <div className="flex justify-between items-center mb-6">
          {title && <h3 className="text-lg font-medium text-gray-800">{title}</h3>}
          {action && <div>{action}</div>}
        </div>
      )}
      <div className="flex-1 w-full min-h-0 bg-white">
        {children}
      </div>
    </div>
  );
}
