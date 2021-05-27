import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";
export const NMStore = () => {
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
              <SearchBar />
              <hr />
            </div>
            <Link to="/cart">
              <div className="cart-container">
                <i class="fas fa-shopping-cart"></i>
              </div>
            </Link>
          </div>
        </header>

        <Switch>
          <Route exact path="/">
            <Card />
          </Route>

          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default NMStore;
