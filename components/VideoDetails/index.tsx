import React, { useContext } from "react";
import { VideoContent } from "./style";
import { ProductContext } from "../../Provide";
interface props {
        name: string;
        imgUrl: string;
        VideoNovo?: boolean;
        VideosUsers?: {
            videoId: string;
            ImgUrlVideo: string
            title: string;
            views: number;
            description: string;
            comments: number
            dislikes: number
            likes: number;
        }
    }


interface User {
    user: props,
    video: {
        videoId: string;
            ImgUrlVideo: string
            title: string;
            views: number;
            description: string;
            comments: number
            dislikes: number
            likes: number;
    }
}

export function VideoDetails ({user, video}: User) {


    const {handleAnimationStart} = useContext(ProductContext)
    

  
    
    return(
        <VideoContent onClick={() => handleAnimationStart('/watch')}>
            
            {user.VideosUsers && user.VideosUsers && (
                <img src={video.ImgUrlVideo} alt="" />
            )}
            
        <div className="DetailsInfo">

            <img src={user.imgUrl}/>

            <div className="detailsProfile">
                <h3>{video.title}</h3>
                <p>{user.name}</p>

            <span>
            {video.views} mil visualizaçoes &#8226; ha 2 horas
               
            </span>
            </div>
        </div>
        </VideoContent>


    )
}