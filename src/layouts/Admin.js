import React from "react";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "../assets/styles/admin.css";

// components
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar.js";
import Footer from "../components/Footer/Footer";

// จัดการ user
import Register from "../views/auth/Register";
import TableShowuser from "../views/admin/TableShowuser";
import Edituser from "../views/admin/Edituser";

// จัดการ case
import TableShowcase from "../views/admin/TableShowcase";
import Addcase from "../views/admin/Addcase";
import Updatecase from "../views/admin/Updatecase";

export default function Admin() {
  return (
    <>
      <div className="flex flex-row w-full min-h-screen bg-gray-100 text-gray-800">
        <Sidebar />

        <main className="main flex flex-col flex-grow  sm:ml-0 lg:ml-0 md:ml-0 transition-all duration-150 ease-in">
          <Header />
          {/* <Register /> */}
          {/* <Edituser /> */}
          {/* <TableShowuser /> */}
          {/* <Addcase /> */}
          {/* <Updatecase /> */}
          <TableShowcase />
          <Footer />
        </main>
      </div>
    </>
  );
}
