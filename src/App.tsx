import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Project from './components/Project';
// import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {

  return (
    <>
      <Nav />

      <main>
        <Hero />
        <About />
        <Project />
        <Education />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}