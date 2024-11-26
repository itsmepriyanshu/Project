import React from 'react';
import { ArrowRight, Brain, Cpu, Shield, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-white to-indigo-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-indigo-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
            </div>
          </div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <span className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-indigo-100 text-indigo-700">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Leading AI Solutions Provider
                </span>
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Transform your business with</span>{' '}
                <span className="block text-indigo-600 xl:inline bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                  AI Solutions
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Empowering businesses in Sunderland and beyond with cutting-edge AI technology. 
                From virtual assistants to custom AI solutions, we're here to revolutionize your workflow.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/schedule-demo"
                  className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200 shadow-lg hover:shadow-xl md:py-4 md:text-lg md:px-10"
                >
                  Schedule Demo
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/solutions"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border-2 border-indigo-600 text-base font-medium rounded-xl text-indigo-700 bg-transparent hover:bg-indigo-50 transition-colors md:py-4 md:text-lg md:px-10"
                >
                  Our Solutions
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-gradient-to-br from-indigo-900 to-purple-900 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMTBoMnYyMHptLTIgMGgtMlYxMGgydjIwem0tMiAwaC0yVjEwaDJ2MjB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
          <div className="grid grid-cols-2 gap-8 p-8 relative z-10">
            <div className="text-center transform hover:scale-105 transition-transform duration-200">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg">
                <Brain className="mx-auto h-12 w-12 text-white" />
                <p className="mt-2 text-white font-medium">AI Assistants</p>
              </div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-200">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg">
                <Cpu className="mx-auto h-12 w-12 text-white" />
                <p className="mt-2 text-white font-medium">Smart Processing</p>
              </div>
            </div>
            <div className="text-center transform hover:scale-105 transition-transform duration-200 col-span-2">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-lg">
                <Shield className="mx-auto h-12 w-12 text-white" />
                <p className="mt-2 text-white font-medium">Secure Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}