import React from 'react';
import "./styles.css";

const ProductRow = (props) => {
    return (
        <tr>
            <td>
                <span className={props.product.stocked ?  '' : 'product_out_of_stock'} >
                    {props.product.name}
                </span>
            </td>
            <td>
                {props.product.price}
            </td>
            <td>
                <button onClick={($event) => props.removeProduct(props.product)}>x</button>
            </td>
        </tr>
    )
}

export default ProductRow;