import React from 'react';

const SearchBar = () => {
  return (
    <div className="menu__search">
      <input
        type="text"
        className="search__input"
        id="searchInput"
        placeholder="Search for movies"
      />
    </div>
  );
}

export default SearchBar;
