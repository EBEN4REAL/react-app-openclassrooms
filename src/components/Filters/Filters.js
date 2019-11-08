import React from 'react';

class Filters extends React.Component {

   
    
    render() {
        return (
            <form>
                <input  typed="text" placeholder="Search..."  value={this.props.filterText}/>
                <p>
                    <input type="checkbox" checked={this.props.inStockOnly} /> 
                    
                    Only show products in stock
        
                </p>
            </form>
        )
    }
}

export default Filters;