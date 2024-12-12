import styled from "styled-components";

interface PropsList {
   translateX: number
}

export const NavigationContent = styled.div<PropsList>`

   min-height: 10%;
   width: 100%;


   position: relative;
   overflow: hidden;

   @media screen and (max-width: 768px) {
      width: 90vw;
      margin-left: 1rem;
    
   }


   &.active::before {
      background: linear-gradient(to right, rgba(15, 15, 15, 1), rgba(15, 15, 15, 0));
  }   

   &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 30px;
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
      width: 100px;
      z-index: 2;
      pointer-events: none; /* Ignora cliques */


     
   }


@media screen and (max-width: 768px) {
min-height: 6%;

}

 ul {
    display: flex;
    min-width: 100%;
    
    gap: 1rem;
    flex-wrap: nowrap;

    transform: translateX(${props => `${props.translateX}px`});

    transition: 0.5s ease-in-out;
    
     
    .active{
        color: black;
        background-color: white;
    }

 } 
 li {
    cursor: pointer; 

    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    padding: 0.5rem 0.9rem;
    height: fit-content;
    min-width: fit-content;
    color: white;
    background-color: #222222;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: bold;
 }


`

export const Content = styled.div`
position: relative;
width: 78vw;
max-height: 10%;

.left {
   position: absolute;
   left: -20px;
   bottom: 30%;
}
.rigth {
   position: absolute;
   bottom: 30%;
   right: -30px;
}

`