import React, { useState } from "react";

function AddWorld({ handleNewWorld }) {
    const [nameOfWorld, setNameOfWorld] = useState("")
    const [discoveredYear, setDiscoveredYear] = useState("")
    const [galaxyId, setGalaxyId] = useState(1)

    

    const handleSubmit = (e) => {
        e.preventDefault()
        const newWorld = {
            nameOfWorld: nameOfWorld,
            discoveredYear: discoveredYear,
            galaxyId: galaxyId
        }

        fetch("http://localhost:9292/worlds/", {
            method: "POST",
            headers: {
                'Content-Type':'application/json'
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



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name of World:
                    <input type="text" name="nameOfWorld" onChange={e => setNameOfWorld(e.target.value)} value={nameOfWorld}/>
                    Year Discovered:
                    <input type="text" name="yearDiscovered" onChange={e => setDiscoveredYear(e.target.value)} value={discoveredYear}/>
                    Galaxy ID:
                    <input type="text" name="GalaxyId" onChange={e => setGalaxyId(e.target.value)} value={galaxyId}/>

                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )


}

export default AddWorld