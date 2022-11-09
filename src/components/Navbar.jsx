import { useContext } from "react";
import { Link } from "react-router-dom";
// import Sorting from "./Sorting";
import { UserContext } from "./UserContext";

function Navbar({ loggedIn }) {
  loggedIn = useContext(UserContext);

  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="navbar_links">
          Home
        </Link>
        <Link to="/categories" className="navbar_links">
          Categories
        </Link>
        <h4 className="navbar_links_user">
          Signed in as:{" "}
          <Link to="/users" className="navbar_links_user">
            {JSON.stringify(loggedIn, "Guest", 2)}
          </Link>
        </h4>
      </nav>
    </div>
  );
}

export default Navbar;
