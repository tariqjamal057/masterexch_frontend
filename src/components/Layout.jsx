import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileNavbar from "./MobileNavbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileNavbar />
    </div>
  );
};

export default Layout;
