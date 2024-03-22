import './index.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import MouseScroll from './components/MouseScroll';
import Cursor from './components/Cursor';
// import SplitType from 'split-type';

const App = () => {
  // let text = new SplitType('#text');
  //     let characters = document.querySelectorAll('.char')
  //     for(let i=0; i<characters.length; i++) {
  //       characters[i].classList.add('translate-y-full')
  //     }
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



