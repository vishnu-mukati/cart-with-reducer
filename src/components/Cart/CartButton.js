import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const ProductData = useSelector(state=>state.data.ProductData);

  const totalQuantity = ProductData.reduce((sum, item) => {
    return sum + item.quantity; // Add the quantity of each item to the sum
  }, 0); // Initial value of sum is 0

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
