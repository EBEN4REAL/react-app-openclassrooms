import React from "react";

const formElement = (props) => {
    return (
        <p>
            <label>
                {props.formElement.elementName} <br />
                {props.formElement.checkedStatus  ? 
                   <input type={props.formElement.elementType} name={props.formElement.elementName} checked={props.formElement.checkedStatus} onChange={(event) => props.getValue(event, props.formElement)}/>
                    : 
                    <input type={props.formElement.elementType} name={props.formElement.elementName} onChange={(event) => props.getValue(event, props.formElement)}/> 
                }
                
            </label>
        </p>
    )   
}

export default formElement