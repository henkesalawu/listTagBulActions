import React from "react"
import createPersistedState from "use-persisted-state"
import { exampleItems } from "../items"

const usePersistedState = createPersistedState("items")

const Header = () => {
    const [, setItems] = usePersistedState()

    const resetData = () => {
        setItems(exampleItems)
        alert("Sample data has been reset!")
    }

    return (
        <header className="header">
            <div className="header-content">
                <h1>Product Roadmap</h1>
                <div>
                    <button onClick={resetData}>Reset sample data</button>
                </div>
            </div>
        </header>
    )
}

export { Header as default }
