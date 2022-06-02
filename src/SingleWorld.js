import React from 'react'

function SingleWorld({ world, filteredDeletedWorld }) {

    const handleDelete = () => {
        fetch(`http://localhost:9292/worlds/${world.id}`, {
            method: 'DELETE',
        }).then(res => res.json())
            .then(json => console.log(json));
        filteredDeletedWorld(world.id)
    }

    return (
        <>
            <div class="text-detail">
                <h3>Name of World: {world.name_of_world}</h3>
                <h5>Year Discovered: {world.discovered_year}</h5>
            </div>
            <button class="delete-bttn" onClick={handleDelete}> Delete World </button>
        </>
    )
}

export default SingleWorld