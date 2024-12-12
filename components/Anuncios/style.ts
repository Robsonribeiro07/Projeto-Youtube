import styled from "styled-components";

export const AnuncioContent = styled.div`

width: 100%;
min-height  : 20%;
border-radius: 0.7rem;

display: flex;
border: 1px solid gray;
flex-direction: column;
overflow: hidden;


@media screen and (max-width: 768px) {
    margin: 0;
}
img {
    width: 100%;
    object-fit: cover;
    height: 50%;
}


.assets {
    width: 100%;
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    flex-direction: row;

    .details {
        display: flex;
    }
      
 
    .list{
        border-radius: 9999px;
        height: fit-content;
        padding: 1px;
        cursor: pointer;
        
        &:hover {
            
        background-color: #272727;
        }
    }
    
.iconeVerical {

    @media screen and (margin: 768px){
        position: absolute; 
    }

&:hover {
    background-color: #272727;
}
}
    span {
       display: flex;
       flex-direction: column;
    }
    
    .details {
        gap: 0.3rem;
        align-items: flex-start;
        display: flex;
        flex-direction: column;

        h6 {
            display: flex;
            align-items: center;
            gap: 0.2rem;

            h5 {
                font-weight: 400;
                 opacity: 0.7;
            }
        }

        h4 {
            font-weight: 400;
        }
    }
    

    img {
        width: 35px;
        height: 35px;
        border-radius: 9999px;
    }
}

button{
    margin-left: 2rem;
    width: fit-content;
    height: fit-content;;
    padding: 0.5rem;
    white-space: nowrap;
    border-radius: 1.5rem;
    color: black;
    background-color: #1f989b;
    border: 0;
    font-weight: 500;

    cursor: pointer;


   
} 


`