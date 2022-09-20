import React from "react"
import './index.css'

function TodoCounter({totalTodos, completedTodos}) {
    return (
        <h2 className="TodoCounter">Has completa { completedTodos } de { totalTodos } todo</h2>
    )
}

export { TodoCounter };