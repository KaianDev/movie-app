import { NavBar } from "./components/nav-bar"
import { Hero } from "./components/hero"
import { MainContent } from "./components/main-content"
import { Banner } from "./components/banner"
import { Footer } from "./components/footer"

const App = () => {
  return (
    <div className="bg-zinc-900 min-h-screen w-full">
      <NavBar />
      <Hero />
      <MainContent />
      <Banner />
      <Footer />
    </div>
  )
}

export default App
