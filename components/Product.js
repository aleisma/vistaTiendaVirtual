import React from 'react';

const Product = ({title, price, inventory,src, addToCart,removeFromCart,deleteFromCart}) => (
  <div style={{marginBottom:'1.5rem'}} >
    <p>
      <strong>{title}</strong> -        ${price}
    </p>
    <div className="field is-grouped">
      <p className="control">
        <img src={src} width="200px" height="520px"/>
      </p>
      <p className="control">
        <span className="tag is-warning is-medium">{inventory}</span>
       
      </p>
      <p className="control">
        <a className="button is-dark" onClick={addToCart}>
          <span className="icon is-small">
            <i className="fas fa-plus" />
          </span>
        </a>
      </p>
      <p className="control">
        <a className="button is-dark" onClick={removeFromCart}>
          <i className="fas fa-minus" />
        </a>
      </p>
      <p className="control">
        <a className="button is-danger" onClick={deleteFromCart}>
          <i className="fas fa-trash" />
        </a>
      </p>
    </div>
  </div>
);
export default Product;