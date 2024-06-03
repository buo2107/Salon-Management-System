import { personsImage } from "../../utils/image";

function UserInfo() {
  return (
    <div className="user-info">
      <div className="info-img img-fit-cover">
        <img src={personsImage.person_one} alt="profile" />
      </div>
      <span className="info-name">Wei</span>
    </div>
  );
}

export default UserInfo;
