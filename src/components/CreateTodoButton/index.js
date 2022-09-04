import React from "react"
import './index.css'

function CreateTodoButton(){

    const onClickButton = ()  => {
        alert('Se Debe Hablir Modal')
    }

    return(
        <button 
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButton };