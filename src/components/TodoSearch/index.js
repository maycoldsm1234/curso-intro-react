import React from "react"
import { TodoContext } from "../../providers/TodoContext"
import './index.css'

function TodoSearch() {

    const { searchValue, setSearchValue } =React.useContext(TodoContext)
    const onSearchValueChange = (event) => {
        console.log('Buscando: ', event.target.value)
        setSearchValue(event.target.value)
    }

    return (
        <input 
            className="TodoSearch" 
            placeholder="Buscar" 
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch }