import React from "react";
import { withStorageListener } from "./withStorageListener"

function ChangeAlert({ show, toggleShow }) {

    if(show) {
        return (
            <div>
                <p>Hubo Cambios</p>
                <button onClick={() => toggleShow(false)}>
                    Actualizar
                </button>
            </div>
        )
    } else {
        return null
    }
    
}

const ChangeAlertWithStoragelistener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStoragelistener }