"use client";

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Appointment', path: '/appointment' },
    { name: 'Contacts', path: '/contact' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-10">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="">
          <Image
            src="/Munaff-logo.png" 
            width = {100} 
            height = {60} 
            alt="Munaff Logo"> 
          </Image>
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              href={link.path}
              key={link.name}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                pathname === link.path
                  ? 'bg-[#151B54] text-white'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          {navLinks.map((link) => (
            <Link
              href={link.path}
              key={link.name}
              className={`block px-4 py-2 text-sm ${
                pathname === link.path
                  ? 'bg-[#151B54] text-white'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
              onClick={toggleMenu}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
