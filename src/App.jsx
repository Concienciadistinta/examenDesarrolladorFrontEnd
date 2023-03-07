import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Item from "./components/Item";
import "./Style.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/item/:id" element={<Item />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
