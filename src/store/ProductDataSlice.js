import { createSlice } from "@reduxjs/toolkit";

const initialCartDataState = {
    ProductData: [],
    totalQuantity: 0,
}

const ProductDataSlice = createSlice({
    name: 'productdata',
    initialState: initialCartDataState,
    reducers: {
        addProductData(state, action) {

            const newItem = action.payload;
            const existingItem = state.ProductData.find((item)=>item.id ===newItem.id);
            state.totalQuantity++;
            if(!existingItem){
                state.ProductData.push({
                    id : newItem.id,
                    price : newItem.price,
                    quantity : 1,
                    totalPrice : newItem.price,
                    name : newItem.title,
                });
            }else{
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },

        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.ProductData.find((item) => item.id === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
              state.ProductData = state.ProductData.filter((item) => item.id !== id);
            } else {
              existingItem.quantity--;
            }
          },
    }
})


export const ProductDataAction = ProductDataSlice.actions;
export default ProductDataSlice.reducer;