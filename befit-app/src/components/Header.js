"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between h-16">
        
        {/* Logo */}
        <div className="text-2xl font-semibold text-gray-900">
          <Link href="/">
            <div className="h-6 w-auto sm:h-8 md:h-10 lg:h-12">
            <Image
              src="/images/befit.webp"
              alt="BeFit Logo"
              width={100}
              height={40}
              priority
              style={{ height: "100%", width: "auto" }}
            />
            </div>
          </Link>
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <nav className="hidden md:flex space-x-8 font-semibold">
          <Link href="/" className="text-gray-700 hover:text-headerColor transition-colors">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-headerColor transition-colors">About</Link>
          <Link href="/career" className="text-gray-700 hover:text-headerColor transition-colors">Career</Link>
          <Link href="/pricing" className="text-gray-700 hover:text-headerColor transition-colors">Pricing</Link>
          <Link href="/resources" className="text-gray-700 hover:text-headerColor transition-colors">Resources</Link>
        </nav>

        {/* Contact Button - Visible on larger screens */}
        <div className="hidden md:flex">
          <Link href="/join" className="bg-white text-headerColor px-4 py-2 border border-headerColor rounded-lg hover:bg-headerColor hover:text-white transition-colors">
            Join our community
          </Link>
        </div>

         {/* Login Button - Visible on larger screens */}
         <div className="hidden md:flex">
          <Link href="/login" className="bg-loginColor font-dmSans font-medium text-white text-base px-9 py-2 border rounded-full hover:bg-red-700 hover:text-white transition-colors">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-900 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-white font-dmSans font-semibold backdrop-blur-lg absolute top-16 left-0 w-full shadow-md z-40">
          <nav className="flex flex-col items-center space-y-4 py-6">
            <Link href="/" className="text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="/career" className="text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Career</Link>
            <Link href="/pricing" className="text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            <Link href="/resources" className="text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(false)}>Resources</Link>
            <Link href="/join" className="bg-white text-headerColor px-4 py-2 border border-headerColor rounded-lg hover:bg-headerColor hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>
              Join our community
            </Link>
            <Link href="/login" className="text-white text-base border rounded-full font-dmSans font-medium  bg-loginColor hover:bg-red-700 px-9 py-2" onClick={() => setIsMenuOpen(false)}>Login</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;