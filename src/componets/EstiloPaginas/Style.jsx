import styled from "styled-components";

// Parte do CAbeçalho inteiro

export const Cabecalho = styled.div`
  position: relative;
  background-color: #000000;
  color: white;
  margin-top: 0;
  padding: 1%;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;

export const Titulo = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
`;

export const Botao = styled.button`
  position: relative;
  display: flex;
  appearance: button;
  background-color: #504f4f;
  background-image: none;
  border: 1px solid #000;
  border-radius: 4px;
  box-shadow: #fff 4px 4px 0 0, #000 4px 4px 0 1px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: ITCAvantGardeStd-Bk, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 5px 10px 0;
  overflow: visible;
  padding: 12px 40px;
  text-align: center;
  text-transform: none;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  justify-content: right;

  &:focus {
    text-decoration: none;
  }

  &:hover {
    text-decoration: none;
  }

  &:active {
    box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;
    outline: 0;
  }

  &:not([disabled]):active {
    box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
    transform: translate(2px, 2px);
  }

  @media (min-width: 768px) {
    padding: 12px 50px;
  }
`;

export const BotaoCadastrarInstrumento = styled.button`
  position: relative;
  display: flex;
  top:4vh;
  left: 0.1vh;
  appearance: button;
  background-color: #000000;
  background-image: none;
  border: 5px solid #000;
  border-radius: 4px;
  box-shadow: #fff 4px 4px 0 0, #000 4px 4px 0 1px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: ITCAvantGardeStd-Bk, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0 5px 10px 0;
  overflow: visible;
  padding: 20px 40px;
  text-align: center;
  text-transform: none;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  justify-content: right;

  &:focus {
    text-decoration: none;
  }

  &:hover {
    text-decoration: none;
  }

  &:active {
    box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;
    outline: 0;
  }

  &:not([disabled]):active {
    box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
    transform: translate(2px, 2px);
  }

  @media (min-width: 768px) {
    padding: 12px 50px;
  }
`;

export const SeparadorDiv = styled.div`
  position: relative;
  width: 5%;
  height: 5%;
`;

export const SeparadorDivDois = styled.div`
  position: relative;
  width: 50%;
  height: 5%;
`;

export const SeparadorDivTres = styled.div`
  position: relative;
  left: 10vh;
`;

export const LogoMarca = styled.img`
  position: relative;
  width: 260px;
  height: 80px;
`;

// fim cabeçalho

export const CampoJuntarDiv = styled.div`
  position: relative;
  display: flex;
  top: 5vh;
  justify-items: center;
  width: 60%;
  margin-right: auto;
  left: 20%;
`;

export const CampoCadastroInstrumento = styled.form`
  position: relative;
  padding: 1%;
  width: 45%;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 10px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const CampoImagemCadastroInstrumento = styled.img`
  position: relative;
  width: 66vh;
  height: 80vh;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

export const InputUser = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  color: #000000;
  font-size: 15px;
  width: 90%;
  letter-spacing: 2px;
  margin: 0.5%;
  padding: 1%;
`;

export const LabelInput = styled.label`
  position: relative;
  top: 0px;
  pointer-events: none;
  transition: 0.5s;
  margin: 0.5%;
  padding: 1%;
`;
