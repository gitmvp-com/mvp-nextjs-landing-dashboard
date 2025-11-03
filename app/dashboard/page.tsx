"use client";

import { MetricCard } from '@/components/MetricCard';
import { motion } from 'framer-motion';
import { Activity, Users, TrendingUp, Clock } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  const metrics = [
    { label: 'Total Users', value: '2,543', icon: Users, trend: '+12%' },
    { label: 'Active Now', value: '847', icon: Activity, trend: '+5%' },
    { label: 'Growth', value: '23.5%', icon: TrendingUp, trend: '+8%' },
    { label: 'Avg. Time', value: '4m 32s', icon: Clock, trend: '-2%' },
  ];

  const recentActivity = [
    { id: 1, action: 'New user registered', time: '5 minutes ago', type: 'user' },
    { id: 2, action: 'Dashboard accessed', time: '12 minutes ago', type: 'activity' },
    { id: 3, action: 'Profile updated', time: '1 hour ago', type: 'update' },
    { id: 4, action: 'Settings changed', time: '2 hours ago', type: 'settings' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Dashboard</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">Welcome back! Here's your overview.</p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <MetricCard {...metric} />
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 bg-white dark:bg-neutral-dark rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between p-4 bg-slate-50 dark:bg-neutral-darker rounded-lg hover:bg-slate-100 dark:hover:bg-neutral-darker/80 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">{activity.action}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{activity.time}</p>
                    </div>
                  </div>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">{activity.type}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-neutral-dark rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm"
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button
                onClick={() => router.push('/profile')}
                className="w-full px-4 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all"
              >
                View Profile
              </button>
              <button
                onClick={() => router.push('/')}
                className="w-full px-4 py-3 bg-slate-100 dark:bg-neutral-darker hover:bg-slate-200 dark:hover:bg-neutral-darker/80 text-slate-900 dark:text-white rounded-lg transition-all"
              >
                Back to Home
              </button>
              <button className="w-full px-4 py-3 bg-slate-100 dark:bg-neutral-darker hover:bg-slate-200 dark:hover:bg-neutral-darker/80 text-slate-900 dark:text-white rounded-lg transition-all">
                Settings
              </button>
            </div>

            {/* Info Box */}
            <div className="mt-6 p-4 bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm text-slate-700 dark:text-slate-300">
                💡 <strong>Tip:</strong> This is a demo dashboard. All data is mock data for display purposes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
