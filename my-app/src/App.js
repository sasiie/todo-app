import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./index.css";
import Startsida from "./components/Startsida";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Startsida />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/Todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
