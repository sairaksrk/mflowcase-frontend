import "./App.css";

// import Header from "./components/Header/Header";
// import Sidebar from "./components/Sidebar/Sidebar.js";
// import Content from "./components/Content";
// import Footer from "./components/Footer/Footer";

import Login from "./components/Login";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// layouts

import Admin from "./layouts/Admin.js";
import User from "./layouts/User.js";

import PageAddcase from "./components/PageAddcase";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/admin" exact element={<Admin />} />
        <Route path="/user" exact element={<User />} />
        <Route path="/pageaddcase" exact element={<PageAddcase />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
