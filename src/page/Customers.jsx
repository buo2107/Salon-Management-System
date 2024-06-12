import "./Customers.css";
import { personsImage } from "../utils/image";
import { iconsImgs } from "../utils/icon";
import CustomerCard from "../component/CustomerCard";

function Customers() {
  return (
    <section className="section-customer">
      <div className="container section-heading">
        <span className="subheading">Customers</span>
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
