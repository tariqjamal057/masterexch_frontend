import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import CricketListing from "./pages/CricketListing";
import Login from "./pages/Login";
import Multi from "./pages/Multi";
import InPlay from "./pages/InPlay";
import InplayDetail from "./pages/InplayDetail";
import Profile from "./pages/Profile";
import Sport from "./pages/Sport";
import BalanceTransfer from "./pages/BalanceTransfer";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="inplay" element={<InPlay />} />
            <Route path="inplay/detail" element={<InplayDetail />} />
            <Route path="cricket" element={<CricketListing />} />
            <Route path="multi" element={<Multi />} />
            <Route path="profile" element={<Profile />} />
            <Route path="sports" element={<Sport />} />
            <Route path="profile/balance-transfer" element={<BalanceTransfer />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
