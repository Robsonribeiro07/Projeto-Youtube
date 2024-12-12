import { DotsThreeVertical } from "@phosphor-icons/react";
import { SubVideoContent } from "./style";
import { ProductContext } from "../../Provide";
import { useContext } from "react";

// Tipos definidos

// Informações do Usuário

// Detalhes do Vídeo
type VideoDetails = {
  videoId: string;
  VideoId: string;
  videoImg: string;
  videoLike: number;
  videoComent: number;
  videoDesript: string;
  videoTitle: string;
  ImgUrlVideo: string
  likes: number;
  VideoComent: number;
  description: string;
  title: string
  VideoTitle: string
};


// Estrutura Principal do Vídeo
type VideoAtual = {
    name: string;
  imgUrl: string;
  Inscritos: number;
  Inscrito: boolean;
  VideosUsers: VideoDetails[]; // Array de vídeos
};

// Propriedades Esperadas no Componente
type videoProps = {
  video: VideoAtual;
};

export function SubVideo({ video }: videoProps) {
  const {
    setVideoAExibir,
    VideoAExibir,
    handleAnimationStartWhitoutNavigate,
  } = useContext(ProductContext);

  const handleVideoExibir = (selectedVideo: VideoAtual) => {
    const videoUser = selectedVideo.VideosUsers[0];

    const updatedState = {
      videoAtual: {
        UserInformation: {
          name: selectedVideo.name,
          imgUrl: selectedVideo.imgUrl,
          Inscritos: selectedVideo.Inscritos,
          Inscrito: selectedVideo.Inscrito,
        },
        VideoId: videoUser.videoId,
        VideoImg: videoUser.ImgUrlVideo,
        VideoLike: videoUser.likes,
        VideoComent: videoUser.VideoComent,
        VideoDesript: videoUser.description,
        VideoTitle: videoUser.title,
      },
      VideoPage: VideoAExibir.VideoPage, // Mantém a lista de vídeos
    };

    setVideoAExibir(updatedState);

    console.log(videoUser)

    localStorage.setItem("NovoVideo", JSON.stringify(updatedState));
    handleAnimationStartWhitoutNavigate("/watch");

    if (updatedState) {
      window.location.reload();
    }
  };

  return (
    <SubVideoContent onClick={() => handleVideoExibir(video)}>
        
      {video.VideosUsers.map((videos, index: number) => (
        <div className="leftSide" key={videos.VideoId || index}>
          <img src={videos.ImgUrlVideo} alt={videos.VideoTitle} />

          <div className="detailsText">
            <p>{videos.VideoTitle}</p>
            <h5>{video.name}</h5>
            <h6>36 mil visualizações há 1 dia</h6>
            <span>Novo</span>
          </div>
        </div>
      ))}
      <DotsThreeVertical size={25} className="list" />
    </SubVideoContent>
  );
}
