import React from 'react'
// import World from './World'
// import AddWorld from './AddWorld.js'

function WorldsList({ wrld }) {
  console.log(wrld)


  // const onDeleteReview = (id) => {
  //   setWorlds(worlds.filter(world => world.id !== id))
  // }

  return (
    <>
        <h1>this is galaxy page</h1>
      {/* {worlds.map((world) => (
        <World key={world.id} world={world} />
      ))}
      <AddWorld handleNewWorld={handleNewWorld} /> */}
    </>
  )
}

export default WorldsList