import React from "react";
import './TodosLoading.css'

function TodosLoading() {
    return (
        <div className="containerLoader">
            <div className="loader"></div>
            <label className="labelLoader">Cargando TODOS</label>
        </div>
        
    )
}

export { TodosLoading }