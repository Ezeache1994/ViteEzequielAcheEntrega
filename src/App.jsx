import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import './App.css';
import { ThemeProvider } from './1Components/1Header/ButtonDarkModeContext/DarkMode';
import Layout from './1Components/3Layout/Layout';
import DonationList from "./1Components/7DonationList/DonationList";
import DonationDetailContainer from "./1Components/7DonationList/DonationDetailContainer/DonationDetailContainer";
import CartProvider from "./1Components/1Header/4Cart/2CartContext/2CartProvider/CartProvider";
import CartContainer from "./1Components/1Header/4Cart/3CartContainer/3CartContainer/CartContainer";
import TransactionSummary from "./1Components/1Header/4Cart/4Transaction summary/transactionSummary";
import CartCheckOut from "./1Components/1Header/4Cart/3CartContainer/4CartCheckOut/CartCheckOut";

function App() {
  const initialCart = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

  return (
    <BrowserRouter>
      <ThemeProvider>
        <CartProvider initialCart={initialCart}>
          <Layout>
            <Routes>
              <Route path="/" element={<DonationList />} />
              <Route path="/Category/:CategoryName" element={<DonationList />} />
              <Route path="/product/:productId" element={<DonationDetailContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/check" element={<CartCheckOut/>} />
              <Route path="/summary" element= {<TransactionSummary/>}  />
            </Routes>
          </Layout>
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;



