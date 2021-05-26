import React from "react";

export const NMStore = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="container-left">
            <div className="logo-container">
              <h1>nmstore</h1>
            </div>
            <hr />
            <div className="search-container">
                <i class="fas fa-search"></i>
              <input type="text" placeholder="Search items to buy"></input>
            </div>
            <hr />
          </div>

          <div className="cart-container">
            <i class="fas fa-shopping-cart"></i>
          </div>
        </div>
      </header>
    </>
  );
};

{
  /* <div className="logo-container">
                        <h1>nmstore</h1>
                    </div>
                    <div className="search-container">
                        <input type="text" placeholder="Search items to buy"></input>
                    </div>
                    <div className="cart-container">
                        
                    </div> */
}
export default NMStore;
