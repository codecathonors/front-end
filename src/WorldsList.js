import React from 'react'
import SingleWorld from './SingleWorld'
import AddWorld from "./AddWorld";
// import World from './World'
// import AddWorld from './AddWorld.js'

function WorldsList({ worlds, handleNewWorld, filteredDeletedWorld }) {


  // const onDeleteReview = (id) => {
  //   setWorlds(worlds.filter(world => world.id !== id))
  // }

  return (
    <div>
        <h1>List of Worlds</h1>
        <h2>{worlds.map((world) => (
         <SingleWorld key={world.id} world={world} filteredDeletedWorld={filteredDeletedWorld}/>
        ))}
        </h2>
        {/* <button>Add New World</button> */}
        <AddWorld handleNewWorld={handleNewWorld}/>
    </div>
  )
}

export default WorldsList