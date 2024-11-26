import React from 'react';
import { Bot, Brain, Cpu, LineChart, Lock, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  {
    name: 'Enterprise AI Assistant',
    description: 'Custom AI assistants trained on your business data',
    icon: Bot,
    features: [
      'Natural language processing',
      '24/7 customer support',
      'Multi-language support',
      'Custom knowledge base',
    ],
    price: 'Starting at £499/mo',
    popular: true,
  },
  {
    name: 'Predictive Analytics',
    description: 'Data-driven insights for informed decision making',
    icon: LineChart,
    features: [
      'Real-time analytics',
      'Custom dashboards',
      'Trend prediction',
      'Anomaly detection',
    ],
    price: 'Starting at £299/mo',
    popular: false,
  },
  {
    name: 'Neural Network Solutions',
    description: 'Deep learning models for complex problems',
    icon: Brain,
    features: [
      'Custom model training',
      'Image recognition',
      'Pattern detection',
      'Scalable infrastructure',
    ],
    price: 'Starting at £799/mo',
    popular: false,
  },
];

const industries = [
  {
    name: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'AI-powered diagnostic tools and patient care optimization',
  },
  {
    name: 'Finance',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Fraud detection and automated risk assessment',
  },
  {
    name: 'Manufacturing',
    image: 'https://images.unsplash.com/photo-1565465295423-68c959f89460?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    description: 'Predictive maintenance and quality control',
  },
];

export default function Solutions() {
  return (
    <div className="bg-gradient-blur">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Transform Your Business with</span>
              <span className="block text-indigo-600">AI-Powered Solutions</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Choose from our range of AI solutions designed to revolutionize your business operations
              and drive growth through innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {solutions.map((solution) => (
            <div
              key={solution.name}
              className={`relative group rounded-2xl bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-200 ${
                solution.popular ? 'ring-2 ring-indigo-600' : ''
              }`}
            >
              {solution.popular && (
                <div className="absolute top-0 right-6 transform -translate-y-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700">
                    Popular
                  </span>
                </div>
              )}
              <div className="flex items-center space-x-4">
                <solution.icon className="h-8 w-8 text-indigo-600" />
                <h3 className="text-xl font-bold text-gray-900">{solution.name}</h3>
              </div>
              <p className="mt-4 text-gray-500">{solution.description}</p>
              <ul className="mt-6 space-y-4">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <p className="text-lg font-semibold text-gray-900">{solution.price}</p>
                <Link
                  to="/schedule-demo"
                  className="mt-4 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200"
                >
                  Schedule Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Industries Section */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Industries We Serve</h2>
            <p className="mt-4 text-xl text-gray-500">
              Our AI solutions are tailored for various industries, delivering specific value to each sector.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={industry.image}
                    alt={industry.name}
                    className="object-cover transform group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-bold text-white">{industry.name}</h3>
                    <p className="mt-2 text-white/90">{industry.description}</p>
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