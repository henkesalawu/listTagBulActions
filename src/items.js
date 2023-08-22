import { v4 as uuid } from "uuid"
import { IN_PROGRESS_TAG, UP_NEXT_TAG } from "./tags"

const exampleItems = [{
    id: uuid(),
    text: "Add support for avatar images",
    tag: IN_PROGRESS_TAG
}, {
    id: uuid(),
    text: "Allow users to join multiple rooms",
    tag: UP_NEXT_TAG
}, {
    id: uuid(),
    text: "Support message reactions",
    tag: undefined
}, {
    id: uuid(),
    text: "Add social login with GitHub",
    tag: undefined
}]

export { exampleItems }
