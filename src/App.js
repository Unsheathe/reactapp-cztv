//import logo from './logo.svg';
import React, {useState, useEffect } from 'react';
import './App.css';

function App() {
  const [offsetX, setoffsetX] = useState(0)
  const [offsetY, setoffsetY] = useState(0)

  useEffect(() => {
    const shift = (event) => {
      const { innerWidth, innerHeight } = window;
            const { clientX, clientY } = event;
            const moveX = (clientX / innerWidth) * 100;
            const moveY = (clientY / innerHeight) * 100;
            setoffsetX((moveX - 50) / 10);
            setoffsetY((moveY - 50) / 10);
    }
    
    document.addEventListener('mousemove', shift) 

    //put in returns statement?
    return(()=>{
      document.removeEventListener('mousemove', shift)
    })
    
  }, [])

  return (
    <div className='background' style={{transform:`translate(${offsetX}%, ${offsetY}%)`}}></div>
  )
  
}

export default App;

