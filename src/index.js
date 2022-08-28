import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./css/index.css";

// Import pages to route to
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import About from "./pages/About";
import CarbTracker from "./pages/CarbTracker";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home /> <Home2 />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              <Home /> <Home2 />
            </>
          }
        />
        <Route path="/tracker" element={<CarbTracker />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
