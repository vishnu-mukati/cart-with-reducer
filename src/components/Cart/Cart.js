import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
  const productData = useSelector(state=>state.data.ProductData);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {productData.length===0 ? (
        <p>No products added to the cart.</p>
      ) : (
      <ul>
        <CartItem/>
      </ul>
      )}  
    </Card>
  );
};

export default Cart;
