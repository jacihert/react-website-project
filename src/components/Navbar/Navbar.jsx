import "./Navbar.scss";
import SearchBox from "../SearchBox/SearchBox";
import FiltersList from "../FiltersList/FiltersList";
// import BeerInfo from "../../containers/BeerInfo/BeerInfo";

const Navbar = ({ searchTerm, handleInput, handleSelection }) => {
  return (
    <section className="navbar">
      <div className="navbar__Search">
        <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
      </div>
      <div className="navbar__filter">
        <FiltersList handleSelection={handleSelection} />
        {/* <BeerInfo /> */}
      </div>
    </section>
  );
};
export default Navbar;
