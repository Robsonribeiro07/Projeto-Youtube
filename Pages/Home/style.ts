import styled from "styled-components";

export const HomePageContent = styled.div`
background-color: #0f0f0f;
padding-left: 2rem;
height: 100vh;
flex-direction: column;
margin-top: 0.5rem;
gap: 1.5rem;
display: flex;
padding-bottom: 1rem;

.Not_found_videos {
    position: absolute;
    left: calc(50% - 32px);
    top: 50%    ;
    border-radius: 8px;
    background-color: #222222;
    padding: 0.9rem 2rem;
}
@media screen and (max-width: 768px) {
    padding: 0;
    
}
ul {
    display: flex;
    gap: 1rem;
}


.VideoContainer {
    display: flex; 
    flex-wrap: wrap;
    width: 100%;
    gap: 1.5rem;
    

    @media screen and (max-width:768px) {
        gap: 1.5rem;
    flex-direction: column;
        
    }
} 

`