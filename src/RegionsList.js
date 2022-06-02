import React from 'react'
import SingleRegion from './SingleRegion'
import AddRegion from "./AddRegion";


function RegionsList( { regions, filteredDeletedRegion, handleNewRegion } ) {


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
      <h2 class="text_worlds">{regions.map((region) => (
        <SingleRegion key={region.id} region={region} filteredDeletedRegion={filteredDeletedRegion} />
      ))}
      </h2>
      <AddRegion handleNewRegion={handleNewRegion} />
    </div>
  )
}

export default RegionsList