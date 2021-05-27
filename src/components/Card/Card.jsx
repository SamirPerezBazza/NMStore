import React, { useState } from "react";

export const Card = ({title, summary, img, price, offer, id, funcCart}) => {
  const [counter, setCounter] = useState(1);


  //handdleAdd
  const handdleAdd = () => setCounter(counter + 1);

  //handdleSubstract
  const handdleSubstract = () => {
    if (counter-1<1) {
        setCounter(1);
    } else {
        setCounter(counter - 1);
    }
  };

  const handdleCart= () => {
    funcCart(id,counter);
    setCounter(1);
  }
  
  
  return (
    <>
      <div className="card">
        <img src={img} alt="Product" />
        <h2>{title}</h2>
        <h3>${price}</h3>
        <p>
          {summary}
        </p>
        <div className="order-container">
          <button onClick={handdleAdd}>+</button>
          <span>{counter}</span>
          <button onClick={handdleSubstract}>-</button>
          <button onClick={handdleCart}>
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
