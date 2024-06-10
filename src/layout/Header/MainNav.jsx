import { NavLink } from "react-router-dom";
import "./MainNav.css";

function MainNav() {
  return (
    <nav className="main-nav">
      <ul className="main-nav-list">
        <li>
          <NavLink to="/customers" className="main-nav-link">
            Customer
          </NavLink>
        </li>
        <li>
          <NavLink to="/product_catalog" className="main-nav-link">
            Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/sales_details" className="main-nav-link">
            Sales
          </NavLink>
        </li>
        <li>
          <NavLink to="/calander" className="main-nav-link">
            Calander
          </NavLink>
        </li>
        <li>
          <NavLink to="/financial_state" className="main-nav-link">
            Financial
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="main-nav-link  nav-cta">
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
