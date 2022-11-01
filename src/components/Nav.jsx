import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <form>
        <label htmlFor="categories">Choose a review category</label>
        <select name="categories" id="categories">
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
