import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Project from './components/Project';
import Contact from './components/Contact';

export default function App() {

  return (
    <>
      <header>
        <Nav />
      </header>

      <main>
        <Hero />
        <About />
        <Project />
        <Education />
        <Contact />
      </main>

      <footer>
        
      </footer>
    </>
  )
}