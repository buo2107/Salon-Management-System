import { Routes, Route } from "react-router-dom";
import Header from "../../component/Header";
import HomePage from "../../page/HomePage";
import Customers from "../../page/Customers";
import Catalog from "../../page/Catalog";
import Calander from "../../page/Calander";
import FinancialState from "../../page/FinancialState";
import SalesDetails from "../../page/SalesDetails";
import "./MainContent.css";

function MainContent() {
  return (
    <div className="main-content">
      <Header />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="customers" element={<Customers />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="sales_details" element={<SalesDetails />} />
        <Route path="calander" element={<Calander />} />
        <Route path="financial_state" element={<FinancialState />} />
      </Routes>
    </div>
  );
}

export default MainContent;
