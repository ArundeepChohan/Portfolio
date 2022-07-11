import React from "react";
import {Outlet} from "react-router-dom";
import NavbarFunc from "./Navbar";

const Layout = () => {
  return (
    <>
      <NavbarFunc />
      <Outlet />
    </>
  );
};

export default Layout;