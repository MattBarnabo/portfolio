import './index.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import MouseScroll from './components/MouseScroll';
import Cursor from './components/Cursor';
import TextSpan from './components/TextSpan';
import Contact from './components/Contact';



const App = () => {
  const textBounce = (sentence) => {
    return sentence.map((letter, index) => {
     return(
       <TextSpan key={index}>
         {letter === " " ? "\u00A0" : letter}
       </TextSpan>
     )

    })}
  return (
    <>
    <div>
    <Cursor />
    <div>
      <Navbar />
      <Home textBounce={textBounce}/>
      <MouseScroll />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
    </div>
    </>
  )
}

export default App;



