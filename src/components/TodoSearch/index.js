import React from "react"
import './TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue, loading }) {
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
                disabled={loading}
            />
            <i className="fa fa-search"></i>
        </div>
    );
}

export { TodoSearch }