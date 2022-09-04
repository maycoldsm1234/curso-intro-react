import React from "react"
import { TodoProvider } from '../../providers/TodoContext'
import { AppUI } from "./AppUI"

function App() {
    return (
        <TodoProvider>
            <AppUI />
        </TodoProvider>
    );
}

export default App;
