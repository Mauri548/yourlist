import React from "react";

const Search = ({searchItems}) => {

    const onChange = (e) => {
        const query = e.target.value.toString().toLowerCase()
        searchItems(query)
    }

    return <input className="input is-rounded w-100" placeholder="Buscar" onChange={onChange} /> 
}

export default Search