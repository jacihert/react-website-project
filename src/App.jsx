import "./App.scss";
import Navbar from "./containers/Navbar/Navbar";
import beers from "./data/beers";
import React, { useState } from "react";
import CardList from "./components/CardList/CardList";

const App = () => {
  console.log(`beers on app`, beers);
  const [searchTerm, setSearchTerm] = useState("");
  const handleInput = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };
  const filteredBeers = beers.filter((beer, index) =>
    beer.name.includes(searchTerm)
  );

  // CASE SENSITIVE search

  console.log(filteredBeers);

  return (
    <div className="App">
      <Navbar searchTerm={searchTerm} handleInput={handleInput} />
      {!searchTerm && <CardList beerList={beers} />}
      {searchTerm && <CardList beerList={filteredBeers} />}
    </div>
  );
};
export default App;
