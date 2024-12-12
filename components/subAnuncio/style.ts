import styled from "styled-components";

export const SubAnuncio = styled.div`

width: 100%;
height: 23%;
display: flex;
position: relative;
gap: 0.5rem;
   
.list {
    position: absolute;
    right: -10px;
    top: -2px;
}
.detailsText {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;

    button {
            border: 0;
            background-color: #263850;
            height: 40px;
            width: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.2rem;
            border-radius: 1.5rem;


            font-size: 0.9rem;
              
            .arrow {
                display: flex;
                color: black;
                margin-bottom: 0.4rem;
                
            }
        }

    .top { 

        display: flex;
        flex-direction: column;
        gap: 0.1rem;

        p {
            font-size: 0.8rem;
        }
       
        h5 {
            font-size: 0.7rem;
            font-weight: 300;
            line-height: 1.6;
            opacity: 0.7;
        }

        h4 {
            font-size: 0.8rem;
            display: flex;
            align-items: center;
            gap: 0.3rem;
        }

       
    }
}
img {
    height: 100%;
}


`