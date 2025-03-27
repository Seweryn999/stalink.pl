export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-56 bg-black flex items-center justify-center"
    >
      <div className="max-w-5xl mx-auto text-center">
        <header className="mb-24 animate-pulse-slow">
          <h2 className="text-5xl font-black tracking-wider uppercase text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
            O mnie
          </h2>
          <div className="mt-6 w-24 mx-auto border-b-2 border-blue-500"></div>
        </header>
        <p className="text-xl text-gray-200 leading-relaxed mx-4 font-mono">
          Cześć! Nazywam się Seweryn Stalinger. Jestem frontend developerem
          specjalizującym się w Next.js, React, TypeScript i Tailwind CSS.
          Uwielbiam tworzyć aplikacje internetowe, które są szybkie, atrakcyjne
          wizualnie i przyjazne dla użytkowników. W wolnym czasie eksploruję
          nowinki technologiczne, rozwijam umiejętności w dziedzinie animacji 3D
          (React Three Fiber) i gram w gry komputerowe.
        </p>
      </div>
    </section>
  );
}
