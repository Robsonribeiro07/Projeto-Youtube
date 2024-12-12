import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import {Container, NavVideoPage} from './style'
import { useRef, useState } from 'react'
export function VideoPageNavigation() {

    const [active, setActive] = useState<number>(0)
    
    const [translateX, setTranslateX] = useState<number>(0)


    const listRef = useRef<HTMLUListElement | null>(null)
    const itemRef = useRef<HTMLLIElement | null>(null)

     const navList = [
        'Todos',
        'League of Legendes',
        'Pica pau',
        'Pica pau',
        'Pica pau',
        'Pica pau',
        'Pica pau',
        'Pica pau',
        'Ayel',
        'Ayel',
        'Ayel',
        'Ayel',
        'Mylon',
        'Mylon',

        
     ]

     const handleActvieNav = (index: number) => {
           setActive(index)
     }

     const handleTranslateX = (direction: 'left' | 'rigth') => {

        if(listRef.current && itemRef.current){
            const itemWidth = itemRef.current.offsetWidth
            const listWidth = listRef.current.scrollWidth   
            const containerwidth = listRef.current.offsetWidth



            const maxTranslateX = listWidth - containerwidth


            setTranslateX(prev => {
                if(direction === "rigth") {
                    return Math.max(prev - itemWidth * 2, -maxTranslateX)
                } else if(direction === "left") {
                    return Math.min(prev + itemWidth * 2, 0)
                }

                return prev
            })
        }

    

      }

    return (

        <Container>
        {translateX < 0 && (
          <CaretLeft className='left' onClick={() => handleTranslateX('left')}/>

        )}
        <NavVideoPage translateX={translateX} className={translateX < 0 ? "active" : ""}>
            <ul ref={listRef}>
                {navList.map((nav, index) => (
                    <li key={index} className={active === index ? "active" : ''} onClick={() => handleActvieNav(index)} 
                    ref={itemRef}>{nav}</li>
                    
                ))}


            </ul>

        </NavVideoPage>

          <CaretRight className='Rigth' onClick={() => handleTranslateX('rigth')}/>

          </Container>

    )
}