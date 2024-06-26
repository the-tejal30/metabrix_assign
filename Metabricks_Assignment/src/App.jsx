import { useEffect } from 'react'
import './App.css'
import Structure from './structure/Structure';

function App() {

  useEffect(() => {
    const handleResize = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    handleResize();

    console.log("navigator.onLine", navigator.onLine)

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="app">
      <Structure />
    </div>
  )
}

export default App
