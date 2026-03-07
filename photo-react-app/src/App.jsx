import { useState, useEffect } from 'react'

import groupPic from './assets/group.jpeg'
import './App.css'

import { Level } from './components/Level'
import ScoreBoard  from './components/ScoreBoard'

function App() {
  const [photos, setPhotos] = useState([])
  const [seconds, setSeconds] = useState(0);
  const [timer, setTimer] = useState(true);
  const [name, setName] = useState("");
  

  useEffect(() => {
    
    if(!timer) return;

    const interval = setInterval(() => {
      setSeconds(prev => prev+1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  async function handleSubmit(e){
    e.preventDefault();

    await fetch(`https://photo-tagging-app-a5kl.onrender.com/score`,{
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
          name : name,
          seconds: seconds
      })
    })

    
    setTimer(true);
  }

  if(timer){
    return (
    <>
      <h1>PHOTO_TAGGING CHALLENGE</h1>
      <h2>TIME: {seconds} secs</h2>
      <ScoreBoard />
      <div className="card">
        <Level source={groupPic} stopTimer={()=> setTimer(false)}/>
      </div>
    </>
    )
  }
  else {
    return (
      
      <form onSubmit={handleSubmit}>
          <label htmlFor="name">ENTER NAME:</label>
          <input type="text" name='name' id='name' value={name} onChange={(e) => setName(e.target.value)}/>
          <button type='submit'>SUBMIT</button>
      </form>
    
  )
  }
      
      
}

export default App
