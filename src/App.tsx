import Header from "./components/Header";
import Hero from "./sections/Hero";
import Packages from "./sections/Packages";
import Projects from "./sections/Projects";
import Benefits from "./sections/Benefits";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <a href="#inicio" className="skip-link">
        Saltar al contenido principal
      </a>
      <Header />
      <main>
        <Hero />
        <Packages />
        <Projects />
        <Benefits />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
