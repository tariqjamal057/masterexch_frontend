import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MobileNavbar from "./MobileNavbar";
import AuthHeader from "./AuthHeader";

const Layout = () => {
  const userAuthenticated = localStorage.getItem("userAuthenticated");
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {userAuthenticated ? <AuthHeader /> : <Header />}
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <MobileNavbar />
    </div>
  );
};

export default Layout;
