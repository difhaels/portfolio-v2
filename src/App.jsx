import './components/css/output.css';

import Navbar from './components/absolute/Navbar';

import Home from './components/main/Home';
import Skills from './components/main/Skills';
import Projects from './components/main/Projects';
import About from './components/main/About';
import Contact from './components/main/Contact';

import ProjectSlide1 from './components/projects/Slide1';
import ProjectSlide2 from './components/projects/Slide2';
import ProjectSlide3 from './components/projects/Slide3';

function App() {
  return (<>
    <Navbar/>
    <Home/>
    <Skills/>
    <Projects slide1={ProjectSlide1} slide2={ProjectSlide2} slide3={ProjectSlide3}/>
    <About/>
    <Contact/>
  </>);
}

export default App;
