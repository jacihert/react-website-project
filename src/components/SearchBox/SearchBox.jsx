import "./SearchBox.scss";
import React from "react";

const SearchBox = ({ searchTerm, handleInput }) => {
  return (
    <div>
      <input
        className="searchBox"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onInput={handleInput}
      />
    </div>
  );
};

export default SearchBox;
