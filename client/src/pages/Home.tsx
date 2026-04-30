import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-14">
      <div className="flex flex-col items-start px-4 max-w-xl text-left">
        <img
          src="/sourav.png"
          alt="Sourav"
          className="w-48 h-48 object-cover"
        />
        <h1 className="mt-10">
          <span className="text-5xl font-serif text-black tracking-normal block leading-none">
            Spectre
          </span>
          <span className="text-lg font-serif italic text-black/50 mt-2 block">
            "people call me Sourav"
          </span>
        </h1>
        <p className="text-xl text-black/70 mt-10 leading-relaxed font-serif font-thin italic max-w-xl">
          No CS degree, just consequences, curiosity, and a compulsion to write everything I come across and find worth sharing. Learning and building is spectre's way. I write about everything I find worth talking about, sharing my views because honestly, I don't have friends. If my blogs made you think, laugh, or Google something, that would be enough.
        </p>

        <div className="flex items-center gap-1.5 mt-10 text-base text-black/50 font-sans">
          <FaMapMarkerAlt className="w-4 h-4" />
          <span>Bangalore, India</span>
        </div>

        <div className="flex flex-col items-start gap-3 mt-6">
          <a
            href="https://github.com/devxspectre"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors font-sans"
          >
            <FaGithub className="w-4 h-4" />
            github.com/devxspectre
          </a>
          <a
            href="https://linkedin.com/in/sourav"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors font-sans"
          >
            <FaLinkedin className="w-4 h-4" />
            linkedin.com/in/sourav
          </a>
          <a
            href="mailto:mailsourav014@gmail.com"
            className="flex items-center gap-2 text-sm text-black/60 hover:text-black transition-colors font-sans"
          >
            <FaEnvelope className="w-4 h-4" />
            mailsourav014@gmail.com
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
