import React from "react";

function useStorageListener(sincronize) {
    const [storaChange, setStoraChange] = React.useState(false);

    window.addEventListener('storage', (change) => {
        if(change.key === 'TODOS_V1') { setStoraChange(true) }
    })

    const toggleShow = () => {
        setStoraChange(false)
        sincronize()
    }

    return {
        show: storaChange,
        toggleShow
    }
}

export { useStorageListener }