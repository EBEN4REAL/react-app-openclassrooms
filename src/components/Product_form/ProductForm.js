import React from 'react';
import FormElement from './formElement';

class ProductForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            formElements: [
                {
                    elementType: "text",
                    elementValue: "Eben",
                    elementName: "name",
                },
                {
                    elementType: "text",
                    elementValue: "food",
                    elementName: "category",
                },
                {
                    elementType: "text",
                    elementValue: "food",
                    elementName: "price",
                },
                {
                    elementType: "checkbox",
                    checkedStatus: false,
                    elementName: "stocked",
                },
            ]
        }
    }

    getFormValue = (event, element) => {
        const newFormElements = [...this.state.formElements];
        for(let elementIndex = 0; newFormElements.length; elementIndex++) {
            if(element.elementType === "checkbox"){
                newFormElements[elementIndex].checkedStatus = !element.checkedStatus;
            }
            if(newFormElements[elementIndex].elementName === element.elementName){
                newFormElements[elementIndex].elementValue = event.target.value;
                this.setState({
                    formElements: newFormElements
                })
                
                return;
            }
        }
        
        
     }

     addProductObject = (productObject) => {
         this.props.addToProduct(productObject);
     }
    
     getProductToAdd = (event) => {
        const obJectArrayKeys = Object.keys(this.props.products).length;
        console.log(obJectArrayKeys);
         event.preventDefault();
         let productData  = {};
         const newProducts = [...this.state.formElements];
         newProducts.map(product => {
            if(product.elementType === "checkbox"){
                productData[product.elementName] = product.checkedStatus; 
            }else {
                productData[product.elementName] = product.elementValue;
            }
            
         });
         productData["id"] = obJectArrayKeys + 1;
         this.addProductObject(productData);
     }
    
    render() {
        return (
           <form>
               <h3>Enter A new product</h3>
               {this.state.formElements.map(formElement => {
                   return (
                    <FormElement key={formElement.elementName} formElement = {formElement} getValue={(event, formName) => this.getFormValue(event,formName)}/>
                   )
               })}
               <button onClick={(event) => this.getProductToAdd(event)}>Add Product</button>
           </form>
        )
    }
}

export default ProductForm;