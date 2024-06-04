import { NavLink } from "react-router-dom";
import { iconsImgs } from "../../utils/icon";

function Navigation() {
  const navigationLinks = [
    { id: 1, title: "Home", image: iconsImgs.home },
    { id: 2, title: "Customers", image: iconsImgs.user },
    { id: 3, title: "商品目錄", image: iconsImgs.budget },
    { id: 4, title: "銷售紀錄", image: iconsImgs.report },
    { id: 5, title: "日程表", image: iconsImgs.plane },
    { id: 6, title: "收支管理", image: iconsImgs.wealth },
    { id: 7, title: "Settings", image: iconsImgs.gears },
  ];

  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            <img src={iconsImgs.home} className="nav-link-icon" alt="Home" />
            <span className="nav-link-text">Home</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/customers" className="nav-link">
            <img
              src={iconsImgs.user}
              className="nav-link-icon"
              alt="Customers"
            />
            <span className="nav-link-text">Customers</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/catalog" className="nav-link">
            <img
              src={iconsImgs.budget}
              className="nav-link-icon"
              alt="商品目錄"
            />
            <span className="nav-link-text">商品目錄</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/sales_details" className="nav-link">
            <img
              src={iconsImgs.report}
              className="nav-link-icon"
              alt="銷售紀錄"
            />
            <span className="nav-link-text">銷售紀錄</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/calander" className="nav-link">
            <img src={iconsImgs.plane} className="nav-link-icon" alt="日程表" />
            <span className="nav-link-text">日程表</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/financial_state" className="nav-link">
            <img
              src={iconsImgs.wealth}
              className="nav-link-icon"
              alt="收支管理"
            />
            <span className="nav-link-text">收支管理</span>
          </NavLink>
        </li>
        {/* {navigationLinks.map((navigationLink) => (
          <li className="nav-item" key={navigationLink.id}>
            <a href="#" className={`nav-link`}>
              <img
                src={navigationLink.image}
                className="nav-link-icon"
                alt={navigationLink.title}
              />
              <span className="nav-link-text">{navigationLink.title}</span>
            </a>
          </li>
        ))} */}
      </ul>
    </nav>
  );
}

export default Navigation;
