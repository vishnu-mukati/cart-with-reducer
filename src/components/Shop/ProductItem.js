import { useDispatch } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { ProductDataAction } from '../../store/ProductDataSlice';

const ProductItem = (props) => {
  const { title, price, description ,id} = props;
  const dispatch = useDispatch();
  
  const addtoCartHandler = () =>{
    const productData = { title, price, description ,id};
     dispatch(ProductDataAction.addProductData(productData));
  }
console.log(id);
  return (
    <li key={id} className={classes.item} >
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
