import './index.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import MouseScroll from './components/MouseScroll';
import Cursor from './components/Cursor';



const App = () => {
  return (
    <>
    <div>
    <Cursor />
    <div>
      <Navbar />
      <Home />
      <MouseScroll />
      <About />
      <Skills />
      <Projects />
    </div>
    </div>
    </>
  )
}

export default App;



