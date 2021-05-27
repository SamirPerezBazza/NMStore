import React from 'react';

export const Element = ({data, quantity, deleteElement}) => {

    const remove = ()=>{
        deleteElement(data.id);
    }

    return (
        <div className="element-container">
            <button onClick={remove}><i className="fas fa-trash-alt"></i></button>
            <img src={data.img} alt="Especific of the product"/>
            <div className="element-description">
            
                <h2>{data.title}</h2>
                <p>{data.summary}</p>
            
                
            </div>
            <div>{quantity}</div>
            <div className="total-container">${data.price*quantity}</div>
        </div>
    )
}
export default Element;