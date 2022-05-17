import "./Navbar.scss";
import SearchBox from "../../components/SearchBox/SearchBox";
import FilterList from "../../components/FiltersList/FiltersList";
import FilterItem from "../../components/FilterItem/FilterItem";
import beers from "../../data/beers";

const Navbar = ({ searchTerm, handleInput }) => {
  return (
    <div className="navbar">
      <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
      {/* <FilterItem /> */}
      {/* <FilterList /> */}
    </div>
  );
};
export default Navbar;
