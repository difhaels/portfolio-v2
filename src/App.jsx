import './components/css/output.css';

import Scroll from './components/absolute/Scroll';
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
      <Scroll/>
      <Navbar/>
      <div id="home">
        <Home/>
      </div>
      <div id="skills">
        <Skills/>
      </div>
      <div id="projects">
        <Projects slide1={ProjectSlide1} slide2={ProjectSlide2} slide3={ProjectSlide3}/>
      </div>
      <div id="about">
        <About/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
  </>);
}

export default App;
