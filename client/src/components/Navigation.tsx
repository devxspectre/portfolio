import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black/10">
      <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="text-base font-medium text-black hover:text-black/70 transition-colors font-sans"
        >
          Sourav
        </Link>
        <nav className="flex items-center gap-8">
          <a
            href="https://spectrewrites.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-black/60 hover:text-black transition-colors font-sans"
          >
            Blogs
          </a>
          <Link
            to="/projects"
            className="text-sm text-black/60 hover:text-black transition-colors font-sans"
          >
            Projects
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Navigation
