import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [item, setItem] = React.useState(initialValue);
    const [sincronizedItem, setSincronizedItem] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName)
                let parsedItem;

                if(!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = initialValue
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                setItem(parsedItem)
                setLoading(false)
                setSincronizedItem(true)
            } catch (err) {
                setError(err)
            }
        }, 3000);
    }, [ sincronizedItem ])

    const saveItem = (newItem) => {
        try {
            const stringifiedTodos = JSON.stringify(newItem)
            localStorage.setItem(itemName, stringifiedTodos)
            setItem(newItem)
        } catch (err) {
            setError(err)
        }
    }

    const sincronizeItem = () => {
        setLoading(true)
        setSincronizedItem(false)
    }

    return {
        item,
        saveItem,
        loading,
        error,
        sincronizeItem
    }
}

export {useLocalStorage}