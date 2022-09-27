import React from "react";
import { useStorageListener } from "./useStorageListener"
import "./notification.css"

function ChangeAlert({ sincronize }) {

    const {show, toggleShow} = useStorageListener(sincronize)

    if(show) {
        return (
            <div className="backdrop">
                <div className="rectangle">
                    <div className="notification-text">
                        <i className="fa fa-info-circle"></i>
                        <span>Hubo cambios, actualizar datos.</span>
                        <i className="fa fa-sync" onClick={() => toggleShow(false)}></i>
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }
    
}

export { ChangeAlert }