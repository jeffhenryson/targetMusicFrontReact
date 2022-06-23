import axios from "axios";
import React, { useState, useRef } from "react";
import {
  Cabecalho,
  Botao,
  SeparadorDiv,
  SeparadorDivDois,
  LogoMarca,
  CampoCadastroInstrumento,
  InputUser,
  LabelInput,
  CampoImagemCadastroInstrumento,
  CampoJuntarDiv,
  BotaoCadastrarInstrumento,
} from "../EstiloPaginas/Style";
import { useNavigate } from "react-router-dom";

const servico = axios.create({
  baseURL: "http://localhost:8080",
});

function Cadastrocliente() {
  let navigate = useNavigate();

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
      <header>
        <Cabecalho>
          <SeparadorDiv></SeparadorDiv>
          <LogoMarca
            img
            src={require("../imagens/target-Music.png")}
          ></LogoMarca>
          <SeparadorDivDois></SeparadorDivDois>
          <SeparadorDiv></SeparadorDiv>
          <SeparadorDiv></SeparadorDiv>
          <Botao
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </Botao>
          <SeparadorDiv></SeparadorDiv>
        </Cabecalho>
      </header>

      <main>
        <div>
          <CampoJuntarDiv>
            <CampoImagemCadastroInstrumento
              img
              src={require("../imagens/violaodois.png")}
            ></CampoImagemCadastroInstrumento>
            <CampoCadastroInstrumento onSubmit={handleCadastrarCliente}>
            <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <LabelInput>Nome completo: </LabelInput>
              <InputUser type="text" />
              <br />
              <br />
              <LabelInput>E-mail: </LabelInput>
              <InputUser type="text" />
              <br />
              <br />
              <LabelInput>Número para contato: </LabelInput>
              <InputUser type="text" />
              <br />
              <br />
              <LabelInput>Número de O.S.: </LabelInput>
              <InputUser type="text" />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <BotaoCadastrarInstrumento type="submit">
                Registrar cliente
              </BotaoCadastrarInstrumento>
              <BotaoCadastrarInstrumento
                onClick={() => navigate("/cadastroinstrumento")}
              >
                Cadastrar Intrumento
              </BotaoCadastrarInstrumento>
            </CampoCadastroInstrumento>
          </CampoJuntarDiv>
        </div>
      </main>
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
