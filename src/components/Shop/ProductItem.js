import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { ProductDataAction } from '../../store/ProductDataSlice';

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();
  const addtoCartHandler = () =>{
    const productData = { title, price, description };
     dispatch(ProductDataAction.addProductData(productData));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addtoCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
