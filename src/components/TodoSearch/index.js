import React from "react"
import { TodoContext } from "../../providers/TodoContext"
import './TodoSearch.css'

function TodoSearch() {

    const { searchValue, setSearchValue } =React.useContext(TodoContext)
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
            <i class="fa fa-search"></i>
        </div>
    );
}

export { TodoSearch }