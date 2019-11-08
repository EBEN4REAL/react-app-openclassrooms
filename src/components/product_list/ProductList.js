import React from 'react';
import ProductRow from './product_row/product_row';
import SortableColumnHeader from './sortable_column_header/sortable_column_header';

class ProductList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sort: {
                column: 'name',
                direction: 'desc'
            }
        }

    }
    sortProducts = () => {
        let productsArray = Object.keys(this.props.products).map(productId => this.props.products[productId]);
        return productsArray.sort(this.srtByColumnAndDirection);
    }
    render() {
        let rows = [];
        let productsArray = Object.keys(this.props.products).map(productId => this.props.products[productId]);
        let compiledProducts = productsArray.map(product => {
            if(product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)){
                return;
            }
            rows.push(
                <ProductRow key = {product.id} product={product} removeProduct={(productOject) => this.props.removeProduct(productOject)}></ProductRow>
            );
        });
        

        console.log(compiledProducts);
        return (
               <table>
                   <thead>
                       <tr>
                            <SortableColumnHeader 
                                column="name"
                                currentSort={this.state.sort}></SortableColumnHeader>
                            <SortableColumnHeader column="price"></SortableColumnHeader>
                       </tr>
                   </thead>
                   <tbody>
                       {rows}
                   </tbody>
                   
               </table>
        )
    }
}

export default ProductList;