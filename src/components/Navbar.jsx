import { Link } from "react-router-dom";
// import Sorting from "./Sorting";

function Navbar( ) {

  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="navbar_links">
          Home
        </Link>
        <Link to="/categories" className="navbar_links">
          Categories
        </Link>
       
      </nav>
    </div>
  );
}

export default Navbar;
