export default function ProjectsSection() {
  return (
    <section id="projects" className="py-80 bg-black flex justify-center">
      <div className="max-w-7xl w-full px-6 text-center flex flex-col items-center gap-y-20">
        <header className="animate-pulse-slow">
          <h2 className="text-5xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
            Projekty
          </h2>
          <div className="mt-16 w-24 h-1 bg-blue-500 mx-auto rounded-full" />
        </header>

        <p className="text-xl text-gray-300 max-w-3xl font-mono leading-loose">
          Poniżej znajdziesz kilka moich wybranych projektów. Każdy z nich
          pokazuje inne wyzwania i technologie, z jakimi pracowałem.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-40 w-full">
          {[
            {
              title: "BB Hair Spa",
              description:
                "Strona salonu fryzjerskiego oparta na Next.js, responsywna, SEO-friendly, z ciemnym eleganckim stylem.",
            },
            {
              title: "Portfolio",
              description:
                "Moje osobiste portfolio – Next.js, Tailwind, animacje, elegancki UI i pełna responsywność.",
            },
            {
              title: "Task Manager App",
              description:
                "Aplikacja do zarządzania zadaniami w React + Firebase – CRUD, logowanie, zarządzanie stanem.",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 p-16 rounded-2xl shadow-xl hover:shadow-blue-500/30 transition-transform duration-300 hover:scale-105 flex flex-col items-center text-center gap-y-12"
            >
              <h3 className="text-3xl font-bold text-blue-400">
                {project.title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.description}
              </p>
              <a
                href="#"
                className="px-8 py-4 border border-blue-400 text-blue-400 rounded-md font-mono hover:bg-blue-400 hover:text-white transition"
              >
                Zobacz więcej
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
