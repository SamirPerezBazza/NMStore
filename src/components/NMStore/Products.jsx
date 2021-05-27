import React from 'react'
import Card from '../Card/Card'



export const Products = ({products, funcCart}) => {
    const createProductList = (arr)=>{
        return arr.map((product)=>{
            return <Card {...product} key={product.id} funcCart={funcCart}/>
        })
    }

    return (
        <div className="container-products">
            {createProductList(products)}
        </div>
    )
}
