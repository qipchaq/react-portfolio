import { useLang } from './i18n'
import { useActiveSection } from './hooks'
import { SECTION_IDS } from './sections'
import Header from './components/Header'
import MobileBar from './components/MobileBar'
import Footer from './components/Footer'
import About from './components/sections/About'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'

const App = () => {
  const { c } = useLang()
  const active = useActiveSection(SECTION_IDS)

  return (
    <>
      <div className="backdrop" aria-hidden="true" />
      <div className="stars" aria-hidden="true" />
      <a
        href="#main"
        className="sr-only rounded bg-accent px-4 py-2 font-medium text-on-accent focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
      >
        {c.ui.skipToContent}
      </a>
      <MobileBar />
      <div className="mx-auto min-h-screen max-w-7xl px-6 pb-12 pt-20 md:px-12 lg:px-24 lg:pb-0 lg:pt-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header active={active} />
          <main id="main" className="pt-12 lg:w-[52%] lg:py-24">
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </>
  )
}

export default App
