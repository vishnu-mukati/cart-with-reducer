import {createSlice} from "@reduxjs/toolkit";

const initialstate = {
    isCartVisible : false,
}

const UISlice = createSlice({
    name : "uislice",
    initialState : initialstate,
    reducers : {
        toggleCart(state){
            state.isCartVisible = !state.isCartVisible;
        }
    }
})

export const UIAction = UISlice.actions;
export default UISlice.reducer;