import { configureStore } from "@reduxjs/toolkit";
import UIReducer from "./UISlice";
import ProductDataReducer from "./ProductDataSlice";


const store = configureStore({
    reducer : {
        cartUI : UIReducer,
        data : ProductDataReducer,
    }
})

export default store;