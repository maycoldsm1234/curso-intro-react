import React from "react"
import './index.css'

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span 
                className={`fa fa-check Icon ${props.completed && 'fa-check--active'}`}
                onClick={props.onComplete}
            >
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="fa fa-trash Icon"
                onClick={props.onDelete}
            >
            </span>
        </li>
    )
}

export { TodoItem }