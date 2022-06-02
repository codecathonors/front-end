import React, { useState } from 'react'

function SingleRegion ( { region, filteredDeletedRegion, onUpdatedRegion }) {
    const [name, setName] = useState("");
    const [chief, setChief] = useState("");
    const [weather_person, setWeatherPerson] = useState("");
    const [prominent_species, setProminentSpecies] = useState("");
    const [population, setPopulation] = useState("");
    const [world_id, setWorldId] = useState("");
    const [industrialized, setIndustrialized] = useState("");
    const [editRegion, setEditRegion] = useState("");

    const handleDelete = () => {
        fetch(`http://localhost:9292/regions/${region.id}`, {
            method:'DELETE',
        }).then(res=>res.json())
        .then(json=>console.log(json));
        filteredDeletedRegion(region.id)
    }

    const handleUpdate = (e) => {
        // e.preventDefault();
        const updatedRegion = {
            name: name,
            chief: chief,
            weather_person: weather_person,
            prominent_species: prominent_species,
            population: population,
            world_id: world_id,
            industrialized: industrialized
        }
        fetch(`http://localhost:9292/regions/${region.id}`, {
            method:'PATCH',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(
               updatedRegion
            )
        }).then(resp => resp.json())
        .then(updatedRegion => {setEditRegion(updatedRegion);
        onUpdatedRegion(updatedRegion);});

    }

    return (
        <>
            {/* <h3>Name of Region:</h3> */}
            <p>Name of Region: {region.name}</p>
            <p>Area Chief: {region.chief}</p>
            <p>Weather Person: {region.weather_person}</p>
            <p>Prominent Species:{region.prominent_species}</p>
            <p>Population: {region.population}</p>
            <p>World ID: {region.world_id}</p>
            {/* <p>Industrialized: {region.industrialized}</p> */}
            <p>Industrialized: { String(region.industrialized)}</p>


            <button onClick={handleDelete}> Delete Region </button>
            <form onSubmit={handleUpdate}>
                <button type='submit'> Update Region </button>
                <br></br>
                <label>
                    Name of Region:
                    <input type="text" name="nameOfRegion" onChange={e => setName(e.target.value)} value={name}/>
                    Chief:
                    <input type="text" name="chiefedit" onChange={e => setChief(e.target.value)} value={chief}/>
                    Weather Person:
                    <input type="text" name="weatherPerson" onChange={e => setWeatherPerson(e.target.value)} value={weather_person}/>
                    Prominent Species:
                    <input type="text" name="prominentspecies" onChange={e => setProminentSpecies(e.target.value)} value={prominent_species}/>
                    Population:
                    <input type="text" name="population" onChange={e => setPopulation(e.target.value)} value={population}/>
                    World ID:
                    <input type="text" name="worldID" onChange={e => setWorldId(e.target.value)} value={world_id}/>
                    Industrialized
                    <input type="text" name="industrialized" onChange={e => setIndustrialized(e.target.value)} value={industrialized}/>
                </label>
            </form>
        </>
    )
}

export default SingleRegion