"use client";

import dynamic from "next/dynamic";

const Animation1 = dynamic(() => import("../../components/three/Animation1"), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-black">
      <Animation1 />

      <div className="relative z-10 text-center px-6 pt-24">
        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neonPink to-neonBlue animate-glow">
          Witaj w moim 3D świecie
        </h1>
        <p className="mt-6 text-lg text-gray-300 font-mono max-w-2xl mx-auto">
          To jest sekcja startowa z animacją w tle.
        </p>
      </div>
    </section>
  );
}
