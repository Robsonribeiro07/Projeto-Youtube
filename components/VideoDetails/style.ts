import styled from "styled-components";

export const VideoContent = styled.div`
  

  width: 31%;
  

  cursor: pointer;
  @media screen and (max-width: 768px) {
    
    width: 100%;
    min-height: fit-content;
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

    h3 {
      font-size: 1rem;
      opacity: 0.8;
    }

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