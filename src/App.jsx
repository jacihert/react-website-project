import "./App.scss";
// import Main from "./containers/Main/Main";
import Navbar from "./containers/Navbar/Navbar";
import beers from "./data/beers";
import CardList from "./components/CardList/CardList";

const App = () => {
  console.log(`beers on app`, beers);
  return (
    <div className="App">
      <Navbar />
      <CardList beerList={beers} />
    </div>
  );
};
export default App;
