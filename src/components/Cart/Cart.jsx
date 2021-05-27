import React from 'react'
import Element from "./Element"

export const Cart = () => {
    return (
      
        <>
            <div className="container-cart"  >
                
                <Element/>
                
                <div className="container-checkout">
                    <h3>
                        TOTAL $90k 
                    </h3>

                </div>
                <button>
                        Checkout
                </button>

            </div>
        </>
        
        
    )
}
export default Cart;
