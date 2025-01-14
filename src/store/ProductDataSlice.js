import { createSlice } from "@reduxjs/toolkit";

const initialCartDataState = {
    ProductData : [],
    quantity : 0,
    totalamount : 0,
}

const ProductDataSlice = createSlice({
    name : 'productdata',
    initialState : initialCartDataState,
    reducers : {
        addProductData (state,action){
            state.ProductData = action.payload;
        },
        increaseQuantity(state,action){
           state.quantity = state.quantity+action.payload;
           state.totalamount =  state.quantity*6;
        },
        decreaseQuantity(state,action){
            if(state.quantity>0){
                state.quantity = state.quantity-action.payload;
                state.totalamount = state.quantity*6;
            }else{
                state.quantity = 0;
                state.totalamount = 0;
            }
        },
    }
})

export const ProductDataAction = ProductDataSlice.actions;
export default ProductDataSlice.reducer;