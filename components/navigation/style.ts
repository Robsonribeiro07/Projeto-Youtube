import styled from "styled-components";

export const NavigationContent = styled.div`
width: 100%;
margin-top: 1rem;
 
 ul {
    display: flex;
    width: 100%;
    overflow: auto;
    gap: 1rem;
     
    .active{
        color: black;
        background-color: white;
    }

 } 
 li {
    cursor: pointer;

    list-style: none;
    padding: 0.4rem;
    height: fit-content;
    width: fit-content;
    color: white;
    background-color: #222222;
    border-radius: 8px;
 }


`