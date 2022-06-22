import React from "react";
import {
  Cabecalho,
  Botao,
  SeparadorDiv,
  SeparadorDivDois,
  LogoMarca,
} from "./estiloHome";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

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
          <Botao
            onClick={() => {
              navigate("sobre");
            }}
          >
            Sobre{" "}
          </Botao>
          <SeparadorDiv></SeparadorDiv>
          <Botao>Contato</Botao>
          <SeparadorDiv></SeparadorDiv>
          <Botao
            onClick={() => {
              navigate("cadastrocliente");
            }}
          >
            Admin
          </Botao>
          <SeparadorDiv></SeparadorDiv>
        </Cabecalho>
      </header>
      <body></body>
    </div>
  );
}

export default Home;
