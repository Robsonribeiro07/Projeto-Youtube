import React, { useContext, useState } from "react";
import { NavigationContent } from "./style";
import { ProductContext } from "../../Provide";
export function Navigation() {

    const [indexNav,SetIndexNav] = useState<number>(0)
    
    const {SetFiltered} = useContext(ProductContext)

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
        "Viagens"
    ]

    const handleClickNav = (index: number, event: React.MouseEvent<HTMLLIElement>) => {
        const category = event.currentTarget.textContent
        SetIndexNav(index)
        SetFiltered((category ?? ''))
    }
    

    
    return (
        <NavigationContent>

            <ul>
            {ListNavigation.map((nav, index   ) => (
                <li key={index} className={indexNav === index ? "active" : ''}
                value={'1'}
                onClick={(event) => handleClickNav(index, event)}
                >
                    {nav}
                </li>
            ))}
               
            </ul>



        </NavigationContent>
    )
}