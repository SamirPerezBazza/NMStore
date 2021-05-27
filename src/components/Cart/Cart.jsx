import React, {useState, useEffect} from 'react'
import Element from "./Element"

export const Cart = ({products, deleteElement}) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let suma=0;
        for (let i = 0; i < products.length; i++) {
            suma+=products[i].data.price * products[i].quantity;
        }
        setTotal(suma);
    }, [products])

    const createCartList = (arr)=>{
        console.log("createCartList");
        return arr.map((product)=>{
            return <Element {...product} key={product.data.id} deleteElement={deleteElement} />
        })
    }
   

    const checkout = ()=>{
        alert(`Feclidades por su compra por un total de: $${total}` );
    }

    return (
      
        <>
            <div className="container-cart"  >
                
                {createCartList(products)}

                <div className="container-checkout">
                    <h3>
                        TOTAL ${total} 
                    </h3>

                </div>
                <button className="button-checkout" onClick={()=>checkout()}>
                        Checkout
                </button>

            </div>
        </>
        
        
    )
}
export default Cart;
