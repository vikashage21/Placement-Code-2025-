import { ADD_TODO, REMOVE_TODO } from "./action.type"

export default (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.playload]
        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.playload)
        default:
            return state;
    }
}   