import React, { useState } from 'react'

function SingleWorld({ world, filteredDeletedWorld, onUpdatedWorld }) {

    const [name, setName] = useState(world.name_of_world);
    const [year, setYear] = useState(world.discovered_year);
    const [editWorld, setEditWorld] = useState("");

    const handleDelete = () => {
        fetch(`http://localhost:9292/worlds/${world.id}`, {
            method: 'DELETE',
        }).then(res => res.json())
            .then(json => console.log(json));
        filteredDeletedWorld(world.id)
    }

    const handleUpdate = (e) => {
        // e.preventDefault();
        const updatedWorld = {
            name_of_world: name,
            discovered_year: year
        }
        fetch(`http://localhost:9292/worlds/${world.id}`, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(
                updatedWorld
            )
        }).then(resp => resp.json())
            .then(updatedWorld => {
                setEditWorld(updatedWorld);
                onUpdatedWorld(updatedWorld);
            });

    }

    return (
        <>

            <div class="text-detail">
                <h3>Name of World: {world.name_of_world}</h3>
                <h5>Year Discovered: {world.discovered_year}</h5>
            </div>
            <div class="form_update">
                <form class="text-detail" onSubmit={handleUpdate}>
                    <label>
                        Name of World:
                        <input class="input-name-update" type="text" name="nameOfWorld" onChange={e => setName(e.target.value)} value={name} />
                        Year Discovered:
                        <input class="input-year-update" type="text" name="yearDiscovered" onChange={e => setYear(e.target.value)} value={year} />
                    </label>
                    <button class="submit-update" type='submit'> Update World </button>
                    <br></br>
                </form>
            </div>
            <br></br>
            <button class="delete-bttn" onClick={handleDelete}> Delete World </button>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default SingleWorld