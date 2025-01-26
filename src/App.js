import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment, useEffect } from 'react';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions';

let isInitial = true;
function App() {
  const dispatch = useDispatch();
  const isCartVisible = useSelector((state) => state.cartUI.isCartVisible);
  const cart = useSelector((state) => state.data);
  const notification = useSelector((state) => state.cartUI.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cart));
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
