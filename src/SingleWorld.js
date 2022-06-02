import React, { useState } from 'react'

function SingleWorld ( { world, filteredDeletedWorld, onUpdatedWorld }) {

    const [name, setName] = useState("");
    const [year, setYear] = useState(0);
    const [editWorld, setEditWorld] = useState("");

    const handleDelete = () => {
        fetch(`http://localhost:9292/worlds/${world.id}`, {
            method:'DELETE',
        }).then(res=>res.json())
        .then(json=>console.log(json));
        filteredDeletedWorld(world.id)
    }

    const handleUpdate = (e) => {
        // e.preventDefault();
        const updatedWorld = {
            name_of_world: name,
            discovered_year: year
        }
        fetch(`http://localhost:9292/worlds/${world.id}`, {
            method:'PATCH',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(
               updatedWorld
            )
        }).then(resp => resp.json())
        .then(updatedWorld => {setEditWorld(updatedWorld);
        onUpdatedWorld(updatedWorld);});

    }

    return (
        <>
            <h3>Name of World: {world.name_of_world}</h3>
            <h5>Year Discovered: {world.discovered_year}</h5>
            <button onClick={handleDelete}> Delete World </button>
            <form onSubmit={handleUpdate}>
                <button type='submit'> Update World </button>
                <br></br>
                <label>
                Name of World:
                    <input type="text" name="nameOfWorld" onChange={e => setName(e.target.value)} value={name}/>
                    Year Discovered:
                    <input type="text" name="yearDiscovered" onChange={e => setYear(e.target.value)} value={year}/>
                </label>
            </form>
        </>
    )
}

export default SingleWorld