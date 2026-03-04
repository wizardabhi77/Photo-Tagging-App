import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import groupPic from './assets/group.jpeg'
import './App.css'
import { Level } from './components/Level'

function App() {
  const [photos, setPhotos] = useState([])

  return (
    <>
      
      <h1>PHOTO_TAGGING CHALLENGE</h1>

      <div className="card">
        <Level source={groupPic}/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
