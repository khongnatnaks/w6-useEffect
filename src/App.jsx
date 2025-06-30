import React from "react";
import { NavLink, Routes, Route } from "react-router";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Api from "./pages/Api";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<Api />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
