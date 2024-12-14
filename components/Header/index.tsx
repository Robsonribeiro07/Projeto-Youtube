import { HeaderContainer } from "./style";
import youtubeLogo from '../../src/assets/svg/youtubeLogo.svg';
import React, { useContext, useEffect, useRef, useState } from "react";
import { List, MagnifyingGlass } from "@phosphor-icons/react";
import { Bell, Microphone, VideoCamera } from "@phosphor-icons/react/dist/ssr";
import { ProductContext } from "../../Provide";
import { SugestaoInput } from "../SugestaoInput";

interface Props {
    activeShowMore: React.Dispatch<React.SetStateAction<boolean>>;
    handleDefaultNav: () => void;
}

export function Header({ activeShowMore, handleDefaultNav }: Props) {
    const [showModal, setShowModal] = useState<false | true>(false);
    const [SugestaoList, setSugestaoList] = useState<string[]>([]);
    const windowWidth = 768;
    const inputRef = useRef<HTMLInputElement>(null);

    const { animationHeader, 
        handleAnimationStartWhitoutNavigate, 
        setDisabled, 
        setInputValue,
         setFilteredUserWhitoutInput, 
         inputValue, setAnimationHeader, setLimited, } = useContext(ProductContext);
    // Carregar as sugestões do localStorage ao iniciar o componente
    useEffect(() => {
            const ListSalva = localStorage.getItem('Pesquisa');
        if (ListSalva) {
            const savedList = JSON.parse(ListSalva);
            setSugestaoList(savedList);
        }
    }, []);

    // Salvar no localStorage quando a lista de sugestões mudar
    useEffect(() => {
        if (SugestaoList.length > 0) {
            localStorage.setItem('Pesquisa', JSON.stringify(SugestaoList));
        }
    }, [SugestaoList]);

    useEffect(() => {
        // @ts-expect-error falta tipagem
        setFilteredUserWhitoutInput(inputValue.length < 1 && '');
    }, [inputValue]);

    const handleUpdateSugestion = () => {
        setSugestaoList(prev => {
         
            setLimited(40)
 
            const updateList = [...prev];
        
            // Verifica se o item já existe
            if (!updateList.some(item => item.trim().toLowerCase() === inputValue.trim().toLowerCase())) {
                
                // Remove o primeiro se exceder o limite de 10
                if (updateList.length >= 13) {
                    updateList.shift();
                }
                
                // Adiciona o novo valor
                updateList.push(inputValue);
            }
            return updateList;
        });
        

        setTimeout(() => {
            setAnimationHeader(false);
        }, 500);

    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && document.activeElement === e.target && inputValue.length > 0) {
            setFilteredUserWhitoutInput(inputValue);
            setAnimationHeader(true);
            handleUpdateSugestion()

            // Atualizando a lista de sugestões com o novo valor
           
        }
    };

    const handleFunctions = () => {
        setDisabled(false);

        if (window.innerWidth < windowWidth) {
            activeShowMore(prev => !prev);
        } else if (window.innerWidth > windowWidth) {
            handleDefaultNav();
        }
    };

    const handleValueInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const valueInput = event.currentTarget?.value;
        setInputValue(valueInput);
    };

    const handleUserInputValue = () => {
        setFilteredUserWhitoutInput(inputValue);
        // Atualizando a lista de sugestões com o novo valor

        handleUpdateSugestion()
        };

    const OnfocusInput = () => setShowModal(true);
    const OnblurInput = () => {
        setTimeout(() => setShowModal(false), 200);
    };

    

    return (
        <HeaderContainer className={animationHeader ? "active" : ""}>
            <div className="navYoutube">
                <List size={25} color="white" onClick={handleFunctions} />
               <a href="">
               <img src={youtubeLogo} alt="" onClick={() => handleAnimationStartWhitoutNavigate('/home')} />
               </a>
            </div>

            <div className="assetsSearch">
                <div className="navSearch">
                    <input type="text" placeholder="Pesquisar" onChange={(event) => handleValueInput(event)} onKeyDown={handleKeyDown}
                        ref={inputRef} value={inputValue}
                        onFocus={OnfocusInput} onBlur={OnblurInput}
                    />

                    <div className="icone">
                        <MagnifyingGlass color="white" size={25} onClick={handleUserInputValue} />
                    </div>

                    {showModal && (<SugestaoInput sugestionList={SugestaoList} setSugestao={setSugestaoList} />)} {/* Usando o estado atualizado */}
                </div>

                <button className="Microfone">
                    <Microphone color="white" size={25} />
                </button>
            </div>

            <div className="navProfile">
                <VideoCamera color="white" size={25} />
                <Bell color="white" size={25} />
                <img src="https://yt3.ggpht.com/yti/ANjgQV_XR_juRm3JXA_P8dr21MMzkq-h4n9XXiqbTxhR9_I=s88-c-k-c0x00ffffff-no-rj-mo" alt="" />
            </div>
        </HeaderContainer>
    );
}
