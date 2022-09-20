import React from "react"
import './index.css'

function TodoCounter({totalTodos, completedTodos, loading}) {
    return (
        <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>Has completa { completedTodos } de { totalTodos } todo</h2>
    )
}

export { TodoCounter };