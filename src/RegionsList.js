import React from 'react'
import SingleRegion from './SingleRegion'
import AddRegion from "./AddRegion";
import { useNavigate } from "react-router-dom";



function RegionsList({ regions, filteredDeletedRegion, handleNewRegion, onUpdatedRegion }) {

  const navigate = useNavigate()

  function handleClickGalaxy(e) {
    setTimeout(() => {
      // setEnter(!e.target.value)
    }, 5000)
    navigate("/")
  }

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <div id="container">
        <h1>List of Regions</h1>
        <h1>List of Regions</h1>
        <h1>List of Regions</h1>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <AddRegion handleNewRegion={handleNewRegion} />
      <br></br>
      <br></br>
      <h2 class="text_worlds">{regions.map((region) => (
        <SingleRegion key={region.id} region={region} filteredDeletedRegion={filteredDeletedRegion} onUpdatedRegion={onUpdatedRegion} />
      ))}
      </h2>
      <br></br>

      <button class="redirect-galaxy" onClick={handleClickGalaxy} type="galaxy">☄️ 🔥 Restart this Galaxy 🔥 ☄️</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  )
}

export default RegionsList