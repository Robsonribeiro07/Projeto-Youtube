import styled from "styled-components";

export const VideoContent = styled.div`
  
height: 10%;
  border-radius: 8px;
  width: 28%;

  cursor: pointer;
  @media screen and (max-width: 768px) {
    
    width: 47%;
    font-size: 0.8rem;
    height: 10%;
    
  }

  img, video {
    border-radius: 1rem;
    margin-bottom: 0.5rem;
    width: 100%;
  }
  .DetailsInfo {
    display: flex;
    gap: 1rem;

    img {
        width: 35px;
        height: 35px;

        border-radius: 9999px;
    }
    p{
        color: white ;
        opacity: 0.7;
        margin-bottom: 0.5rem;
    }
    span {
        color: white;
        opacity: 0.7;
        font-weight: 300;
    }
  }


`