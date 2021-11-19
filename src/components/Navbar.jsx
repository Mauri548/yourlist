import React from 'react'

function Navbar() {
    return(
        <nav className="row bg-secondary w-100 justify-sb align-i-center">
            <div className="col text-white">
                <h2><span>Your</span><span>List</span></h2>
            </div>
            <div className="col">
                <input className="input is-rounded" placeholder="Buscar"></input>
            </div>
        </nav>
    )
}

export default Navbar