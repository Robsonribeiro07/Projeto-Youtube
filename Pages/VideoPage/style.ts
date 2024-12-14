import styled from "styled-components";

export const VideoPage = styled.div`  


 height: 100vh;
 width: 100%;
 display: flex;
padding: 1.2rem 4rem; 
gap: 0.7rem;
margin-left: 1.5rem;

@media screen  and (max-width: 768px){
  padding: 0.8rem 0rem;
  align-items: flex-start;
  margin: 0rem;
  flex-direction: column;
  gap: 2rem;
  overflow: auto;

}

 .leftSide {
  flex: 1;
  h3 {
      margin-top: 1rem;
      font-size: 1.2rem;
     }

     

   .VideoContainer {
    top: 0  ;
    position: static;

    border-radius: 1rem;
    overflow: hidden;
    height: 74%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 57vw;

     
    @media screen  and (max-width: 768px){
      width: 100%;
      border-radius: 0;
      height: 30vh;

} 


    border-radius: 1rem;

    iframe {

      height: 100%;
      min-width : 100%;
      object-fit: contain;


      @media screen and (max-width: 768px) {
        width: 100vw;
        border-radius: 1rem;
        object-fit: cover;
        
      }
    }
   }
 }
 
 .assets {
  display: flex;
  width: 97%;
  margin-top: 0.5rem;
  flex-direction: column;
  gap: 1rem;

  .leftSide {
    display: flex;
    gap: 0.8rem;

    align-items: flex-start;
    height: 100vh;

     .container {
      display: flex;
      justify-content: space-between;
      width: 100%;

      .left{
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

 
    .profileDetails {
      display: flex;
      gap: 0.4rem;
      flex-direction: column;
       
      p {
        font-size: 0.7rem;
        opacity: 0.7;
      }
    }

    

    .inscritionContent{
      display: flex;
      background-color: white;
      align-items: center;
      

      padding: 0.5rem ;
      width: fit-content;
      border-radius: 1.5rem;;
      align-items: center;
      margin-left: 1rem;
      font-weight: 500;
      padding-left: 1rem;
      cursor: pointer;
      height: fit-content !important;
      font-size: 0.9rem;


        
      
      .Inscrito {
        padding: 0.1rem 0rem;
        padding-right: 1rem;
        background-color: white;
        color: black;
      }
    }
    .active {
      background-color: #272727;
    } 

     img {
      width: 44px;
      height: 44px;
      border-radius: 999px;
     }
  }

  .rightSide {
    display: flex; 
    align-items: center;
    gap: 1rem;

   

    .assetLikes {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background-color: #272727;
      height: fit-content;
      justify-content: center;
      width: 130px;
      padding: 0.3rem 0.5rem;

      border-radius: 1.5rem;
      position: relative;

       p {

        &::after {
        content: '';
        height: 60%;
        width: 1px;
        background-color: white;
        opacity: 0.3;
        position: absolute;
        right: 45px;
        bottom: 5px;

      }
       }
    }

    .assetsShared {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      background-color: #272727;
      justify-content: center;
      height: fit-content;
      width: 130px;
      padding: 0.5rem 0.5rem;
      font-size: 0.9rem;
      border-radius: 1.5rem;
      font-weight: 500;
    }

    .assetsOut {
      display: flex;
      align-items: center;
      background-color: #272727;
      justify-content: center;
      height: fit-content;
      border-radius: 1.5rem;
      height: 40px;
      width: 40px;

    }

    .disabled {
      display: none;
    }}
  }
 }

`

export const RightSide = styled.div`


   height: 100vh;
   display: flex;
   flex-direction: column;
   gap: 1rem;

   width: 25vw;
   margin-right: 7rem;

   @media screen  and (max-width: 768px){
    width: 100vw;
   }
       


`