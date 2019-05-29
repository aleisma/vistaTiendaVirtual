import React, { Component, Fragment } from 'react';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';


const initialProducts = [
  { id: 1,  title: 'Huawei P30-pro', inventory: 3, price: 69.521 , src:'https://http2.mlstatic.com/huawei-p30-pro-256gb-8gb-ram-liberado-en-caja-en-stock-ya-D_NQ_NP_778930-MLA30222720604_052019-F.webp'},
  { id: 2,  title: 'iPhone Xs', inventory: 4, price: 87.999 , src:'https://http2.mlstatic.com/iphone-xs-max-64gb-libre-apple-garantia-local-rosario-D_NQ_NP_884548-MLA29675062720_032019-F.webp'},
  { id: 3, title: 'Galaxy S10', inventory: 5, price: 76.988, src:'https://http2.mlstatic.com/samsung-galaxy-s10-plus-128-gb-8gb-ram-camara-triple-D_NQ_NP_917829-MLA29718873237_032019-F.webp'},
  { id: 4, title: 'Huawei Mate', inventory: 2, price: 54.049, src:'https://http2.mlstatic.com/huawei-mate-20-pro-camara-triple-6gb-128gb-twilight-evotech-D_NQ_NP_619997-MLA29695755973_032019-F.webp' },
  { id: 5, title: 'Google Pixel 3', inventory: 3, price: 65.239, src:'https://http2.mlstatic.com/google-pixel-3-xl-128-gb-negro-stock-inmediato-D_NQ_NP_638430-MLA28881659399_122018-F.webp'},
  { id: 6, title: 'Galaxy S9', inventory: 5, price: 34.998, src:'https://http2.mlstatic.com/celular-samsung-galaxy-s9-64gb-4gb-ram-dual-sim-sellado-D_NQ_NP_610680-MLA29774799401_032019-F.webp'},
  { id: 7, title: 'Motorola G6', inventory: 6, price: 13.499, src:'https://http2.mlstatic.com/celular-libre-motorola-moto-g6-D_NQ_NP_747795-MLA28774970066_112018-F.webp' },
];
const formatNumber = (number) => new Intl.NumberFormat('en-US',{minimumFractionDigits:3, maximumFractionDigits: 3}).format(number);
class App extends Component {
  state = {
    addedIds: [],
    quantityById: {},
    products: initialProducts,
  };
 
  addToCart = (id) => {
    const { addedIds , quantityById, products } = this.state;
    const product = products.find(prod => prod.id === id);
    const available = product.inventory - (quantityById[id] || 0);
    if (available > 0){
      const newAddedIds = addedIds.find(prodId => prodId === id) ? addedIds: addedIds.concat(product.id);
      const newQuantityById = {
        ...quantityById,
        [id]: (quantityById[id] || 0) + 1,
      };
      this.setState({ addedIds: newAddedIds, quantityById: newQuantityById });
     }
  }  
  removeFromCart = (id) => {
    const { addedIds, quantityById } = this.state;
    if (quantityById[id]) {
      const newQuantityById = {
        ...quantityById,
        [id]: quantityById[id] > 1 ? quantityById[id] - 1 : undefined,
      };
      const newAddedIds = newQuantityById[id] ? addedIds : addedIds.filter(prodId => prodId !== id);
      this.setState({ addedIds: newAddedIds, quantityById: newQuantityById });
    }
  }
  deleteFromCart = (id) => {
    const { addedIds, quantityById } = this.state;
    if (quantityById[id]) {
      const newQuantityById = {
        ...quantityById,
        [id]: undefined,
      };
      const newAddedIds = addedIds.filter(prodId => prodId !== id);
      this.setState({ addedIds: newAddedIds, quantityById: newQuantityById }); 
      }
  }
  getAvailable = (products, quantityById) => {
    return products.reduce(
      (res, product) => ({
        ...res,
        [product.id]: product.inventory - (quantityById[product.id] || 0),
        
      }),
      {},
    );
  }
  getTotal = (products, addedIds, quantityById) => {
    return addedIds.reduce(
      (res,productId) => res + products.find(prod => prod.id === productId).price * (quantityById[productId] || 0) ,
      0
      

    );

  }

  render() {
    const { products, quantityById,addedIds } = this.state;
    const available = this.getAvailable(products,quantityById);
    const total = this.getTotal(products, addedIds, quantityById);
    return (
      <Fragment>
      <NavBar total={formatNumber(total)}/>
      <ProductList
                   available={available}
                   products={initialProducts} 
                   addToCart={this.addToCart}
                   removeFromCart={this.removeFromCart}
                   deleteFromCart={this.deleteFromCart}
                   />
       
         </Fragment>
      
    );
  }
}

export default App;



