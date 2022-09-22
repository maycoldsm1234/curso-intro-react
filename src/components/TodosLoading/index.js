import React from "react";
import './TodosLoading.css'

function TodosLoading() {
    return (

        <li className="TodoItem containerLoading">
            <span class="fa fa-sync Icon" aria-hidden="true"></span>
            <p className={`TodoItem-p }`}>
                Cargando TODOS
            </p>
        </li>        
    )
}

export { TodosLoading }