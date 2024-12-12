import styled from "styled-components";

export const SubVideoContent = styled.div`

width:  100%;
height:  15%;

display: flex;
position: relative;
.leftSide {
    display: flex;
    gap: 0.5rem;

    .detailsText { 
        display: flex;
        flex-direction: column;

        p {
            font-size: 0.9rem;
        }

          
        h5 {
            font-size: 0.8rem;
            font-weight: 300;
            margin-top: 0.2rem;
            opacity: 0.7;
        }
        h6 {
            font-size: 0.7rem;
            font-weight: 300;
        }

        span {
            font-size: 0.7rem;
            background-color: #222222;
            padding: 0.2rem;
            font-weight: bold;
            color: #a7a7a7;
            width: fit-content;
            position: absolute;
            bottom: -5px;
        }
    }
 
}
img {
    border-radius: 8px;
    height: 100%;
    object-fit: contain;
}

`