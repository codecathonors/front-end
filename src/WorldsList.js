import React from 'react'
import SingleWorld from './SingleWorld'
// import World from './World'
// import AddWorld from './AddWorld.js'

function WorldsList({ worlds }) {


  // const onDeleteReview = (id) => {
  //   setWorlds(worlds.filter(world => world.id !== id))
  // }

  return (
    <>
        <h1>List of Worlds</h1>
        <p>{worlds.map((world) => (
         <SingleWorld key={world.id} world={world} />
        ))}
        </p>
    </>
  )
}

export default WorldsList