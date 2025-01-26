import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment, useEffect } from 'react';
import { UIAction } from './store/UISlice';
import Notification from './components/UI/Notification';

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const isCartVisible = useSelector((state) => state.cartUI.isCartVisible);
  const cart = useSelector((state) => state.data);
  const notification = useSelector((state) => state.cartUI.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(UIAction.showNotification({
        status: 'pending',
        title: 'pending...',
        message: 'Sending cart data!',
      }))
      const response = await fetch('https://cart-http-request-default-rtdb.firebaseio.com/cart.json', {
        method: "POST",
        body: JSON.stringify(cart)
      })
      if (!response.ok) {
         throw new Error('Sent cart data failed!');
      }
      dispatch(UIAction.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!',
      }))
    }

    if(isInitial){
      isInitial = false;
      return;
    }

    sendCartData().catch((err) => {
      dispatch(UIAction.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sent cart data failed!',
      }))
    })
  }, [cart, dispatch])
  return (
    <Fragment>
      {notification && <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />}
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
