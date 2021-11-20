import React from 'react'
import Search from './Search'

function Navbar({searchItems}) {
    return(
        <nav className="row bg-secondary w-100 justify-sb align-i-center">
            <div className="col text-white">
                <h2><span>Your</span><span>List</span></h2>
            </div>
            <div className="col w-100">
                <Search searchItems={searchItems} />
            </div>
        </nav>
    )
}

export default Navbar