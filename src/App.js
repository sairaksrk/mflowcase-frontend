import "./App.css";



import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// layouts

import Admin from "./layouts/Admin.js";
import User from "./layouts/User.js";

import Login from "./views/auth/Login";

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
