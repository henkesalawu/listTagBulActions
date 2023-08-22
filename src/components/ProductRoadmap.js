import React, { useState } from "react"
import createPersistedState from "use-persisted-state"
import Header from "./Header"
import Item from "./Item"
import { exampleItems } from "../items"
import { IN_PROGRESS_TAG, UP_NEXT_TAG} from "../tags"

const usePersistedState = createPersistedState("items")

const ProductRoadmap = () => {
    const [items, setItems] = usePersistedState(exampleItems)
    const [checkedItems, setCheckedItems] = useState([])
    const noneChecked = checkedItems.length === 0
    const allChecked = checkedItems.length === items.length && items.length > 0

    const toggleItem = (id, checked) => {
        const alreadyChecked = checkedItems.includes(id)

        if (!alreadyChecked && checked) {
            // Add item
            setCheckedItems([...checkedItems, id])
        } else if (alreadyChecked && !checked) {
            // Remove item
            setCheckedItems(checkedItems.filter((itemId) => itemId !== id))
        }
    }

    const deleteCheckedItems = () => {
        const newItems = items.filter(({id}) => {
            return !checkedItems.includes(id)
        })
        setItems(newItems)
        setCheckedItems([])
    }

    const toggleItems = () => {
        if (allChecked) {
            setCheckedItems([])
        } else {
            setCheckedItems(items.map((item) => item.id))
        }
    }

    const tagItems = (tag) => {
        return () => {
            const newItems = items.map((item) => {
                const isChecked = checkedItems.includes(item.id)

                if (isChecked) {
                    item.tag = tag
                }

                return item
            })
            setItems(newItems)
            setCheckedItems([])
        }
    }

    return (
        <>
            <Header/>

            <div className="actions">
                <input type="checkbox"
                       checked={allChecked}
                       onChange={toggleItems}/>
                <button disabled={noneChecked}
                        onClick={deleteCheckedItems}>
                    Delete
                </button>
                <button disabled={noneChecked}
                        onClick={tagItems(IN_PROGRESS_TAG)}>
                    Tag: In progress
                </button>
                <button disabled={noneChecked}
                        onClick={tagItems(UP_NEXT_TAG)}>
                    Tag: Up next
                </button>
                <button disabled={noneChecked}
                        onClick={tagItems()}>
                    Clear tag
                </button>
            </div>

            {items.map((item) => (
                <Item key={item.id} {...item}
                      toggleItem={toggleItem}
                      checked={checkedItems.includes(item.id)}/>
            ))}
        </>
    )
}

export { ProductRoadmap as default }
