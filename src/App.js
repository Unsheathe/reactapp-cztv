import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [offsetX, setoffsetX] = useState(0)
  const [offsetY, setoffsetY] = useState(0)

  const now = new Date() 
  const year = now.getFullYear()
  const month = now.getMonth()
  const day = now.getDay()

  const [channel, setchannel] = useState(1) //valid channels: [1, 2, 24, 4, 5, 6, 7]
  const [tvon, settvon] = useState(0)

  useEffect(() => {

    const changeChannel = () => {
      fetch(`https://www.ceskatelevize.cz/services-old/programme/xml/schedule.php?user=test&date=${day}.${month}.${year-1}&channel=ct${channel}&json=1`)
        .then(ret => ret.json())
        .then(data => {
          console.log(data)
          return data
        })
    }
    
    const toggleTV = () => {
      if (tvon) {settvon = 0}
      else {
        settvon = 1
        changeChannel()
      }
    }

    const shift = (event) => {
      const { innerWidth, innerHeight } = window;
            const { clientX, clientY } = event;
            const moveX = (clientX / innerWidth) * 100;
            const moveY = (clientY / innerHeight) * 100;
            setoffsetX((moveX - 50) / 10);
            setoffsetY((moveY - 50) / 10);
    }
    
    document.addEventListener('mousemove', shift) 
    document.addEventListener('mousedown', changeChannel)
    return(()=>{
      document.removeEventListener('mousemove', shift)
      document.removeEventListener('mousedown', changeChannel)
    })
  }, [])

  return (<>
    <div className='background' style={{transform:`translate(${-offsetX}%, ${-offsetY}%)`}}>
      
    </div>
    <div className='remote'>
      <img src={require('./media/control.png')} alt='remote'/>
    </div>
    <div className='remoteButtons'>
      <button type='button'>test button</button>
    </div>
  </>)
}

export default App;

