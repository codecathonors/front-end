import React, { useState } from "react";

function AddRegion({handleNewRegion }) {
    const [name, setName] = useState("")
    const [chief, setChief] = useState("")
    const [weather_person, setWeatherPerson] = useState("")
    const [prominent_species, setProminentSpecies] = useState("")
    const [population, setPopulation] = useState("")
    const [world_id, setWorldId] = useState("")
    const [industrialized, setIndustrialized] = useState("")

    

    const handleSubmit = (e) => {
        e.preventDefault()
        const newRegion = {
            name: name,
            chief: chief,
            weather_person: weather_person,
            prominent_species: prominent_species,
            population: population,
            world_id: world_id,
            industrialized: industrialized
        }

        fetch("http://localhost:9292/regions/", {
            method: "POST",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newRegion)
        })
            .then(res => res.json())
            .then(newRegion => handleNewRegion(newRegion))

        handleNewRegion(newRegion)

        // once this post works we can use below to clear form
        // setNameOfWorld("");
        // setDiscoveredYear("");
        // setGalaxyId(1);
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name of Region:
                    <input type="text" name="nameOfRegion" onChange={e => setName(e.target.value)} value={name}/>
                    Chief:
                    <input type="text" name="chief" onChange={e => setChief(e.target.value)} value={chief}/>
                    Weather Person:
                    <input type="text" name="weatherperson" onChange={e => setWeatherPerson(e.target.value)} value={weather_person}/>
                    Prominent Species:
                    <input type="text" name="species" onChange={e => setProminentSpecies(e.target.value)} value={prominent_species}/>
                    Population:
                    <input type="text" name="population" onChange={e => setPopulation(e.target.value)} value={population}/>
                    World Id:
                    <input type="text" name="worldid" onChange={e => setWorldId(e.target.value)} value={world_id}/>
                    Industrialized
                    <input type="text" name="industrialized" onChange={e => setIndustrialized(e.target.value)} value={industrialized}/>

                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )


}

export default AddRegion