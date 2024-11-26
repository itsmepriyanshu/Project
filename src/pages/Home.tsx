import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Stats from '../components/Stats';
import Chatbot from '../components/Chatbot';

export default function Home() {
  return (
    <div className="bg-gradient-blur">
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <Chatbot />
    </div>
  );
}