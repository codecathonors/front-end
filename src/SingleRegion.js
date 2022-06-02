import React, { useState } from 'react'


function SingleRegion({ region, filteredDeletedRegion, onUpdatedRegion }) {
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
        e.preventDefault();
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
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(
                updatedRegion
            )
        }).then(resp => resp.json())
            .then(updatedRegion => {
                setEditRegion(updatedRegion);
                onUpdatedRegion(updatedRegion);
            });

    }
    // function refreshPage() {
    //     window.location.reload(false);
    // }

    return (
        <div>
            <div class="text-detail">
                <br></br>
                {/* <h3>Name of Region:</h3> */}
                <p>Name of Region: {region.name}</p>
                <p>Area Chief: {region.chief}</p>
                <p>Weather Person: {region.weather_person}</p>
                <p>Prominent Species:{region.prominent_species}</p>
                <p>Population: {region.population}</p>
                <p>World ID: {region.world_id}</p>
                {/* <p>Industrialized: {region.industrialized}</p> */}
                <p>Industrialized: {String(region.industrialized)}</p>
                <br></br>

            </div>
            <div class="form-region-update">
                <form onSubmit={handleUpdate}>
                    <label>
                        Name of Region:
                        <input class="region-name-update" type="text" name="nameOfRegion" onChange={e => setName(e.target.value)} value={name} />
                        Chief:
                        <input class="region-chief-update" type="text" name="chiefedit" onChange={e => setChief(e.target.value)} value={chief} />
                        Weather Person:
                        <input class="region-person-update" type="text" name="weatherPerson" onChange={e => setWeatherPerson(e.target.value)} value={weather_person} />
                        <br></br>
                        <br></br>
                        Species:
                        <input class="region-species-update" type="text" name="prominentspecies" onChange={e => setProminentSpecies(e.target.value)} value={prominent_species} />
                        Population:
                        <input class="region-pop-update" type="text" name="population" onChange={e => setPopulation(e.target.value)} value={population} />
                        <br></br>
                        <br></br>
                        World ID:
                        <input class="region-world-update" type="text" name="worldID" onChange={e => setWorldId(e.target.value)} value={world_id} />
                        Industrialized
                        <input class="region-indus-update" type="text" name="industrialized" onChange={e => setIndustrialized(e.target.value)} value={industrialized} />
                    </label>
                    <button class="submit-update" type='submit'> Update Region </button>
                </form>
            </div>
            <br></br>
            <button class="delete-bttn" onClick={handleDelete}> Delete Region </button>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )

}
export default SingleRegion