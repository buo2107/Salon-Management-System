import "./Header.css";
import UserInfo from "./UserInfo";
import MainNav from "./MainNav";

function Header() {
  return (
    <header className="header">
      <UserInfo />
      <MainNav />
    </header>
  );
}

export default Header;
