import {  DotsThreeVertical } from "@phosphor-icons/react";
import { AnuncioContent } from "./style";
import { useEffect, useState } from "react";

interface anuncioSelecionado {
    id: number;
    titulo: string;
    descricao: string;
    BannerImg: string;
    ImgUrl: string;
    ButtonText: string;

  }
  
  const anuncios: anuncioSelecionado[] = [
    { id: 1, titulo: 'VALORANT ', descricao: 'Descrição do anúncio 1', ImgUrl: 'https://tpc.googlesyndication.com/pagead/imgad?id=CICAgOCbhKq4OxCsAhg8MgiiRndxk4wqAw', BannerImg: 'https://seeklogo.com/images/V/valorant-logo-FAB2CA0E55-seeklogo.com.png',
    ButtonText: 'Jogue Agora'

    },
    
    { id: 2, titulo: 'Free Fire 2', descricao: 'Descrição do anúncio 2', ImgUrl: 'https://i.scdn.co/image/ab6761610000e5eb08155a63a9480356177d3259', BannerImg: 'https://i.scdn.co/image/ab6761610000e5eb08155a63a9480356177d3259',
        ButtonText: 'Jogue Agora'
    },


    { id: 3, titulo: 'NLW Pocket Mobile', descricao: 'Descrição do anúncio 2', ImgUrl: 'https://yt3.ggpht.com/S5F5z7cqdV6LGwoP66SStMLgv-1MyV2BQxPck1gcSocKZa39euHfhVqRn0sn-SJhmmW7yZ9mYw=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj', BannerImg: 'https://yt3.ggpht.com/SkyQrFYa4v7vVMpC4nqsdlOaIHWw1HvRUxf4940GcJfRWgGUxtMJ9WdTTJOCj0a1ddJYPKxe=s88-c-k-c0x00ffffff-no-rj' , ButtonText: 'Inscriçao'}
    // Adicione mais anúncios conforme necessário
  ];
export function AnuncionContentPage() {

    const [anuncioAleatorio, setAnuncioAleatorio] = useState<anuncioSelecionado | null>(null);


    useEffect(() => {
        // Seleciona um anúncio aleatório da lista
        const anuncioSelecionado = anuncios[Math.floor(Math.random() * anuncios.length)];
        setAnuncioAleatorio(anuncioSelecionado);
      }, []); // O array vazio garante que isso execute apenas uma vez, quando o componente for montado.
    
    return (
        <AnuncioContent>
        {anuncioAleatorio?.ImgUrl && (
            <img src={anuncioAleatorio.ImgUrl} alt="" className="baner" />  // Adicione o link do anúncio aqui
        )}
        <div className="assets">
            <img src={anuncioAleatorio?.BannerImg}/>
            <div className="details">
                <h4>{anuncioAleatorio?.titulo}</h4>
                <h6>Patrocinado <h5>playvalorant.com</h5></h6> 

            </div>

            <button>{anuncioAleatorio?.ButtonText}</button>

        <DotsThreeVertical size={25} className="list" /> 


        </div>

            
           
        </AnuncioContent>
    )
}