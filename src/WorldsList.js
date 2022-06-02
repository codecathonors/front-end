import React from 'react'
import SingleWorld from './SingleWorld'
import AddWorld from "./AddWorld";
// import World from './World'
// import AddWorld from './AddWorld.js'

function WorldsList({ worlds, handleNewWorld, filteredDeletedWorld, onUpdatedWorld }) {


  // const onDeleteReview = (id) => {
  //   setWorlds(worlds.filter(world => world.id !== id))
  // }

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <div id="container">
        <h1>List of Worlds</h1>
        <h1>List of Worlds</h1>
        <h1>List of Worlds</h1>
      </div>
      <br></br>
      <br></br>
      <h2 class="text_worlds">{worlds.map((world) => (
        <SingleWorld key={world.id} world={world} filteredDeletedWorld={filteredDeletedWorld} onUpdatedWorld={onUpdatedWorld} />
      ))}
      </h2>
      {/* <button>Add New World</button> */}
      <AddWorld handleNewWorld={handleNewWorld} />
    </div>
  )
}

export default WorldsList