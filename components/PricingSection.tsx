"use client";

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals',
      features: [
        'Basic features',
        'Up to 5 projects',
        'Email support',
        'Basic analytics',
      ],
      highlighted: false,
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      description: 'Best for professionals',
      features: [
        'All Starter features',
        'Unlimited projects',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
        'Custom integrations',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'All Pro features',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom SLA',
        'Advanced security',
        'API access',
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`relative rounded-2xl p-8 ${
            plan.highlighted
              ? 'bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary shadow-xl scale-105'
              : 'bg-white dark:bg-neutral-dark border border-slate-200 dark:border-slate-700 shadow-sm'
          }`}
        >
          {plan.highlighted && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
          )}

          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{plan.description}</p>
          </div>

          <div className="text-center mb-6">
            <span className="text-5xl font-bold text-slate-900 dark:text-white">{plan.price}</span>
            <span className="text-slate-500 dark:text-slate-400">{plan.period}</span>
          </div>

          <ul className="space-y-3 mb-8">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start">
                <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-600 dark:text-slate-300">{feature}</span>
              </li>
            ))}
          </ul>

          <button
            className={`w-full py-3 rounded-lg font-medium transition-all ${
              plan.highlighted
                ? 'bg-primary hover:bg-primary-dark text-white shadow-lg hover:shadow-xl'
                : 'bg-slate-100 dark:bg-neutral-darker hover:bg-slate-200 dark:hover:bg-neutral-darker/80 text-slate-900 dark:text-white'
            }`}
          >
            Get Started
          </button>
        </motion.div>
      ))}
    </div>
  );
}
