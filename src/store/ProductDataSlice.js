import { createSlice } from "@reduxjs/toolkit";

const initialCartDataState = {
    ProductData: [],
    totalamount: 0,
}

const ProductDataSlice = createSlice({
    name: 'productdata',
    initialState: initialCartDataState,
    reducers: {
        addProductData(state, action) {
            const existingProductIndex = state.ProductData.findIndex(
                (product) => {
                    console.log("p",product);
                    console.log( "payload",action.payload );
                    return product.id === action.payload.id
                } 
            );
            console.log(existingProductIndex);
            if (existingProductIndex >=0) {
                console.log(existingProductIndex)
                state.ProductData[existingProductIndex].quantity += 1;
                state.totalamount += state.ProductData[existingProductIndex].price;
            } else {
                console.log(action.payload);
                state.ProductData.push({ ...action.payload, quantity: 1 });
                state.totalamount += action.payload.price;
            }
        },
        increaseQuantity(state, action) {
            const product = state.ProductData.findIndex(
                (product) => product.id === action.payload
            );
           console.log(product);
            if (product>=0) {
                state.ProductData[product].quantity += 1;
                state.totalamount += state.ProductData[product].price;
            }
        },
        decreaseQuantity(state, action) {
            const product = state.ProductData.findIndex(
                (product) => product.id === action.payload
            );

            if (product >= 0 ) {
                state.ProductData[product].quantity -= 1;
                state.totalamount -= state.ProductData[product].price;

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