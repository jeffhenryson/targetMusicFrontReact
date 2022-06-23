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

function Cadastroinstrumento() {
  let navigate = useNavigate();

  const modeloRef = useRef();
  const marcaRef = useRef();
  const tipoRef = useRef();
  const corRef = useRef();
  const circuitoRef = useRef();
  const capaRef = useRef();
  const marcaDaCapaRef = useRef();
  const cordaRef = useRef();
  const marcaDaCorda = useRef();
  const [intrumentos, setIntrumentos] = useState([]);

  async function handleCadastrarInstrumento() {
    const instrumentoMusical = new InstrumentoMusical(
      tipoRef.current.value,
      marcaRef.current.value,
      modeloRef.current.value,
      corRef.current.value,
      circuitoRef.current.value,
      capaRef.current.value,
      marcaDaCapaRef.current.value,
      cordaRef.current.value,
      marcaDaCorda.current.value
    );
    const { data } = await servico.post(
      "/instrumentoMusical",
      instrumentoMusical
    );
  }

  return (
    <div>
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

      <body>
        <div>
          <CampoJuntarDiv>
            <CampoImagemCadastroInstrumento
              img
              src={require("../imagens/violao.png")}
            ></CampoImagemCadastroInstrumento>
            <CampoCadastroInstrumento onSubmit={handleCadastrarInstrumento}>
              <LabelInput>Tipo do instrumento: </LabelInput>
              <InputUser type="text" ref={tipoRef} />
              <br />
              <br />
              <LabelInput>Marca do instrumento: </LabelInput>
              <InputUser type="text" ref={marcaRef} />
              <br />
              <br />
              <LabelInput>Modelo do instrumento: </LabelInput>
              <InputUser type="text" ref={modeloRef} />
              <br />
              <br />
              <LabelInput>Cor do instrumento: </LabelInput>
              <InputUser type="text" ref={corRef} />
              <br />
              <br />
              <LabelInput>Circuito do instrumento: </LabelInput>
              <InputUser type="text" ref={circuitoRef} />
              <br />
              <br />
              <LabelInput>Capa do instrumento: </LabelInput>
              <InputUser type="text" ref={capaRef} />
              <br />
              <br />
              <LabelInput>Marca da Capa: </LabelInput>
              <InputUser type="text" ref={marcaDaCapaRef} />
              <br />
              <br />
              <LabelInput>Corda do instrumento: </LabelInput>
              <InputUser type="text" ref={cordaRef} />
              <br />
              <br />
              <LabelInput>Marca da corda: </LabelInput>
              <InputUser type="text" ref={marcaDaCorda} />
              <br />
              <br />
              <BotaoCadastrarInstrumento type="submit">
                Registrar Instrumento
              </BotaoCadastrarInstrumento>
              <BotaoCadastrarInstrumento
                onClick={() => navigate("/cadastrocliente")}
              >
                Cadastrar Cliente
              </BotaoCadastrarInstrumento>
            </CampoCadastroInstrumento>
          </CampoJuntarDiv>
        </div>
      </body>
    </div>
  );
}

export default Cadastroinstrumento;

class InstrumentoMusical {
  modelo;
  marca;
  tipo;
  cor;
  circuito;
  capa;
  marcaDaCapa;
  corda;
  marcaDaCorda;

  constructor(
    modelo,
    marca,
    tipo,
    cor,
    circuito,
    capa,
    marcaDaCapa,
    corda,
    marcaDaCorda
  ) {
    this.modelo = modelo;
    this.marca = marca;
    this.tipo = tipo;
    this.cor = cor;
    this.circuito = circuito;
    this.capa = capa;
    this.marcaDaCapa = marcaDaCapa;
    this.corda = corda;
    this.marcaDaCorda = marcaDaCorda;
  }
}
