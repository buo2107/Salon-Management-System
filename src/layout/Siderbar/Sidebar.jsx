import Navigation from "./Navigation";
import UserInfo from "./UserInfo";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className={`sidebar`}>
      <UserInfo />
      <Navigation />
    </div>
  );
}

export default Sidebar;
