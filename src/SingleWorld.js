import React from 'react'

function SingleWorld ( {world}) {



    return (
        <div>
            <h2>Name of World: {world.name_of_world}</h2>
            <h5>Year Discovered: {world.discovered_year}</h5>
        </div>
    )
}

export default SingleWorld