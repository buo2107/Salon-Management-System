import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import Guests from "./pages/Guests";
import Login from "./pages/Login";
import Transcations from "./pages/Transcations";
import Transcation from "./pages/Transcation";
import GlobalStyles from "./styles/GlobalStyles";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:productId" element={<Product />} />
            <Route path="settings" element={<Settings />} />
            <Route path="guests" element={<Guests />} />
            <Route path="users" element={<Users />} />
            <Route path="transcations" element={<Transcations />} />
            <Route
              path="transcations/:transcationId"
              element={<Transcation />}
            />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
