import axios from "axios";
import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import { Body, ButtonJeff } from "./styles";

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
      <div>
        <header>
          <h1>Site cadastro em React</h1>
        </header>

        <form onSubmit={handleCadastrarCliente}>
          <div>
            <fieldset>
              <div>
                <label>Digite o seu nome completo: </label>
                <br />
                <input type="text" ref={nomeRef} />
              </div>
              <br />
              <div>
                <label htmlFor="">Digite seu e-mail: </label>
                <br />
                <input type="text" ref={emailRef} />
              </div>
              <br />
              <div class="boxQuest">
                <label htmlFor="">Digite seu numero: </label>
                <br />
                <input type="number" ref={telefoneRef} />
              </div>
              <br />
              <div class="boxQuest">
                <label htmlFor="">O número da O.S do seu instrumento: </label>
                <br />
                <input type="number" ref={idInstrumentoRef} />

                <br />
                <br />
                <br />
                <div class="bt-container">
                  <Button variant="contained" color="success" type="submit">
                    Enviar
                  </Button>
                </div>
              </div>
            </fieldset>
          </div>
        </form>
      </div>
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
