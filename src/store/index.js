import { configureStore } from "@reduxjs/toolkit";
import UIReducer from "./UISlice";


const store = configureStore({
    reducer : {
        cartUI : UIReducer,
    }
})

export default store;