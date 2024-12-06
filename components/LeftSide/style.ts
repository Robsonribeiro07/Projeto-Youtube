import styled from "styled-components";

interface Props {
    active?: boolean;
    
}
interface LeftProps {
    activeLeft?: boolean;
}
export const LefSide = styled.div<LeftProps>`

height: 100%;
min-width: 17vw;
padding: 0.6rem 1rem;
display: flex;
flex-direction: column;
overflow: auto;
gap: 1rem;
user-select: none;

@media screen and (max-width: 768px) {
   min-width: ${props => props.activeLeft ? "40vw" : "0"};
   position: relative;
   display: ${props => props.activeLeft ? "flex" : "none"};
}

.assets {
    span {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 0.5rem;

    font-size: 0.9rem; 
    width: 100%;
    border-radius: 8px;
    position: relative;
    top: -20px;
   
  

  


    &:hover {
    background-color: #3f3f3f   ;
}
     
    .MostarMenos {
        cursor: pointer;
    }
} 
    
}

`
export  const NavHome = styled.div`
width: 100%;
display: flex;
flex-direction: column;


&::after {
    content: '';
    background-color: #3f3f3f;
    width: 95%;
    height: 1px;
    margin-top: 1rem;
}

span {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    font-weight: 400;
    padding: 0.5rem;
    border-radius: 8px;
    font-size: 0.9rem;
    cursor: pointer;
    &:hover {
    background-color: #3f3f3f   ;
}

    img {
        width: 23px;
    }
}
`

export const YourNav = styled.div `
display: flex;
width: 100%;
flex-direction: column;
  align-items: start;

  &::after {
    content: '';
    background-color: #3f3f3f;
    width: 100%;
    left: -15px;
    position: relative;
    height: 1px;
    margin-top: 1rem;
}

  h4 {
    font-weight: 500;
    width: 100%;
    display: flex;
    border-radius: 8px;
    gap: 0.5rem;

    align-items: center;
    padding: 0.5rem;
    cursor: pointer;
    &:hover {
    background-color: #3f3f3f   ;
}
  }
span {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    font-weight: 400;
    padding: 0.5rem;
    border-radius: 8px;
    font-size: 0.9rem;
    width: 100%;

    cursor: pointer;
    &:hover {
    background-color: #3f3f3f   ;
}
} 



`

export const NavInscricoes = styled.div<Props>`
  padding: 0.3rem 0rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: start;

  /* Controle de animação de crescimento */
  max-height: ${props => (props.active ? '100vh' : '40vh')}; /* Ajuste de altura máxima para animação */
  overflow: ${props => props.active ? "auto" : "hidden"};    
  transition: max-height 1s ease;


h5 {
    font-size: 1rem ;
    margin-bottom: 1rem;
    font-weight: 500;
}

span {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 0.5rem;

    font-size: 0.9rem; 
    width: 100%;
    border-radius: 8px;
    


    &:hover {
    background-color: #3f3f3f   ;
}
     
    .MostarMenos {
        cursor: pointer;
    }
} 

`


export const Explorar = styled.div`
  
  display: flex;
padding: 0.6rem 0rem;
top: -25px;
 position: relative;
  flex-direction: column;
 

 h4 {
    margin-bottom: 1rem;
 }

span {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 0.5rem;

    font-size: 0.9rem; 
    width: 100%;
    border-radius: 8px;
    


    &:hover {
    background-color: #3f3f3f   ;
}
}

`