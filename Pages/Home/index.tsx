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
  const { filteredUser, inputValue} = useContext(ProductContext);
  const [shuffledVideos, setShuffledVideos] = useState<any[]>([]);

  const [listFilteredVideos, setListFilteredVideos] = useState(shuffledVideos);

  useEffect(() => {

    const filtered = inputValue.length > 0
    ? shuffledVideos.filter(v =>
        v.title.toLowerCase().includes(inputValue.toLowerCase())
      )
    : shuffledVideos;
  

    setListFilteredVideos(filtered)

  }, [inputValue, shuffledVideos])





  useEffect(() => {
    // Embaralha todos os vídeos de todos os usuários uma vez, quando o componente é montado
    const allVideos: any[] = [];
    

    filteredUser.forEach(userData => {
      if (userData.VideosUsers) {
        allVideos.push(...userData.VideosUsers); // Adiciona todos os vídeos na lista
      }
    });

    // Embaralha os vídeos e define no estado
    setShuffledVideos(shuffleArray(allVideos));
  }, [filteredUser]);

   
  //  Filtrar Videos com input


  return (
    <HomePageContent>
      <Navigation />

      <div className="VideoContainer">
        {listFilteredVideos.map((videoUser, index) => (
          <VideoDetails key={index} VideoUser={videoUser} UserData={filteredUser.find(user => user.VideosUsers?.includes(videoUser))}  AllVideo={filteredUser}/>
        ))}
      </div>
    </HomePageContent>
  );
}
