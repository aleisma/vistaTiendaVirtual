import React from 'react';
import Product from '../components/Product';

const ProductList= ({ products, addToCart, removeFromCart, deleteFromCart,available }) => (
    <div className="has-background-grey-ter" >
    <div className="columns is-centered">
      <div className="column is-narrow">
    {products.map(prod => 
    <Product 
    key={prod.id}
    title={prod.title} 
    price={prod.price}  
    inventory={available[prod.id]} 
    src={prod.src}
    addToCart={() => addToCart(prod.id)}
    removeFromCart={() => removeFromCart(prod.id)}
    deleteFromCart={() => deleteFromCart(prod.id) }
    
    />
    )}
      </div>

    </div>
    
  </div>

);
    
export default ProductList;