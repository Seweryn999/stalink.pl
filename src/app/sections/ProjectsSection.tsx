export default function ProjectsSection() {
  return (
    <section id="projects" className="py-80  flex justify-center">
      <div className="max-w-7xl w-full px-6 text-center flex flex-col items-center gap-y-20">
        <header className="animate-pulse-slow">
          <h2 className="text-5xl font-black uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">
            Projekty
          </h2>
        </header>

        <p className="text-xl text-gray-300 max-w-3xl font-mono leading-loose">
          Poniżej znajdziesz kilka moich wybranych projektów. Każdy z nich
          pokazuje inne wyzwania i technologie, z jakimi pracowałem.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
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
              className="bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex flex-col items-center text-center gap-y-6 max-w-md mx-auto"
            >
              <h3 className="text-2xl font-semibold text-white">
                {project.title}
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                {project.description}
              </p>
              <a
                href="#"
                className="px-6 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-0"
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
