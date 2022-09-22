import React from "react";
import { withStorageListener } from "./withStorageListener"
import "./notification.css"

function ChangeAlert({ show, toggleShow }) {

    if(show) {
        return (
            <div className="rectangle">
                <div className="notification-text">
                    <i className="fa fa-info-circle"></i>
                    <span>Hubo cambios, actualizar datos.</span>
                    <i className="fa fa-sync" onClick={() => toggleShow(false)}></i>
                </div>
            </div>
        )
    } else {
        return null
    }
    
}

const ChangeAlertWithStoragelistener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStoragelistener }