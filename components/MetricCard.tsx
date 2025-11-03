"use client";

import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface MetricCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
}

export function MetricCard({ label, value, icon: Icon, trend }: MetricCardProps) {
  const isPositive = trend?.startsWith('+');

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-neutral-dark rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        {trend && (
          <span
            className={`text-xs font-medium px-2 py-1 rounded ${
              isPositive
                ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
            }`}
          >
            {trend}
          </span>
        )}
      </div>
      <div>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{label}</p>
        <p className="text-2xl font-bold text-slate-900 dark:text-white">{value}</p>
      </div>
    </motion.div>
  );
}
