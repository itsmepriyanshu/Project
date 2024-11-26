import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Thompson',
    role: 'CTO',
    company: 'TechCorp Solutions',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'The AI virtual assistant has transformed our customer service. Response times are down 70%, and customer satisfaction is at an all-time high.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CEO',
    company: 'InnovateAI',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'The team at AI-Solutions helped us implement a neural network that improved our prediction accuracy by 45%. Outstanding results!',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Operations',
    company: 'Global Dynamics',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'Process automation solutions from AI-Solutions have streamlined our operations and reduced manual work by 60%. Highly recommended!',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            See what our clients say about our AI solutions and services.
          </p>
        </div>

        <div className="mt-20 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="group">
              <div className="h-full flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-200 p-8">
                <div className="flex-1">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-lg text-gray-600 leading-relaxed">"{testimonial.content}"</p>
                </div>
                <div className="mt-8 flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">{testimonial.name}</p>
                    <div className="text-sm text-gray-500">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}