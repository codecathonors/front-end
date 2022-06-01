import React, { useState, useEffect} from 'react';

import { Routes, Route } from 'react-router-dom';

import WorldsList from "./WorldsList";
import Galaxy from "./Galaxy";

function App() {
  const [worlds, setWorlds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/worlds/')
      .then(resp => resp.json())
      .then(data => setWorlds(data))
  }, [])

  // const handleWorldChange = (e) => {
  //   setNewWorld({name_of_world: e.target.value, discovered_year: e.target.value, galaxy_id: e.target.value})
  // }

  // const handleNewWorld = (newWorld) => {
  //   setWorlds([...worlds, newWorld])
  // }

  return (
      <div>
        <Routes>

        <Route 
          path="/"
          element={<Galaxy />}
        />

        <Route 
          path="/worlds/"
          element={<WorldsList wrld={worlds}/>}
        />
        
        </Routes>
      </div>
  )
}

export default App
