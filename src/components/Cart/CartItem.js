import { useDispatch, useSelector } from 'react-redux';
import classes from './CartItem.module.css';
import { ProductDataAction } from '../../store/ProductDataSlice';

const CartItem = (props) => {
  const ProductData = useSelector(state => state.data.ProductData);
  console.log(ProductData);
  // const quantity = useSelector(state => state.data.quantity);
  const totalamount = useSelector(state => state.data.totalamount);
  const dispatch = useDispatch();

 
  return (

    <ul>
      {ProductData.map((product) => (
        <li key={product.id} className={classes.item}>
          <header>
            <h3>{product.title}</h3>
            <div className={classes.price}>
              ${(product.totalamount).toFixed(2)}{' '}
              <span className={classes.itemprice}>
                (${product.price.toFixed(2)}/item)
              </span>
            </div>
          </header>
          <div className={classes.details}>
            <div className={classes.quantity}>
              x <span>{product.quantity}</span>
            </div>
            <div className={classes.actions}>
              <button onClick={() => dispatch(ProductDataAction.decreaseQuantity(product.id))}>-</button>
              <button onClick={() => dispatch(ProductDataAction.increaseQuantity(product.id))}>+</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartItem;
