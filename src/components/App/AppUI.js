import React from "react";
import { TodoCounter } from "../TodoCounter"
import { TodoList } from "../TodoList"
import { TodoItem } from "../TodoItem"
import { TodoSearch } from "../TodoSearch"
import { CreateTodoButton } from "../CreateTodoButton"
import { TodoContext } from '../../providers/TodoContext'
import { TodoForm } from "../TodoForm"
import { Modal } from '../Modal'

function AppUI(){
    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext)

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error && <p>Hubo un error,desesperate</p>}
                {loading && <p>Estamos cargando, espera por favor</p>}
                {(!loading && !searchedTodos.lenght) && <p>Crea tu primer TODO</p>}
                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            
            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />
        </React.Fragment>
    )
}

export { AppUI }