import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header/Header";
import HomePage from "./page/HomePage";
import Customers from "./page/Customers";
import Catalog from "./page/Catalog";
import Calander from "./page/Calander";
import FinancialState from "./page/FinancialState";
import SalesDetails from "./page/SalesDetails";

function App() {
  return (
    <BrowserRouter>
      <Header />

      {/* Main Content */}
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="customers" element={<Customers />} />
        <Route path="product_catalog" element={<Catalog />} />
        <Route path="sales_details" element={<SalesDetails />} />
        <Route path="calander" element={<Calander />} />
        <Route path="financial_state" element={<FinancialState />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
