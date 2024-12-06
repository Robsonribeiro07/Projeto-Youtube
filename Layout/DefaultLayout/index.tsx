import { LayoutContainer } from "./style";
import {Header} from '../../components/Header/index'

import {LeftSide} from '../../components/LeftSide/index'
import { Outlet } from "react-router-dom";
import { useState } from "react";
export function DefaultLayout(){
    const [ShowMoreLeftSide, SetShowMoreLeftSide] = useState<boolean>(false)

    return(
        <LayoutContainer>
            <Header activeShowMore={SetShowMoreLeftSide}/>
          
          <div className="content">
          <LeftSide ShowMore={ShowMoreLeftSide}/>
          <div className="ContentPage">
         <Outlet/>
          </div>
          </div>
            
        </LayoutContainer>
    )
} 