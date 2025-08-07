import { useState } from "react";
import "./App.css";
import Landing from "./Components/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
