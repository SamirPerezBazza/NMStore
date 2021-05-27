import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";
import Cart from "../Cart/Cart";
import { Products } from "./Products";
export const NMStore = () => {
  //Products
  const [products, setproducts] = useState([]);
  //Filtered products (for search)
  const [filteredProducts, setfilteredProducts] = useState([]);
  //Cart
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch(`https://nmstore-api.herokuapp.com/products
    `).then((d) => {
      d.json().then((p) => {
        setproducts(p);
        setfilteredProducts(p);
      });
    });
  }, []);

  const filterProducts = (text) => {
    if (text.length === 0) {
      setfilteredProducts(products);
    } else {
      let copy = products.slice();
      let filteredList = copy.filter((product) =>
        product.title.toLowerCase().startsWith(text)
      );

      setfilteredProducts(filteredList);
    }
  };

  const addCart = (id, cont) => {
    const cartObj = {
      quantity: cont,
      data: id,
    };
    let result = cart.filter((o) => o.data === id);
    if (result.length === 0) {
      setCart([...cart, cartObj]);
    } else {
      let i = cart.indexOf(result[0]);
      console.log("Carrito: ", cart);
      console.log("Indice: ", i);
      const copyCart = cart.slice();
      copyCart[i].quantity += cont;
      setCart(copyCart);
    }
  };

  const deleteElement = (id) => {
    const copy = cart.slice();
    setCart(copy.filter((item) => item.data !== id));
  };

  const getCartProducts = (cartArr, prod) => {
    let copy = prod.slice();
    let intersection = [];
    for (let i = 0; i < cartArr.length; i++) {
      for (let index = 0; index < prod.length; index++) {
        if (cartArr[i].data === copy[index].id) {
          intersection.push({
            data: copy[index],
            quantity: cartArr[i].quantity,
          });
          break;
        }
      }
    }
    console.log("Interseccion", intersection);

    return intersection;
  };

  return (
    <>
      <Router>
        <header>
          <div className="container">
            <div className="container-left">
              <div className="logo-container">
                <Link className="text-link" to="/">
                  <h1>nmstore</h1>
                </Link>
              </div>
              <hr />
              <SearchBar func={filterProducts} />
              <hr />
            </div>
            <Link className="text-link" to="/cart">
              <div className="cart-container">
                <i className="fas fa-shopping-cart"></i>
              </div>
            </Link>
          </div>
        </header>

        <Switch>
          <Route exact path="/">
            <Products products={filteredProducts} funcCart={addCart} />
          </Route>

          <Route exact path="/cart">
            <Cart products={getCartProducts(cart, products)} deleteElement={deleteElement} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default NMStore;
