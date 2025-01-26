import ProductItem from './ProductItem';
import classes from './Products.module.css';

const productitems = [
  {
    title:'Test',
    price:6,
    description:'This is a first product - amazing!',
    id : 1,
  },
  {
    title:'Test1',
    price:60,
    description:'This is a first product - amazing!',
    id : 2,
  },
  {
    title:'Test2',
    price:3,
    description:'This is a first product - amazing!',
    id : 3,
  },
  {
    title:'Test3',
    price:20,
    description:'This is a first product - amazing!',
    id : 4,
  }
]

const Products = (props) => {

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productitems.map((item)=>{
          return (
            <ProductItem key = {item.id} title = {item.title} price = {item.price} description = {item.description} id = {item.id} />
          )
        })}
      </ul>
    </section>
  );
};

export default Products;
