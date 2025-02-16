import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="container flex flex-col min-h-screen">
      <div className="flex-grow text-white container relative">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
