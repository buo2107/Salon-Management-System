import { iconsImgs } from "../../utils/icon";

function Navigation() {
  const navigationLinks = [
    { id: 1, title: "Home", image: iconsImgs.home },
    { id: 2, title: "Customers", image: iconsImgs.user },
    { id: 3, title: "商品目錄", image: iconsImgs.budget },
    { id: 4, title: "銷售紀錄", image: iconsImgs.report },
    { id: 5, title: "日程表", image: iconsImgs.plane },
    { id: 6, title: "收支管理", image: iconsImgs.bills },
    { id: 7, title: "Settings", image: iconsImgs.gears },
  ];

  return (
    <nav className="navigation">
      <ul className="nav-list">
        {navigationLinks.map((navigationLink) => (
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
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
