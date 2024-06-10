import "./Customers.css";
import { personsImage } from "../utils/image";
import { iconsImgs } from "../utils/icon";

function Customers() {
  return (
    <div className="container grid grid--3-cols testimonials ">
      <figure className="testimonial">
        <img
          className="testimonial-img"
          alt="Photo of customer Dave Bryson"
          src={personsImage.person_one}
        />
        <div className="customer-info">
          <p className="testimonial-name">王曉明</p>
          <span className="phone-number">0911-352-456</span>
        </div>
      </figure>
    </div>
  );
}

export default Customers;
