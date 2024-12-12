import { useContext, useEffect, useState } from "react";
import { Explorar, HomeDefaultNav, LefSide, NavHome, NavHomeDefault, NavInscricoes, YourNav } from "./style";
import { UsersSide} from "../user/index"
import { Bag, CaretDown, CaretRight, CaretUp, Clock, ClockCounterClockwise, House, MagnifyingGlass, MusicNotes, Queue, ThumbsUp, UserCircle,  } from "@phosphor-icons/react";
import React from "react";
import IconeShort from "../../src/assets/svg/IconeShort.svg"

import { useLocation } from "react-router-dom";


interface Props {
  ShowMore: boolean;
  defaultNav: boolean;
  setDeafultNav: React.Dispatch<boolean>;
}

import VideosIcon from "../../src/assets/imgs/image.png"	
import { ListDashes } from "@phosphor-icons/react/dist/ssr";
import { ProductContext } from "../../Provide";

    export function LeftSide ({ShowMore, defaultNav, setDeafultNav}: Props) {

      const {user, handleAnimationStartWhitoutNavigate, disabledLeft, setDisabled} = useContext(ProductContext)




       const location = useLocation()

      const HomeActiveIcon = location.pathname.includes('/home') ? 'active' : ''


      useEffect(() => {

        if(window.innerWidth < 768) {
          setDeafultNav(false)
        } 

        if(window.innerWidth > 768 && location.pathname.includes('/watch')) {

          setDisabled(true)
        
          } else {
            setDisabled(false)
          }
          
          
      }, [setDeafultNav, location])
     
     

      


     
      const [showMoreList, SetShowMoreList] = useState(false)

  

    
      
      
     

      const handleShowMore = () => {
        SetShowMoreList(prev => prev = !prev)
      }
 
        
       if(disabledLeft) {
        return null
       }
        return(

              <LefSide activeLeft={ShowMore} style={{minWidth: defaultNav ? "5vw" : "", padding: defaultNav ? "1rem 0.5rem  " : '1rem'}} >
              
              {defaultNav  &&(
                <NavHomeDefault>  
                  <span onClick={()=> handleAnimationStartWhitoutNavigate('/home')} className={HomeActiveIcon}>
                    <House size={25}/>
                    <p>Inicio</p>
                  </span>
                  
                  <span>
                  <img src={IconeShort} alt=""/>
                  <p>Shorts</p>
                  </span>

                  <span>
                  <img src={VideosIcon} alt="" />
                      <p>Inscriçoes</p>
                  </span>

                  <span>
                  <UserCircle size={25} />
                  <p>Voce</p>
                  </span>
                  

                </NavHomeDefault>
              )}

           

              {!defaultNav && (
                  <NavHome>
                  <span onClick={() => handleAnimationStartWhitoutNavigate('/home')} className="active">
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

              )}
  
              {!defaultNav && (
                <>
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
  
                </>
              )}
             
              </LefSide>

             
        )
    }