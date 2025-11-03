"use client";

import { useRouter, usePathname } from 'next/navigation';
import { Home, LayoutDashboard, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TopBar() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-neutral-darker/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center cursor-pointer"
            onClick={() => router.push('/')}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="ml-2 text-xl font-bold text-slate-900 dark:text-white">MVP</span>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;
              return (
                <motion.button
                  key={item.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => router.push(item.path)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-neutral-dark'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.name}</span>
                </motion.button>
              );
            })}
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => router.push(item.path)}
                  className={`p-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-neutral-dark'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
