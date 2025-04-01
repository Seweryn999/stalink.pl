"use client";

import { Stars } from "lucide-react";
import dynamic from "next/dynamic";

const Animation1 = dynamic(() => import("../../components/three/Animation1"), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden flex items-center justify-center ">
      <div className="absolute inset-0 starry-background"></div>
      <Animation1 />
      <div className="relative z-10 text-center px-6 pt-24"></div>
    </section>
  );
}
