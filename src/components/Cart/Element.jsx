import React from 'react'
import imagenB from "../Card/img1.jpg"
export const Element = () => {
    return (
        <div className="element-container">
            <img src={imagenB}/>
            <div className="element-description">
            
                <h2>Zapatos</h2>
                <p>Zapatos para los pies que caminan </p>
            
                
            </div>
            <div>Cantidad</div>
            <div>$90k</div>
        </div>
    )
}
export default Element;