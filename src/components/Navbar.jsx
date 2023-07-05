import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h2>PetFinder</h2>
      </Link>
      <Link to="/">
        <h3>About</h3>
      </Link>
    </div>
  );
};

export default Navbar;
