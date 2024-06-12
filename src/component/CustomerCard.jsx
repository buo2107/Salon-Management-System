import "./CustomerCard.css";

function CustomerCard() {
  return (
    <div className="box">
      <div className="top">
        <div className="profile img-fit-cover">
          <img
            src="https://cdn.dribbble.com/users/16041/avatars/small/e6c7fac4033b9c233a3bd82ce55c4430.jpg"
            alt="customer"
          />
        </div>
        <h1 className="name">Adem ilter</h1>
      </div>
      <div className="bottom">
        <h3 className="phone">0972-731-186</h3>
      </div>
    </div>
  );
}

export default CustomerCard;
