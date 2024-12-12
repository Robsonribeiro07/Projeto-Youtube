import { useContext, useEffect, useState } from "react";
import { VideoContent } from "./style";
import { ProductContext } from "../../Provide";
import { Video } from "@phosphor-icons/react";
interface propsUser {
    name: string;
    imgUrl: string;
    VideoNovo?: boolean;
    Inscrito: boolean;
    Inscritos: number
    VideosUsers?: {
        videoId: string;
        ImgUrlVideo: string;
        title: string;
        views: string; // Ajustado para 'number'
        description: string;
        comments: number;
        dislikes: number;
        likes: number;
    }[];
}

interface Video {
    videoId: string;
    ImgUrlVideo: string;
    title: string;
    views: string; // Consistência com 'propsUser'
    description: string;
    comments: number;
    dislikes: number;
    likes: number;
}

interface User {
    UserData: propsUser;
    VideoUser: Video
    AllVideo: propsUser[]
}


export function VideoDetails ({UserData, VideoUser, AllVideo}: User) {

  const { VideoAExibir, setVideoAExibir} = useContext(ProductContext)
  const [numberAleatorio, SetnumberAleatorio] = useState(1)
    

  useEffect(() => {
    SetnumberAleatorio(Math.floor(Math.random() * 24 + 1))
  },[])



  useEffect(() => {
    if (VideoAExibir) {
      localStorage.setItem('NovoVideo', JSON.stringify(VideoAExibir));
    }
  }, [VideoAExibir]);  



  const handleVideoForExibir = () => {
    if (setVideoAExibir) {
      setVideoAExibir({
        videoAtual: {
          UserInformation: {
            name: UserData.name,
            imgUrl: UserData.imgUrl,
            Inscritos: UserData.Inscritos
          },
          VideoId: VideoUser.videoId, // Passando o ID do vídeo
          VideoImg: VideoUser.ImgUrlVideo, // Passando a URL da imagem do vídeo
          VideoLike: VideoUser.likes, // Passando o número de likes
          VideoComent: VideoUser.comments, // Passando o número de comentários
          VideoDesript: VideoUser.description, // Passando a descrição do vídeo
          VideoTitle: VideoUser.title,
          Inscrito: UserData.Inscrito
        },
        VideoPage: AllVideo, // Página com todos os vídeos do usuário
      });
    }



  };
  
  
   


   

    const {handleAnimationStartWhitoutNavigate} = useContext(ProductContext)


    const TwoFunction = () => {
        handleAnimationStartWhitoutNavigate('/watch')
        handleVideoForExibir()
    }

     

    
    return(
        <VideoContent onClick={TwoFunction}>
            
        <img src={VideoUser.ImgUrlVideo} alt="" />
            
        <div className="DetailsInfo">

            <img src={UserData?.imgUrl || VideoUser.ImgUrlVideo}/>

            <div className="detailsProfile">
                <h3>{VideoUser.title}</h3>
                <p>{UserData?.name}</p>

            <span>
            {VideoUser.views} mil visualizaçoes &#8226; ha {numberAleatorio} horas
               
            </span>
            </div>
        </div>
        </VideoContent>


    )
}