import { useDispatch, useSelector } from 'react-redux';
import classes from './CartItem.module.css';
import {ProductDataAction} from '../../store/ProductDataSlice';

const CartItem = (props) => {
  const ProductData = useSelector(state=>state.data.ProductData);
  const quantity = useSelector(state=>state.data.quantity);
  const totalamount = useSelector(state=>state.data.totalamount);
  const dispatch = useDispatch();

  const decreaseQuantityHandler = () =>{
       dispatch(ProductDataAction.decreaseQuantity(1));
      };
      
      const increaseQuantityHandler = () =>{
        dispatch(ProductDataAction.increaseQuantity(1));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{ProductData.title}</h3>
        <div className={classes.price}>
          ${totalamount.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${ProductData.price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseQuantityHandler}>-</button>
          <button onClick={increaseQuantityHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
