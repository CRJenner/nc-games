import { useContext } from "react";
import { Link } from "react-router-dom";
// import Sorting from "./Sorting";
import { UserContext } from "./UserContext";

function Navbar({ loggedIn }) {
  loggedIn = useContext(UserContext);
  console.log(loggedIn);
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="navbar_links">
          Home
        </Link>
        <Link to="/categories" className="navbar_links">
          Categories
        </Link>

        <Link to="/users">{JSON.stringify(loggedIn, "Guest", 2)}</Link>
      </nav>
    </div>
  );
}

export default Navbar;
