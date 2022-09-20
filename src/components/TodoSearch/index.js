import React from "react"
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue }) {
    const onSearchValueChange = (event) => {
        console.log('Buscando: ', event.target.value)
        setSearchValue(event.target.value)
    }

    return (
        <div className="containerTodoSearch">
            <input 
                className="TodoSearch" 
                placeholder="Buscar" 
                value={searchValue}
                onChange={onSearchValueChange}
            />
            <i className="fa fa-search"></i>
        </div>
    );
}

export { TodoSearch }