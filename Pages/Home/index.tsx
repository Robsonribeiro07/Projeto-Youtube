import React, { useContext } from "react"
import { HomePageContent } from "./style.ts"
import { Navigation } from "../../components/navigation/index.tsx"
import { VideoDetails } from "../../components/VideoDetails/index.tsx"
import { ProductContext } from "../../Provide.tsx"
import { Users } from "@phosphor-icons/react"
export function HomePage() {

    const {filteredUser} = useContext(ProductContext)

    return(
        <HomePageContent>
            <Navigation/>

            <div className="VideoContainer">
              {filteredUser.map((userData) => (
                userData.VideosUsers?.map((videoUser) => (
                    <VideoDetails video={videoUser} user={userData}/>
                ))
              ))}
            </div>
        </HomePageContent>
    )
}