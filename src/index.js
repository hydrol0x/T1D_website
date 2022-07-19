import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages to route to
import Home from "./pages/Home";
import About from "./pages/About";
import Tracker from "./pages/Tracker";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
