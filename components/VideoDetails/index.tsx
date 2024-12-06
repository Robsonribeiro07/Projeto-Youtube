import { useContext } from "react";
import { VideoContent } from "./style";
import { ProductContext } from "../../Provide";
interface propsUser {
    name: string;
    imgUrl: string;
    VideoNovo?: boolean;
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

interface User {
    UserData: propsUser;
    VideoUser: {
        videoId: string;
        ImgUrlVideo: string;
        title: string;
        views: string; // Consistência com 'propsUser'
        description: string;
        comments: number;
        dislikes: number;
        likes: number;
    };
}


export function VideoDetails ({UserData, VideoUser}: User) {


    const {handleAnimationStart} = useContext(ProductContext)
    

  
    
    return(
        <VideoContent onClick={() => handleAnimationStart('/watch')}>
            
            {UserData.VideosUsers && (
                <img src={VideoUser.ImgUrlVideo} alt="" />
            )}
            
        <div className="DetailsInfo">

            <img src={UserData.imgUrl}/>

            <div className="detailsProfile">
                <h3>{VideoUser.title}</h3>
                <p>{UserData.name}</p>

            <span>
            {VideoUser.views} mil visualizaçoes &#8226; ha 2 horas
               
            </span>
            </div>
        </div>
        </VideoContent>


    )
}