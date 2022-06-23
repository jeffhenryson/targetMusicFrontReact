import axios from "axios";
import React, { useState, useRef } from "react";


const servico = axios.create({
  baseURL: "http://localhost:8080",
});

function Cadastrocliente() {
  const nomeRef = useRef();
  const emailRef = useRef();
  const telefoneRef = useRef();
  const idInstrumentoRef = useRef();
  const [clientes, setClientes] = useState([]);

  async function handleCadastrarCliente() {
    const cliente = new Cliente(
      nomeRef.current.value,
      emailRef.current.value,
      telefoneRef.current.value,
      { id: idInstrumentoRef.current.value }
    );
    const { data } = await servico.post("/cliente", cliente);
  }

  return (
    <>
    
    

    </>
  );
}

export default Cadastrocliente;

class Cliente {
  nomeCompleto;
  email;
  telefone;
  instrumentoMusical;

  constructor(nomeCompleto, email, telefone, instrumentoMusical) {
    this.nomeCompleto = nomeCompleto;
    this.email = email;
    this.telefone = telefone;
    this.instrumentoMusical = instrumentoMusical;
  }
}
