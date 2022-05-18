import "./SearchBox.scss";
import React from "react";

const SearchBox = ({ searchTerm, handleInput }) => {
  return (
    <>
      <input
        className="searchBox"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onInput={handleInput}
      />
    </>
  );
};

export default SearchBox;
