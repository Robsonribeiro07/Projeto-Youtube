import  { useContext } from "react";
import { SugestaoWhitouInput } from "./style";
import { ClockCounterClockwise } from "@phosphor-icons/react";
import { ProductContext } from "../../Provide";

interface props {
    sugestionList: string[];
    setSugestao: (sugestionList: string[]) => void;
 
}
export function SugestaoInput({sugestionList, setSugestao}: props) {
   
    
    const {inputValue, setFilteredUserWhitoutInput} = useContext(ProductContext)

    const filtered = sugestionList ? sugestionList.filter((item: string) => item.toLowerCase().includes(inputValue.toLowerCase())) : ['']

    const sugestionShow = filtered.length > 0 ? filtered : [inputValue]

    const MAX_TEXT_LENGTH = 45

    const handleRemoveSugestion = (sugestion: string) => {
        
        const findItem = sugestionList?.filter((item: string) => item !== sugestion)


        setSugestao(findItem)
    }

    const handleValueComSugesttion = (item: string) => {
       setFilteredUserWhitoutInput(item)
    }
    return (
        <SugestaoWhitouInput>
            {sugestionShow.map((listSugestion: any, index: number) => (
                <li
                    key={index}
                    onClick={() => handleValueComSugesttion(listSugestion)}
                    
                    onMouseDown={(e) => e.preventDefault()} // Previne que o foco saia ao clicar    
                >
                    <ClockCounterClockwise size={22} />
                    {listSugestion.length > MAX_TEXT_LENGTH ? `${listSugestion.slice(0, MAX_TEXT_LENGTH)}` : listSugestion}
                    <button onClick={() => 
                        handleRemoveSugestion(listSugestion)
                    }>Remover</button>
                </li>
            ))}
        </SugestaoWhitouInput>
    );
}
