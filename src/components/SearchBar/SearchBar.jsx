import React from 'react'

export const SearchBar = () => {
    return (
        <>
            <div className="search-container">
              <i class="fas fa-search"></i>
              <input type="text" placeholder="Search items to buy"></input>
            </div>
        </>
    )
}

export default SearchBar;
