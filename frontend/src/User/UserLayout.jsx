import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import UserNavbar from "../User/components/Home/Navbar";
// import AdminNavbar from "../Admin/components/AdminNavbar/AdminNavbar";
import Footer from "../User/components/Home/Footer";



const UserLayout = () => {
   const location = useLocation();
//   const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
    <UserNavbar />
      
      
      <Outlet />
     <Footer /> 
      
      
    </>
  );
};

export default UserLayout;