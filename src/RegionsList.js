import React from 'react'
import SingleRegion from './SingleRegion'
import AddRegion from "./AddRegion";
import { useNavigate } from "react-router-dom";



function RegionsList({ regions, filteredDeletedRegion, handleNewRegion, onUpdatedRegion }) {

  const navigate = useNavigate()

  function handleClick(e) {
    setTimeout(() => {
      // setEnter(!e.target.value)
    }, 5000)
    navigate("/worlds/")
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
      <br></br>
      <button class="button" onClick={handleClick}>🚀 Take me back 🚀</button>
    </div>
  )
}

export default RegionsList