import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const productData = useSelector(state=>state.data.productData);
  console.log(productData);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {/* {productData ===undefined? (
        <p>No products added to the cart.</p>
      ) : ( */}
      <ul>
        <CartItem/>
      </ul>
      {/* )} */}
    </Card>
  );
};

export default Cart;
