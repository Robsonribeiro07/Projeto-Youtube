import styled from "styled-components";

export const SugestaoWhitouInput = styled.div`

width: 90%;
height: fit-content;
min-height: 10vh;
max-height: 50vh;
overflow: hidden;
border-radius: 8px;

display: flex;
flex-direction: column;
position: absolute;
left: 0;
z-index: 2;
top: 50px;
padding: 1rem 0;
background-color: #272727;

  

;


li {
    list-style: none;

    width: 100%;
    display: flex;
    align-items: center;    
    gap: 0.5rem;
    font-weight: 500;
    cursor: pointer;
    padding: 0.3rem 1rem;
    color: gray;


    button {
        border: 0;
        background-color: transparent;
        color: blueviolet; 
        position: absolute;
        right: 10px;
        cursor: pointer;
    }

    &:hover {
        background-color: #3f3f3f;
    }
 
}
`