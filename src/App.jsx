import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Settings from "./pages/Settings";
import Guests from "./pages/Guests";
import Login from "./pages/Login";
import AccountingLedger from "./pages/AccountingLedger";
import Ledger from "./pages/Ledger";
import PageNotFound from "./pages/PageNotFound";
import GuestDetail from "./features/guests/GuestDetail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "./components/ui/sonner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="bookings" element={<Bookings />} />
              <Route path="products" element={<Products />} />
              <Route path="products/:productId" element={<Product />} />
              <Route path="guests" element={<Guests />} />
              {/* <Route path="users" element={<Users />} /> */}
              <Route path="user" element={<GuestDetail />} />
              <Route path="accountingLedger" element={<AccountingLedger />} />
              <Route path="accountingLedger/:ledgerId" element={<Ledger />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </QueryClientProvider>
    </>
  );
}

export default App;
