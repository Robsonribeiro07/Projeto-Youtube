    import { useState } from "react";
    import { UsersContent, VideoNovo } from "./style";
    import { User } from "@phosphor-icons/react";

    type User = {
    imgUrl: string;
    name: string;
    VideoNovo?: boolean;
    }
    interface UserProps {

    user: User
    
    }
    export function UsersSide ({user}: UserProps) {

        const [Users, SetUser] = useState<User>(user)
        
        const HandleVideoNovoVist = () => {
        
            SetUser(prev => ({ ...prev, VideoNovo: false }));


        }

        return(
            <UsersContent onClick={HandleVideoNovoVist}>
            <img src={Users.imgUrl} alt="" />

            <p>{Users.name}</p>
            
            {Users.VideoNovo && Users.VideoNovo && (
                <VideoNovo ></VideoNovo>
            )}
             
            </UsersContent>
        )
    }