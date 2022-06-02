import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddWorld({ handleNewWorld }) {
    const [name_of_world, setNameOfWorld] = useState("")
    const [discovered_year, setDiscoveredYear] = useState("")
    const [galaxy_id, setGalaxyId] = useState(1)



    const handleSubmit = (e) => {
        e.preventDefault()
        const newWorld = {
            name_of_world: name_of_world,
            discovered_year: discovered_year,
            galaxy_id: galaxy_id
        }

        fetch("http://localhost:9292/worlds/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newWorld)
        })
            .then(res => res.json())
            .then(newWorld => handleNewWorld(newWorld))

        handleNewWorld(newWorld)

        // once this post works we can use below to clear form
        // setNameOfWorld("");
        // setDiscoveredYear("");
        // setGalaxyId(1);
    }

    const navigate = useNavigate()

    function handleClick(e) {
        setTimeout(() => {
            // setEnter(!e.target.value)
        }, 5000)
        navigate("/regions/")
    }


    return (
        <div class="form">
            <form onSubmit={handleSubmit}>
                <label>
                    Name of World:
                    <input class="input-name-world" type="text" name="nameOfWorld" onChange={e => setNameOfWorld(e.target.value)} value={name_of_world} />
                    Year Discovered:
                    <input class="input-year-world" type="text" name="yearDiscovered" onChange={e => setDiscoveredYear(e.target.value)} value={discovered_year} />
                    Galaxy ID:
                    <input class="input-galaxy-world" type="text" name="GalaxyId" onChange={e => setGalaxyId(e.target.value)} value={galaxy_id} />

                </label>
                <button type="submit">Submit</button>
            </form>
            <br></br>
            <br></br>
            <button onClick={handleClick} type="regions">Move into Regions</button>
        </div>
    )


}

export default AddWorld