    import React, { useContext, useEffect, useRef, useState } from "react";
    import { Content, NavigationContent } from "./style";
    import { ProductContext } from "../../Provide";
    import { CaretLeft, CaretRight } from "@phosphor-icons/react";

    import { useLocation } from "react-router-dom";
    export function Navigation() {
                           
        const location = useLocation() // reinciiando o scroll da barra ao mudar de rotas
        const [indexNav,SetIndexNav] = useState<number>(0)

        const [maxTranslateX, setMaxTranslateX] = useState<number>(0)

        const [positonX, setPostionX] = useState<number>(0)
        const [startX, setStartX] = useState<number>(0)

        const [onDragStart, setOndragStart] = useState<true | false>(false)

        useEffect(() => {  //; semore que muda de rotas o scroll do navigation vai zera
            setPostionX(0)
        },[location])


        const listRef = useRef<HTMLUListElement | null>(null)
        const itemRef = useRef<HTMLLIElement | null>(null)

        const handleMouseDown = (e: React.TouchEvent) => { // funçao para inicia o touchEvent no Navigation
            
            const posX = e.touches[0].clientX
            setStartX(posX - positonX)
            setOndragStart(true)


        }




        const handleMouseMove = (e: React.TouchEvent) => {
            
            if(!onDragStart) return

            const moveX = e.touches[0].clientX

            const maxTranslate = -(listRef.current!.scrollWidth - listRef.current!.clientWidth)
            
            const newTranslate = Math.min(0, Math.max(moveX - startX, maxTranslate))
            
            setPostionX(newTranslate)
        }


        
        const handleUp = () => {
            setOndragStart(false)
        }

         useEffect(() => {

            if(listRef.current){
                const listWidth = listRef.current?.scrollWidth
                const containerWidth = listRef.current.offsetWidth

                setMaxTranslateX(listWidth - containerWidth)
            }
         }, [])
        const handleTranslateX = (direction: "left" | "Rigth") => {


            if(listRef.current && itemRef.current){
            const itemWidth = itemRef.current.offsetWidth




            setPostionX(prev => {
                if(direction === "Rigth") {
                    return Math.max(prev - itemWidth * 2, - maxTranslateX)
                }
                else if(direction === "left"){
                    return Math.min(prev + itemWidth * 2, 0)
                }

                return prev
            })


        }
        }
        
        const {SetFiltered,} = useContext(ProductContext)

     

        const ListNavigation = [
            "Tudo",
            "Musicas",
            "Filmes",
            "Jogos",
            "Tecnologia",
            "Esportes",
            "Podcasts",
            "Educação",
            "Notícias",
            "Arte",
            "Culinária",
            "Viagens",
            "League of Legendes",
            "Fortine",
            "Free Fire",
            "Free Fire",
            
        ]

        const handleClickNav = (index: number, event: React.MouseEvent<HTMLLIElement>) => {
            const category = event.currentTarget.textContent
            SetIndexNav(index)
            SetFiltered((category ?? ''))
        }
        


        
        return (
    
        <Content>
            {positonX < 0 && window.innerWidth > 768 && (
            <CaretLeft className="left" onClick={() => handleTranslateX('left')}/>

            )}
            <NavigationContent translateX={positonX} className={positonX < 0 ? 'active' : ''}>
            
                <ul ref={listRef}>
                {ListNavigation.map((nav, index   ) => (
                    <li key={index} className={indexNav === index ? "active" : ''}
                    ref={itemRef}
                    value={'1'}
                    onClick={((event) => handleClickNav(index, event))}
                    onTouchStart={(e) => handleMouseDown(e)}
                    onTouchMove={(e) => handleMouseMove(e)}
                    onTouchEnd={handleUp}
                    >
                        {nav}
                    </li>
                ))}
                
                </ul>
                
            
            </NavigationContent>
        {Math.abs(positonX) < Math.abs(maxTranslateX) && window.innerWidth > 768 && (
            <CaretRight className="rigth" onClick={() => handleTranslateX('Rigth')}/> 
        )
            }

        </Content>
        )
    }