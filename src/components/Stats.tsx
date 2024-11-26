import React from 'react';
import { Users, Building2, Award, Sparkles } from 'lucide-react';

const stats = [
  { name: 'Happy Clients', value: '500+', icon: Users },
  { name: 'Business Partners', value: '100+', icon: Building2 },
  { name: 'Industry Awards', value: '25+', icon: Award },
  { name: 'AI Solutions Deployed', value: '1000+', icon: Sparkles },
];

export default function Stats() {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="relative group bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-200"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-75 transition duration-200"></div>
              <div className="relative flex items-center space-x-4">
                <stat.icon className="h-8 w-8 text-indigo-600" />
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}