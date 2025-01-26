import { UIAction } from "./UISlice"
import { ProductDataAction } from "./ProductDataSlice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://cart-http-request-default-rtdb.firebaseio.com/cart.json');

            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }

            const data = await response.json();
            return data;
        };
        try {
            const cartData = await fetchData();
            dispatch(ProductDataAction.replaceCart({
                ProductData : cartData.ProductData || [],
                totalQuantity : cartData.totalQuantity,
            }));
        } catch (err) {
            dispatch(UIAction.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetching cart data failed!',
            }))
        }
    }
}


export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(UIAction.showNotification({
            status: 'pending',
            title: 'pending...',
            message: 'Sending cart data!',
        }))
        const sendRequest = async () => {
            const response = await fetch('https://cart-http-request-default-rtdb.firebaseio.com/cart.json', {
                method: "PUT",
                body: JSON.stringify(cart)
            })
            if (!response.ok) {
                throw new Error('Sent cart data failed!');
            }
        }
        try {
            await sendRequest();
            dispatch(UIAction.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!',
            }))
        } catch (err) {
            dispatch(UIAction.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sent cart data failed!',
            }))
        }
    }
}