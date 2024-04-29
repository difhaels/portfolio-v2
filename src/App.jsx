import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './components/css/output.css';

function App() {
  return (<>
    <Navbar/>
    <Home/>
    <Skills/>
    <Projects/>
  </>);
}

export default App;
