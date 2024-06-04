import FinancialChart from "../component/FinancialChart";
import CurrentExpenditure from "../component/CurrentExpenditure";
import CurrentIncome from "../component/CurrentIncome";
import CustomerReserve from "../component/CustomerReserve";
import ProductCatalog from "../component/ProductCatalog";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="main-content-holder">
      <div className="content-grid-one">
        <FinancialChart />
        <CurrentIncome />
        <CurrentExpenditure />
      </div>
      <div className="content-grid-two">
        <CustomerReserve />
        <ProductCatalog />
      </div>
    </div>
  );
}

export default HomePage;
