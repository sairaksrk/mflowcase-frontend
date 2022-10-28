import React from "react";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// components

import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar.js";
import Footer from "../components/Footer/Footer";
import Addcase from "../components/Addcase";
import TableShowcase from "../components/TableShowcase";
import Updatecase from "../components/Updatecase";
import TableShowuser from "../components/TableShowuser";
import Adduser from "../components/Adduser";
import Edituser from "../components/Edituser";
import PageAddcase from "../components/PageAddcase";

import "../assets/styles/admin.css";

// // views

export default function Admin() {
  return (
    <>
      <div className="flex flex-row w-full min-h-screen bg-gray-100 text-gray-800">
        <Sidebar />

        <main className="main flex flex-col flex-grow  sm:ml-0 lg:ml-0 md:ml-0 transition-all duration-150 ease-in">
          <Header />
          {/* <Adduser /> */}
          {/* <Edituser /> */}
          {/* <TableShowuser /> */}
          <Addcase />
          <Updatecase />
          <TableShowcase />
          <Footer />
        </main>
      </div>
    </>
  );
}
