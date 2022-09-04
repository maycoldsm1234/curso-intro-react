import React from "react"
import { TodoContext } from "../../providers/TodoContext";
import './index.css'

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext)
    return (
        <h2 className="TodoCounter">Has completa { completedTodos } de { totalTodos } todo</h2>
    )
}

export { TodoCounter };