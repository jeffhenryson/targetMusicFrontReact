import axios from "axios";
import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";

const servico = axios.create({
  baseURL: "http://localhost:8080",
});

function Cadastroinstrumento() {
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
      modeloRef.current.value,
      marcaRef.current.value,
      tipoRef.current.value,
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
      {/* Header da Pagina  */}

      <header></header>

      {/* Main da pagina */}

      <main>
        <form onSubmit={handleCadastrarInstrumento}>
          <div class="Box">
            <fieldset class="fieldsetCampo">
              <div class="box-questao">
                <label htmlFor="">Modelo do instrumento: </label>
                <input type="text" ref={modeloRef} />
              </div>
              <div class="box-questao">
                <label htmlFor="">Nome da marca: </label>
                <input type="text" ref={marcaRef} />
              </div>
              <div class="box-questao">
                <label htmlFor="">O tipo do instrumento: </label>
                <input type="text" ref={tipoRef} />
              </div>
              <div class="box-questao">
                <label htmlFor="">A cor do instrumento: </label>
                <input type="text" ref={corRef} />
              </div>
              <div class="box-questao">
                <label htmlFor="">O intrumento tem circuito: </label>
                <input type="text" ref={circuitoRef} />
              </div>
              <div class="box-questao">
                <label htmlFor="">O instrumento tem capa: </label>
                <input type="text" ref={capaRef} />
              </div>
              <div class="box-questao">
                <label htmlFor="">Marca da capa do instrumento: </label>
                <input type="text" ref={marcaDaCapaRef} />
              </div>
              <div class="box-questao">
                <label htmlFor="">O instrumento tem corda: </label>
                <input type="text" ref={cordaRef} />
              </div>
              <div class="box-questao">
                <label htmlFor="">Marca da corda: </label>
                <input type="text" ref={marcaDaCorda} />
              </div>
              <div>
                <Button variant="contained" color="success" type="submit">
                  Enviar
                </Button>
              </div>
            </fieldset>
          </div>
        </form>
      </main>

      {/* Footer da pagina */}
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
