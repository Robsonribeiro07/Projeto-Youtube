import { LayoutContainer } from "./style";
import {Header} from '../../components/Header/index'

import {LeftSide} from '../../components/LeftSide/index'
import { Outlet } from "react-router-dom";
import { useState } from "react";


export function DefaultLayout(){
    const [ShowMoreLeftSide, SetShowMoreLeftSide] = useState<boolean>(false)
    const [defaultNav, setDefaultNavState] = useState(false)
    





    const handleDefaultNav = () => {
        setDefaultNavState(prev => !prev)

        
    }

    
  
  

    return(
        <LayoutContainer>
            <Header activeShowMore={SetShowMoreLeftSide} handleDefaultNav={handleDefaultNav}/>
          
          <div className="content">
          <LeftSide ShowMore={ShowMoreLeftSide}  defaultNav={defaultNav} setDeafultNav={setDefaultNavState}/>
          <div className="ContentPage">
         <Outlet/>
          </div>
          </div>
            
        </LayoutContainer>
    )
} 