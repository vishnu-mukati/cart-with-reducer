import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
    isCartVisible: false,
    notification: null,
}

const UISlice = createSlice({
    name: "uislice",
    initialState: initialstate,
    reducers: {
        toggleCart(state) {
            state.isCartVisible = !state.isCartVisible;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            }
        }
    }
})

export const UIAction = UISlice.actions;
export default UISlice.reducer;