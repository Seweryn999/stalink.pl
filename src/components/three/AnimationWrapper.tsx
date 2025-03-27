"use client";
import dynamic from "next/dynamic";

const Animation1 = dynamic(() => import("./Animation1"), { ssr: false });

export default function AnimationWrapper() {
  return <Animation1 />;
}
