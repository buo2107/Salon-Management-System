import "./Customers.css";
import { personsImage } from "../utils/image";
import { iconsImgs } from "../utils/icon";
import CustomerCard from "../component/CustomerCard";
import { UserPlusIcon } from "@heroicons/react/24/outline";

function Customers() {
  return (
    <section className="section-customer">
      <div className="container section-heading">
        <span className="subheading">Customers</span>
        <button className="btn btn--full">
          <img
            className="add-icon"
            src={iconsImgs.user_plus}
            alt="customer plus"
          />
        </button>
      </div>
      <div className="container grid grid--4-cols">
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
        <CustomerCard />
      </div>
    </section>
  );
}

export default Customers;
