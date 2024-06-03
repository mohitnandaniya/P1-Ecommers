import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>TechStar</h1>
      <main>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/#about">About</Link>
        <Link to="/#brands">Brands</Link>
        <Link to="/services">Services</Link>
      </main>
    </div>
  );
};

export default Header;
