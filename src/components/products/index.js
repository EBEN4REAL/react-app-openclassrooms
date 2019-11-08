import React from 'react';
import ProductForm from '../Product_form/ProductForm';
import ProductList from '../product_list/ProductList';
import ProductFilter from '../Filters/Filters';


  class Products extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              products: {
                '1': {id: 1, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet'},
                '2': {id: 2, category: 'Musical Instruments', price: '$5,000', stocked: true, name: 'Cello'},
                '3': {id: 3, category: 'Musical Instruments', price: '$11,000', stocked: false, name: 'Fortepiano'},
                '4': {id: 4, category: 'Furniture', price: '$799', stocked: true, name: 'Chaise Lounge'},
                '5': {id: 5, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table'},
                '6': {id: 6, category: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag'}
              },
              showStrockedProduct: false,
              filterText: '',
              inStockOnly: true
          }
          
      }

      addToProductList = (productObject) => {
          const copiedProducts  = {...this.state.products};
          copiedProducts[`${productObject.id}`] = productObject;
          this.setState({
              products: copiedProducts
          });
      }

      removeProductFromList = (productObject) => {
          const copiedProducts = {...this.state.products};
          const productArray  = Object.keys(copiedProducts).map(productId => copiedProducts[productId]);
          const filteredProducts = productArray.filter(product => product.id !== productObject.id);
          const newProductObject = {};
          const newProductArrayDestructuring = filteredProducts.forEach(product => {
            newProductObject[product.id] = product;
          });
          this.setState({
              products: newProductObject
          });
      }

      showStockedProducts = () => {
        this.setState({showStrockedProduct: !this.showStrockedProduct});
        console.log("STOCKED:" + this.state.showStrockedProduct);
        const products = this.state.products;
        const productsArray = Object.keys(products).map(productId => products[productId]);
        const fiteredStockedProducts  = productsArray.filter(product => product.stocked === true);
        const newStockedProducts = {};
        const newStockedProductsArrayDestructuring = fiteredStockedProducts.forEach(product => {
            newStockedProducts[product.id] = product;
        });
        console.log(newStockedProducts);
        this.setState({
            products: newStockedProductsArrayDestructuring
        })
      }
      render(){
          return (
              <div>
                <ProductFilter  products={this.state.products} 
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}/>
                <ProductList products={this.state.products} removeProduct={(productObject) => this.removeProductFromList(productObject)} 
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly} />
                <ProductForm 
                    addToProduct={(productObject) => this.addToProductList(productObject)}
                    products={this.state.products} 
                 />
              </div>
          )
      }
  }

  export default Products;