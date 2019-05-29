import React from 'react';

const NavBar = ({ total }) => (
<nav className="navbar is-primary"  >
<div className="container">
<div className="navbar-brand">
<a className="navbar-item" >
<h1 className="title">My Store</h1>
</a>
<div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
<span></span>
<span></span>
<span></span>
</div>
</div>

<div className="navbar-menu" id="navbarExampleTransparentExample">
<div className="navbar-start" >
<a className="navbar-item" href="?">
</a>
</div>
</div>

<div className="navbar-end"  style={{position: 'fixed', top: '1', 
width:'80%'}}>
<div className="navbar-item">
  <div className="field is-grouped">
    <p className="control" >

   
      <a className="button is-small bd-tw-button button is-dark"  >
        <span className="icon">
          <i className="fas fa-shopping-cart" ></i>
        </span>
        <span>
        <strong>Total:  </strong>$ {total} 
        </span>
      </a>  
    </p>
  </div>
</div>
</div>
</div>
</nav>
);

export default NavBar;


/* <div className="container">
      
<table className="table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Price</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <th><abbr title="Position">p20</abbr></th>
      <th><abbr title="Goal difference">$ 34.332</abbr></th>
    </tr>
  </tfoot>
  </table>
  
       </div> */