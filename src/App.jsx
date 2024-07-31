import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header/Header";
import HomePage from "./page/HomePage";
import Customers from "./page/Customers";
import Catalog from "./page/Catalog";
import Calander from "./page/Calander";
import FinancialState from "./page/FinancialState";
import SalesDetails from "./page/SalesDetails";
import {
  Box,
  Flex,
  Stack,
  VStack,
  HStack,
  Text,
  Heading,
  Center,
  Wrap,
  WrapItem,
  Container,
  Avatar,
} from "@chakra-ui/react";
import HeaderNav from "./layout/HeaderNav";

function App() {
  return (
    <BrowserRouter>
      <HeaderNav />

      <Box as="section" h="100%" px={24} py={8} overflow={"hidden"}>
        <Routes>
          <Route index path="home" element={<HomePage />} />
          <Route path="customers" element={<Customers />} />
          <Route path="product" element={<Catalog />} />
          <Route path="sales" element={<SalesDetails />} />
          <Route path="calander" element={<Calander />} />
          <Route path="financial" element={<FinancialState />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
