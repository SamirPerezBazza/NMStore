import React from 'react'

export const SearchBar = ({func}) => {
    const handleSearch=(e)=>{
        func(e.target.value.toLowerCase());
    }


    return (
        <>
            <div className="search-container">
              <i className="fas fa-search"></i>
              <input type="text" placeholder="Search items to buy" onChange={handleSearch}></input>
            </div>
        </>
    )
}

export default SearchBar;
