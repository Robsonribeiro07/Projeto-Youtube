import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;

    width: 100vw;
    background-color: #0f0f0f;
    height: 100vh;
    overflow-x: hidden;

    @media screen and (max-width: 768px){

      overflow-y: auto;
      
    }
  }
  #root {
  }
  html,button,input {
    font-family: 'Roboto';
    font-size: 1rem;
  }

  * {
    padding: 0;
    color: white;
    margin: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 12px; /* Largura da barra de rolagem */
    height: 5px;

    @media screen and (max-width: 768px) {
      width: 1px;
      height: 1px;
      
    }
}

::-webkit-scrollbar-track {
    background-color: transparent; /* Cor do fundo da barra de rolagem */
}

::-webkit-scrollbar-thumb {
    background-color: #888; /* Cor da parte que pode ser arrastada */
    border-radius: 10px; /* Arredondamento das bordas */
}

::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Cor da parte arrastável quando o mouse passa em cima */
}
`
