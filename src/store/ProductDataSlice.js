import { createSlice } from "@reduxjs/toolkit";

const initialCartDataState = {
    ProductData: [],
    // totalamount: 0,
}

const ProductDataSlice = createSlice({
    name: 'productdata',
    initialState: initialCartDataState,
    reducers: {
        addProductData(state, action) {
            const existingProductIndex = state.ProductData.findIndex(
                (product) => {
                    return product.id === action.payload.id
                } 
            );
            if (existingProductIndex >=0) {
                state.ProductData[existingProductIndex].quantity += 1;
                // state.totalamount += state.ProductData[existingProductIndex].price;
                state.ProductData[existingProductIndex].totalamount += state.ProductData[existingProductIndex].price;
            } else {
                state.ProductData.push({ ...action.payload, quantity: 1,totalamount : action.payload.price });
                // state.ProductData.totalamount += action.payload.price;
            }
            state.totalamount = state.ProductData.reduce((sum, product) => sum + product.totalamount, 0);
        },
        increaseQuantity(state, action) {
            const product = state.ProductData.findIndex(
                (product) => product.id === action.payload
            );
           console.log(product);
            if (product>=0) {
                state.ProductData[product].quantity += 1;
                state.ProductData[product].totalamount += state.ProductData[product].price;
            }
        },
        decreaseQuantity(state, action) {
            const product = state.ProductData.findIndex(
                (product) => product.id === action.payload
            );

            if (product >= 0 ) {
                state.ProductData[product].quantity -= 1;
                state.ProductData[product].totalamount -= state.ProductData[product].price;

                // Remove the product if quantity becomes 0
                if (state.ProductData[product].quantity === 0) {
                    state.ProductData = state.ProductData.filter(
                        (item) => item.id !== state.ProductData[product].id
                    );
                }
            }
        },
    }
})

console.log(initialCartDataState);

export const ProductDataAction = ProductDataSlice.actions;
export default ProductDataSlice.reducer;