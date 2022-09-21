import React from "react";

function withStorageListener(WrappedComponent) {

    return function WrappedComponentWithStorageListener(props) {
        const [storaChange, setStoraChange] = React.useState(false);

        window.addEventListener('storage', (change) => {
            if(change.key === 'TODOS_V1') { setStoraChange(true) }
        })

        const toggleShow = () => {
            setStoraChange(false)
            props.sincronize()
        }

        return (
            <WrappedComponent 
                show={storaChange} 
                toggleShow={toggleShow}
            />
        )
    }
}

export { withStorageListener }