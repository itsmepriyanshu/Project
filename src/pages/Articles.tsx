import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: 'The Future of AI in Business',
    excerpt: 'Discover how artificial intelligence is reshaping the business landscape and what it means for your organization.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    author: 'Dr. Sarah Mitchell',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'AI Trends',
  },
  {
    id: 2,
    title: 'Implementing AI Virtual Assistants',
    excerpt: 'A comprehensive guide to successfully implementing AI virtual assistants in your customer service operations.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    author: 'James Wilson',
    date: 'March 12, 2024',
    readTime: '8 min read',
    category: 'Implementation',
  },
  {
    id: 3,
    title: 'AI Security Best Practices',
    excerpt: 'Essential security practices for protecting your AI systems and maintaining data privacy.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    author: 'Emma Thompson',
    date: 'March 10, 2024',
    readTime: '6 min read',
    category: 'Security',
  },
];

const categories = [
  'AI Trends',
  'Implementation',
  'Security',
  'Case Studies',
  'Industry News',
  'Best Practices',
];

export default function Articles() {
  return (
    <div className="bg-gradient-blur min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Latest Insights & News
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Stay updated with the latest trends and insights in AI technology.
          </p>
        </div>

        <div className="mt-12 flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="grid gap-8">
              {articles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-48 w-full object-cover md:h-full"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-700">
                          {article.category}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {article.title}
                      </h2>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {article.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {article.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="block w-full text-left px-4 py-2 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors duration-200"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-sm p-6 text-white">
              <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-white/90 mb-4">
                Get the latest AI insights and news delivered to your inbox.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 rounded-lg bg-white text-indigo-600 font-medium hover:bg-white/90 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}