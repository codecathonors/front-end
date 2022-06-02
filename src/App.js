import React, { useState, useEffect} from 'react';

import { Routes, Route } from 'react-router-dom';

import WorldsList from "./WorldsList";
import Galaxy from "./Galaxy";
import RegionsList from "./RegionsList";


function App() {
  const [worlds, setWorlds] = useState([]);
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/worlds/')
      .then(resp => resp.json())
      .then(worlds => setWorlds(worlds))
  }, [])

  useEffect(() => {
    fetch('http://localhost:9292/regions/')
      .then(resp => resp.json())
      .then(regions => setRegions(regions))
  }, [])


  const handleNewWorld = (newWorld) => {
    setWorlds([...worlds, newWorld])
  }

  const handleNewRegion = (newRegion) => {
    setRegions([...regions, newRegion])
  }
  const filteredDeletedWorld = (id) => {
    setWorlds(worlds.filter(world => world.id !== id))
  }

  const onUpdatedWorld = (updatedWorld) => {
    const newUpdatedWorld = (world) => {
      if (world.id === updatedWorld.id){
        return updatedWorld
      } else {
        return world
      }
    }
    setWorlds(newUpdatedWorld)
  }

  const filteredDeletedRegion = (id) => {
    setRegions(regions.filter(region => region.id !== id))
  }

  return (
      <div>
        <Routes>

        <Route 
          path="/"
          element={<Galaxy />}
        />

        <Route 
          path="/worlds/"
          element={<WorldsList worlds={worlds} handleNewWorld={handleNewWorld} filteredDeletedWorld={filteredDeletedWorld} onUpdatedWorld={onUpdatedWorld}/>}
        />

        <Route
          path="/regions/"
          element={<RegionsList regions={regions} filteredDeletedRegion={filteredDeletedRegion} handleNewRegion={handleNewRegion} />}
        />

      </Routes>
    </div>

  )
}

export default App
