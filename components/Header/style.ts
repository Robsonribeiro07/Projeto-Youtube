import styled from "styled-components";


export const HeaderContainer = styled.header`
 padding: 0.4rem 0.5rem;
 width: 100%;
 display: flex;
 flex-direction: row;

padding-right: 2.5rem;

padding-left: 2rem;

 @media screen  and (min-width: 768px) {
    justify-content: space-between;

    margin-left: 1rem;
 }

 position: relative;
 
 &::before{
    position: absolute;
    content: '';
    bottom: 0;
    height: 1px;
    background-color: red;
    width: 0;

   
 }
 &.active::before{
    width: 100%;
    transition: 0.5s;
 }

 

 @media screen and (max-width:768px){
    margin-top: 1rem

  
    
    }   



 .navYoutube {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    cursor: pointer;
    z-index: 3;
        
    img {
        width: 6rem;
    }
 }
 .assetsSearch {
    width: 45%;
    display: flex;
    align-items: center;
    gap: 1rem;
    position: relative;
   
   

    @media screen and (max-width: 768px) {
        position: absolute;
        right: 0;
        transition: 0.5s ease-out;
           

        &:focus-within {
            width: 60%;
            transition: 0.5s ease-out;
        }


    
    }
     

     }
    

        

        .Microfone {
            border: 0;
            background-color: transparent;
            height: 45px;
            width: 50px;
            padding: 0.5rem;
            display: flex;
            justify-content: center;
            border-radius: 9999px;
            align-items: center;
        background-color: #222222; 
           
        @media screen and (max-width: 768px) {
            display: none;
    }
   
}
         


 
.navSearch {
    
    background-color: #121212;
    width: 100%;
    border-radius: 2rem;
    border: 1px solid #303030;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    position: relative;
    flex: 1;
    
    
    input {
        border: 0;
        background-color: transparent;
        outline: none;
        width: 100%;
        color: white;
    }

    .icone {
        background-color: #222222;
        position: absolute;
        height: 100%;
        bottom: 0;
        right: 0;
        border-top-right-radius: 1rem;
        align-items: center;
        justify-content: center;
        display: flex;
        border-bottom-right-radius: 1rem;
        width: 10%;
    }
}

.navProfile {
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
        border-radius: 100%;
        width: 32px; 
    }

}

@media screen and (max-width: 768px) {
    .navProfile {
        display: none;
    }
   
}
`