"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black bg-opacity-70 backdrop-blur-lg w-full py-4 fixed top-0 left-0 z-50 shadow-md">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between md:justify-start relative">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white text-3xl font-black tracking-widest animate-pulse-slow uppercase md:text-left text-center w-full md:w-auto">
          <Link href="/">Stalink</Link>
        </div>

        <ul className="hidden md:flex gap-8 text-gray-300 text-2xl ml-auto">
          <li>
            <Link href="#hero" className="hover:text-white transition-all">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-white transition-all">
              O mnie
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-white transition-all">
              Projekty
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-white transition-all">
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
