import React from 'react';
import { Bot, Brain, Cpu, LineChart, Lock, Zap } from 'lucide-react';

const features = [
  {
    name: 'AI Virtual Assistants',
    description: 'Custom-built AI assistants that understand your business needs and customer interactions.',
    icon: Bot,
  },
  {
    name: 'Smart Analytics',
    description: 'Advanced data analysis and insights powered by machine learning algorithms.',
    icon: LineChart,
  },
  {
    name: 'Process Automation',
    description: 'Streamline your workflows with intelligent automation solutions.',
    icon: Zap,
  },
  {
    name: 'Neural Networks',
    description: 'Deep learning solutions for complex pattern recognition and prediction.',
    icon: Brain,
  },
  {
    name: 'Edge Computing',
    description: 'Optimized AI processing at the edge for real-time applications.',
    icon: Cpu,
  },
  {
    name: 'Secure Infrastructure',
    description: 'Enterprise-grade security for all AI implementations.',
    icon: Lock,
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Intelligent Solutions for Modern Businesses
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Leverage our cutting-edge AI technology to transform your business operations and customer experience.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-200"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200">
                  <div>
                    <feature.icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}