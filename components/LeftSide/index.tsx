import { useContext, useEffect, useState } from "react";
import { Explorar, LefSide, NavHome, NavInscricoes, YourNav } from "./style";
import { UsersSide} from "../user/index"
import { Bag, CaretDown, CaretRight, CaretUp, Clock, ClockCounterClockwise, House, MagnifyingGlass, MusicNotes, Queue, ThumbsUp,  } from "@phosphor-icons/react";

import { useLocation } from "react-router-dom";

import IconeShort from "../../src/assets/svg/IconeShort.svg"


interface Props {
  ShowMore: boolean;
}

import VideosIcon from "../../src/assets/imgs/image.png"	
import { ListDashes } from "@phosphor-icons/react/dist/ssr";
import { ProductContext } from "../../Provide";
    export function LeftSide ({ShowMore}: Props) {
     
      const [disabled, setDisabled] = useState(false)
      const location = useLocation()

      
 
      const {user} = useContext(ProductContext)


      useEffect(() => {
         
        setDisabled(location.pathname.includes('watch') ? true : false)
      }, [location])
      
      
      const [showMoreList, SetShowMoreList] = useState(false)

    
      
      
     

      const handleShowMore = () => {
        SetShowMoreList(prev => prev = !prev)
      }
 

        return(
       
            <LefSide activeLeft={ShowMore} style={{display: disabled ? "none" : "flex"}}>
            <NavHome>
            <span>
                <House  size={23}/>
                <p>Inicio</p>
            </span>
            <span>
                <img src={IconeShort} alt="" />
                <p>Shorts</p>
            </span>
            <span>
              <img src={VideosIcon} alt="" />
                <p>Inscriçoes</p>
            </span>

            </NavHome> 
            <YourNav>
            <h4>Você <CaretRight/> </h4>

            <span>
            <ClockCounterClockwise size={23} />
            <p>Historico</p>
            </span>
            
            <span>
            <Queue size={23} />
            <p>Playlists</p>
            </span>

            <span>
            <Clock size={23} color="#f2eeee" />
            <p>Assitir mais tarde</p>
            </span>

            <span>
            <ThumbsUp size={23} color="#f2eeee" />


            <p>Videos com "Gostei" </p>
            </span>

            </YourNav>
            

           <NavInscricoes active={showMoreList}> 
           <h5>Inscriçoes</h5>
            
            {user?.length > 0 && (
              user.map((user, index) => (
                <UsersSide key={index} user={user} />
              ))
            )}
          
          
           </NavInscricoes>

           <div className="assets">
           <span  >
           <ListDashes size={23} />
           <p>Todas as Inscriçoes</p>


           </span>
           
           <span onClick={handleShowMore}>
            {showMoreList ? (
              <>
              <CaretUp size={23}  />
              <p>Mostrar Mostrar Menos</p>
              </>
            ): (
              <>
              <CaretDown size={23} />
               <p>Mostrar Mais</p>
              
              </>
            )
          
          }
           </span>
           </div>
           
           <Explorar>
           <h4>Explorar</h4>

           <span>
            <Bag size={25}/>
            Em Alta
           </span>
            
           <span>
           <MusicNotes size={25} />
           
           <p>Musicas</p>
            
           </span>

           <span>
            Em Alta
           </span>

           <span>
            <MagnifyingGlass/>
            Em Alta
           </span>

           </Explorar>

            </LefSide>
        )
    }