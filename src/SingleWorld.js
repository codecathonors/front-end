import React from 'react'

function SingleWorld ( {world}) {



    return (
        <>
            <h3>Name of World: {world.name_of_world}</h3>
            <h5>Year Discovered: {world.discovered_year}</h5>
        </>
    )
}

export default SingleWorld