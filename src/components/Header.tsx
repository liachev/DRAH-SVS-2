'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image
                   src="/images/drah-logo.jpg"
                  alt="DRAH Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:ml-6 md:flex md:space-x-4 md:items-center">
            <Link href="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-drah-blue">
              Home
            </Link>
            <Link href="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-drah-blue">
              About DRAH
            </Link>
            <Link href="/property-models" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-drah-blue">
              Property Models
            </Link>
            <Link href="/properties" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-drah-blue">
              SVS UIC Properties
            </Link>
            <Link href="/ai-tools" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-drah-blue">
              AI Business Tools
            </Link>
            <Link href="/reserve" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-drah-blue">
              Reserve
            </Link>
            <Link href="/account" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-drah-blue">
              Account
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-drah-blue"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-drah-blue hover:bg-gray-50">
            Home
          </Link>
          <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-drah-blue hover:bg-gray-50">
            About DRAH
          </Link>
          <Link href="/property-models" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-drah-blue hover:bg-gray-50">
            Property Models
          </Link>
          <Link href="/properties" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-drah-blue hover:bg-gray-50">
            SVS UIC Properties
          </Link>
          <Link href="/ai-tools" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-drah-blue hover:bg-gray-50">
            AI Business Tools
          </Link>
          <Link href="/reserve" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-drah-blue hover:bg-gray-50">
            Reserve
          </Link>
          <Link href="/account" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-drah-blue hover:bg-gray-50">
            Account
          </Link>
        </div>
      </div>
    </header>
  );
}
