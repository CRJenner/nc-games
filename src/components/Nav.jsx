import { useEffect, useState } from "react";
import { fetchCategories } from "../api";

const Nav = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState();

  function handleChange(event) {
    const newQuery = {};
    newQuery[event.target.id] = event.target.value;
    console.log(setQuery);
    setQuery(newQuery);
  }
  useEffect(() => {
    setIsLoading(true);

    fetchCategories().then(({ query }) => {
      setQuery(query);
      setIsLoading(false);
    });
  }, [setQuery]);

  if (isLoading) return <p>...Loading...</p>;

  return (
    <nav>
      <form>
        <label htmlFor="categories">Choose a review category</label>
        <select name="categories" id="categories" onClick={handleChange}>
          <option value="engine-building">Engine Building</option>
          <option value="deck-building">Deck Building</option>
          <option value="roll-and-write">Roll and Write</option>
          <option value="push-your-luck">Push Your Luck</option>
          <option value="Dexterity">Dexterity</option>
          <option value="hidden-roles">Hidden Roles</option>
          <option value="strategy">Strategy</option>
        </select>
      </form>
    </nav>
  );
};

export default Nav;
//import { Link } from "react-router-dom";
