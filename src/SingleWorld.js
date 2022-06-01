import React from 'react'

function SingleWorld ( {world}) {



    return (
        <div>
            <h1>{world.name_of_world}</h1>
            <h3>{world.discovered_year}</h3>
        </div>
    )
}

export default SingleWorld