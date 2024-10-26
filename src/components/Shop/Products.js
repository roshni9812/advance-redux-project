import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCRS = [
  {id: 'p1',
     price: 6,
      title: 'My First Book',
       description: 'The first book I never wrote',

  },{
    id: 'p2',
     price: 5,
      title: 'My First Book',
       description: 'The second book I never wrote',
  },

];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCRS.map((product) => (
          <ProductItem
          key={product.id}
          id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />

        ))}
      </ul>
    </section>
  );
};

export default Products;
