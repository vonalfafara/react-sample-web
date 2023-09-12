import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <span>LOGO</span>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
