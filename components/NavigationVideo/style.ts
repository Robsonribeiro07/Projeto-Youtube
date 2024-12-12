import styled from "styled-components";

interface navVideoProps {
  translateX: number
}

export const NavVideoPage = styled.div<navVideoProps>`
  width: 90%;
  position: relative;
  background-color: #0f0f0f; /* Garante a consistência do fundo */
  overflow: hidden;
  margin-left: 1rem;


  &.active::before {
    background: linear-gradient(to right, rgba(15, 15, 15, 1), rgba(15, 15, 15, 0)); /* Ajustado ao fundo */
  }

  /* Gradiente à direita */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 50px;
    background: linear-gradient(to left, rgba(15, 15, 15, 1), rgba(15, 15, 15, 0)); /* Ajustado ao fundo */
    z-index: 1;
    pointer-events: none; /* Ignora cliques */
  }

  &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 50px;
      z-index: 2;
      pointer-events: none; /* Ignora cliques */
   



     
   }
   
  /* Lista com rolagem */
  ul {
    display: flex;
    gap: 0.5rem;
    scroll-behavior: smooth; /* Suaviza a rolagem */
    margin: 0;
    padding: 0;
    white-space: nowrap; /* Evita quebra de linha */
    transition: 0.5s ease-in-out;
 
    transform: translateX(${props => `${props.translateX}px`});
 
    .active {
      background-color: white;
      color: black;
    }

    li {
      list-style: none;
      white-space: nowrap; /* Evita quebra de linha */
      background-color: #272727; /* Cor dos itens */
      padding: 0.4rem 0.7rem;
      border-radius: 8px;
      flex-shrink: 0; /* Evita encolher */
      cursor: pointer;
      transition: transform 0.3s ease-in-out; /* Transição suave para cada item */

      
      
    }
  }
`;

export const Container = styled.div`
  width: 95%;
  position: relative;


  
  .Rigth {
    right: 0;
    bottom:30%;
    position: absolute;
    
  }

  .left{
    left: -20px;
    bottom:30%;
    position: absolute;

    @media screen and (max-width: 768px){
      left: 0;
      z-index: 3;
      bottom: 30%;
      
    }
    
  }

`