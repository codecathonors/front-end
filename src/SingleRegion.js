import React from 'react'

function SingleRegion({ region, filteredDeletedRegion }) {

    const handleDelete = () => {
        fetch(`http://localhost:9292/regions/${region.id}`, {
            method: 'DELETE',
        }).then(res => res.json())
            .then(json => console.log(json));
        filteredDeletedRegion(region.id)
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
                <p>Industrialized: {String(region.industrialized)}</p>
                <br></br>
            </div>
            <button class="delete-bttn" onClick={handleDelete}> Delete Region </button>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default SingleRegion