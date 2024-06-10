import { personsImage } from "../../utils/image";
import "./UserInfo.css";

function UserInfo() {
  return (
    <div className="user-info">
      <div className="info-img img-fit-cover">
        <img src={personsImage.user_img} alt="profile" />
      </div>
      <span className="info-name">Wei</span>
    </div>
  );
}

export default UserInfo;
