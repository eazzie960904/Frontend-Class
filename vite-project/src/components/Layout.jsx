import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

const Layout = ({ authenticate, setAuthenticate }) => {
  return (
    <>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
