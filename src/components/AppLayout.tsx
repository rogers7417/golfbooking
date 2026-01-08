import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const AppLayout: React.FC = () => {
  return (
    <div className="app-root">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
