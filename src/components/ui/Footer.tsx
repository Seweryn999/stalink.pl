export default function Footer() {
  return (
    <footer className="bg-black py-6 px-4 mt-10 text-center text-gray-300 relative z-10">
      <div className="max-w-6xl mx-auto">
        <p className="mb-2 font-mono">
          © {new Date().getFullYear()} Seweryn Stalinger. Wszelkie prawa zastrzeżone.
        </p>
        <div className="flex justify-center gap-4 text-sm">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-all hover:scale-105"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-all hover:scale-105"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-all hover:scale-105"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
