"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="bg-black bg-opacity-70 backdrop-blur-lg w-full py-4 fixed top-0 left-0 z-50 shadow-md">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
      
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white text-2xl font-black tracking-widest animate-pulse-slow uppercase">
          <Link href="/">Stalink</Link>
        </div>

        
        <ul className="hidden md:flex gap-8 text-sm font-mono text-gray-300">
          <li>
            <Link
              href="#hero"
              className="hover:text-white hover:border-b-2 border-blue-500 transition-all"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="hover:text-white hover:border-b-2 border-blue-500 transition-all"
            >
              O mnie
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="hover:text-white hover:border-b-2 border-blue-500 transition-all"
            >
              Projekty
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="hover:text-white hover:border-b-2 border-blue-500 transition-all"
            >
              Kontakt
            </Link>
          </li>
        </ul>

        
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 w-full px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-col gap-4 text-sm font-mono text-gray-300">
            <li>
              <Link
                href="#hero"
                onClick={() => setIsOpen(false)}
                className="hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                onClick={() => setIsOpen(false)}
                className="hover:text-white"
              >
                O mnie
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="hover:text-white"
              >
                Projekty
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-white"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
