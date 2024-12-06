import { HeaderContainer } from "./style";
import youtubeLogo from '../../src/assets/svg/youtubeLogo.svg'
import React, { useContext } from "react";
import { List, MagnifyingGlass } from "@phosphor-icons/react";
import { Bell, Microphone, VideoCamera } from "@phosphor-icons/react/dist/ssr";
import { ProductContext } from "../../Provide";


interface Props {
    activeShowMore: React.Dispatch<React.SetStateAction<boolean>>;
}



export function Header({activeShowMore}: Props) {
    
    
    const {animationHeader, handleAnimationStart} = useContext(ProductContext)
  
    const handleShowMoreLeftSide = () => {
        activeShowMore(prev => !prev)
      }
 
      
    
    return(
        <HeaderContainer className={animationHeader ? "active" : ""}>
        <div className="navYoutube" onClick={() => handleAnimationStart('/home')}> 
         <List size={25} color="white" onClick={handleShowMoreLeftSide}  />

         <img src={youtubeLogo} alt="" />

        </div>

        <div className="assetsSearch">
        <div className="navSearch">
            <input type="text" placeholder="Pesquisar" />
            <div className="icone">
            <MagnifyingGlass color="white" size={25} />
            </div>

        </div>
        <button className="Microfone">
        <Microphone color="white" size={25}/>
        </button>

        </div>
        <div className="navProfile">
           <VideoCamera color="white" size={25}/>
           <Bell color="white" size={25}/>
           <img src="https://yt3.ggpht.com/yti/ANjgQV_XR_juRm3JXA_P8dr21MMzkq-h4n9XXiqbTxhR9_I=s88-c-k-c0x00ffffff-no-rj-mo" alt="" />
            
        </div>
        </HeaderContainer>
    )
}