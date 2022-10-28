import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// components

import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar.js";
import Footer from "../components/Footer/Footer";

export default function Admin() {
  return (
    <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
      <Sidebar />
      <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
        <Header />
        User
        <Footer />
      </main>
    </div>
  );
}
