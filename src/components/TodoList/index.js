import React from "react"
import './index.css'

function TodoList(props) {
    const renderFuntion = props.children || props.render
    return (
        <section className="TodoList-conatiner">
            { props.error && props.onError() }
            { props.loading && props.onLoading() }
            { (!props.loading && !props.totalTodos) && props.onEmptyTodos }
            { props.searchedTodos.map(todo => renderFuntion(todo)) }
            { (!!props.totalTodos && !props.searchedTodos?.length) && props.onEmptySearch(props.searchValue) }
        </section>
    )
}

export { TodoList }