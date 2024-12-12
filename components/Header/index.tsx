import { HeaderContainer } from "./style";
import youtubeLogo from '../../src/assets/svg/youtubeLogo.svg'
import React, { useContext,  } from "react";
import { List, MagnifyingGlass } from "@phosphor-icons/react";
import { Bell, Microphone, VideoCamera } from "@phosphor-icons/react/dist/ssr";
import { ProductContext } from "../../Provide";



interface Props {
    activeShowMore: React.Dispatch<React.SetStateAction<boolean>>;
    handleDefaultNav: () => void;
}



export function Header({activeShowMore, handleDefaultNav}: Props) {
    const windowWidth = 768

    
    
    const {animationHeader, handleAnimationStartWhitoutNavigate, setDisabled, setInputValue} = useContext(ProductContext)
  
    
 
      
    const handleFunctions = () => {
        setDisabled(false)

        
        if(window.innerWidth < windowWidth) {
            activeShowMore(prev => !prev)
                    
            } else if(window.innerWidth > windowWidth) {
                handleDefaultNav()
                    
    
            }


            

    }
    

    const handleValueInput = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event?.currentTarget.value)
    return(
        <HeaderContainer className={animationHeader ? "active" : ""}>
        <div className="navYoutube" > 
         <List size={25} color="white" onClick={handleFunctions}  />

         <img src={youtubeLogo} alt="" onClick={() => handleAnimationStartWhitoutNavigate('/home')}/>

        </div>

        <div className="assetsSearch">
        <div className="navSearch">
            <input type="text" placeholder="Pesquisar" onChange={(event) => handleValueInput(event)} />
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