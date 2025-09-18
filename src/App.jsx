import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import CricketListing from "./pages/CricketListing";
import Login from "./pages/Login";
import Multi from "./pages/Multi";

function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cricket" element={<CricketListing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/multi" element={<Multi />} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App;
