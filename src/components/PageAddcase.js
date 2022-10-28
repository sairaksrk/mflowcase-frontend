import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// components

import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar.js";
import Footer from "../components/Footer/Footer";
import Addcase from "../views/admin/Addcase";

export default function PageAddcase() {
  return (
    <>
      <div className="flex flex-row w-full min-h-screen bg-gray-100 text-gray-800">
        <Sidebar />

        <main className="main flex flex-col flex-grow  sm:ml-0 lg:ml-0 md:ml-0 transition-all duration-150 ease-in">
          <Header />
          <Addcase />
          <Footer />
        </main>
      </div>
    </>
  );
}
