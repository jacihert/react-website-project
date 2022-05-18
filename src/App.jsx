import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import beers from "./data/beers";
import React, { useState } from "react";
import CardList from "./components/CardList/CardList";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleInput = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredBeers = beers.filter((beer) => beer.name.includes(searchTerm));

  return (
    <div className="App">
      <Navbar searchTerm={searchTerm} handleInput={handleInput} />
      {!searchTerm && <CardList beerList={beers} />}
      {searchTerm && <CardList beerList={filteredBeers} />}
    </div>
  );
};
export default App;
