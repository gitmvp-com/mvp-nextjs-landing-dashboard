"use client";

import { motion } from 'framer-motion';
import { User, Mail, Calendar, MapPin, Settings } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Profile() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data
  const userData = {
    name: 'Demo User',
    email: 'demo@example.com',
    joinDate: 'January 2025',
    location: 'San Francisco, CA',
    bio: 'Passionate developer building amazing web applications with Next.js and modern technologies.',
  };

  const stats = [
    { label: 'Projects', value: '12' },
    { label: 'Contributions', value: '147' },
    { label: 'Followers', value: '523' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120] pt-20 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-neutral-dark rounded-xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm mb-8"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            {/* Avatar */}
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white text-3xl font-bold">
              {userData.name.charAt(0)}
            </div>

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{userData.name}</h1>
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-center md:justify-start text-slate-600 dark:text-slate-300">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">{userData.email}</span>
                </div>
                <div className="flex items-center justify-center md:justify-start text-slate-600 dark:text-slate-300">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">Joined {userData.joinDate}</span>
                </div>
                <div className="flex items-center justify-center md:justify-start text-slate-600 dark:text-slate-300">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{userData.location}</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button className="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>Edit Profile</span>
            </button>
          </div>

          {/* Bio */}
          <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
            <p className="text-slate-600 dark:text-slate-300">{userData.bio}</p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-3 gap-4 mb-8"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white dark:bg-neutral-dark rounded-xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm text-center"
            >
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-neutral-dark rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden"
        >
          {/* Tab Headers */}
          <div className="flex border-b border-slate-200 dark:border-slate-700">
            {['overview', 'activity', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-6 py-4 text-sm font-medium capitalize transition-colors ${
                  activeTab === tab
                    ? 'text-primary border-b-2 border-primary bg-primary/5'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">About</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    This is a demo profile page showcasing user information and statistics. 
                    In a real application, this would display actual user data from your backend.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'activity' && (
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Recent Activity</h3>
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="flex items-start space-x-4 p-4 bg-slate-50 dark:bg-neutral-darker rounded-lg"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">
                        Activity {item}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {item} hours ago
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Account Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-neutral-darker rounded-lg">
                    <span className="text-sm text-slate-900 dark:text-white">Email Notifications</span>
                    <button className="px-4 py-2 bg-primary text-white rounded text-sm">Enabled</button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-neutral-darker rounded-lg">
                    <span className="text-sm text-slate-900 dark:text-white">Privacy</span>
                    <button className="px-4 py-2 bg-slate-200 dark:bg-neutral-dark text-slate-900 dark:text-white rounded text-sm">Public</button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-neutral-darker rounded-lg">
                    <span className="text-sm text-slate-900 dark:text-white">Two-Factor Auth</span>
                    <button className="px-4 py-2 bg-slate-200 dark:bg-neutral-dark text-slate-900 dark:text-white rounded text-sm">Disabled</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex justify-center space-x-4"
        >
          <button
            onClick={() => router.push('/dashboard')}
            className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all"
          >
            Go to Dashboard
          </button>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-white dark:bg-neutral-dark hover:bg-slate-50 dark:hover:bg-neutral-darker text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg transition-all"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    </div>
  );
}
