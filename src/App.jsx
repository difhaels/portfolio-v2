import './components/css/output.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Slide1 from './components/projects/Slide1';
import Slide2 from './components/projects/Slide2';
import Slide3 from './components/projects/Slide3';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (<>
    <Navbar/>
    <Home/>
    <Skills/>
    <Projects slide1={Slide1} slide2={Slide2} slide3={Slide3}/>
    <About/>
    <Contact/>
  </>);
}

export default App;
