import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Submenu from './components/Submenu';

function App() {


  return (
    <>
    <div className="hero relative">
    <Navbar/>
    <Sidebar/>
    <Hero/>
    <Submenu/>
    </div>
    
    </>
  );
}

export default App;
