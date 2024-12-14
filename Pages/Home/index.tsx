import { useContext, useState, useEffect } from "react";
import { HomePageContent } from "./style.ts";
import { Navigation } from "../../components/navigation/index.tsx";
import { VideoDetails } from "../../components/VideoDetails/index.tsx";
import { ProductContext } from "../../Provide.tsx";

// Função para embaralhar o array de forma eficiente (algoritmo de Fisher-Yates)
const shuffleArray = (array: any[]) => {
  const shuffled = [...array]; // Faz uma cópia do array para não modificar o original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Troca os elementos
  }
  return shuffled;
};

export function HomePage() {
  // @ts-expect-error falta tipagem
  const { filteredUser, filteredUserWhitoutInput, shuffledVideos, setShuffledVideos, limited, inputValue, setLimited} = useContext(ProductContext);
  const [visibleVideos, setVisibleVideos] = useState<any[]>([]);  // Videos que são visíveis na tela
  const [loading, setLoading] = useState(false); // Controle de carregamento para evitar múltiplos carregamentos
 
  console.log(limited)
  // Embaralha e carrega os vídeos no início
  useEffect(() => {
    const allVideos: any[] = [];
    filteredUser.forEach(userData => {
      if (userData.VideosUsers) {
        userData.VideosUsers.forEach(video => {
          allVideos.push({ ...video, userName: userData.name }); // Associando nome do usuário ao vídeo
        });
      }
    });

    const shuffled = shuffleArray(allVideos);
    setShuffledVideos(shuffled);
    setVisibleVideos(shuffled.slice(0, limited));  // Carrega os primeiros 6 vídeos

    if(inputValue.length < 1) {
      setLimited(6)
      console.log('chegou a zero')
    }

  }, [filteredUser, limited, inputValue]);

  // Função otimizada para lidar com o scroll e carregar mais vídeos
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight - 100 && !loading) {
      loadMoreVideos();  // Carrega mais vídeos
    }
  };

  // Função para carregar mais vídeos
  const loadMoreVideos = () => {
    setLoading(true);  // Inicia o carregamento
    setTimeout(() => {
      const nextVideos = shuffledVideos.slice(visibleVideos.length, visibleVideos.length + 6); // Carrega 6 novos vídeos
      setVisibleVideos(prevVideos => [...prevVideos, ...nextVideos]);
      setLoading(false);  // Finaliza o carregamento
    }, 500); // Simula um pequeno atraso para o carregamento
  };

  // Filtro baseado no input
  const filteredVideos = filteredUserWhitoutInput.length > 0
    ? visibleVideos.filter(v =>
        v.title.toLowerCase().includes(filteredUserWhitoutInput.toLowerCase()) ||
        v.userName.toLowerCase().includes(filteredUserWhitoutInput.toLowerCase())
      )
    : visibleVideos;



  useEffect(() => {
    window.addEventListener("scroll", handleScroll);  // Adiciona o listener de scroll
    return () => window.removeEventListener("scroll", handleScroll);  // Limpeza do listener
  }, [visibleVideos, shuffledVideos, loading]);


  return (
    <HomePageContent>
      <Navigation />
      <div className="VideoContainer">
        {filteredVideos.map((videoUser, index) => {
          const userData = filteredUser.find(user => user.name === videoUser.userName);
          return (
            <VideoDetails
              key={index}
              VideoUser={videoUser}
              UserData={userData}
              AllVideo={filteredUser}
            />
          );
        })}
        {!loading && filteredVideos.length === 0 && (
          <span className="Not_found_videos">Nenhum vídeo encontrado</span>
        )}
        {loading && <div>Carregando...</div>} {/* Exibe mensagem de carregamento */}
      </div>
    </HomePageContent>
  );
}