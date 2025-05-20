'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-drah-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sustainable Housing Solutions for a Better Future
            </h1>
            <p className="text-xl mb-8">
              Disaster Recovery & Affordable Housing provides innovative, sustainable, and affordable housing solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/property-models" className="bg-white text-drah-blue px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Explore Property Models
              </Link>
              <Link href="/reserve" className="bg-drah-green text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
                Reserve Your Home
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full hidden md:block">
          {/* Placeholder for hero image */}
          <div className="w-full h-full bg-drah-green bg-opacity-30"></div>
        </div>
      </section>

      {/* SVS Lots Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">SVS UIC Development</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reserve your new home today and build your future affordably.
            </p>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/properties">
              <div className="inline-block cursor-pointer">
                <Image 
                  src="/images/SVS Lots.jpg" 
                  alt="SVS Lots Development Map" 
                  width={800} 
                  height={500} 
                  className="rounded-lg shadow-lg hover:opacity-90 transition-opacity"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Model Homes Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Property Models</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse range of sustainable and affordable home designs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gothic */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image 
                  src="/images/model-homes/gothic/Gothic Home Pkg 51525 (1).png" 
                  alt="Gothic Model Home" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Gothic</h3>
                <p className="text-gray-600 mb-4">A stunning Gothic-inspired design featuring elegant architectural elements.</p>
                <Link href="/property-models" className="text-drah-blue hover:underline">View Details</Link>
              </div>
            </div>
            
            {/* Hacienda */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image 
                  src="/images/model-homes/hacienda-updated/Hacienda 50125(1).png" 
                  alt="Hacienda Model Home" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Hacienda</h3>
                <p className="text-gray-600 mb-4">A beautiful Spanish-influenced hacienda design with open spaces.</p>
                <Link href="/property-models" className="text-drah-blue hover:underline">View Details</Link>
              </div>
            </div>
            
            {/* Industrial Loft */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image 
                  src="/images/model-homes/industrial-loft/11 Industrial Loft 51725 (1).png" 
                  alt="Industrial Loft Model Home" 
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Industrial Loft</h3>
                <p className="text-gray-600 mb-4">A modern industrial loft design with open floor plans and urban aesthetic.</p>
                <Link href="/property-models" className="text-drah-blue hover:underline">View Details</Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/property-models" className="inline-block bg-drah-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
              View All Property Models
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose DRAH?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our homes are designed with sustainability, affordability, and quality in mind.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-drah-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainable</h3>
              <p className="text-gray-600">
                Energy-efficient designs and sustainable materials reduce environmental impact.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-drah-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Affordable</h3>
              <p className="text-gray-600">
                Innovative construction methods allow us to offer quality homes at affordable prices.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-drah-green rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-gray-600">
                Built to last with premium materials and attention to detail in every aspect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-drah-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Future?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take the first step towards owning your sustainable, affordable dream home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/reserve" className="bg-white text-drah-blue px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Reserve Now
            </Link>
            <Link href="/property-models" className="bg-drah-green text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
              Explore Models
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
