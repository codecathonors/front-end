import React, { useState } from 'react'


function SingleRegion ( { region, filteredDeletedRegion, onUpdatedRegion }) {
    const [name, setName] = useState(region.name);
    const [chief, setChief] = useState(region.chief);
    const [weather_person, setWeatherPerson] = useState(region.weather_person);
    const [prominent_species, setProminentSpecies] = useState(region.prominent_species);
    const [population, setPopulation] = useState(region.population);
    const [world_id, setWorldId] = useState(region.world_id);
    const [industrialized, setIndustrialized] = useState(region.industrialized);
    const [editRegion, setEditRegion] = useState("");


    const handleDelete = () => {
        fetch(`http://localhost:9292/regions/${region.id}`, {
            method: 'DELETE',
        }).then(res => res.json())
            .then(json => console.log(json));
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

            <div class="text-detail">
            {/* <h3>Name of Region:</h3> */}
            <p>Name of Region: {region.name}</p>
            <p>Area Chief: {region.chief}</p>
            <p>Weather Person: {region.weather_person}</p>
            <p>Prominent Species:{region.prominent_species}</p>
            <p>Population: {region.population}</p>
            <p>World ID: {region.world_id}</p>
            {/* <p>Industrialized: {region.industrialized}</p> */}
            <p>Industrialized: { String(region.industrialized)}</p>
            <br></br>
            </div>

            <button onClick={handleDelete}> Delete Region </button>
            <form onSubmit={handleUpdate}>
                <button class="delete-bttn" type='submit'> Update Region </button>
                <br></br>
                <br></br>
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