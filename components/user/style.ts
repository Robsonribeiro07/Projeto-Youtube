import styled from "styled-components";

export const UsersContent = styled.span`
 
 display: flex;   
 color: white;
 width: 100%;
 align-items: center;
 font-size: 0.8rem;
 font-weight: 600;
 position: relative;
 border-radius: 8px;
 transition: 1s;

 &:hover {
    background-color: #3f3f3f   ;
    padding: 0.5rem;
    cursor: pointer;
}
 img {
    border-radius: 100%;
    width: 25px ;
 }



`

export const VideoNovo = styled.p `
 height: 5px;
 width: 5px;
 background-color: orange;
 border-radius: 100%;
 position: absolute;
 right: 0;

`