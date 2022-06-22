import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componets/Tela/Home";
import CadastroCliente from "./componets/CadastroCliente/CadastroCliente";
import Cadastroinstrumento from "./componets/CadastroInstrumento/CadastroInstrumento";
import "../src/index.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cadastrocliente" element={<CadastroCliente />} />
        <Route path="/cadastroinstrumento" element={<Cadastroinstrumento />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
