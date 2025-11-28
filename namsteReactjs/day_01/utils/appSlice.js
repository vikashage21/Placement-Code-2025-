import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        items: []
    },
    reducers: {
        //  adding the items inside the array making a method
        addItems: (state, action) => {
            state.items.push(action.payload)

        },
        // removing the last element of array 

        removeItems: (state) => {
            state.items.pop()
        },
        // empty the array
        clearItems: (state) => {
            state.items.length = 0

        }
    }
})

export const { addItems, removeItems, clearItems } = appSlice.actions
export default appSlice.reducer