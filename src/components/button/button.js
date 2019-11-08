import React from 'react';




class Button extends React.Component {

    handleClick = (event) => {
        console.log("Eben clicked");
    }

    render() {
        return (
            <button onClick={this.handleClick}>Click!</button>
        )
    }
}


export default Button