"use client";

import { useEffect, useRef } from "react";

export default function StarsBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      console.log("StarsBackground: Kontener nie znaleziony");
      return;
    }
    console.log("StarsBackground: Kontener znaleziony, generowanie gwiazd");

    container.innerHTML = "";

    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = `${Math.random() * 3}px`;
      star.style.height = star.style.width;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      container.appendChild(star);
    }

    const stars = container.querySelectorAll(".star");
    console.log(`StarsBackground: Dodano ${stars.length} gwiazd`);
  }, []);

  return (
    <div
      ref={containerRef}
      className="starry-background"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
