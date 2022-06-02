import React from 'react'
// import { BrowserRouter } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Galaxy() {
    const navigate = useNavigate()

    function handleClick(e) {
        setTimeout(() => {
            // setEnter(!e.target.value)
        }, 5000)
        navigate("/worlds/")
    }

    return (
        <div>
            <h1>🗿 Rock Bottom 🗿</h1>
            <button onClick={handleClick}>🚀 Enter the Galaxy 🚀</button>
            {/* On click we want to reroute that button ^ to the /worlds/ route */}
        </div>
    )

}

export default Galaxy