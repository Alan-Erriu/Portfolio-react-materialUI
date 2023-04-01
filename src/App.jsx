import Nav from "@/components/Nav";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "./components/Projects";
import ParticlesBackground from "./components/assets/ParticlesBackground";

import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <ParticlesBackground />
      <Nav />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
