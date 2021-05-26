import React, { useState } from "react";
import bote from "./img1.jpg";

export const Card = () => {
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

  return (
    <>
      <div className="card">
        <img src={bote} alt="Boat" />
        <h2>Naturaleza</h2>
        <h3>$500</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
          excepturi unde?
        </p>
        <div className="order-container">
          <button onClick={handdleAdd}>+</button>
          <span>{counter}</span>
          <button onClick={handdleSubstract}>-</button>
          <button>
            {" "}
            <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
