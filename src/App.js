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
  const [tvon, settvon] = useState(false)

  const toggleTV = () => {
    settvon((v) => {
      //console.log(v, !v)
      return !v
    })
  }

  // const changeChannel = () => {
  // }

  useEffect(() => {
    if (!tvon) return;
    console.log(`the tv is on`)
    // fetch(`https://www.ceskatelevize.cz/services-old/programme/xml/schedule.php?user=test&date=${day}.${month}.${year-1}&channel=ct${channel}&json=1`)
    //   .then(ret => ret.json())
    //   .then(data => {
    //     console.log(data)
    //     return data
    //   })

    
  }, [tvon, channel, day, month, year])

  useEffect(() => {

    //const changeChannel = () => {}

    const shift = (event) => {
      const { innerWidth, innerHeight } = window;
            const { clientX, clientY } = event;
            const moveX = (clientX / innerWidth) * 100;
            const moveY = (clientY / innerHeight) * 100;
            setoffsetX((moveX - 50) / 10);
            setoffsetY((moveY - 50) / 10);
    }
    
    document.addEventListener('mousemove', shift) 
    document.addEventListener('mousedown', toggleTV)
    return(()=>{
      document.removeEventListener('mousemove', shift)
      document.removeEventListener('mousedown', toggleTV)
    })
  }, [])

  return (<>
    <div className='background' style={{transform:`translate(${-offsetX}%, ${-offsetY}%)`}}>
      {/* <img src='' */}
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

