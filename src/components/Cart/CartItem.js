import { useDispatch, useSelector } from 'react-redux';
import classes from './CartItem.module.css';
import { ProductDataAction } from '../../store/ProductDataSlice';

const CartItem = () => {
  const ProductData = useSelector(state => state.data.ProductData);


 
  const dispatch = useDispatch();

  const removeItemHandler = (id) => {
    dispatch(ProductDataAction.removeItemFromCart(id));
  };

  const addItemHandler = (id,title,price) => {
    dispatch(
      ProductDataAction.addProductData({
        id,
        title,
        price,
      })
    );
  };
 
  return (

    <ul>
      {ProductData.map((product) => (
        <li key={product.id} className={classes.item}>
          <header>
            <h3>{product.title}</h3>
            <div className={classes.price}>
              ${(product.totalPrice).toFixed(2)}{' '}
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
              <button onClick={()=>removeItemHandler(product.id)}>-</button>
              <button onClick={()=>addItemHandler(product.id,product.title,product.price)}>+</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartItem;
